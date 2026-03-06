import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { 
  Users, DollarSign, TrendingUp, Wallet, Trophy, Copy, Check, 
  ExternalLink, Calendar, Clock, Award, Crown, Medal, Star
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

type TabType = 'accueil' | 'ventes' | 'commissions' | 'wallet' | 'classement';

interface Apporteur {
  id: string;
  nom: string;
  code: string;
  palier: string;
  telephone: string;
  email?: string;
  ville?: string;
  statut?: string;
  created_at?: string;
  [key: string]: any;
}

interface Client {
  id: string;
  nom_etablissement?: string;
  email?: string;
  telephone?: string;
  statut?: string;
  offre?: string;
  created_at?: string;
  code_parrain?: string;
  [key: string]: any;
}

interface Commission {
  id: string;
  apporteur_id: string;
  montant: number;
  mois?: string;
  statut?: string;
  created_at?: string;
  client_id?: string;
  [key: string]: any;
}

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState<TabType>('accueil');
  const [apporteur, setApporteur] = useState<Apporteur | null>(null);
  const [clients, setClients] = useState<Client[]>([]);
  const [commissions, setCommissions] = useState<Commission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!code) {
      setError("Aucun code partenaire fourni. Ajoute ?code=TON_CODE dans l'URL.");
      setLoading(false);
      return;
    }
    loadData();
  }, [code]);

  const loadData = async () => {
    setLoading(true);
    setError(null);

    // Dashboard externe désactivé — les données partenaires ne sont plus disponibles ici
    setError("Le dashboard partenaire est en cours de migration. Veuillez nous contacter pour accéder à vos données.");
    setLoading(false);
  };

  const referralLink = `https://takefive.fr/inscription?ref=${code || ''}`;

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast({ title: "Lien copié !", description: referralLink });
    setTimeout(() => setCopied(false), 2000);
  };

  const totalCommissions = commissions.reduce((sum, c) => sum + (Number(c.montant) || 0), 0);
  const paidCommissions = commissions.filter(c => c.statut === 'payée' || c.statut === 'payee' || c.statut === 'paid');
  const pendingCommissions = commissions.filter(c => c.statut === 'en_attente' || c.statut === 'pending' || c.statut === 'en attente');
  const totalPaid = paidCommissions.reduce((sum, c) => sum + (Number(c.montant) || 0), 0);
  const totalPending = pendingCommissions.reduce((sum, c) => sum + (Number(c.montant) || 0), 0);

  const activeClients = clients.filter(c => c.statut === 'actif' || c.statut === 'active' || c.statut === 'confirmed');
  const pendingClients = clients.filter(c => c.statut === 'pending' || c.statut === 'en_attente');

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Chargement de ton dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="p-8 max-w-md text-center">
          <p className="text-4xl mb-4">⚠️</p>
          <h2 className="text-xl font-bold mb-2">Accès impossible</h2>
          <p className="text-muted-foreground">{error}</p>
        </Card>
      </div>
    );
  }

  const tabs = [
    { id: 'accueil' as TabType, label: '🏠 Accueil' },
    { id: 'ventes' as TabType, label: '📈 Ventes' },
    { id: 'commissions' as TabType, label: '💰 Commissions' },
    { id: 'wallet' as TabType, label: '👛 Wallet' },
    { id: 'classement' as TabType, label: '🏆 Classement' },
  ];

  const palierConfig: Record<string, { emoji: string; months: number; color: string }> = {
    starter: { emoji: '🥉', months: 3, color: 'text-orange-400' },
    active: { emoji: '🥈', months: 4, color: 'text-slate-300' },
    pro: { emoji: '🥇', months: 5, color: 'text-yellow-400' },
    elite: { emoji: '💎', months: 6, color: 'text-blue-400' },
  };

  const currentPalier = palierConfig[(apporteur?.palier || '').toLowerCase()] || palierConfig.starter;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-hero text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto pt-2">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-2">
                <Star size={32} className="text-primary" fill="currentColor" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{apporteur?.nom || 'Partenaire'}</h1>
                <div className="flex items-center gap-3 mt-2 flex-wrap">
                  <Badge variant="secondary" className="bg-white/20 hover:bg-white/30">
                    <span className="mr-1">{currentPalier.emoji}</span>
                    <span className="font-medium uppercase">{apporteur?.palier || 'Starter'}</span>
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 hover:bg-white/30 font-mono">
                    Code : {code}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold">{clients.length}</p>
                <p className="text-xs opacity-80">Clients</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold">{totalCommissions.toFixed(0)}€</p>
                <p className="text-xs opacity-80">Total gagné</p>
              </div>
            </div>
          </div>

          {/* Referral link */}
          <div className="mt-4 flex items-center gap-2 bg-white/10 rounded-lg p-3 max-w-2xl">
            <ExternalLink size={16} className="flex-shrink-0 opacity-70" />
            <span className="text-sm truncate flex-1 font-mono opacity-90">{referralLink}</span>
            <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 flex-shrink-0" onClick={copyLink}>
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span className="ml-1">{copied ? 'Copié' : 'Copier'}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 font-medium border-b-2 transition whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'text-foreground border-primary' 
                    : 'text-muted-foreground border-transparent hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">

        {/* ACCUEIL */}
        {activeTab === 'accueil' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Clients apportés</p>
                    <p className="text-4xl font-bold mt-2 text-primary">{clients.length}</p>
                    <p className="text-sm text-muted-foreground mt-1">{activeClients.length} actifs</p>
                  </div>
                  <div className="p-3 rounded-full bg-primary/10"><Users size={28} className="text-primary" /></div>
                </div>
              </Card>
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Total commissions</p>
                    <p className="text-4xl font-bold mt-2 text-green-500">{totalCommissions.toFixed(0)}€</p>
                    <p className="text-sm text-muted-foreground mt-1">{commissions.length} versements</p>
                  </div>
                  <div className="p-3 rounded-full bg-green-500/10"><DollarSign size={28} className="text-green-500" /></div>
                </div>
              </Card>
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">En attente</p>
                    <p className="text-4xl font-bold mt-2 text-yellow-500">{totalPending.toFixed(0)}€</p>
                    <p className="text-sm text-muted-foreground mt-1">{pendingCommissions.length} en cours</p>
                  </div>
                  <div className="p-3 rounded-full bg-yellow-500/10"><Clock size={28} className="text-yellow-500" /></div>
                </div>
              </Card>
              <Card className="p-6 bg-card border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-sm">Palier actuel</p>
                    <p className={`text-4xl font-bold mt-2 uppercase ${currentPalier.color}`}>{apporteur?.palier || 'Starter'}</p>
                    <p className="text-sm text-muted-foreground mt-1">{currentPalier.months} mois / client</p>
                  </div>
                  <div className="p-3 rounded-full bg-primary/10"><Award size={28} className="text-primary" /></div>
                </div>
              </Card>
            </div>

            {/* Recent clients */}
            <Card className="p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">📋 Derniers clients apportés</h3>
              {clients.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">Aucun client encore. Partage ton lien de parrainage !</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Établissement</th>
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Statut</th>
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Offre</th>
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.slice(0, 5).map((client) => (
                        <tr key={client.id} className="border-b border-border/50">
                          <td className="py-3 px-2 font-medium">{client.nom_etablissement || client.email || '—'}</td>
                          <td className="py-3 px-2">
                            <Badge className={
                              client.statut === 'actif' || client.statut === 'active' || client.statut === 'confirmed'
                                ? 'bg-green-500/10 text-green-500'
                                : 'bg-yellow-500/10 text-yellow-500'
                            }>
                              {client.statut || 'pending'}
                            </Badge>
                          </td>
                          <td className="py-3 px-2">{client.offre || '—'}</td>
                          <td className="py-3 px-2 text-muted-foreground">
                            {client.created_at ? new Date(client.created_at).toLocaleDateString('fr-FR') : '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>

            {/* Referral CTA */}
            <Card className="p-6 border-2 border-primary bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="flex items-start gap-4">
                <Trophy size={40} className="text-yellow-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Partage ton lien et gagne des commissions</h3>
                  <p className="text-muted-foreground mb-4">
                    Chaque commerce inscrit via ton lien te rapporte <strong>20€/mois pendant {currentPalier.months} mois</strong> (palier {apporteur?.palier || 'Starter'}).
                  </p>
                  <Button onClick={copyLink}>
                    {copied ? <Check size={18} className="mr-2" /> : <Copy size={18} className="mr-2" />}
                    {copied ? 'Lien copié !' : 'Copier mon lien de parrainage'}
                  </Button>
                </div>
              </div>
            </Card>
          </>
        )}

        {/* VENTES */}
        {activeTab === 'ventes' && (
          <>
            <h2 className="text-2xl font-bold mb-6">📈 Mes ventes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <p className="text-muted-foreground text-sm">Total clients</p>
                <p className="text-5xl font-bold text-primary mt-2">{clients.length}</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-muted-foreground text-sm">Clients actifs</p>
                <p className="text-5xl font-bold text-green-500 mt-2">{activeClients.length}</p>
              </Card>
              <Card className="p-6 text-center">
                <p className="text-muted-foreground text-sm">En attente</p>
                <p className="text-5xl font-bold text-yellow-500 mt-2">{pendingClients.length}</p>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Liste complète des clients</h3>
              {clients.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">Aucun client pour le moment.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Établissement</th>
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Email</th>
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Téléphone</th>
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Statut</th>
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Offre</th>
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clients.map((client) => (
                        <tr key={client.id} className="border-b border-border/50 hover:bg-muted/50">
                          <td className="py-3 px-2 font-medium">{client.nom_etablissement || '—'}</td>
                          <td className="py-3 px-2">{client.email || '—'}</td>
                          <td className="py-3 px-2">{client.telephone || '—'}</td>
                          <td className="py-3 px-2">
                            <Badge className={
                              client.statut === 'actif' || client.statut === 'active' || client.statut === 'confirmed'
                                ? 'bg-green-500/10 text-green-500'
                                : 'bg-yellow-500/10 text-yellow-500'
                            }>
                              {client.statut || 'pending'}
                            </Badge>
                          </td>
                          <td className="py-3 px-2">{client.offre || '—'}</td>
                          <td className="py-3 px-2 text-muted-foreground">
                            {client.created_at ? new Date(client.created_at).toLocaleDateString('fr-FR') : '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>
          </>
        )}

        {/* COMMISSIONS */}
        {activeTab === 'commissions' && (
          <>
            <h2 className="text-2xl font-bold mb-6">💰 Mes commissions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center border-green-500/30">
                <p className="text-muted-foreground text-sm">Total gagné</p>
                <p className="text-5xl font-bold text-green-500 mt-2">{totalCommissions.toFixed(0)}€</p>
              </Card>
              <Card className="p-6 text-center border-blue-500/30">
                <p className="text-muted-foreground text-sm">Déjà versé</p>
                <p className="text-5xl font-bold text-blue-500 mt-2">{totalPaid.toFixed(0)}€</p>
              </Card>
              <Card className="p-6 text-center border-yellow-500/30">
                <p className="text-muted-foreground text-sm">En attente</p>
                <p className="text-5xl font-bold text-yellow-500 mt-2">{totalPending.toFixed(0)}€</p>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Historique des commissions</h3>
              {commissions.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">Aucune commission pour le moment.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Montant</th>
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Mois</th>
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Statut</th>
                        <th className="text-left py-3 px-2 text-muted-foreground font-medium">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {commissions.map((com) => (
                        <tr key={com.id} className="border-b border-border/50 hover:bg-muted/50">
                          <td className="py-3 px-2 font-bold text-green-500">{Number(com.montant).toFixed(0)}€</td>
                          <td className="py-3 px-2">{com.mois || '—'}</td>
                          <td className="py-3 px-2">
                            <Badge className={
                              com.statut === 'payée' || com.statut === 'payee' || com.statut === 'paid'
                                ? 'bg-green-500/10 text-green-500'
                                : 'bg-yellow-500/10 text-yellow-500'
                            }>
                              {com.statut || 'en attente'}
                            </Badge>
                          </td>
                          <td className="py-3 px-2 text-muted-foreground">
                            {com.created_at ? new Date(com.created_at).toLocaleDateString('fr-FR') : '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Card>
          </>
        )}

        {/* WALLET */}
        {activeTab === 'wallet' && (
          <>
            <h2 className="text-2xl font-bold mb-6">👛 Mon Wallet</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-8 bg-gradient-to-br from-green-500/10 to-primary/10 border-green-500/30">
                <Wallet size={40} className="text-green-500 mb-4" />
                <p className="text-muted-foreground text-sm mb-1">Solde disponible</p>
                <p className="text-5xl font-bold text-green-500">{totalPaid.toFixed(0)}€</p>
                <p className="text-sm text-muted-foreground mt-2">Commissions déjà versées</p>
              </Card>
              <Card className="p-8 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30">
                <Clock size={40} className="text-yellow-500 mb-4" />
                <p className="text-muted-foreground text-sm mb-1">En attente de versement</p>
                <p className="text-5xl font-bold text-yellow-500">{totalPending.toFixed(0)}€</p>
                <p className="text-sm text-muted-foreground mt-2">{pendingCommissions.length} commission(s) en cours</p>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Résumé financier</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Total commissions générées</span>
                  <span className="text-xl font-bold">{totalCommissions.toFixed(0)}€</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Commissions versées</span>
                  <span className="text-xl font-bold text-green-500">{totalPaid.toFixed(0)}€</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Commissions en attente</span>
                  <span className="text-xl font-bold text-yellow-500">{totalPending.toFixed(0)}€</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">Palier actuel</span>
                  <span className={`text-xl font-bold uppercase ${currentPalier.color}`}>
                    {currentPalier.emoji} {apporteur?.palier || 'Starter'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">Potentiel max / client</span>
                  <span className="text-xl font-bold">{currentPalier.months * 20}€</span>
                </div>
              </div>
            </Card>
          </>
        )}

        {/* CLASSEMENT */}
        {activeTab === 'classement' && (
          <>
            <h2 className="text-2xl font-bold mb-6">🏆 Classement</h2>
            <Card className="p-8 text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-5xl">{currentPalier.emoji}</span>
                <div>
                  <p className={`text-3xl font-bold uppercase ${currentPalier.color}`}>{apporteur?.palier || 'Starter'}</p>
                  <p className="text-muted-foreground">Ton palier actuel</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div>
                  <p className="text-4xl font-bold text-primary">{clients.length}</p>
                  <p className="text-sm text-muted-foreground mt-1">Clients apportés</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-green-500">{totalCommissions.toFixed(0)}€</p>
                  <p className="text-sm text-muted-foreground mt-1">Gains totaux</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-yellow-500">{currentPalier.months}</p>
                  <p className="text-sm text-muted-foreground mt-1">Mois de commission / client</p>
                </div>
              </div>
            </Card>

            {/* Progression paliers */}
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-6">Progression des paliers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: 'STARTER', emoji: '🥉', months: 3 },
                  { name: 'ACTIVE', emoji: '🥈', months: 4 },
                  { name: 'PRO', emoji: '🥇', months: 5 },
                  { name: 'ELITE', emoji: '💎', months: 6 },
                ].map((tier) => {
                  const isActive = (apporteur?.palier || '').toLowerCase() === tier.name.toLowerCase();
                  return (
                    <Card key={tier.name} className={`p-6 text-center transition-all ${isActive ? 'border-2 border-primary scale-105' : 'opacity-60'}`}>
                      <span className="text-3xl">{tier.emoji}</span>
                      <p className="font-bold mt-2">{tier.name}</p>
                      <p className="text-sm text-muted-foreground">{tier.months} mois × 20€</p>
                      <p className="text-lg font-bold mt-1">{tier.months * 20}€/client</p>
                      {isActive && <Badge className="mt-2 bg-primary/10 text-primary">Actuel</Badge>}
                    </Card>
                  );
                })}
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
