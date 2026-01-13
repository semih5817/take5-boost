-- Table pour stocker les leads de souscription
CREATE TABLE public.subscription_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Infos établissement
  nom_etablissement TEXT NOT NULL,
  url_google_business TEXT,
  email TEXT NOT NULL,
  telephone_whatsapp TEXT NOT NULL,
  
  -- Offre choisie
  offre TEXT NOT NULL CHECK (offre IN ('starter', 'pro')),
  periode TEXT NOT NULL CHECK (periode IN ('monthly', 'yearly')),
  
  -- Conditions acceptées
  cgv_acceptees BOOLEAN NOT NULL DEFAULT false,
  
  -- Statut du lead
  statut TEXT NOT NULL DEFAULT 'pending' CHECK (statut IN ('pending', 'paid', 'cancelled')),
  
  -- Metadata
  lemon_squeezy_order_id TEXT,
  notes TEXT
);

-- Enable Row Level Security
ALTER TABLE public.subscription_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Tout le monde peut créer un lead (formulaire public)
CREATE POLICY "Anyone can insert subscription leads"
ON public.subscription_leads
FOR INSERT
WITH CHECK (true);

-- Policy: Seuls les utilisateurs authentifiés peuvent lire
CREATE POLICY "Authenticated users can read subscription leads"
ON public.subscription_leads
FOR SELECT
USING (auth.uid() IS NOT NULL);

-- Policy: Seuls les utilisateurs authentifiés peuvent mettre à jour
CREATE POLICY "Authenticated users can update subscription leads"
ON public.subscription_leads
FOR UPDATE
USING (auth.uid() IS NOT NULL);