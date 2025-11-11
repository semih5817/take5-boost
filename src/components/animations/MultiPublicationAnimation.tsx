import { useState, useEffect } from 'react';
import tastyCrustyPhoto from '@/assets/tasty-crusty-photo.jpg';
import tastyCrustyFlyer from '@/assets/tasty-crusty-flyer.png';
import take5Logo from '@/assets/take5-logo.png';

export const MultiPublicationAnimation = () => {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500),  // Message WhatsApp
      setTimeout(() => setStep(2), 3000),  // Photo apparaît
      setTimeout(() => setStep(3), 4500),  // Transformation
      setTimeout(() => setStep(4), 6000),  // Flyer généré
      setTimeout(() => setStep(5), 7500),  // Publications
      setTimeout(() => setStep(0), 10000), // Reset
    ];
    return () => timers.forEach(clearTimeout);
  }, [step === 0]);

  useEffect(() => {
    if (step === 5 && counter < 30) {
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

      {/* Phone 2 - Multi-Platform Publication */}
      <div
        className="absolute transition-all duration-1000 ease-out"
        style={{
          right: step >= 5 ? '8%' : '120%',
          top: '50%',
          transform: 'translateY(-50%) perspective(1000px) rotateY(15deg)',
          opacity: step >= 5 ? 1 : 0
        }}
      >
        <div className="w-[280px] h-[560px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[40px] border-8 border-black shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-10" />
          
          <div className="absolute top-10 left-2 right-2 bottom-2 bg-slate-50 rounded-[32px] overflow-hidden p-5">
            {/* Header */}
            <div className="text-center mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                📤 Publications envoyées
              </h3>
              <p className="text-sm text-gray-600">
                Votre flyer a été publié sur :
              </p>
            </div>

            {/* Platform Cards */}
            <div className="space-y-3">
              {/* Instagram */}
              <div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm animate-in slide-in-from-right-4 duration-500">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center text-white text-xl">
                  📷
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-900">Instagram</div>
                  <div className="text-xs text-green-600">✓ Publié</div>
                </div>
              </div>

              {/* Google Business */}
              <div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm animate-in slide-in-from-right-4 duration-500 delay-100">
                <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-900">Google Business</div>
                  <div className="text-xs text-green-600">✓ Publié</div>
                </div>
              </div>

              {/* Facebook */}
              <div className="bg-white rounded-xl p-3 flex items-center gap-3 shadow-sm animate-in slide-in-from-right-4 duration-500 delay-200">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                  f
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-900">Facebook</div>
                  <div className="text-xs text-green-600">✓ Publié</div>
                </div>
              </div>
            </div>

            {/* Success Badge */}
            <div className="mt-5 bg-green-500 text-white p-3 rounded-xl text-center text-sm font-bold shadow-lg">
              ✅ 3 publications réussies
            </div>
          </div>
        </div>
      </div>

      {/* Time Counter */}
      {step === 5 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-green-500 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg animate-in zoom-in duration-500 flex items-center gap-2">
          <span>⚡</span>
          <span>Publié en {counter} secondes</span>
        </div>
      )}
    </div>
  );
};
