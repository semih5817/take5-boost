import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().trim().email("Adresse email invalide").max(255, "Email trop long")
});

type OfferType = 'starter' | 'pro';

const DevenirPartenaire = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentOffer, setCurrentOffer] = useState<OfferType>('pro');
  const [salesPerDay, setSalesPerDay] = useState(3);
  const [daysPerMonth, setDaysPerMonth] = useState(20);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Configuration des commissions
  const commissions = {
    starter: {
      price: 19.90,
      perMonth: 18.91, // 95% de 19.90
      total3Months: 56.73
    },
    pro: {
      price: 29.90,
      perMonth: 28.41, // 95% de 29.90
      total3Months: 85.23
    }
  };

  // Calcul des revenus
  const calculateEarnings = () => {
    const clientsPerMonth = salesPerDay * daysPerMonth;
    const commissionPerMonth = commissions[currentOffer].perMonth;

    const month1 = clientsPerMonth * commissionPerMonth;
    const month2 = clientsPerMonth * 2 * commissionPerMonth;
    const month3 = clientsPerMonth * 3 * commissionPerMonth;
    const total = month1 + month2 + month3;

    return {
      month1: Math.round(month1),
      month2: Math.round(month2),
      month3: Math.round(month3),
      total: Math.round(total),
      clientsMonth1: clientsPerMonth,
      clientsMonth2: clientsPerMonth * 2,
      clientsMonth3: clientsPerMonth * 3
    };
  };

  const earnings = calculateEarnings();

  const formatNumber = (num: number) => {
    return num.toLocaleString('fr-FR');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      toast({
        title: "Erreur",
        description: result.error.errors[0].message,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('email_captures')
        .insert({
          email: result.data.email,
          type: 'partner',
          source: '/devenir-partenaire'
        });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Email déjà inscrit",
            description: "Cet email est déjà enregistré pour le programme partenaire.",
          });
        } else {
          throw error;
        }
      } else {
        setShowSuccess(true);
        setEmail('');
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Erreur:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <Header />

      {/* Hero Section */}
      <section className="text-center pt-32 pb-20 px-5">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight">
            <span className="bg-gradient-to-r from-[#667eea] to-[#d946ef] bg-clip-text text-transparent">
              Gagnez jusqu'à 5 625€/mois
            </span>
            <br />
            en apportant TakeFive
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Devenez apporteur d'affaires et touchez jusqu'à 95% de commission
          </p>
          <p className="text-lg md:text-xl text-[#25D366] mb-10">
            💰 Payé pendant 3 mois sur chaque client que vous amenez
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#667eea] to-[#4F5EFF] px-12 py-4 rounded-full text-lg font-semibold shadow-lg shadow-[#4F5EFF]/30 hover:shadow-xl hover:shadow-[#4F5EFF]/40 hover:-translate-y-1 transition-all"
          >
            Devenir Apporteur d'Affaires →
          </button>
        </div>
      </section>

      <div className="container mx-auto px-5 max-w-7xl">
        {/* Commission Section */}
        <section className="bg-[#161b34]/80 border-2 border-[#4F5EFF] rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">💸 Vos Commissions</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Starter */}
            <div className="bg-[#4F5EFF]/10 border-2 border-[#8B9EFF] rounded-2xl p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Offre Starter</h3>
              <div className="text-4xl md:text-5xl font-bold text-[#8B9EFF] mb-2">19,90€</div>
              <p className="text-gray-400 mb-4">HT / mois</p>
              <div className="text-gray-400 text-sm mb-4">
                Commission : 90-95%<br />
                18,91€/mois × 3 mois
              </div>
              <div className="bg-[#25D366]/15 text-[#25D366] text-xl md:text-2xl font-bold py-4 px-6 rounded-xl">
                = 56,73€ total
              </div>
            </div>

            {/* Pro */}
            <div className="bg-[#4F5EFF]/10 border-2 border-[#8B9EFF] rounded-2xl p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Offre Pro</h3>
              <div className="text-4xl md:text-5xl font-bold text-[#8B9EFF] mb-2">29,90€</div>
              <p className="text-gray-400 mb-4">HT / mois</p>
              <div className="text-gray-400 text-sm mb-4">
                Commission : 90-95%<br />
                28,41€/mois × 3 mois
              </div>
              <div className="bg-[#25D366]/15 text-[#25D366] text-xl md:text-2xl font-bold py-4 px-6 rounded-xl">
                = 85,23€ total
              </div>
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm italic">
            ⚠️ Important : Si le client annule avant 3 mois, vous perdez la commission restante
          </p>
        </section>

        {/* Tiers Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">🏆 Système de Paliers</h2>
          <p className="text-center text-gray-300 text-lg mb-10">
            Plus vous amenez de clients, plus votre commission augmente
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-[#161b34]/80 border-2 border-[#4F5EFF] rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform">
              <div className="text-4xl md:text-5xl mb-4">🥉</div>
              <div className="text-xl md:text-2xl font-bold mb-2">Bronze</div>
              <div className="text-gray-400 text-sm mb-4">0-10 clients</div>
              <div className="text-2xl md:text-3xl font-bold text-[#25D366]">90%</div>
            </div>
            <div className="bg-[#161b34]/80 border-2 border-[#4F5EFF] rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform">
              <div className="text-4xl md:text-5xl mb-4">🥈</div>
              <div className="text-xl md:text-2xl font-bold mb-2">Silver</div>
              <div className="text-gray-400 text-sm mb-4">11-25 clients</div>
              <div className="text-2xl md:text-3xl font-bold text-[#25D366]">92%</div>
            </div>
            <div className="bg-[#161b34]/80 border-2 border-[#4F5EFF] rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform">
              <div className="text-4xl md:text-5xl mb-4">🥇</div>
              <div className="text-xl md:text-2xl font-bold mb-2">Gold</div>
              <div className="text-gray-400 text-sm mb-4">26-50 clients</div>
              <div className="text-2xl md:text-3xl font-bold text-[#25D366]">94%</div>
            </div>
            <div className="bg-[#161b34]/80 border-2 border-[#4F5EFF] rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform">
              <div className="text-4xl md:text-5xl mb-4">💎</div>
              <div className="text-xl md:text-2xl font-bold mb-2">Platinum</div>
              <div className="text-gray-400 text-sm mb-4">51+ clients</div>
              <div className="text-2xl md:text-3xl font-bold text-[#25D366]">95%</div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="bg-[#25D366]/10 border-2 border-[#25D366] rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">🧮 Calculez vos gains potentiels</h2>
          
          <div className="max-w-3xl mx-auto mb-10">
            {/* Offer Toggle */}
            <div className="text-center mb-8">
              <label className="text-lg mb-4 block">Offre à vendre :</label>
              <div className="inline-flex gap-3 flex-wrap justify-center">
                <button
                  onClick={() => setCurrentOffer('starter')}
                  className={`px-6 md:px-8 py-3 border-2 rounded-full transition-all ${
                    currentOffer === 'starter'
                      ? 'bg-[#4F5EFF] border-[#4F5EFF] font-bold'
                      : 'bg-[#4F5EFF]/10 border-[#4F5EFF]'
                  }`}
                >
                  Starter (19,90€)
                </button>
                <button
                  onClick={() => setCurrentOffer('pro')}
                  className={`px-6 md:px-8 py-3 border-2 rounded-full transition-all ${
                    currentOffer === 'pro'
                      ? 'bg-[#4F5EFF] border-[#4F5EFF] font-bold'
                      : 'bg-[#4F5EFF]/10 border-[#4F5EFF]'
                  }`}
                >
                  Pro (29,90€)
                </button>
              </div>
            </div>

            {/* Sales per day */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <span className="text-lg">Ventes par jour</span>
                <span className="text-[#25D366] text-xl font-bold">{salesPerDay}</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={salesPerDay}
                onChange={(e) => setSalesPerDay(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#25D366]"
              />
            </div>

            {/* Days per month */}
            <div className="mb-8">
              <div className="flex justify-between mb-3">
                <span className="text-lg">Jours travaillés par mois</span>
                <span className="text-[#25D366] text-xl font-bold">{daysPerMonth}</span>
              </div>
              <input
                type="range"
                min="10"
                max="25"
                value={daysPerMonth}
                onChange={(e) => setDaysPerMonth(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#25D366]"
              />
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#161b34]/90 border-2 border-[#4F5EFF] rounded-2xl p-6 md:p-8 text-center">
              <h3 className="text-gray-400 mb-4">Mois 1</h3>
              <div className="text-3xl md:text-5xl font-bold text-[#25D366] mb-3">
                {formatNumber(earnings.month1)}€
              </div>
              <div className="text-sm text-gray-300">
                {earnings.clientsMonth1} clients (1er paiement)
              </div>
            </div>
            <div className="bg-[#161b34]/90 border-2 border-[#4F5EFF] rounded-2xl p-6 md:p-8 text-center">
              <h3 className="text-gray-400 mb-4">Mois 2</h3>
              <div className="text-3xl md:text-5xl font-bold text-[#25D366] mb-3">
                {formatNumber(earnings.month2)}€
              </div>
              <div className="text-sm text-gray-300">
                {earnings.clientsMonth2} clients actifs
              </div>
            </div>
            <div className="bg-[#161b34]/90 border-2 border-[#4F5EFF] rounded-2xl p-6 md:p-8 text-center">
              <h3 className="text-gray-400 mb-4">Mois 3</h3>
              <div className="text-3xl md:text-5xl font-bold text-[#25D366] mb-3">
                {formatNumber(earnings.month3)}€
              </div>
              <div className="text-sm text-gray-300">
                {earnings.clientsMonth3} clients actifs
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#667eea] to-[#d946ef] rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-xl md:text-2xl mb-4">Revenu total sur 3 mois</h3>
            <div className="text-4xl md:text-6xl font-bold mb-3">
              {formatNumber(earnings.total)}€
            </div>
            <p className="opacity-90">
              💡 Après 3 mois, continuez à prospecter pour maintenir vos revenus !
            </p>
          </div>
        </section>

        {/* Scenarios Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">📊 Scénarios Réalistes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Temps Partiel */}
            <div className="bg-[#161b34]/80 border-2 border-[#4F5EFF] rounded-2xl p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2">⏰ Temps Partiel</h3>
              <p className="text-gray-400 text-sm mb-6">1 vente/jour • 15 jours/mois</p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Clients/mois</span>
                  <span className="text-[#25D366] font-bold">15</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Mois 1</span>
                  <span className="text-[#25D366] font-bold">426€</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Mois 2</span>
                  <span className="text-[#25D366] font-bold">852€</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Mois 3</span>
                  <span className="text-[#25D366] font-bold">1 278€</span>
                </div>
              </div>
              <div className="text-center pt-6 border-t-2 border-[#4F5EFF]">
                <div className="text-sm text-gray-400 mb-2">Total perçu</div>
                <div className="text-3xl md:text-4xl font-bold text-[#25D366]">2 556€</div>
              </div>
            </div>

            {/* Mi-Temps */}
            <div className="bg-[#161b34]/80 border-2 border-[#4F5EFF] rounded-2xl p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2">⚡ Mi-Temps</h3>
              <p className="text-gray-400 text-sm mb-6">2 ventes/jour • 20 jours/mois</p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Clients/mois</span>
                  <span className="text-[#25D366] font-bold">40</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Mois 1</span>
                  <span className="text-[#25D366] font-bold">1 136€</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Mois 2</span>
                  <span className="text-[#25D366] font-bold">2 272€</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Mois 3</span>
                  <span className="text-[#25D366] font-bold">3 409€</span>
                </div>
              </div>
              <div className="text-center pt-6 border-t-2 border-[#4F5EFF]">
                <div className="text-sm text-gray-400 mb-2">Total perçu</div>
                <div className="text-3xl md:text-4xl font-bold text-[#25D366]">6 818€</div>
              </div>
            </div>

            {/* Temps Plein */}
            <div className="bg-[#161b34]/80 border-2 border-[#4F5EFF] rounded-2xl p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-2">🚀 Temps Plein</h3>
              <p className="text-gray-400 text-sm mb-6">3 ventes/jour • 22 jours/mois</p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Clients/mois</span>
                  <span className="text-[#25D366] font-bold">66</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Mois 1</span>
                  <span className="text-[#25D366] font-bold">1 875€</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Mois 2</span>
                  <span className="text-[#25D366] font-bold">3 750€</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-gray-300">Mois 3</span>
                  <span className="text-[#25D366] font-bold">5 625€</span>
                </div>
              </div>
              <div className="text-center pt-6 border-t-2 border-[#4F5EFF]">
                <div className="text-sm text-gray-400 mb-2">Total perçu</div>
                <div className="text-3xl md:text-4xl font-bold text-[#25D366]">11 250€</div>
              </div>
            </div>
          </div>
        </section>

        {/* App Preview Section */}
        <section className="bg-[#161b34]/80 border-2 border-[#4F5EFF] rounded-3xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">📱 Application de Suivi (Bientôt Disponible)</h2>
          <p className="text-gray-300 text-lg mb-10">
            Gérez votre activité d'apporteur avec une application mobile dédiée
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-4xl md:text-5xl mb-4">📊</div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Dashboard Temps Réel</h3>
              <p className="text-gray-400">Suivez vos ventes et commissions en direct</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl mb-4">🏅</div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Leaderboard</h3>
              <p className="text-gray-400">Comparez-vous aux meilleurs apporteurs</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl mb-4">🔔</div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">Notifications</h3>
              <p className="text-gray-400">Soyez alerté à chaque nouvelle vente</p>
            </div>
          </div>

          <span className="inline-block bg-gradient-to-r from-[#667eea] to-[#d946ef] px-6 py-2 rounded-full text-sm font-bold mt-8">
            🚀 BIENTÔT DISPONIBLE
          </span>
        </section>

        {/* Email Capture / Final CTA */}
        <section id="contact" className="text-center py-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">Prêt à commencer ?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Rejoignez les apporteurs d'affaires TakeFive dès aujourd'hui
          </p>
          
          <div className="max-w-lg mx-auto mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                className="flex-1 px-6 py-4 border-2 border-[#4F5EFF]/50 rounded-xl bg-[#161b34]/80 text-white text-base transition-all outline-none focus:border-[#4F5EFF] focus:ring-4 focus:ring-[#4F5EFF]/20 placeholder:text-gray-400"
                placeholder="votre@email.fr"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-6 text-base font-bold bg-gradient-to-r from-[#667eea] to-[#4F5EFF] hover:shadow-lg hover:shadow-[#4F5EFF]/40 transition-all rounded-xl"
              >
                {isSubmitting ? 'Envoi...' : 'Devenir Apporteur →'}
              </Button>
            </form>

            {showSuccess && (
              <div className="mt-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-5 px-6 rounded-xl font-semibold animate-fade-in">
                ✓ Merci ! Consultez votre boîte email dans quelques instants.
              </div>
            )}

            <p className="text-sm text-gray-400 mt-5">
              🔒 Vos données sont sécurisées. Nous ne spammons jamais.
            </p>
          </div>

          {/* WhatsApp Contact */}
          <div className="max-w-lg mx-auto mt-8 p-6 bg-[#161b34]/80 border-2 border-[#25D366]/30 rounded-2xl">
            <p className="text-gray-300 mb-4">
              Ou sinon contactez-nous directement sur WhatsApp au <span className="font-semibold text-white">07 78 56 59 17</span>
            </p>
            <a 
              href="https://wa.me/33778565917" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-[#25D366]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Démarrer sur WhatsApp
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default DevenirPartenaire;
