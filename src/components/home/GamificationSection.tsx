import { useState, useEffect } from 'react';
import { BarChart3, Target, Trophy, TrendingUp } from 'lucide-react';

export const GamificationSection = () => {
  const [notifications, setNotifications] = useState<Array<{
    id: number;
    icon: string;
    text: string;
    color: string;
  }>>([]);
  const [nextNotifId, setNextNotifId] = useState(0);

  // Liste étendue de notifications (15 exemples variés)
  const notifsList = [
    // Objectifs et défis
    { icon: "🎯", text: "Nouveau défi : Obtenir 5 nouvelles photos cette semaine", color: "from-blue-500 to-cyan-500" },
    { icon: "🎯", text: "Mission : Atteindre une note de 4,5★ ce mois-ci", color: "from-blue-600 to-cyan-600" },
    
    // Réussites et récompenses
    { icon: "⭐", text: "Objectif atteint ! Tu as obtenu 10 avis. +100 points", color: "from-yellow-500 to-orange-500" },
    { icon: "🎉", text: "Bravo ! Mission accomplie : 5 photos ajoutées. +50 points", color: "from-pink-500 to-red-500" },
    { icon: "✨", text: "Félicitations ! Taux de réponse aux avis : 100%. +75 points", color: "from-purple-500 to-pink-500" },
    
    // Avis et interactions
    { icon: "💬", text: "2 nouveaux avis à traiter rapidement", color: "from-purple-500 to-pink-500" },
    { icon: "💬", text: "1 avis négatif nécessite une réponse urgente", color: "from-red-500 to-orange-500" },
    { icon: "⭐", text: "Nouveau avis 5★ reçu ! +20 points", color: "from-yellow-400 to-orange-400" },
    
    // Niveaux et badges
    { icon: "🏆", text: "Badge débloqué : Expert Local", color: "from-green-500 to-teal-500" },
    { icon: "🏆", text: "Niveau 4 atteint : Champion Local ! +200 points", color: "from-yellow-500 to-orange-600" },
    { icon: "🔥", text: "Série de 7 jours consécutifs ! Badge Régularité débloqué", color: "from-orange-500 to-red-500" },
    
    // Score et progression
    { icon: "📊", text: "Ton score de santé : 82/100 (+4 cette semaine)", color: "from-indigo-500 to-purple-500" },
    { icon: "📈", text: "Progression impressionnante : +12 points ce mois !", color: "from-green-500 to-emerald-500" },
    
    // Missions et rappels
    { icon: "📸", text: "Mission : Ajoute 3 photos de tes produits cette semaine", color: "from-cyan-500 to-blue-500" },
    { icon: "📝", text: "N'oublie pas : Mets à jour tes horaires pour les vacances", color: "from-indigo-500 to-blue-500" }
  ];

  useEffect(() => {
    // Timing ajusté : nouvelle notification toutes les 5 SECONDES (au lieu de 3)
    const interval = setInterval(() => {
      const randomNotif = notifsList[Math.floor(Math.random() * notifsList.length)];
      const newNotif = {
        id: nextNotifId,
        ...randomNotif
      };
      
      setNotifications(prev => {
        const updated = [newNotif, ...prev];
        return updated.slice(0, 3); // Max 3 notifications visibles
      });
      
      setNextNotifId(prev => prev + 1);

      // Durée de vie ajustée : 7 SECONDES (au lieu de 4)
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotif.id));
      }, 7000);
    }, 5000); // Intervalle passé de 3000ms à 5000ms

    return () => clearInterval(interval);
  }, [nextNotifId]);

  return (
    <section className="relative py-24 px-6 overflow-hidden" id="gamification">
      {/* Fond dégradé identique à "Tout se passe sur WhatsApp" */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d1b4e] to-[#1e1539]" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* GAUCHE : Téléphone avec animation Ticker */}
          <div className="relative lg:pr-8 order-2 lg:order-1">
            {/* Halo qui pulse - RAPIDE (1.5s) et VISIBLE (1.0→1.15) */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-3xl animate-pulse-fast" />
            
            {/* Téléphone */}
            <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800 max-w-sm mx-auto">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-gray-800 rounded-b-3xl z-10" />
              
              {/* Écran */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] aspect-[9/19] overflow-hidden">
                
                {/* Header fixe */}
                <div className="absolute top-0 left-0 right-0 z-20 p-4 text-center">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
                    <span className="text-white text-sm font-semibold">TakeFive Assistant</span>
                  </div>
                </div>

                {/* Zone notifications - arrivent par le BAS */}
                <div className="absolute bottom-4 left-4 right-4 space-y-3">
                  {notifications.map((notif, index) => (
                    <div
                      key={notif.id}
                      className="slide-up bg-gray-800/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-gray-700"
                      style={{ 
                        opacity: 1 - (index * 0.15) // Opacité ajustée pour meilleure visibilité
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${notif.color} flex items-center justify-center text-2xl`}>
                          {notif.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white text-sm font-medium leading-tight">
                            {notif.text}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            À l'instant
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Indicateur d'attente si pas de notifs */}
                {notifications.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">⏳</div>
                      <p className="text-gray-500 text-sm">En attente de notifications...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* DROITE : Texte + arguments avec icônes LINE/STROKE */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  🎮 Gamification :
                </span>
                <br />
                <span className="text-white">
                  boostez votre Score de Santé Google
                </span>
              </h2>
              <p className="text-lg text-gray-300">
                Chaque semaine, TakeFive note votre fiche Google de 0 à 100 et vous envoie des missions simples pour vous rapprocher du 100 %.
              </p>
            </div>

            {/* Arguments avec icônes LINE/STROKE */}
            <div className="space-y-6">
              
              {/* Argument 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  {/* Icône LINE/STROKE - Graphique barres */}
                  <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Score de Santé 0–100
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Calcul automatique basé sur vos photos, posts, avis, taux de réponse et infos à jour. Suivez votre progression en temps réel : 62/100, 78/100…
                  </p>
                </div>
              </div>

              {/* Argument 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  {/* Icône LINE/STROKE - Cible */}
                  <Target className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Missions automatiques sur WhatsApp
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Recevez des missions simples : "Ajoutez 3 nouvelles photos", "Répondez à ces 2 avis", "Mettez à jour vos horaires". Vous savez exactement quoi faire pour progresser.
                  </p>
                </div>
              </div>

              {/* Argument 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  {/* Icône LINE/STROKE - Trophée */}
                  <Trophy className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Progression gamifiée
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Gagnez des points à chaque action, débloquez des niveaux (Débutant, Pro, Expert Local) et recevez des notifications motivantes : "Objectif atteint !", "Niveau 3 débloqué !"
                  </p>
                </div>
              </div>

              {/* Argument 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                  {/* Icône LINE/STROKE - Tendance croissante */}
                  <TrendingUp className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Rapports clairs & motivation
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Recevez chaque semaine votre rapport sur WhatsApp : évolution de votre score, missions accomplies, prochains défis. Restez motivé et progressez régulièrement.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
