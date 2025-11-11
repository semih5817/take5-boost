import { useState, useEffect } from 'react';

interface Alert {
  id: number;
  platform: string;
  icon: string;
  iconBg: string;
  rating: string;
  preview: string;
  time: string;
}

export const ReviewAlertsAnimation = () => {
  const [notifications, setNotifications] = useState<Alert[]>([]);
  const [step, setStep] = useState(0);

  const alertsData: Alert[] = [
    {
      id: 1,
      platform: 'Google Business',
      icon: 'G',
      iconBg: '#4285F4',
      rating: '2★',
      preview: 'Service très lent aujourd\'hui...',
      time: 'Il y a 2 min'
    },
    {
      id: 2,
      platform: 'Facebook',
      icon: 'f',
      iconBg: '#1877F2',
      rating: '1★',
      preview: 'Déçu de la qualité...',
      time: 'Il y a 5 min'
    },
    {
      id: 3,
      platform: 'Trustpilot',
      icon: '⭐',
      iconBg: '#00b67a',
      rating: '2★',
      preview: 'Commande froide à l\'arrivée',
      time: 'Il y a 8 min'
    }
  ];

  useEffect(() => {
    const timers = [
      setTimeout(() => {
        setNotifications([alertsData[0]]);
        setStep(1);
      }, 1000),
      setTimeout(() => {
        setNotifications(prev => [...prev, alertsData[1]]);
        setStep(2);
      }, 2500),
      setTimeout(() => {
        setNotifications(prev => [...prev, alertsData[2]]);
        setStep(3);
      }, 4000),
      setTimeout(() => {
        setStep(0);
        setNotifications([]);
      }, 7000)
    ];

    return () => timers.forEach(clearTimeout);
  }, [step === 0]);

  return (
    <div className="p-10 rounded-3xl bg-gradient-to-br from-background to-muted flex items-center justify-center min-h-[600px] relative">
      {/* Smartphone */}
      <div className="w-[300px] h-[600px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[40px] border-8 border-black shadow-2xl relative overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-20" />

        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-black/50 backdrop-blur-sm flex items-center justify-between px-5 text-xs text-white z-10">
          <span>14:32</span>
          <div className="flex gap-1">
            <span>📶</span>
            <span>📡</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Screen */}
        <div className="absolute top-12 left-2 right-2 bottom-2 bg-slate-900 rounded-[32px] overflow-hidden p-5">
          {/* Lock Screen Info */}
          <div className="text-center text-white mb-8">
            <div className="text-5xl font-extralight mb-1">14:32</div>
            <div className="text-sm text-slate-400">Lundi 11 novembre</div>
          </div>

          {/* Notifications Area */}
          <div className="space-y-3">
            {notifications.map((notif, index) => (
              <div
                key={notif.id}
                className="bg-red-500/15 backdrop-blur-xl border-2 border-red-500 rounded-2xl p-3.5 shadow-lg animate-in slide-in-from-top-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-2">
                  {/* TakeFive Badge */}
                  <div className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center text-lg shrink-0">
                    🤖
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-white">TakeFive Alert</div>
                    <div className="text-[10px] text-slate-400">{notif.time}</div>
                  </div>

                  {/* Urgence Badge */}
                  <div className="bg-red-500 text-white px-2 py-1 rounded-lg text-[10px] font-bold shrink-0">
                    ⚠️ URGENT
                  </div>
                </div>

                {/* Content */}
                <div className="pl-11">
                  <div className="text-xs font-semibold text-white mb-1 flex items-center gap-2">
                    <div 
                      className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                      style={{ backgroundColor: notif.iconBg }}
                    >
                      {notif.icon}
                    </div>
                    <span>Nouvel avis {notif.rating} sur {notif.platform}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight">
                    "{notif.preview}"
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          {step >= 3 && (
            <div className="absolute bottom-8 left-5 right-5 bg-green-500/15 backdrop-blur-xl border-2 border-green-500 rounded-2xl p-4 text-center animate-in fade-in duration-500">
              <div className="text-xs font-semibold text-green-500 mb-1.5">
                ✅ TakeFive surveille pour vous
              </div>
              <div className="text-[11px] text-slate-400 leading-tight">
                Vous êtes prévenu en quelques minutes pour répondre avant qu'il ne soit trop tard
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
