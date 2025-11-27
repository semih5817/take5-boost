-- Create email_captures table for storing newsletter/partner/waitlist emails
CREATE TABLE public.email_captures (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'newsletter',
  source TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add unique constraint on email
ALTER TABLE public.email_captures ADD CONSTRAINT email_captures_email_unique UNIQUE (email);

-- Enable Row Level Security
ALTER TABLE public.email_captures ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for public email capture forms)
CREATE POLICY "Anyone can insert email captures"
ON public.email_captures
FOR INSERT
WITH CHECK (true);

-- Only authenticated users can read (for admin purposes)
CREATE POLICY "Authenticated users can read email captures"
ON public.email_captures
FOR SELECT
USING (auth.uid() IS NOT NULL);