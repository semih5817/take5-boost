-- Add optional referral/promo code column to subscription_leads
ALTER TABLE public.subscription_leads 
ADD COLUMN code_parrainage TEXT DEFAULT NULL;