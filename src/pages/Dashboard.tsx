import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { 
  Trophy, Gift, Star, TrendingUp, Users, MessageSquare, Phone, Target, 
  Calendar, Download, Play, Settings, Zap, Award, CheckCircle, Lock, 
  Crown, Medal, Flame, ChevronRight, DollarSign, Lightbulb, Sparkles, 
  AlertCircle, Clock, Share2 
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type TabType = 'overview' | 'gamification' | 'campaigns' | 'sms' | 'rewards' | 'pride' | 'conversion';

interface UserData {
  name: string;
  score: number;
  level: string;
  totalReviews: number;
  avgRating: number;
  responseRate: number;
  streak: number;
  trialDaysLeft: number;
}

interface BadgeItem {
  id: number;
  name: string;
  icon: any;
  requirement: string;
  earned: boolean;
  progress: number;
  current?: boolean;
  locked?: boolean;
}

interface Mission {
  id: number;
  title: string;
  progress: number;
  target: number;
  points: number;
  completed: boolean;
  icon: any;
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const userData: UserData = {
    name: "Café Le Gourmet",
    score: 78,
    level: "Ambassadeur",
    totalReviews: 47,
    avgRating: 4.7,
    responseRate: 89,
    streak: 12,
    trialDaysLeft: 7
  };

  const statsData = {
    totalScans: 1248,
    totalPlays: 892,
    conversionRate: 71.5,
    googleReviews: 247,
    smsCollected: 756,
    activeCampaigns: 2
  };

  const badges: BadgeItem[] = [
    { id: 1, name: "Débutant", icon: Medal, requirement: "0-10 avis", earned: true, progress: 100 },
    { id: 2, name: "Proactif", icon: Star, requirement: "11-30 avis", earned: true, progress: 100 },
    { id: 3, name: "Ambassadeur", icon: Award, requirement: "31-100 avis", earned: true, progress: 47, current: true },
    { id: 4, name: "Légende Locale", icon: Crown, requirement: "+100 avis", earned: false, progress: 0, locked: true }
  ];

  const missions: Mission[] = [
    { id: 1, title: "Répondre à 5 avis cette semaine", progress: 3, target: 5, points: 50, completed: false, icon: MessageSquare },
    { id: 2, title: "Collecter 10 nouveaux avis ce mois", progress: 7, target: 10, points: 100, completed: false, icon: Star },
    { id: 3, title: "Maintenir une note moyenne >4.5⭐", progress: 100, target: 100, points: 75, completed: true, icon: Trophy },
    { id: 4, title: "Utiliser le jeu-concours 3 fois", progress: 2, target: 3, points: 80, completed: false, icon: Gift }
  ];

  const weeklyData = [
    { jour: 'Lun', scans: 142, avis: 28, sms: 98 },
    { jour: 'Mar', scans: 168, avis: 35, sms: 112 },
    { jour: 'Mer', scans: 195, avis: 41, sms: 134 },
    { jour: 'Jeu', scans: 223, avis: 52, sms: 167 },
    { jour: 'Ven', scans: 289, avis: 58, sms: 201 },
    { jour: 'Sam', scans: 178, avis: 24, sms: 28 },
    { jour: 'Dim', scans: 53, avis: 9, sms: 16 }
  ];

  const rewardsData = [
    { name: 'Café offert', value: 312, color: 'hsl(25, 50%, 40%)' },
    { name: 'Dessert offert', value: 89, color: 'hsl(340, 100%, 70%)' },
    { name: 'Réduction 10%', value: 156, color: 'hsl(175, 70%, 55%)' },
    { name: 'Merci !', value: 335, color: 'hsl(165, 70%, 70%)' }
  ];

  const campaigns = [
    { 
      id: 1, 
      name: 'Opération St-Valentin', 
      status: 'active', 
      dateDebut: '01/02/2025', 
      dateFin: '14/02/2025', 
      participants: 456, 
      avis: 98, 
      lotsOfferts: 312, 
      smsCollectes: 389 
    },
    { 
      id: 2, 
      name: 'Happy Hour Hiver', 
      status: 'active', 
      dateDebut: '15/01/2025', 
      dateFin: '28/02/2025', 
      participants: 436, 
      avis: 149, 
      lotsOfferts: 380, 
      smsCollectes: 367 
    }
  ];

  const ScoreCircle = ({ score, size = 120 }: { score: number; size?: number }) => {
    const radius = (size - 20) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle 
            cx={size / 2} 
            cy={size / 2} 
            r={radius} 
            stroke="hsl(var(--muted))" 
            strokeWidth="10" 
            fill="none" 
          />
          <circle 
            cx={size / 2} 
            cy={size / 2} 
            r={radius} 
            stroke="hsl(var(--primary))" 
            strokeWidth="10" 
            fill="none" 
            strokeDasharray={circumference} 
            strokeDashoffset={offset} 
            strokeLinecap="round" 
            style={{ transition: 'stroke-dashoffset 1s ease' }} 
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-foreground">{score}</span>
          <span className="text-xs text-muted-foreground">Score Take 5</span>
        </div>
      </div>
    );
  };

  const StatCard = ({ 
    icon: Icon, 
    title, 
    value, 
    subtitle 
  }: { 
    icon: any; 
    title: string; 
    value: string | number; 
    subtitle?: string;
  }) => (
    <Card className="p-6 bg-card border-border hover:shadow-primary transition-all">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium">{title}</p>
          <p className="text-4xl font-bold mt-2 text-primary">{value}</p>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        <div className="p-3 rounded-full bg-primary/10">
          <Icon size={28} className="text-primary" />
        </div>
      </div>
    </Card>
  );

  const tabs = [
    { id: 'overview' as TabType, label: '📊 Vue d\'ensemble' },
    { id: 'gamification' as TabType, label: '🎮 Gamification' },
    { id: 'campaigns' as TabType, label: '🎡 Jeu-Concours' },
    { id: 'sms' as TabType, label: '📱 SMS Marketing' },
    { id: 'rewards' as TabType, label: '🎁 Récompenses' },
    { id: 'pride' as TabType, label: '🏆 Moments de Fierté' },
    { id: 'conversion' as TabType, label: '💰 Conversion' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-hero text-white p-6 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-yellow-500 text-black px-6 py-1 text-sm font-bold">
          ⚡ {userData.trialDaysLeft} jours d'essai restants
        </div>
        <div className="max-w-7xl mx-auto pt-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-2">
                <Star size={32} className="text-primary" fill="currentColor" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{userData.name}</h1>
                <div className="flex items-center gap-4 mt-2 flex-wrap">
                  <Badge variant="secondary" className="bg-white/20 hover:bg-white/30">
                    <Crown size={16} className="mr-1 text-yellow-300" />
                    <span className="font-medium">{userData.level}</span>
                  </Badge>
                  <span className="flex items-center gap-2 text-sm">
                    <Flame size={16} className="text-orange-400" />
                    <span>{userData.streak} jours de suite</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <ScoreCircle score={userData.score} />
              <div className="flex gap-3">
                <Button variant="secondary" className="bg-white/20 hover:bg-white/30">
                  <Download size={18} className="mr-2" />
                  Exporter
                </Button>
                <Button className="bg-white text-primary hover:bg-white/90">
                  <Settings size={18} className="mr-2" />
                  Paramètres
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
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
        {/* Vue d'ensemble */}
        {activeTab === 'overview' && (
          <>
            {/* Alerte conversion */}
            <Card className="mb-6 p-6 border-2 border-primary bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="flex items-start gap-4">
                <Trophy size={48} className="text-yellow-400 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    🎉 Bravo ! Vous avez progressé de +22 points en 30 jours !
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Vous avez gagné <strong>+15 avis</strong>, votre note a augmenté de <strong>+0.3⭐</strong>, 
                    et votre visibilité a explosé de <strong>+127%</strong> !
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <Button className="bg-green-500 hover:bg-green-600">
                      <CheckCircle size={20} className="mr-2" />
                      Continuer pour 19,90€/mois
                    </Button>
                    <Button variant="secondary">
                      Répondre au questionnaire (2 min)
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <StatCard 
                icon={Users} 
                title="Scans QR/NFC" 
                value={statsData.totalScans} 
                subtitle="Ce mois-ci" 
              />
              <StatCard 
                icon={Play} 
                title="Participants au jeu" 
                value={statsData.totalPlays} 
                subtitle={`Taux: ${statsData.conversionRate}%`} 
              />
              <StatCard 
                icon={Star} 
                title="Avis Google" 
                value={`+${statsData.googleReviews}`} 
                subtitle="Collectés via jeu" 
              />
              <StatCard 
                icon={Phone} 
                title="Numéros SMS" 
                value={statsData.smsCollected} 
                subtitle="Base qualifiée" 
              />
              <StatCard 
                icon={Gift} 
                title="Lots offerts" 
                value="892" 
                subtitle="Toutes campagnes" 
              />
              <StatCard 
                icon={Target} 
                title="Score Take 5" 
                value={userData.score} 
                subtitle={`Niveau ${userData.level}`} 
              />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-card">
                <h3 className="text-lg font-bold mb-4">📈 Activité hebdomadaire</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="jour" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))', 
                        borderRadius: '8px' 
                      }} 
                    />
                    <Legend />
                    <Line type="monotone" dataKey="scans" stroke="hsl(var(--primary))" strokeWidth={3} name="Scans" />
                    <Line type="monotone" dataKey="avis" stroke="hsl(var(--secondary))" strokeWidth={3} name="Avis" />
                    <Line type="monotone" dataKey="sms" stroke="hsl(var(--accent))" strokeWidth={3} name="SMS" />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              <Card className="p-6 bg-card">
                <h3 className="text-lg font-bold mb-4">🎁 Distribution des lots</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie 
                      data={rewardsData} 
                      cx="50%" 
                      cy="50%" 
                      labelLine={false} 
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} 
                      outerRadius={100} 
                      fill="#8884d8" 
                      dataKey="value"
                    >
                      {rewardsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))', 
                        borderRadius: '8px' 
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* ROI */}
            <Card className="p-6 border border-green-500/30 bg-gradient-to-r from-green-500/10 to-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-green-400" size={32} />
                <h3 className="text-xl font-bold">💰 Impact & ROI</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-400">+127%</p>
                  <p className="text-sm text-muted-foreground mt-1">Avis Google vs mois précédent</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-yellow-400">4.8★</p>
                  <p className="text-sm text-muted-foreground mt-1">Note moyenne actuelle</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary">756</p>
                  <p className="text-sm text-muted-foreground mt-1">Contacts SMS qualifiés</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-secondary">71.5%</p>
                  <p className="text-sm text-muted-foreground mt-1">Taux de conversion scan→jeu</p>
                </div>
              </div>
            </Card>
          </>
        )}

        {/* Gamification */}
        {activeTab === 'gamification' && (
          <>
            <h2 className="text-2xl font-bold mb-6">🎮 Système de Gamification</h2>
            
            {/* Badges */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award size={24} className="text-yellow-400" />
                Vos badges
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {badges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <Card 
                      key={badge.id} 
                      className={`p-6 border-2 transition-all ${
                        badge.locked ? 'opacity-40' : 'hover:scale-105'
                      } ${badge.current ? 'border-primary' : ''}`}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mb-3 bg-primary/10">
                          {badge.locked ? (
                            <Lock size={32} className="text-muted-foreground" />
                          ) : (
                            <Icon size={32} className="text-primary" />
                          )}
                        </div>
                        <h3 className="font-bold mb-1">{badge.name}</h3>
                        <p className="text-xs text-muted-foreground mb-3">{badge.requirement}</p>
                        {!badge.locked && (
                          <div className="w-full">
                            <div className="w-full bg-muted rounded-full h-2 mb-2">
                              <div 
                                className="h-2 rounded-full bg-primary transition-all" 
                                style={{ width: `${badge.progress}%` }} 
                              />
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {badge.earned ? '✅ Débloqué !' : `${badge.progress}%`}
                            </p>
                          </div>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Missions */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target size={24} className="text-primary" />
                Missions du mois
                <span className="ml-auto text-sm font-normal text-muted-foreground">
                  {missions.filter(m => m.completed).length}/{missions.length} complétées
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {missions.map((mission) => {
                  const Icon = mission.icon;
                  const percentage = (mission.progress / mission.target) * 100;
                  return (
                    <Card 
                      key={mission.id} 
                      className={`p-6 border transition-all ${
                        mission.completed ? 'border-green-500 bg-green-500/5' : ''
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full flex-shrink-0 bg-primary/10">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-bold">{mission.title}</h3>
                            <Badge className="bg-primary/10 text-primary">
                              +{mission.points} pts
                            </Badge>
                          </div>
                          <div className="mb-2">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Progression</span>
                              <span className="font-medium">{mission.progress}/{mission.target}</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="h-2 rounded-full bg-primary transition-all" 
                                style={{ width: `${Math.min(percentage, 100)}%` }} 
                              />
                            </div>
                          </div>
                          {mission.completed && (
                            <div className="flex items-center gap-2 text-sm text-green-400">
                              <CheckCircle size={16} />
                              <span className="font-medium">Mission accomplie !</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Classement */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp size={24} className="text-green-400" />
                  Votre classement
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Position locale</span>
                    <span className="text-2xl font-bold text-green-400">#3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Meilleur que</span>
                    <span className="text-2xl font-bold text-yellow-400">90%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">des cafés de Saint-Dié</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Star size={24} className="text-yellow-400" />
                  Prochaine étape
                </h3>
                <p className="text-muted-foreground mb-4">
                  Plus que <strong className="text-foreground">53 avis</strong> pour atteindre le badge{' '}
                  <strong className="text-pink-400">Légende Locale</strong> !
                </p>
                <div className="w-full bg-muted rounded-full h-3 mb-2">
                  <div 
                    className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" 
                    style={{ width: '47%' }} 
                  />
                </div>
                <p className="text-sm text-muted-foreground">47/100 avis</p>
              </Card>
            </div>
          </>
        )}

        {/* Campagnes */}
        {activeTab === 'campaigns' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">🎡 Campagnes de Jeu-Concours</h2>
              <Button className="bg-primary hover:bg-primary/90">
                <Play size={20} className="mr-2" />
                Créer une campagne
              </Button>
            </div>
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="p-6 mb-4 border-l-4 border-l-secondary">
                <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{campaign.name}</h3>
                    <div className="flex items-center gap-4 mt-2 flex-wrap">
                      <Badge className={campaign.status === 'active' ? 'bg-green-500/10 text-green-500' : ''}>
                        {campaign.status === 'active' ? '🟢 Active' : 'Terminée'}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar size={16} />
                        {campaign.dateDebut} → {campaign.dateFin}
                      </span>
                    </div>
                  </div>
                  <Button variant="link">Modifier →</Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <Card className="p-4 bg-primary/5">
                    <p className="text-2xl font-bold text-primary">{campaign.participants}</p>
                    <p className="text-sm text-muted-foreground mt-1">Participants</p>
                  </Card>
                  <Card className="p-4 bg-secondary/5">
                    <p className="text-2xl font-bold text-secondary">+{campaign.avis}</p>
                    <p className="text-sm text-muted-foreground mt-1">Avis Google</p>
                  </Card>
                  <Card className="p-4 bg-destructive/5">
                    <p className="text-2xl font-bold text-destructive">{campaign.lotsOfferts}</p>
                    <p className="text-sm text-muted-foreground mt-1">Lots offerts</p>
                  </Card>
                  <Card className="p-4 bg-green-500/5">
                    <p className="text-2xl font-bold text-green-500">{campaign.smsCollectes}</p>
                    <p className="text-sm text-muted-foreground mt-1">SMS collectés</p>
                  </Card>
                </div>
              </Card>
            ))}
          </>
        )}

        {/* SMS Marketing */}
        {activeTab === 'sms' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">📱 SMS Marketing</h2>
              <Button className="bg-green-500 hover:bg-green-600">
                <MessageSquare size={20} className="mr-2" />
                Nouvelle campagne SMS
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard icon={Phone} title="Base contacts" value="756" subtitle="Numéros collectés" />
              <StatCard icon={MessageSquare} title="Campagnes envoyées" value="12" subtitle="Ce mois-ci" />
              <StatCard icon={TrendingUp} title="Conversions SMS" value="34%" subtitle="Taux retour magasin" />
            </div>
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">✉️ Créer une campagne SMS</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nom de la campagne" 
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground" 
                />
                <textarea 
                  placeholder="Message SMS..." 
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground h-24"
                />
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Envoyer maintenant
                </Button>
              </div>
            </Card>
          </>
        )}

        {/* Rewards */}
        {activeTab === 'rewards' && (
          <>
            <h2 className="text-2xl font-bold mb-6">🎁 Gestion des récompenses</h2>
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-4">Configuration des lots</h3>
              <div className="space-y-3">
                {rewardsData.map((reward, index) => (
                  <Card key={index} className="flex items-center gap-4 p-4 bg-card border border-border">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${reward.color}20` }}
                    >
                      <Gift style={{ color: reward.color }} size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{reward.name}</p>
                      <p className="text-sm text-muted-foreground">{reward.value} fois distribué</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold" style={{ color: reward.color }}>
                        {((reward.value / rewardsData.reduce((a, b) => a + b.value, 0)) * 100).toFixed(0)}%
                      </p>
                      <p className="text-xs text-muted-foreground">Probabilité</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </>
        )}

        {/* Pride Moments */}
        {activeTab === 'pride' && (
          <>
            <h2 className="text-2xl font-bold mb-6">🏆 Vos Moments de Gloire</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-8 border-2 border-muted">
                <h3 className="text-2xl font-bold text-muted-foreground mb-6 text-center">
                  📅 Avant Take 5
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Nombre d'avis</span>
                    <span className="text-3xl font-bold text-muted-foreground">32</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Note moyenne</span>
                    <span className="text-3xl font-bold text-muted-foreground">4.4⭐</span>
                  </div>
                </div>
              </Card>
              <Card className="p-8 border-2 border-green-500 bg-green-500/5">
                <h3 className="text-2xl font-bold mb-6 text-center">✨ Après 30 jours</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Nombre d'avis</span>
                    <span className="text-3xl font-bold text-green-400">
                      47 <span className="text-lg ml-2">(+15)</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Note moyenne</span>
                    <span className="text-3xl font-bold text-yellow-400">
                      4.7⭐ <span className="text-lg ml-2 text-green-400">(+0.3)</span>
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </>
        )}

        {/* Conversion */}
        {activeTab === 'conversion' && (
          <>
            <h2 className="text-2xl font-bold mb-6">💰 Timeline de Conversion</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <StatCard 
                icon={Target} 
                title="Taux conversion total" 
                value="68%" 
                subtitle="vs 30% sans gamification" 
              />
              <StatCard 
                icon={MessageSquare} 
                title="Messages envoyés" 
                value="6" 
                subtitle="Séquence automatisée" 
              />
              <StatCard 
                icon={Clock} 
                title="Durée séquence" 
                value="8 jours" 
                subtitle="J23 à J31" 
              />
              <StatCard 
                icon={Zap} 
                title="Automatisation" 
                value="100%" 
                subtitle="Via n8n + WhatsApp" 
              />
            </div>
            <Card className="p-6">
              <p className="text-center text-muted-foreground">
                Détails de conversion à venir...
              </p>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
