import { useState } from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { 
  Trophy, Star, TrendingUp, Users, Play, Phone, Target, 
  Download, Settings, Crown, Flame, CheckCircle, Award, Medal, Lock
} from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type TabType = 'overview' | 'gamification' | 'campaigns' | 'sms' | 'pride';

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

export const DashboardPreview = () => {
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
  };

  const badges: BadgeItem[] = [
    { id: 1, name: "Débutant", icon: Medal, requirement: "0-10 avis", earned: true, progress: 100 },
    { id: 2, name: "Proactif", icon: Star, requirement: "11-30 avis", earned: true, progress: 100 },
    { id: 3, name: "Ambassadeur", icon: Award, requirement: "31-100 avis", earned: true, progress: 47, current: true },
    { id: 4, name: "Légende Locale", icon: Crown, requirement: "+100 avis", earned: false, progress: 0, locked: true }
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
            stroke="rgb(71, 85, 105)" 
            strokeWidth="10" 
            fill="none" 
          />
          <circle 
            cx={size / 2} 
            cy={size / 2} 
            r={radius} 
            stroke="rgb(168, 85, 247)" 
            strokeWidth="10" 
            fill="none" 
            strokeDasharray={circumference} 
            strokeDashoffset={offset} 
            strokeLinecap="round" 
            style={{ transition: 'stroke-dashoffset 1s ease' }} 
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-white">{score}</span>
          <span className="text-xs text-slate-400">Score Take 5</span>
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
    <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium">{title}</p>
          <p className="text-4xl font-bold mt-2 text-purple-400">{value}</p>
          {subtitle && <p className="text-sm text-slate-400 mt-1">{subtitle}</p>}
        </div>
        <div className="p-3 rounded-full bg-purple-500/10">
          <Icon size={28} className="text-purple-400" />
        </div>
      </div>
    </Card>
  );

  const tabs = [
    { id: 'overview' as TabType, label: '📊 Vue d\'ensemble' },
    { id: 'campaigns' as TabType, label: '🎡 Jeu-Concours' },
    { id: 'sms' as TabType, label: '📱 SMS Marketing' },
    { id: 'pride' as TabType, label: '🏆 Moments de Fierté' },
  ];

  return (
    <div className="w-full bg-[#0A0E1A] rounded-2xl border border-slate-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-yellow-500 text-black px-6 py-1 text-sm font-bold">
          ⚡ {userData.trialDaysLeft} jours d'essai restants
        </div>
        <div className="pt-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-2">
                <Star size={32} className="text-purple-600" fill="currentColor" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">{userData.name}</h1>
                <div className="flex items-center gap-4 mt-2 flex-wrap">
                  <Badge className="bg-white/20 hover:bg-white/30">
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
                <Button className="bg-white/20 hover:bg-white/30">
                  <Download size={18} className="mr-2" />
                  Exporter
                </Button>
                <Button className="bg-white text-purple-600 hover:bg-white/90">
                  <Settings size={18} className="mr-2" />
                  Paramètres
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-slate-700 bg-slate-900/50">
        <div className="px-6">
          <div className="flex gap-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 font-medium border-b-2 transition whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'text-white border-purple-500' 
                    : 'text-slate-400 border-transparent hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Vue d'ensemble */}
        {activeTab === 'overview' && (
          <>
            {/* Alerte conversion */}
            <Card className="mb-6 p-6 border-2 border-purple-500 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
              <div className="flex items-start gap-4">
                <Trophy size={48} className="text-yellow-400 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    🎉 Bravo ! Vous avez progressé de +22 points en 30 jours !
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Vous avez gagné <strong>+15 avis</strong>, votre note a augmenté de <strong>+0.3⭐</strong>, 
                    et votre visibilité a explosé de <strong>+127%</strong> !
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <Button className="bg-green-500 hover:bg-green-600">
                      <CheckCircle size={20} className="mr-2" />
                      Continuer pour 19,90€/mois
                    </Button>
                    <Button className="bg-slate-700 hover:bg-slate-600">
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
                icon={Trophy} 
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
              <Card className="p-6 bg-slate-800/50 border-slate-700">
                <h3 className="text-lg font-bold mb-4 text-white">📈 Activité hebdomadaire</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgb(71, 85, 105)" />
                    <XAxis dataKey="jour" stroke="rgb(148, 163, 184)" />
                    <YAxis stroke="rgb(148, 163, 184)" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgb(30, 41, 59)', 
                        border: '1px solid rgb(71, 85, 105)', 
                        borderRadius: '8px' 
                      }} 
                    />
                    <Legend />
                    <Line type="monotone" dataKey="scans" stroke="rgb(168, 85, 247)" strokeWidth={3} name="Scans" />
                    <Line type="monotone" dataKey="avis" stroke="rgb(236, 72, 153)" strokeWidth={3} name="Avis" />
                    <Line type="monotone" dataKey="sms" stroke="rgb(59, 130, 246)" strokeWidth={3} name="SMS" />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              <Card className="p-6 bg-slate-800/50 border-slate-700">
                <h3 className="text-lg font-bold mb-4 text-white">🎁 Distribution des lots</h3>
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
                        backgroundColor: 'rgb(30, 41, 59)', 
                        border: '1px solid rgb(71, 85, 105)', 
                        borderRadius: '8px' 
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* ROI */}
            <Card className="p-6 border border-green-500/30 bg-gradient-to-r from-green-500/10 to-purple-500/10">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-green-400" size={32} />
                <h3 className="text-xl font-bold text-white">💰 Impact & ROI</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-400">+127%</p>
                  <p className="text-sm text-slate-400 mt-1">Avis Google vs mois précédent</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-yellow-400">4.8★</p>
                  <p className="text-sm text-slate-400 mt-1">Note moyenne actuelle</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-purple-400">756</p>
                  <p className="text-sm text-slate-400 mt-1">Contacts SMS qualifiés</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-pink-400">71.5%</p>
                  <p className="text-sm text-slate-400 mt-1">Taux de conversion scan→jeu</p>
                </div>
              </div>
            </Card>
          </>
        )}

        {/* Jeu-Concours */}
        {activeTab === 'campaigns' && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-white">🎡 Campagnes Jeu-Concours</h2>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="p-6 bg-slate-800/50 border-slate-700">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{campaign.name}</h3>
                      <p className="text-sm text-slate-400">
                        Du {campaign.dateDebut} au {campaign.dateFin}
                      </p>
                    </div>
                    <Badge className="bg-green-500 text-white">
                      {campaign.status === 'active' ? '🟢 Actif' : 'Terminé'}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-2xl font-bold text-purple-400">{campaign.participants}</p>
                      <p className="text-sm text-slate-400">Participants</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-yellow-400">{campaign.avis}</p>
                      <p className="text-sm text-slate-400">Avis collectés</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-400">{campaign.lotsOfferts}</p>
                      <p className="text-sm text-slate-400">Lots offerts</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-blue-400">{campaign.smsCollectes}</p>
                      <p className="text-sm text-slate-400">SMS collectés</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* SMS Marketing */}
        {activeTab === 'sms' && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-white">📱 SMS Marketing</h2>
            
            <Card className="p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="text-blue-400" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-white">Base de contacts SMS</h3>
                  <p className="text-slate-300">756 numéros qualifiés collectés</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-blue-400">756</p>
                  <p className="text-sm text-slate-400">Contacts actifs</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-green-400">92%</p>
                  <p className="text-sm text-slate-400">Taux d'opt-in</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-purple-400">68%</p>
                  <p className="text-sm text-slate-400">Taux d'ouverture</p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card className="p-6 bg-slate-800/50 border-slate-700">
                <h3 className="text-lg font-bold mb-4 text-white">📊 Segments</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg">
                    <span className="text-slate-300">Clients fidèles (4+ visites)</span>
                    <span className="font-bold text-purple-400">234</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg">
                    <span className="text-slate-300">Nouveaux clients</span>
                    <span className="font-bold text-blue-400">312</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg">
                    <span className="text-slate-300">Inactifs (90+ jours)</span>
                    <span className="font-bold text-yellow-400">210</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-800/50 border-slate-700">
                <h3 className="text-lg font-bold mb-4 text-white">🚀 Campagnes à venir</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-white">Relance fidélité</span>
                      <Badge className="bg-green-500 text-white">Active</Badge>
                    </div>
                    <p className="text-sm text-slate-400">Ciblage: Clients fidèles</p>
                    <p className="text-sm text-green-400 mt-1">Envoi prévu: Vendredi 15h</p>
                  </div>
                  <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-white">Réactivation clients</span>
                      <Badge className="bg-slate-600 text-white">Brouillon</Badge>
                    </div>
                    <p className="text-sm text-slate-400">Ciblage: Inactifs 90j+</p>
                  </div>
                </div>
              </Card>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              🔜 Disponible avec le pack Pro (T2 2026)
            </Button>
          </>
        )}

        {/* Moments de Fierté */}
        {activeTab === 'pride' && (
          <>
            <h2 className="text-2xl font-bold mb-6 text-white">🏆 Vos Moments de Fierté</h2>
            
            <Card className="p-6 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-yellow-500/30 mb-6">
              <div className="flex items-center gap-3">
                <Trophy className="text-yellow-400" size={48} />
                <div>
                  <h3 className="text-2xl font-bold text-white">Félicitations ! 🎉</h3>
                  <p className="text-slate-300">Vous avez franchi 12 étapes importantes ce mois-ci</p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 gap-4">
              <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center flex-shrink-0">
                    <Star size={32} className="text-white" fill="white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">Note moyenne 4.7⭐ atteinte !</h3>
                      <span className="text-sm text-slate-400">Il y a 2 jours</span>
                    </div>
                    <p className="text-slate-300 mb-3">
                      Votre note moyenne vient de passer à 4.7/5 ! Vous êtes dans le top 10% des commerces de votre secteur.
                    </p>
                    <div className="flex gap-2">
                      <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500">
                        +15 points Take 5
                      </Badge>
                      <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500">
                        Badge débloqué: Excellence
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">100 avis collectés en 1 mois ! 🎯</h3>
                      <span className="text-sm text-slate-400">Il y a 5 jours</span>
                    </div>
                    <p className="text-slate-300 mb-3">
                      Record battu ! Vous avez collecté 100 avis ce mois-ci, soit +327% vs le mois dernier.
                    </p>
                    <div className="flex gap-2">
                      <Badge className="bg-green-500/20 text-green-400 border border-green-500">
                        +25 points Take 5
                      </Badge>
                      <Badge className="bg-orange-500/20 text-orange-400 border border-orange-500">
                        Série de 12 jours 🔥
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <Users size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">Top 3 dans votre ville ! 🏆</h3>
                      <span className="text-sm text-slate-400">Il y a 1 semaine</span>
                    </div>
                    <p className="text-slate-300 mb-3">
                      Vous êtes maintenant dans le top 3 des commerces les mieux notés de votre catégorie à Paris 15ème.
                    </p>
                    <div className="flex gap-2">
                      <Badge className="bg-blue-500/20 text-blue-400 border border-blue-500">
                        +20 points Take 5
                      </Badge>
                      <Badge className="bg-pink-500/20 text-pink-400 border border-pink-500">
                        Visibilité maximale
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center flex-shrink-0">
                    <Flame size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">Série de 30 jours ! 🔥</h3>
                      <span className="text-sm text-slate-400">Aujourd'hui</span>
                    </div>
                    <p className="text-slate-300 mb-3">
                      Incroyable ! Vous avez maintenu une activité continue pendant 30 jours consécutifs.
                    </p>
                    <div className="flex gap-2">
                      <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500">
                        +30 points Take 5
                      </Badge>
                      <Badge className="bg-red-500/20 text-red-400 border border-red-500">
                        Engagement maximum
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
