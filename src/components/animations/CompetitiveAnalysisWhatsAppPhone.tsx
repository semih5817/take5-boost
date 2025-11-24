import { useState, useEffect, useRef } from 'react';

export const CompetitiveAnalysisWhatsAppPhone = () => {
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [scoreValue, setScoreValue] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);

  const messages = [
    { type: 'text', text: '👋 Hey ! J\'ai analysé tes concurrents locaux...', delay: 500 },
    { type: 'text', text: '📊 Avis : Toi 156 vs Eux 89\n🔥 VOUS GAGNEZ ! +75% devant la concurrence !', delay: 1000 },
    { type: 'text', text: '🌟 Note : Toi 4.3★ vs Eux 4.6★\n⚠️ À améliorer légèrement (-0.3 étoile)', delay: 1000 },
    { type: 'text', text: '📱 Posts/mois : Toi 2 vs Eux 6\n⚠️ Tu es en retard, il faut publier plus !', delay: 1000 },
    { type: 'text', text: '📸 Photos récentes : Toi 8 vs Eux 5\n✅ EXCELLENT ! Continue comme ça !', delay: 1000 },
    { type: 'score', delay: 1500 },
    { type: 'text', text: '🎯 Voilà ton plan d\'action prioritaire :', delay: 1000 },
    { type: 'actions', delay: 1500 }
  ];

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const showNextMessage = () => {
      if (currentIndex >= messages.length) {
        setTimeout(() => {
          setDisplayedMessages([]);
          setScoreValue(0);
          currentIndex = 0;
          showNextMessage();
        }, 3000);
        return;
      }

      const message = messages[currentIndex];

      if (currentIndex === 0) {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      }

      setIsTyping(true);

      timeoutId = setTimeout(() => {
        setIsTyping(false);
        setDisplayedMessages(prev => [...prev, { ...message, time: getCurrentTime() }]);
        
        if (message.type === 'score') {
          let currentScore = 0;
          const scoreInterval = setInterval(() => {
            currentScore += 2;
            if (currentScore >= 75) {
              currentScore = 75;
              clearInterval(scoreInterval);
            }
            setScoreValue(currentScore);
          }, 30);
        }
        
        currentIndex++;
        setTimeout(showNextMessage, message.delay);
      }, 1000);
    };

    showNextMessage();
    return () => { if (timeoutId) clearTimeout(timeoutId); };
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [displayedMessages, isTyping]);

  const renderMessage = (message: any, index: number) => {
    if (message.type === 'text') {
      return (
        <div key={index} className="competitive-message takefive">
          <div className="competitive-message-bubble">
            <p className="competitive-message-text" style={{ whiteSpace: 'pre-line' }}>{message.text}</p>
            <div className="competitive-message-time">{message.time}</div>
          </div>
        </div>
      );
    }

    if (message.type === 'score') {
      return (
        <div key={index} className="competitive-message takefive">
          <div className="competitive-message-bubble">
            <div className="competitive-score-card">
              <div className="competitive-score-header">
                <div className="competitive-score-icon">🎯</div>
                <div className="competitive-score-label">Score Global</div>
                <div className="competitive-score-value">{scoreValue}/100</div>
                <div className="competitive-score-bar-container">
                  <div className="competitive-score-bar-fill" style={{ width: `${scoreValue}%` }}></div>
                </div>
                <div className="competitive-score-interpretation">
                  {scoreValue >= 80 ? '🔥 Excellent !' : scoreValue >= 60 ? '👍 Bon niveau' : '⚠️ À améliorer'}
                </div>
              </div>
            </div>
            <div className="competitive-message-time">{message.time}</div>
          </div>
        </div>
      );
    }

    if (message.type === 'actions') {
      return (
        <div key={index} className="competitive-message takefive">
          <div className="competitive-message-bubble">
            <div className="competitive-action-list">
              <div className="competitive-action-title">
                <span>💡</span>
                <span>Actions prioritaires</span>
              </div>
              <div className="competitive-action-item">Résous les avis négatifs pour améliorer ta note</div>
              <div className="competitive-action-item">Publie 2 posts par semaine minimum</div>
              <div className="competitive-action-item">Continue à ajouter des photos régulièrement</div>
            </div>
            <div className="competitive-cta-button">📊 Voir l'analyse complète</div>
            <div className="competitive-message-time">{message.time}</div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="competitive-iphone-container">
      <div className="competitive-iphone-notch"></div>
      <div className="competitive-iphone-camera"></div>
      
      <div className="competitive-iphone-screen">
        {showNotification && (
          <div className="competitive-ios-notification">
            <div className="competitive-notification-app-icon">💬</div>
            <div className="competitive-notification-content">
              <div className="competitive-notification-app-name">TakeFive Assistant</div>
              <div className="competitive-notification-text">J'ai analysé tes concurrents locaux...</div>
            </div>
            <div className="competitive-notification-time">maintenant</div>
          </div>
        )}

        <div className="competitive-whatsapp-header">
          <div className="competitive-header-content">
            <div className="competitive-takefive-avatar">⭐</div>
            <div className="competitive-header-info">
              <div className="competitive-contact-name">TakeFive Assistant</div>
              <div className="competitive-contact-status">en ligne</div>
            </div>
          </div>
        </div>

        <div className="competitive-chat-background" ref={chatRef}>
          <div className="competitive-messages-container">
            {displayedMessages.map((message, index) => renderMessage(message, index))}
            
            {isTyping && (
              <div className="competitive-message takefive">
                <div className="competitive-typing-indicator">
                  <div className="competitive-typing-dot"></div>
                  <div className="competitive-typing-dot"></div>
                  <div className="competitive-typing-dot"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="competitive-input-bar">
          <input type="text" className="competitive-input-field" placeholder="Message" readOnly />
          <div className="competitive-send-button">➤</div>
        </div>
      </div>
    </div>
  );
};
