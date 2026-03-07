import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Users, DollarSign, Clock, Wallet, Copy, Check, ExternalLink } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface DashboardData {
  apporteur: {
    nom: string;
    niveau: string;
  };
  clients_actifs: number;
  en_attente_paiement: number;
  total_percu: number;
  clients: Array<{
    nom_entreprise: string;
    secteur: string;
    date_inscription: string;
    statut: string;
    commission: number;
  }>;
}

const NIVEAU_CONFIG: Record<string, { emoji: string; color: string }> = {
  Bronze: { emoji: '🥉', color: 'bg-orange-500/20 text-orange-400' },
  Silver: { emoji: '🥈', color: 'bg-slate-300/20 text-slate-300' },
  Gold: { emoji: '🥇', color: 'bg-yellow-500/20 text-yellow-400' },
  Platinum: { emoji: '💎', color: 'bg-blue-400/20 text-blue-400' },
};

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { toast } = useToast();

  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!code) {
      setError("Aucun code partenaire fourni. Ajoute ?code=TON_CODE dans l'URL.");
      setLoading(false);
      return;
    }

    fetch(`https://n8n.takefive.fr/webhook/dashboard-apporteur?code=${encodeURIComponent(code)}`)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setError("Impossible de charger les données. Veuillez réessayer.");
        setLoading(false);
      });
  }, [code]);

  const referralLink = `https://takefive.fr/inscription?ref=${code || ''}`;

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast({ title: "Lien copié !", description: referralLink });
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="p-8 max-w-md text-center">
          <p className="text-4xl mb-4">⚠️</p>
          <h2 className="text-xl font-bold mb-2">Accès impossible</h2>
          <p className="text-muted-foreground">{error || "Données indisponibles."}</p>
        </Card>
      </div>
    );
  }

  const niveau = data.apporteur.niveau || 'Bronze';
  const niveauConf = NIVEAU_CONFIG[niveau] || NIVEAU_CONFIG.Bronze;
  const commissionsMois = data.clients_actifs * 3.98;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-hero text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{data.apporteur.nom}</h1>
              <Badge className={`mt-2 ${niveauConf.color} border-0 text-sm`}>
                {niveauConf.emoji} {niveau}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Clients actifs</p>
                <p className="text-3xl font-bold mt-1 text-primary">{data.clients_actifs}</p>
              </div>
              <div className="p-3 rounded-full bg-primary/10"><Users size={24} className="text-primary" /></div>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Commissions ce mois</p>
                <p className="text-3xl font-bold mt-1 text-green-500">{commissionsMois.toFixed(2)}€</p>
              </div>
              <div className="p-3 rounded-full bg-green-500/10"><DollarSign size={24} className="text-green-500" /></div>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">En attente de paiement</p>
                <p className="text-3xl font-bold mt-1 text-yellow-500">{data.en_attente_paiement.toFixed(2)}€</p>
              </div>
              <div className="p-3 rounded-full bg-yellow-500/10"><Clock size={24} className="text-yellow-500" /></div>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total perçu</p>
                <p className="text-3xl font-bold mt-1 text-foreground">{data.total_percu.toFixed(2)}€</p>
              </div>
              <div className="p-3 rounded-full bg-muted"><Wallet size={24} className="text-muted-foreground" /></div>
            </div>
          </Card>
        </div>

        {/* Referral link */}
        <Card className="p-5">
          <p className="text-sm font-medium mb-2">Ton lien de parrainage</p>
          <div className="flex items-center gap-2 bg-muted rounded-lg p-3">
            <ExternalLink size={16} className="text-muted-foreground flex-shrink-0" />
            <span className="text-sm font-mono truncate flex-1">{referralLink}</span>
            <Button size="sm" variant="outline" onClick={copyLink} className="flex-shrink-0">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span className="ml-1">{copied ? 'Copié' : 'Copier'}</span>
            </Button>
          </div>
        </Card>

        {/* Client list */}
        <Card className="p-5">
          <h3 className="text-lg font-bold mb-4">Mes clients</h3>
          {data.clients.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">Aucun client pour le moment.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-muted-foreground font-medium">Nom entreprise</th>
                    <th className="text-left py-3 px-2 text-muted-foreground font-medium">Secteur</th>
                    <th className="text-left py-3 px-2 text-muted-foreground font-medium">Date inscription</th>
                    <th className="text-left py-3 px-2 text-muted-foreground font-medium">Statut</th>
                    <th className="text-right py-3 px-2 text-muted-foreground font-medium">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {data.clients.map((client, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/50">
                      <td className="py-3 px-2 font-medium">{client.nom_entreprise}</td>
                      <td className="py-3 px-2">{client.secteur || '—'}</td>
                      <td className="py-3 px-2 text-muted-foreground">
                        {client.date_inscription ? new Date(client.date_inscription).toLocaleDateString('fr-FR') : '—'}
                      </td>
                      <td className="py-3 px-2">
                        <Badge className={
                          client.statut === 'actif'
                            ? 'bg-green-500/10 text-green-500 border-0'
                            : 'bg-yellow-500/10 text-yellow-500 border-0'
                        }>
                          {client.statut}
                        </Badge>
                      </td>
                      <td className="py-3 px-2 text-right font-medium">{client.commission.toFixed(2)}€</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
