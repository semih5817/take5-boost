import { useState, useEffect } from 'react';

interface Platform {
  id: string;
  icon: string;
  name: string;
  color: string;
  logo: string;
}

interface Scenario {
  type: 'positive' | 'negative';
  platform: string;
  text: string;
  action: string;
  actionIcon: string;
}

interface Ping {
  id: number;
  type: 'positive' | 'negative';
}

const platforms: Platform[] = [
  { id: 'google', icon: '🌐', name: 'Google', color: '#4285f4', logo: 'emoji' },
  { id: 'facebook', icon: 'f', name: 'Facebook', color: '#1877f2', logo: 'facebook' },
  { id: 'trustpilot', icon: '★', name: 'Trustpilot', color: '#00b67a', logo: 'trustpilot' },
  { id: 'yelp', icon: 'yelp', name: 'Yelp', color: '#d32323', logo: 'yelp' }
];

const scenarios: Scenario[] = [
  {
    type: 'positive',
    platform: 'google',
    text: '⭐⭐⭐⭐⭐ "Excellent service, je recommande !"',
    action: '✅ Réponse IA générée en 2 secondes',
    actionIcon: '🤖'
  },
  {
    type: 'negative',
    platform: 'facebook',
    text: '⭐⭐ "Déçu du service, temps d\'attente trop long"',
    action: '🚨 Alerte WhatsApp envoyée immédiatement',
    actionIcon: '📱'
  },
  {
    type: 'positive',
    platform: 'trustpilot',
    text: '⭐⭐⭐⭐⭐ "Très professionnel, rapide et efficace"',
    action: '✅ Réponse automatique envoyée',
    actionIcon: '⚡'
  },
  {
    type: 'negative',
    platform: 'yelp',
    text: '⭐⭐⭐ "Correct mais peut mieux faire"',
    action: '🚨 Notification prioritaire',
    actionIcon: '⚠️'
  }
];

export const RadarMultiPlatformPhone = () => {
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [activePlatform, setActivePlatform] = useState<string | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [pings, setPings] = useState<Ping[]>([]);
  const [stats, setStats] = useState({ monitored: 156, missed: 0, avgTime: '2min' });

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const runScenario = () => {
      if (currentIndex >= scenarios.length) {
        setTimeout(() => {
          currentIndex = 0;
          setShowNotification(false);
          setActivePlatform(null);
          runScenario();
        }, 2000);
        return;
      }

      const scenario = scenarios[currentIndex];
      
      setActivePlatform(scenario.platform);
      
      const pingId = Date.now();
      setPings(prev => [...prev, { id: pingId, type: scenario.type }]);
      
      setTimeout(() => {
        setPings(prev => prev.filter(p => p.id !== pingId));
      }, 1000);

      setTimeout(() => {
        setShowNotification(true);
        setActiveScenario(scenario);
        
        setStats(prev => ({
          monitored: prev.monitored + Math.floor(Math.random() * 3),
          missed: 0,
          avgTime: prev.avgTime
        }));
      }, 500);

      setTimeout(() => {
        setShowNotification(false);
        setActivePlatform(null);
      }, 3500);

      currentIndex++;
      timeoutId = setTimeout(runScenario, 4500);
    };

    runScenario();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="radar-iphone-container">
      <div className="radar-iphone-notch"></div>
      <div className="radar-iphone-camera"></div>
      
      <div className="radar-iphone-screen">
        {/* Status Bar */}
        <div className="radar-status-bar">
          <div className="radar-time">12:34</div>
          <div className="radar-status-icons">
            <span>📶</span>
            <span>📱</span>
            <span>🔋</span>
          </div>
        </div>

        {/* App Header */}
        <div className="radar-app-header">
          <div className="radar-header-content">
            <div className="radar-app-title">🎯 Radar Multi-Plateformes</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
            <div className="radar-status-badge">
              <span>⚡</span>
              Surveillance active
            </div>
          </div>
        </div>

        {/* Radar Container */}
        <div className="radar-container">
          {/* Radar circles */}
          <div className="radar-circles">
            <div className="radar-circle"></div>
            <div className="radar-circle"></div>
            <div className="radar-circle"></div>
          </div>

          {/* Radar sweep */}
          <div className="radar-sweep"></div>

          {/* Center logo */}
          <div className="radar-center-logo">
            <div style={{ fontSize: '10px', opacity: 0.8 }}>Take</div>
            <div className="radar-center-logo-text">5</div>
          </div>

          {/* Platform nodes */}
          {platforms.map((platform) => (
            <div 
              key={platform.id}
              data-platform={platform.id}
              className={`radar-platform-node ${
                activePlatform === platform.id 
                  ? activeScenario?.type === 'positive' 
                    ? 'active' 
                    : 'alert'
                  : ''
              }`}
            >
              <div className="radar-platform-icon">
                {platform.logo === 'facebook' ? 'f' : 
                 platform.logo === 'yelp' ? 'yelp' : 
                 platform.icon}
              </div>
              <div className="radar-platform-name">{platform.name}</div>
            </div>
          ))}

          {/* Pings */}
          {pings.map(ping => {
            const platformIndex = platforms.findIndex(p => p.id === activePlatform);
            const positions = [
              { top: '45px', left: '50%' },
              { top: '50%', right: '45px' },
              { bottom: '45px', left: '50%' },
              { top: '50%', left: '45px' }
            ];
            const pos = positions[platformIndex] || positions[0];
            
            return (
              <div
                key={ping.id}
                className={`radar-ping ${ping.type}`}
                style={{
                  ...pos,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            );
          })}
        </div>

        {/* Notification card */}
        {showNotification && activeScenario && (
          <div className={`radar-notification-card ${activeScenario.type}`}>
            <div className="radar-notification-header">
              <div className={`radar-notification-icon ${activeScenario.type}`}>
                {(() => {
                  const p = platforms.find(pl => pl.id === activeScenario.platform);
                  if (!p) return '';
                  if (p.logo === 'facebook') return 'f';
                  if (p.logo === 'yelp') return 'yelp';
                  return p.icon;
                })()}
              </div>
              <div className="radar-notification-title">
                <div className="radar-notification-platform">
                  {platforms.find(p => p.id === activeScenario.platform)?.name}
                </div>
                <div className="radar-notification-time">À l'instant</div>
              </div>
            </div>
            <div className="radar-notification-text">{activeScenario.text}</div>
            <div className="radar-notification-action">
              <span className="radar-action-icon">{activeScenario.actionIcon}</span>
              <span className="radar-action-text">{activeScenario.action}</span>
            </div>
          </div>
        )}

        {/* Stats footer */}
        <div className="radar-stats-footer">
          <div className="radar-stats-container">
            <div className="radar-stats-grid">
              <div className="radar-stat-item">
                <div className="radar-stat-value">{stats.monitored}</div>
                <div className="radar-stat-label">Surveillés</div>
              </div>
              <div className="radar-stat-item">
                <div className="radar-stat-value" style={{ color: '#10b981' }}>{stats.missed}</div>
                <div className="radar-stat-label">Manqués</div>
              </div>
              <div className="radar-stat-item">
                <div className="radar-stat-value">{stats.avgTime}</div>
                <div className="radar-stat-label">Temps moy.</div>
              </div>
            </div>
            <div className="radar-zero-missed">
              <span className="radar-fire-streak">🔥</span>
              Zéro avis manqué depuis 47 jours
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
