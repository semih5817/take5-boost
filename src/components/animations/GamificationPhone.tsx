import { useState, useEffect, useRef } from 'react';

export const GamificationPhone = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const allNotifications = [
    {
      icon: '📊',
      iconClass: 'purple',
      title: 'Score de santé : 82/100',
      badge: '+4 pts',
      text: 'Cette semaine vous avez gagné 4 points ! Objectif : 90/100',
      time: "À l'instant",
      hasProgress: true,
      progress: 82
    },
    {
      icon: '🔥',
      iconClass: 'orange',
      title: 'Série de 7 jours !',
      badge: 'Nouveau',
      text: 'Badge "Régularité" débloqué ! Continuez comme ça.',
      time: 'Il y a 1 min',
      hasProgress: false
    },
    {
      icon: '📸',
      iconClass: 'pink',
      title: 'Mission du jour',
      text: "Ajoutez 3 nouvelles photos de votre établissement aujourd'hui",
      time: 'Il y a 2 min',
      hasProgress: false
    },
    {
      icon: '⭐',
      iconClass: 'blue',
      title: 'Nouvel avis reçu !',
      text: 'Marie L. : "Excellent service, très professionnel !" (5★)',
      time: 'Il y a 5 min',
      hasProgress: false
    },
    {
      icon: '✅',
      iconClass: 'green',
      title: 'Mission accomplie',
      badge: '+10 pts',
      text: 'Vous avez répondu à tous vos avis en moins de 24h',
      time: 'Il y a 12 min',
      hasProgress: false
    },
    {
      icon: '🎯',
      iconClass: 'orange',
      title: 'Objectif de la semaine',
      text: 'Publiez 2 posts Google cette semaine pour débloquer "Expert Local"',
      time: 'Il y a 15 min',
      hasProgress: false
    }
  ];

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;
    const interval = 2000;

    const addNotification = () => {
      if (currentIndex >= allNotifications.length) {
        if (currentIndex >= 4) {
          setShowScrollHint(true);
        }
        
        setTimeout(() => {
          setNotifications([]);
          setShowScrollHint(false);
          currentIndex = 0;
          addNotification();
        }, 3000);
        return;
      }

      setNotifications(prev => [...prev, allNotifications[currentIndex]]);
      
      if (currentIndex >= 3) {
        setShowScrollHint(true);
      }
      
      currentIndex++;
      timeoutId = setTimeout(addNotification, interval);
    };

    addNotification();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setTimeout(() => {
        containerRef.current!.scrollTop = containerRef.current!.scrollHeight;
      }, 100);
    }
  }, [notifications]);

  const renderNotification = (notif: any, index: number) => (
    <div key={index} className="gamif-notification-card">
      <div className={`gamif-notification-icon ${notif.iconClass}`}>
        {notif.icon}
      </div>
      <div className="gamif-notification-content">
        <div className="gamif-notification-title">
          {notif.title}
          {notif.badge && <span className="gamif-notification-badge">{notif.badge}</span>}
        </div>
        <div className="gamif-notification-text">{notif.text}</div>
        <div className="gamif-notification-time">{notif.time}</div>
        {notif.hasProgress && (
          <div className="gamif-progress-container">
            <div className="gamif-progress-label">
              <span>Progression</span>
              <span>{notif.progress}%</span>
            </div>
            <div className="gamif-progress-bar">
              <div className="gamif-progress-fill" style={{ width: `${notif.progress}%` }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="gamif-iphone-container">
      <div className="gamif-iphone-notch"></div>
      <div className="gamif-iphone-camera"></div>
      
      <div className="gamif-iphone-screen">
        <div className="gamif-status-bar">
          <div className="gamif-time">12:34</div>
          <div className="gamif-status-icons">
            <span className="gamif-status-icon">📶</span>
            <span className="gamif-status-icon">📱</span>
            <span className="gamif-status-icon">🔋</span>
          </div>
        </div>

        <div className="gamif-app-header">
          <div className="gamif-app-title">
            <span>🎮</span>
            TakeFive Assistant
          </div>
          <div className="gamif-app-subtitle">Vos missions & progression</div>
        </div>

        <div className="gamif-notifications-container" ref={containerRef}>
          {notifications.map((notif, index) => renderNotification(notif, index))}
        </div>

        {showScrollHint && (
          <div className="gamif-scroll-hint">↓ Scrollez ↓</div>
        )}
      </div>
    </div>
  );
};
