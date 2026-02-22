-- Fix #1: Remove overly permissive SELECT policy on email_captures
-- No client-side code reads from this table, so no SELECT policy is needed.
DROP POLICY IF EXISTS "Authenticated users can read email captures" ON public.email_captures;

-- Fix #2: Remove overly permissive SELECT policy on subscription_leads  
-- and restrict to service role only (drop the broad authenticated policy)
DROP POLICY IF EXISTS "Authenticated users can read subscription leads" ON public.subscription_leads;
DROP POLICY IF EXISTS "Authenticated users can update subscription leads" ON public.subscription_leads;