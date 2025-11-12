import { useState, useEffect } from 'react';
import tastyCrustyPhoto from '@/assets/tasty-crusty-photo.jpg';
import tastyCrustyFlyer from '@/assets/tasty-crusty-flyer.png';
import take5Logo from '@/assets/take5-logo.png';

export const MultiPublicationAnimation = () => {
  const [step, setStep] = useState(0);
  const [swipeIndex, setSwipeIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  const posts = [
    {
      platform: 'Instagram',
      icon: '📷',
      color: 'linear-gradient(45deg, #f09433, #dc2743, #bc1888)',
      caption: 'Nouveau Tasty Crousty à 9,90€ — dispo samedi ! #streetfood #nancy #bonplan'
    },
    {
      platform: 'Google',
      icon: 'G',
      color: '#4285F4',
      caption: 'Promo week-end : Tasty Crousty à 9,90€. Passez nous voir samedi !'
    },
    {
      platform: 'Facebook',
      icon: 'f',
      color: '#1877F2',
      caption: 'On lance le Tasty Crousty ce samedi, 9,90€ seulement. À très vite !'
    }
  ];

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500),  // Message WhatsApp
      setTimeout(() => setStep(2), 3000),  // Photo apparaît
      setTimeout(() => setStep(3), 4500),  // Transformation
      setTimeout(() => setStep(4), 6000),  // Flyer généré
      setTimeout(() => setStep(5), 7500),  // Publications (swipe commence)
      setTimeout(() => setStep(0), 12000), // Reset
    ];
    return () => timers.forEach(clearTimeout);
  }, [step === 0]);

  // Swipe entre les 3 posts
  useEffect(() => {
    if (step === 5) {
      const interval = setInterval(() => {
        setSwipeIndex(prev => (prev + 1) % 3);
      }, 1500);
      return () => clearInterval(interval);
    } else {
      setSwipeIndex(0);
    }
  }, [step]);

  // Compteur
  useEffect(() => {
    if (step === 5 && counter < 27) {
      const timer = setTimeout(() => setCounter(prev => prev + 1), 100);
      return () => clearTimeout(timer);
    } else if (step === 0) {
      setCounter(0);
    }
  }, [step, counter]);

  return (
    <div className="relative p-10 rounded-3xl bg-gradient-to-br from-background to-muted min-h-[600px] overflow-hidden">
      {/* Phone 1 - WhatsApp Input */}
      <div
        className="absolute transition-all duration-1000 ease-out"
        style={{
          left: step >= 0 ? '8%' : '-100%',
          top: '50%',
          transform: `translateY(-50%) perspective(1000px) rotateY(-15deg) ${step >= 3 ? 'scale(0.85) translateX(-50px)' : 'scale(1)'}`,
          opacity: step >= 3 ? 0.3 : 1,
          filter: step >= 3 ? 'blur(2px)' : 'none'
        }}
      >
        <div className="w-[280px] h-[560px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[40px] border-8 border-black shadow-2xl relative overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-10" />
          
          {/* Screen */}
          <div className="absolute top-10 left-2 right-2 bottom-2 bg-[#ECE5DD] rounded-[32px] overflow-hidden">
            {/* WhatsApp Header */}
            <div className="bg-[#128C7E] p-4 text-white flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-2xl">
                🤖
              </div>
              <span className="font-bold">TakeFive Assistant</span>
            </div>
            
            {/* Messages */}
            <div className="p-5 flex flex-col items-end gap-3">
              {/* Text Message */}
              {step >= 1 && (
                <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm p-3 max-w-[85%] shadow-sm animate-in slide-in-from-bottom-4 duration-500">
                  <p className="text-sm text-black leading-relaxed">
                    Publie sur Insta et Google : nouveau Tasty Crousty à 9,90€, disponible samedi.
                  </p>
                  <div className="text-xs text-gray-600 mt-1 text-right">14:32 ✓✓</div>
                </div>
              )}
              
              {/* Photo Message */}
              {step >= 2 && (
                <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm p-2 max-w-[85%] shadow-sm animate-in slide-in-from-bottom-4 duration-500">
                  <div className="w-[200px] h-[200px] rounded-xl overflow-hidden mb-2">
                    <img 
                      src={tastyCrustyPhoto}
                      alt="Tasty Crusty"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-xs text-gray-600 text-right">14:32 ✓✓</div>
                </div>
              )}
            </div>
            
            {/* Processing indicator */}
            {step >= 2 && step < 4 && (
              <div className="px-5 animate-in fade-in duration-500">
                <div className="bg-white rounded-2xl p-3 shadow-sm inline-block">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-600 animate-pulse" />
                    <span className="text-sm text-gray-600">TakeFive génère votre flyer...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Transformation Effect */}
      {step === 3 && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl animate-pulse">
          ✨
        </div>
      )}

      {/* Generated Flyer */}
      <div
        className="absolute left-1/2 top-1/2 transition-all duration-1000 ease-out"
        style={{
          transform: `translate(-50%, -50%) scale(${step >= 4 ? 1 : 0.3}) rotateY(${step >= 4 ? '0deg' : '180deg'})`,
          opacity: step >= 4 && step < 5 ? 1 : 0,
          zIndex: step >= 4 && step < 5 ? 10 : 0
        }}
      >
        <div className="w-[350px] h-[350px] rounded-3xl shadow-2xl overflow-hidden relative bg-white">
          <img 
            src={tastyCrustyFlyer}
            alt="Flyer Tasty Crusty"
            className="w-full h-full object-cover"
          />

          {/* Shine effect */}
          {step === 4 && (
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-shine" 
                 style={{ backgroundSize: '200% 100%' }} />
          )}

          {/* AI Badge */}
          {step === 4 && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg animate-in zoom-in duration-500">
              ✨ Généré par IA
            </div>
          )}
        </div>
      </div>

      {/* Phone 2 - Swipe entre posts */}
      <div
        className="absolute transition-all duration-1000 ease-out"
        style={{
          right: step >= 5 ? '8%' : '120%',
          top: '50%',
          transform: 'translateY(-50%) perspective(1000px) rotateY(15deg)',
          opacity: step >= 5 ? 1 : 0
        }}
      >
        <div className="w-[300px] h-[600px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[40px] border-8 border-black shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-10" />
          
          <div className="absolute top-10 left-2 right-2 bottom-2 bg-slate-50 rounded-[32px] overflow-hidden">
            {/* Post Header */}
            <div className="p-3 border-b border-gray-200 bg-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-lg font-bold"
                  style={{ background: posts[swipeIndex].color }}
                >
                  {posts[swipeIndex].icon}
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">
                    {posts[swipeIndex].platform}
                  </div>
                  <div className="text-xs text-green-600">
                    ✓ Publié
                  </div>
                </div>
              </div>
              <div className="text-xl text-gray-400">⋮</div>
            </div>
            
            {/* Flyer Image */}
            <div className="w-full aspect-square relative overflow-hidden">
              <img 
                src={tastyCrustyFlyer}
                alt="Post"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Caption */}
            <div className="p-4 bg-white">
              <div className="flex gap-4 mb-3 text-xl">
                <span>❤️</span>
                <span>💬</span>
                <span>📤</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>votre_restaurant</strong> {posts[swipeIndex].caption}
              </p>
            </div>

            {/* Swipe Indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {[0, 1, 2].map(i => (
                <div 
                  key={i}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: swipeIndex === i ? '24px' : '8px',
                    backgroundColor: swipeIndex === i ? '#10b981' : '#d1d5db'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Time Counter - EN BAS DROITE */}
      {step === 5 && (
        <div className="absolute bottom-8 right-10 bg-green-500 text-white px-6 py-3 rounded-full text-base font-bold shadow-lg animate-in zoom-in duration-500 flex items-center gap-2">
          <span>⚡</span>
          <span>Publié en {counter} secondes</span>
        </div>
      )}
    </div>
  );
};
