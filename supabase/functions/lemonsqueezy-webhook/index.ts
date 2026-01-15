import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-signature',
};

// Verify LemonSqueezy webhook signature
async function verifySignature(payload: string, signature: string, secret: string): Promise<boolean> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  
  const signatureBytes = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  const computedSignature = Array.from(new Uint8Array(signatureBytes))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  
  return computedSignature === signature;
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
    const signature = req.headers.get('x-signature');
    const rawBody = await req.text();

    console.log('Received webhook from LemonSqueezy');

    // Verify signature
    const webhookSecret = Deno.env.get('LEMONSQUEEZY_WEBHOOK_SECRET');
    if (!webhookSecret) {
      console.error('LEMONSQUEEZY_WEBHOOK_SECRET not configured');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!signature) {
      console.error('Missing x-signature header');
      return new Response(JSON.stringify({ error: 'Missing signature' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const isValid = await verifySignature(rawBody, signature, webhookSecret);
    if (!isValid) {
      console.error('Invalid webhook signature');
      return new Response(JSON.stringify({ error: 'Invalid signature' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Signature verified successfully');

    const payload = JSON.parse(rawBody);
    const eventName = payload.meta?.event_name;
    const customData = payload.meta?.custom_data;
    const subscriptionData = payload.data?.attributes;

    console.log(`Processing event: ${eventName}`);
    console.log('Custom data:', JSON.stringify(customData));

    // Initialize Supabase client with service role for admin operations
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Handle different event types
    switch (eventName) {
      case 'subscription_created': {
        console.log('Handling subscription_created');
        const email = subscriptionData?.user_email;
        const orderId = payload.data?.id;
        
        if (email) {
          // Update lead status
          const { data, error } = await supabase
            .from('subscription_leads')
            .update({ 
              statut: 'active',
              lemon_squeezy_order_id: orderId?.toString(),
              notes: `Subscription created at ${new Date().toISOString()}`
            })
            .eq('email', email)
            .eq('statut', 'pending')
            .select();
          
          if (error) {
            console.error('Error updating lead:', error);
          } else {
            console.log('Lead updated:', data);
          }
        }
        break;
      }

      case 'subscription_updated': {
        console.log('Handling subscription_updated');
        const email = subscriptionData?.user_email;
        const status = subscriptionData?.status;
        
        if (email) {
          const { error } = await supabase
            .from('subscription_leads')
            .update({ 
              notes: `Subscription updated to ${status} at ${new Date().toISOString()}`
            })
            .eq('email', email);
          
          if (error) {
            console.error('Error updating lead:', error);
          }
        }
        break;
      }

      case 'subscription_cancelled': {
        console.log('Handling subscription_cancelled');
        const email = subscriptionData?.user_email;
        
        if (email) {
          const { error } = await supabase
            .from('subscription_leads')
            .update({ 
              statut: 'cancelled',
              notes: `Subscription cancelled at ${new Date().toISOString()}`
            })
            .eq('email', email);
          
          if (error) {
            console.error('Error updating lead:', error);
          }
        }
        break;
      }

      case 'subscription_payment_success': {
        console.log('Handling subscription_payment_success');
        const email = subscriptionData?.user_email;
        
        if (email) {
          const { error } = await supabase
            .from('subscription_leads')
            .update({ 
              statut: 'active',
              notes: `Payment successful at ${new Date().toISOString()}`
            })
            .eq('email', email);
          
          if (error) {
            console.error('Error updating lead:', error);
          }
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${eventName}`);
    }

    return new Response(JSON.stringify({ received: true, event: eventName }), {
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
