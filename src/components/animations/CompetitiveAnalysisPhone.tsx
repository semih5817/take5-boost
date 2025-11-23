import { useState, useEffect } from 'react';

const slidesData = [
  {
    icon: '⭐',
    label: "Nombre d'avis",
    value: '156',
    youValue: '156',
    competitorValue: '89',
    youClass: 'you',
    competitorClass: 'competitor',
    actionTitle: '💡 Pour rester #1',
    actions: ['Maintenez 2 avis/semaine', 'Répondez en moins de 24h']
  },
  {
    icon: '🌟',
    label: 'Note moyenne',
    value: '4.3★',
    youValue: '4.3★',
    competitorValue: '4.6★',
    youClass: 'you',
    competitorClass: 'competitor',
    actionTitle: '⚠️ À améliorer',
    actions: ['Résolvez les avis négatifs', "Améliorez l'expérience client"]
  },
  {
    icon: '📱',
    label: 'Posts / mois',
    value: '2',
    youValue: '2',
    competitorValue: '6',
    youClass: 'competitor',
    competitorClass: 'you',
    actionTitle: '🚀 Action rapide',
    actions: ['Publiez 2 posts cette semaine', 'Partagez vos nouveautés']
  },
  {
    icon: '📸',
    label: 'Photos récentes',
    value: '8',
    youValue: '8',
    competitorValue: '5',
    youClass: 'you',
    competitorClass: 'competitor',
    actionTitle: '✅ Excellent !',
    actions: ['Continuez à ajouter des photos', 'Montrez vos réalisations']
  }
];

export const CompetitiveAnalysisPhone = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;
  const slideInterval = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="comp-iphone-container">
      <div className="comp-iphone-notch"></div>
      <div className="comp-iphone-camera"></div>
      
      <div className="comp-iphone-screen">
        <div className="comp-status-bar">
          <div className="comp-time">12:34</div>
          <div className="comp-status-icons">
            <span className="comp-status-icon">📶</span>
            <span className="comp-status-icon">📱</span>
            <span className="comp-status-icon">🔋</span>
          </div>
        </div>

        <div className="comp-app-header">
          <div className="comp-app-title">📊 Comparaison</div>
          <div className="comp-app-subtitle">Analyse concurrentielle</div>
        </div>

        <div className="comp-slides-container">
          <div 
            className="comp-slides-wrapper" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slidesData.map((slide, index) => (
              <div key={index} className="comp-slide">
                <div className="comp-metric-card">
                  <div className="comp-metric-icon">{slide.icon}</div>
                  <div className="comp-metric-label">{slide.label}</div>
                  <div className="comp-metric-value">{slide.value}</div>
                  
                  <div className="comp-metric-comparison">
                    <div className="comp-comparison-item">
                      <div className="comp-comparison-label">Vous</div>
                      <div className={`comp-comparison-value ${slide.youClass}`}>
                        {slide.youValue}
                      </div>
                    </div>
                    <div className="comp-comparison-item">
                      <div className="comp-comparison-label">Moyenne locale</div>
                      <div className={`comp-comparison-value ${slide.competitorClass}`}>
                        {slide.competitorValue}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="comp-action-section">
                  <div className="comp-action-title">{slide.actionTitle}</div>
                  {slide.actions.map((action, i) => (
                    <div key={i} className="comp-action-item">{action}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="comp-progress-indicator">
          {slidesData.map((_, index) => (
            <div 
              key={index}
              className={`comp-progress-dot ${index === currentSlide ? 'active' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
