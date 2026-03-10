import { useState, useEffect, useRef } from 'react';

export const SeoLocalWhatsAppPhone = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const allMessages = [
    {
      type: 'text',
      text: '👋 Bonjour ! Je viens d\'analyser votre fiche Google.',
      delay: 500
    },
    {
      type: 'text',
      text: '📊 Voici votre diagnostic actuel :',
      delay: 1500
    },
    {
      type: 'card',
      title: 'État actuel',
      metrics: [
        { label: 'Avis', value: '156' },
        { label: 'Note', value: '4.1★' },
        { label: 'SEO', value: '68%' },
        { label: 'Posts', value: '2/mois' }
      ],
      delay: 2000
    },
    {
      type: 'text',
      text: '⚙️ J\'optimise vos catégories, textes et photos...',
      delay: 2000
    },
    {
      type: 'text',
      text: '✨ Optimisation terminée !',
      delay: 2000
    },
    {
      type: 'card',
      title: '🎯 Nouveau résultat',
      badge: 'TOP 3 LOCAL',
      metrics: [
        { label: 'Avis', value: '156' },
        { label: 'Note', value: '4.8★' },
        { label: 'SEO', value: '98%' },
        { label: 'Rang', value: '#1' }
      ],
      delay: 2000
    },
    {
      type: 'text',
      text: '🎉 Félicitations ! Vous êtes maintenant #1 sur Google Maps dans votre zone.',
      delay: 2000
    },
    {
      type: 'text',
      text: '🤖 Bonus : Vous êtes maintenant visible dans les IA !',
      delay: 2000
    },
    {
      type: 'ai',
      text: 'Vos données sont optimisées pour :',
      platforms: ['ChatGPT', 'Claude', 'Perplexity'],
      delay: 2000
    }
  ];

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const showNextMessage = () => {
      if (currentIndex >= allMessages.length) {
        setTimeout(() => {
          setMessages([]);
          currentIndex = 0;
          showNextMessage();
        }, 3000);
        return;
      }

      setIsTyping(true);

      timeoutId = setTimeout(() => {
        setIsTyping(false);
        const message = allMessages[currentIndex];
        setMessages(prev => [...prev, { ...message, time: getCurrentTime() }]);
        currentIndex++;
        
        setTimeout(() => {
          showNextMessage();
        }, message.delay);
      }, 1000);
    };

    showNextMessage();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const renderMessage = (message: any, index: number) => {
    if (message.type === 'text') {
      return (
        <div key={index} className="seo-wa-message takefive">
          <div className="seo-wa-message-bubble">
            <p className="seo-wa-message-text">{message.text}</p>
            <div className="seo-wa-message-time">{message.time}</div>
          </div>
        </div>
      );
    }

    if (message.type === 'card') {
      return (
        <div key={index} className="seo-wa-message takefive">
          <div className="seo-wa-message-card">
            <div className="seo-wa-card-header">
              <div className="seo-wa-card-icon">📊</div>
              <div className="seo-wa-card-title">{message.title}</div>
            </div>
            {message.badge && <div className="seo-wa-badge">{message.badge}</div>}
            <div className="seo-wa-card-content">
              {message.metrics.map((m: any, i: number) => (
                <div key={i} className="seo-wa-card-metric">
                  <div className="seo-wa-metric-label">{m.label}</div>
                  <div className="seo-wa-metric-value">{m.value}</div>
                </div>
              ))}
            </div>
            <div className="seo-wa-message-time">{message.time}</div>
          </div>
        </div>
      );
    }

    if (message.type === 'ai') {
      return (
        <div key={index} className="seo-wa-message takefive">
          <div className="seo-wa-message-card">
            <p className="seo-wa-message-text">{message.text}</p>
            <div className="seo-wa-ai-platforms">
              {message.platforms.map((p: string, i: number) => (
                <div key={i} className="seo-wa-ai-tag">✓ {p}</div>
              ))}
            </div>
            <div className="seo-wa-message-time">{message.time}</div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="seo-wa-iphone-container">
      <div className="seo-wa-iphone-notch"></div>
      <div className="seo-wa-iphone-camera"></div>
      
      <div className="seo-wa-iphone-screen">
        <div className="seo-wa-whatsapp-header">
          <div className="seo-wa-header-content">
            <div className="seo-wa-takefive-avatar">⭐</div>
            <div className="seo-wa-header-info">
              <div className="seo-wa-contact-name">TakeFive Assistant</div>
              <div className="seo-wa-contact-status">en ligne</div>
            </div>
          </div>
        </div>

        <div className="seo-wa-chat-background" ref={chatRef}>
          <div className="seo-wa-messages-container">
            {messages.map((message, index) => renderMessage(message, index))}
            
            {isTyping && (
              <div className="seo-wa-message takefive">
                <div className="seo-wa-typing-indicator">
                  <div className="seo-wa-typing-dot"></div>
                  <div className="seo-wa-typing-dot"></div>
                  <div className="seo-wa-typing-dot"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="seo-wa-input-bar">
          <input type="text" className="seo-wa-input-field" placeholder="Message" readOnly />
          <div className="seo-wa-send-button">➤</div>
        </div>
      </div>
    </div>
  );
};
