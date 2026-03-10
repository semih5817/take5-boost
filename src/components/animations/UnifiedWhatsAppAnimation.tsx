import React, { useState, useEffect, useRef } from 'react';

const UnifiedWhatsAppAnimation = () => {
  const [currentSequence, setCurrentSequence] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const sequences = [
    {
      name: 'Statistiques',
      messages: [
        { type: 'text', text: '📊 Hey ! Ton rapport du mois est prêt', delay: 500 },
        { type: 'text', text: '👁️ Vues : 2847 (+42%)\n💬 Avis : 42 (+14)\n⭐ Note : 4.8/5', delay: 1000 },
        { type: 'text', text: '📈 Évolution : +45% ce mois\n🔥 Tu cartonne !', delay: 1000 },
        { type: 'text', text: '🎯 Score Take 5 : 85/100\nContinue comme ça ! 💪', delay: 1000 }
      ]
    },
    {
      name: 'Gamification',
      messages: [
        { type: 'text', text: '🎉 LEVEL UP ! Tu passes niveau 9', delay: 500 },
        { type: 'text', text: '🏆 Nouveau badge : "Expert Local"\n50 avis collectés avec succès !', delay: 1000 },
        { type: 'text', text: '✨ Récompenses débloquées :\n• 50 avis collectés\n• Note 4.5+ maintenue\n• Série de 7 jours 🔥', delay: 1000 },
        { type: 'text', text: '🎯 XP : 780/1000\nClassement : #2 dans ta zone', delay: 1000 },
        { type: 'text', text: 'Continue comme ça, le #1 est à toi ! 💪', delay: 1000 }
      ]
    },
    {
      name: 'Classement',
      messages: [
        { type: 'text', text: '🏆 Classement local - Restaurants Nancy', delay: 500 },
        { type: 'text', text: '#3 : Le Zinc (4.2★, 67 avis)\n#2 : TOI (4.3★, 156 avis) 👑\n#1 : La Table de Sophie (4.6★, 89 avis)', delay: 1000 },
        { type: 'text', text: '⚠️ Alerte ! Le Zinc a publié 3 nouvelles photos', delay: 1000 },
        { type: 'text', text: '💡 Opportunité : Publie 2 posts pour dépasser le #1', delay: 1000 },
        { type: 'text', text: '🎉 BOOM ! Tu es passé #1 local !', delay: 1500 }
      ]
    },
    {
      name: 'Radar',
      messages: [
        { type: 'text', text: '🎯 Radar actif sur 4 plateformes', delay: 500 },
        { type: 'text', text: '⭐ Nouvel avis 5★ sur Google\n"Excellent service !"\n✅ Réponse IA générée en 2s', delay: 1000 },
        { type: 'text', text: '⚠️ Avis négatif détecté sur Facebook\n"Service décevant"\n🚨 Alerte WhatsApp envoyée immédiatement', delay: 1000 },
        { type: 'text', text: '⭐ Nouvel avis sur Trustpilot\n"Très professionnel"\n✅ Réponse automatique envoyée', delay: 1000 },
        { type: 'text', text: '📊 Stats : 156 avis surveillés\n🔥 Zéro avis manqué depuis 47 jours', delay: 1000 }
      ]
    },
    {
      name: 'IA',
      messages: [
        { type: 'text', text: '🤖 IA activée ! Je surveille tes avis', delay: 500 },
        { type: 'text', text: '⭐ Nouvel avis 5★ de Jean Martin\n"Excellent service, très professionnel !"', delay: 1000 },
        { type: 'text', text: '✨ Analyse en cours...', delay: 800 },
        { type: 'text', text: '✅ Réponse générée et envoyée en 2 secondes :\n\n"Merci Jean pour votre retour ! Nous sommes ravis que notre service vous ait satisfait. À bientôt !"', delay: 1500 },
        { type: 'text', text: '📊 Stats : 156 réponses ce mois\n100% de taux de réponse 🔥', delay: 1000 }
      ]
    },
    {
      name: 'SEO',
      messages: [
        { type: 'text', text: '🗺️ Optimisation Google Maps lancée !', delay: 500 },
        { type: 'text', text: '📸 3 photos ajoutées\n✅ Qualité optimisée IA', delay: 1000 },
        { type: 'text', text: '📝 Description améliorée\n✅ Mots-clés locaux intégrés', delay: 1000 },
        { type: 'text', text: '🏷️ Attributs mis à jour\n✅ 12 nouveaux tags ajoutés', delay: 1000 },
        { type: 'text', text: '🎯 Résultat :\n👑 Tu es maintenant #1 sur Google Maps\n📊 Visibilité +45% | Recherches +120', delay: 1000 }
      ]
    }
  ];

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let messageIndex = 0;
    let timeoutIds: NodeJS.Timeout[] = [];
    const currentMessages = sequences[currentSequence].messages;

    // Show notification at the start of each sequence
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);

    const showNextMessage = () => {
      if (messageIndex >= currentMessages.length) {
        return;
      }

      const message = currentMessages[messageIndex];
      setIsTyping(true);

      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
        setDisplayedMessages(prev => [...prev, { ...message, time: getCurrentTime() }]);
        messageIndex++;
        
        if (messageIndex < currentMessages.length) {
          const nextTimeout = setTimeout(showNextMessage, message.delay);
          timeoutIds.push(nextTimeout);
        }
      }, 1000);
      
      timeoutIds.push(typingTimeout);
    };

    // Clear previous messages and start new sequence
    setDisplayedMessages([]);
    showNextMessage();

    // Switch to next sequence after 8 seconds
    const sequenceTimeout = setTimeout(() => {
      setCurrentSequence((prev) => (prev + 1) % sequences.length);
    }, 8000);
    timeoutIds.push(sequenceTimeout);

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [currentSequence]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [displayedMessages, isTyping]);

  return (
    <>
      <style>{`
        .wa-unified-container {
          position: relative;
          width: 360px;
          height: 720px;
          background: #1e293b;
          border-radius: 50px;
          padding: 14px;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6), inset 0 0 0 2px rgba(255, 255, 255, 0.1);
          margin: 0 auto;
        }

        .wa-unified-screen {
          width: 100%;
          height: 100%;
          background: #0a1628;
          border-radius: 40px;
          position: relative;
          overflow: hidden;
        }

        .ios-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 30px;
          background: #000;
          border-radius: 0 0 20px 20px;
          z-index: 10;
        }

        .ios-camera {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 12px;
          background: #1e293b;
          border-radius: 50%;
          z-index: 11;
        }

        .ios-notif {
          position: absolute;
          top: 50px;
          left: 12px;
          right: 12px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          z-index: 20;
          animation: slideDown 0.3s ease-out;
          opacity: ${showNotification ? '1' : '0'};
          transform: translateY(${showNotification ? '0' : '-20px'});
          transition: all 0.3s ease;
          pointer-events: none;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .notif-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .notif-icon {
          width: 20px;
          height: 20px;
          background: #25d366;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .notif-app {
          font-weight: 600;
          font-size: 13px;
          color: #000;
        }

        .notif-time {
          font-size: 11px;
          color: #666;
          margin-left: auto;
        }

        .notif-title {
          font-weight: 600;
          font-size: 14px;
          color: #000;
          margin-bottom: 2px;
        }

        .notif-message {
          font-size: 13px;
          color: #333;
          line-height: 1.3;
        }

        .wa-status-bar {
          position: absolute;
          top: 50px;
          left: 0;
          right: 0;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          color: #8b949e;
          font-size: 12px;
          z-index: 5;
        }

        .wa-header {
          position: absolute;
          top: 94px;
          left: 0;
          right: 0;
          height: 60px;
          background: #1a1f2e;
          display: flex;
          align-items: center;
          padding: 0 16px;
          gap: 12px;
          z-index: 5;
        }

        .wa-back {
          font-size: 20px;
          color: #25d366;
        }

        .wa-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25d366, #128c7e);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          color: white;
        }

        .wa-header-info {
          flex: 1;
        }

        .wa-name {
          font-weight: 600;
          color: #ffffff;
          font-size: 16px;
        }

        .wa-status {
          font-size: 13px;
          color: #8b949e;
        }

        .wa-chat {
          position: absolute;
          top: 154px;
          left: 0;
          right: 0;
          bottom: 70px;
          overflow-y: auto;
          padding: 16px;
          background: #0a1628;
        }

        .wa-chat::-webkit-scrollbar {
          width: 0;
        }

        .wa-message {
          max-width: 80%;
          margin-bottom: 8px;
          background: #1a2942;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.5;
          color: #e4e6eb;
          white-space: pre-wrap;
          animation: messageSlideIn 0.3s ease-out;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        @keyframes messageSlideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .wa-message-time {
          font-size: 11px;
          color: #8b949e;
          margin-top: 4px;
          text-align: right;
        }

        .wa-typing {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 12px 16px;
          background: #1a2942;
          border-radius: 12px;
          max-width: 80px;
          margin-bottom: 8px;
        }

        .wa-typing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #8b949e;
          animation: typingDot 1.4s infinite;
        }

        .wa-typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .wa-typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typingDot {
          0%, 60%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          30% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .wa-input-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 70px;
          background: #1a1f2e;
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 8px;
        }

        .wa-input {
          flex: 1;
          background: #0a1628;
          border: none;
          border-radius: 24px;
          padding: 12px 16px;
          color: #8b949e;
          font-size: 14px;
        }

        .wa-send {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #25d366;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .wa-indicators {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .wa-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #374151;
          transition: all 0.3s ease;
        }

        .wa-indicator.active {
          width: 24px;
          border-radius: 4px;
          background: #25d366;
        }
      `}</style>

      <div className="wa-unified-container">
        <div className="wa-unified-screen">
          <div className="ios-notch">
            <div className="ios-camera"></div>
          </div>

          <div className="ios-notif">
            <div className="notif-header">
              <div className="notif-icon">💚</div>
              <div className="notif-app">WhatsApp</div>
              <div className="notif-time">maintenant</div>
            </div>
            <div className="notif-title">Take 5 Assistant</div>
            <div className="notif-message">Nouveau rapport disponible</div>
          </div>

          <div className="wa-status-bar">
            <span>12:47</span>
            <span>●●●● 5G</span>
          </div>

          <div className="wa-header">
            <div className="wa-back">‹</div>
            <div className="wa-avatar">T5</div>
            <div className="wa-header-info">
              <div className="wa-name">Take 5 Assistant</div>
              <div className="wa-status">en ligne</div>
            </div>
          </div>

          <div className="wa-chat" ref={chatRef}>
            {displayedMessages.map((message, index) => (
              <div key={index}>
                <div className="wa-message">
                  {message.text}
                  <div className="wa-message-time">{message.time}</div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="wa-typing">
                <div className="wa-typing-dot"></div>
                <div className="wa-typing-dot"></div>
                <div className="wa-typing-dot"></div>
              </div>
            )}
          </div>

          <div className="wa-indicators">
            {sequences.map((_, index) => (
              <div 
                key={index} 
                className={`wa-indicator ${index === currentSequence ? 'active' : ''}`}
              />
            ))}
          </div>

          <div className="wa-input-bar">
            <div className="wa-input">Message</div>
            <div className="wa-send">➤</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnifiedWhatsAppAnimation;
