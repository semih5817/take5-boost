import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, stripe-signature',
};

// Verify Stripe webhook signature using crypto.subtle
async function verifyStripeSignature(
  payload: string,
  signature: string,
  secret: string
): Promise<boolean> {
  const parts = signature.split(',');
  const timestamp = parts.find(p => p.startsWith('t='))?.slice(2);
  const v1Signature = parts.find(p => p.startsWith('v1='))?.slice(3);

  if (!timestamp || !v1Signature) {
    console.error('Invalid signature format');
    return false;
  }

  // Check if timestamp is within tolerance (5 minutes)
  const timestampNum = parseInt(timestamp, 10);
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - timestampNum) > 300) {
    console.error('Timestamp outside tolerance');
    return false;
  }

  // Compute expected signature
  const signedPayload = `${timestamp}.${payload}`;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signatureBytes = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(signedPayload)
  );

  const computedSignature = Array.from(new Uint8Array(signatureBytes))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');

  return computedSignature === v1Signature;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const signature = req.headers.get('stripe-signature');
    const rawBody = await req.text();

    console.log('Received webhook from Stripe');

    // Verify signature
    const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');
    if (!webhookSecret) {
      console.error('STRIPE_WEBHOOK_SECRET not configured');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!signature) {
      console.error('Missing stripe-signature header');
      return new Response(JSON.stringify({ error: 'Missing signature' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const isValid = await verifyStripeSignature(rawBody, signature, webhookSecret);
    if (!isValid) {
      console.error('Invalid webhook signature');
      return new Response(JSON.stringify({ error: 'Invalid signature' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Signature verified successfully');

    const event = JSON.parse(rawBody);
    const eventType = event.type;

    console.log(`Processing event: ${eventType}`);

    // Initialize Supabase client with service role for admin operations
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Handle different event types
    switch (eventType) {
      case 'checkout.session.completed': {
        console.log('Handling checkout.session.completed');
        const session = event.data.object;
        const customerEmail = session.customer_details?.email || session.customer_email;
        const paymentStatus = session.payment_status;

        console.log(`Customer email: ${customerEmail}, Payment status: ${paymentStatus}`);

        if (customerEmail && paymentStatus === 'paid') {
          // Update lead status to active
          const { data, error } = await supabase
            .from('subscription_leads')
            .update({
              statut: 'active',
              notes: `Paiement Stripe confirmé le ${new Date().toISOString()}`
            })
            .eq('email', customerEmail)
            .eq('statut', 'pending')
            .select();

          if (error) {
            console.error('Error updating lead:', error);
          } else {
            console.log('Lead updated to active:', data);
          }
        }
        break;
      }

      case 'customer.subscription.created': {
        console.log('Handling customer.subscription.created');
        const subscription = event.data.object;
        const customerEmail = subscription.customer_email;

        if (customerEmail) {
          const { error } = await supabase
            .from('subscription_leads')
            .update({
              statut: 'active',
              notes: `Abonnement créé le ${new Date().toISOString()}`
            })
            .eq('email', customerEmail);

          if (error) {
            console.error('Error updating lead:', error);
          }
        }
        break;
      }

      case 'customer.subscription.updated': {
        console.log('Handling customer.subscription.updated');
        const subscription = event.data.object;
        const customerEmail = subscription.customer_email;
        const status = subscription.status;

        if (customerEmail) {
          let newStatut = 'active';
          if (status === 'canceled' || status === 'unpaid') {
            newStatut = 'cancelled';
          } else if (status === 'past_due') {
            newStatut = 'past_due';
          }

          const { error } = await supabase
            .from('subscription_leads')
            .update({
              statut: newStatut,
              notes: `Abonnement mis à jour (${status}) le ${new Date().toISOString()}`
            })
            .eq('email', customerEmail);

          if (error) {
            console.error('Error updating lead:', error);
          }
        }
        break;
      }

      case 'customer.subscription.deleted': {
        console.log('Handling customer.subscription.deleted');
        const subscription = event.data.object;
        const customerEmail = subscription.customer_email;

        if (customerEmail) {
          const { error } = await supabase
            .from('subscription_leads')
            .update({
              statut: 'cancelled',
              notes: `Abonnement annulé le ${new Date().toISOString()}`
            })
            .eq('email', customerEmail);

          if (error) {
            console.error('Error updating lead:', error);
          }
        }
        break;
      }

      case 'invoice.payment_succeeded': {
        console.log('Handling invoice.payment_succeeded');
        const invoice = event.data.object;
        const customerEmail = invoice.customer_email;

        if (customerEmail) {
          const { error } = await supabase
            .from('subscription_leads')
            .update({
              statut: 'active',
              notes: `Paiement réussi le ${new Date().toISOString()}`
            })
            .eq('email', customerEmail);

          if (error) {
            console.error('Error updating lead:', error);
          }
        }
        break;
      }

      case 'invoice.payment_failed': {
        console.log('Handling invoice.payment_failed');
        const invoice = event.data.object;
        const customerEmail = invoice.customer_email;

        if (customerEmail) {
          const { error } = await supabase
            .from('subscription_leads')
            .update({
              statut: 'payment_failed',
              notes: `Échec de paiement le ${new Date().toISOString()}`
            })
            .eq('email', customerEmail);

          if (error) {
            console.error('Error updating lead:', error);
          }
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${eventType}`);
    }

    return new Response(JSON.stringify({ received: true, event: eventType }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Webhook processing error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
