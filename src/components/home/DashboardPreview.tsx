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
    { id: 'gamification' as TabType, label: '🎮 Gamification' },
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

      <div className="p-6">
        {/* Vue d'ensemble uniquement */}
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
      </div>
    </div>
  );
};
