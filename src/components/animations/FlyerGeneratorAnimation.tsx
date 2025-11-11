import React, { useState, useEffect } from 'react';
import pizzaPhoto from '@/assets/pizza-truffe-photo.png';
import pizzaFlyer from '@/assets/pizza-truffe-flyer.png';

const FlyerGeneratorAnimation = () => {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1500),
      setTimeout(() => setStep(2), 3000),
      setTimeout(() => setStep(3), 3500),
      setTimeout(() => setStep(4), 4200),
      setTimeout(() => setStep(0), 7500),
    ];
    
    return () => timers.forEach(clearTimeout);
  }, [step === 0]);

  useEffect(() => {
    if (step === 4 && counter < 15) {
      const timer = setTimeout(() => {
        setCounter(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else if (step === 0) {
      setCounter(0);
    }
  }, [step, counter]);

  return (
    <div style={{
      padding: '30px 20px',
      background: 'transparent',
      borderRadius: '20px',
      position: 'relative',
      minHeight: '420px',
      overflow: 'hidden'
    }}>
      {/* Phone 1 - WhatsApp Input with REAL PHOTO */}
      <div style={{
        position: 'absolute',
        left: step >= 0 ? '8%' : '-100%',
        top: '50%',
        transform: `translateY(-50%) perspective(1000px) rotateY(-15deg) ${step >= 2 ? 'scale(0.75) translateX(-50px)' : 'scale(0.85)'}`,
        transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: step >= 2 ? 0.3 : 1,
        filter: step >= 2 ? 'blur(2px)' : 'none'
      }}>
        <div style={{
          width: '220px',
          height: '440px',
          background: 'linear-gradient(145deg, #1e1e1e, #2d2d2d)',
          borderRadius: '40px',
          border: '8px solid #000',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '150px',
            height: '30px',
            background: '#000',
            borderRadius: '0 0 20px 20px',
            zIndex: 10
          }}></div>
          
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '8px',
            right: '8px',
            bottom: '8px',
            background: '#ECE5DD',
            borderRadius: '32px',
            overflow: 'hidden'
          }}>
            <div style={{
              background: '#075E54',
              padding: '15px',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}>🤖</div>
              <span>TakeFive Flyer</span>
            </div>
            
            <div style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '12px'
            }}>
              {step >= 0 && (
                <div style={{
                  background: '#DCF8C6',
                  borderRadius: '15px 15px 0 15px',
                  padding: '8px',
                  maxWidth: '85%',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  animation: 'slideUp 0.6s ease-out'
                }}>
                  <div style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    marginBottom: '8px',
                    background: '#f5f5f5'
                  }}>
                    <img 
                      src={pizzaPhoto}
                      alt="Pizza truffe"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{
                    fontSize: '10px',
                    color: '#667',
                    textAlign: 'right'
                  }}>
                    14:32 ✓✓
                  </div>
                </div>
              )}
              
              {step >= 0 && (
                <div style={{
                  background: '#DCF8C6',
                  borderRadius: '15px 15px 0 15px',
                  padding: '12px 16px',
                  maxWidth: '85%',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  animation: 'slideUp 0.6s ease-out 0.2s both'
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: '14px',
                    lineHeight: '1.4',
                    color: '#000'
                  }}>
                    Crée un flyer : pizza truffe à 12,90€ disponible vendredi 🔥
                  </p>
                  <div style={{
                    fontSize: '10px',
                    color: '#667',
                    marginTop: '4px',
                    textAlign: 'right'
                  }}>
                    14:32 ✓✓
                  </div>
                </div>
              )}
            </div>
            
            {step >= 1 && step < 2 && (
              <div style={{
                padding: '20px',
                display: 'flex',
                justifyContent: 'flex-start',
                animation: 'fadeIn 0.5s ease-in'
              }}>
                <div style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '12px 16px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '5px',
                    alignItems: 'center'
                  }}>
                    <div className="dot-pulse"></div>
                    <span style={{ fontSize: '14px', color: '#666' }}>Génération en cours...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>


      <div style={{
        position: 'absolute',
        right: step >= 4 ? '8%' : '120%',
        top: '50%',
        transform: 'translateY(-50%) perspective(1000px) rotateY(15deg) scale(0.85)',
        transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: step >= 4 ? 1 : 0
      }}>
        <div style={{
          width: '220px',
          height: '440px',
          background: 'linear-gradient(145deg, #1e1e1e, #2d2d2d)',
          borderRadius: '40px',
          border: '8px solid #000',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '150px',
            height: '30px',
            background: '#000',
            borderRadius: '0 0 20px 20px',
            zIndex: 10
          }}></div>
          
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '8px',
            right: '8px',
            bottom: '8px',
            background: 'white',
            borderRadius: '32px',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '12px 16px',
              borderBottom: '1px solid #dbdbdb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                }}></div>
                <span style={{ fontWeight: '600', fontSize: '14px' }}>votre_restaurant</span>
              </div>
              <div style={{ fontSize: '24px' }}>⋮</div>
            </div>
            
            <div style={{
              width: '100%',
              aspectRatio: '1',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img 
                src={pizzaFlyer}
                alt="Flyer publié"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <div style={{
              padding: '12px 16px',
              display: 'flex',
              gap: '15px',
              fontSize: '24px'
            }}>
              <span>❤️</span>
              <span>💬</span>
              <span>📤</span>
            </div>
            
            <div style={{
              padding: '0 16px 12px',
              fontSize: '13px'
            }}>
              <span style={{ fontWeight: '600' }}>votre_restaurant</span>{' '}
              <span>Nouvelle pizza truffe 🍕 à 12,90€ ! Disponible dès vendredi 🔥 #pizza #truffe</span>
            </div>
          </div>
        </div>
        
        {/* Notification Instagram en haut à droite */}
        {step === 4 && (
          <div style={{
            position: 'absolute',
            top: '-10px',
            right: '-120px',
            background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '25px',
            fontSize: '13px',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(220, 39, 67, 0.4)',
            animation: 'slideInRight 0.5s ease-out',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            whiteSpace: 'nowrap',
            zIndex: 20
          }}>
            <span style={{ fontSize: '16px' }}>✓</span>
            <span>Publié sur Instagram</span>
          </div>
        )}
      </div>

      {step === 4 && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(39, 174, 96, 0.95)',
          color: 'white',
          padding: '10px 30px',
          borderRadius: '50px',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 10px 30px rgba(39, 174, 96, 0.4)',
          animation: 'popIn 0.5s ease-out',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          whiteSpace: 'nowrap'
        }}>
          <span>⚡</span>
          <span>Créé et publié en {counter} secondes</span>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes popIn {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          60% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }


        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }

        .dot-pulse {
          position: relative;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #666;
          animation: dotPulse 1.4s infinite ease-in-out;
        }

        .dot-pulse::before,
        .dot-pulse::after {
          content: '';
          display: inline-block;
          position: absolute;
          top: 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #666;
        }

        .dot-pulse::before {
          left: -12px;
          animation: dotPulse 1.4s infinite ease-in-out;
          animation-delay: -0.32s;
        }

        .dot-pulse::after {
          left: 12px;
          animation: dotPulse 1.4s infinite ease-in-out;
          animation-delay: 0.32s;
        }

        @keyframes dotPulse {
          0%, 80%, 100% {
            opacity: 0.3;
          }
          40% {
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default FlyerGeneratorAnimation;
