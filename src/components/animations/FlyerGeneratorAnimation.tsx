import React, { useState, useEffect } from 'react';

const FlyerGeneratorAnimation = () => {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    // Animation cycle: 8 seconds total
    const timers = [
      setTimeout(() => setStep(1), 1500),  // Show WhatsApp message
      setTimeout(() => setStep(2), 3000),  // Generate flyer
      setTimeout(() => setStep(3), 4500),  // Show publication
      setTimeout(() => setStep(4), 6000),  // Show counter
      setTimeout(() => setStep(0), 8500),  // Reset
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
    <div className="flyer-generator-animation" style={{
      padding: '40px 20px',
      position: 'relative',
      minHeight: '550px',
      overflow: 'hidden'
    }}>
      {/* Phone 1 - WhatsApp Input */}
      <div style={{
        position: 'absolute',
        left: step >= 0 ? '8%' : '-100%',
        top: '50%',
        transform: `translateY(-50%) perspective(1000px) rotateY(-15deg) ${step >= 2 ? 'scale(0.85)' : 'scale(1)'}`,
        transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: step >= 2 ? 0.5 : 1
      }}>
        <div style={{
          width: '280px',
          height: '560px',
          background: 'linear-gradient(145deg, #1e1e1e, #2d2d2d)',
          borderRadius: '40px',
          border: '8px solid #000',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Notch */}
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
          
          {/* Screen */}
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
            {/* WhatsApp Header */}
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
            
            {/* Photo Message */}
            <div style={{
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '12px'
            }}>
              {/* Photo */}
              {step >= 0 && (
                <div style={{
                  background: '#DCF8C6',
                  borderRadius: '15px 15px 0 15px',
                  padding: '8px',
                  maxWidth: '80%',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  animation: 'slideUp 0.6s ease-out'
                }}>
                  <div style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '80px',
                    marginBottom: '8px'
                  }}>
                    🍕
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
              
              {/* Text Message */}
              {step >= 0 && (
                <div style={{
                  background: '#DCF8C6',
                  borderRadius: '15px 15px 0 15px',
                  padding: '12px 16px',
                  maxWidth: '80%',
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
            
            {/* Processing indicator */}
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
                    <span style={{ fontSize: '14px', color: '#666' }}>Création du flyer...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Generated Flyer */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) scale(${step >= 2 ? 1 : 0}) perspective(1000px) rotateY(${step >= 3 ? '0deg' : '90deg'})`,
        transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: step >= 2 ? 1 : 0,
        zIndex: step >= 2 ? 5 : 0
      }}>
        <div style={{
          width: '300px',
          height: '300px',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Flyer Content */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'white',
            position: 'relative'
          }}>
            {/* Logo */}
            <div style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}>
              🍕
            </div>

            {/* Main Content */}
            <div style={{
              marginTop: '80px'
            }}>
              <h2 style={{
                margin: '0 0 12px 0',
                fontSize: '28px',
                fontWeight: 'bold',
                lineHeight: '1.2',
                textShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}>
                NOUVELLE<br/>
                PIZZA TRUFFE
              </h2>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '12px 16px',
                marginBottom: '12px'
              }}>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  marginBottom: '4px'
                }}>
                  12,90€
                </div>
                <div style={{
                  fontSize: '14px',
                  opacity: 0.9
                }}>
                  Disponible dès vendredi
                </div>
              </div>
            </div>

            {/* QR Code */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end'
            }}>
              <div style={{
                fontSize: '11px',
                opacity: 0.9,
                maxWidth: '150px'
              }}>
                Scannez pour réserver ou commander en ligne
              </div>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'white',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                color: '#333',
                fontWeight: 'bold'
              }}>
                QR
              </div>
            </div>
          </div>

          {/* AI Badge */}
          {step >= 2 && step < 3 && (
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#27ae60',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(39, 174, 96, 0.4)',
              animation: 'popIn 0.5s ease-out',
              whiteSpace: 'nowrap'
            }}>
              ✨ Généré par IA
            </div>
          )}
        </div>
      </div>

      {/* Phone 2 - Social Media Publication */}
      <div style={{
        position: 'absolute',
        right: step >= 3 ? '8%' : '120%',
        top: '50%',
        transform: 'translateY(-50%) perspective(1000px) rotateY(15deg)',
        transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: step >= 3 ? 1 : 0
      }}>
        <div style={{
          width: '280px',
          height: '560px',
          background: 'linear-gradient(145deg, #1e1e1e, #2d2d2d)',
          borderRadius: '40px',
          border: '8px solid #000',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Notch */}
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
          
          {/* Screen - Instagram Post */}
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
            {/* Instagram Header */}
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
            
            {/* Posted Flyer */}
            <div style={{
              width: '100%',
              aspectRatio: '1',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              position: 'relative',
              backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzY2N2VlYSIvPjwvc3ZnPg==)',
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                textAlign: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)'
              }}>
                🍕<br/>
                PIZZA TRUFFE<br/>
                12,90€
              </div>
            </div>
            
            {/* Instagram Actions */}
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
            
            {/* Caption */}
            <div style={{
              padding: '0 16px 12px',
              fontSize: '13px'
            }}>
              <span style={{ fontWeight: '600' }}>votre_restaurant</span>{' '}
              <span>Nouvelle pizza truffe 🍕 à 12,90€ ! #pizza #truffe</span>
            </div>

            {/* Published Badge */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(39, 174, 96, 0.95)',
              color: 'white',
              padding: '20px 30px',
              borderRadius: '15px',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0 10px 30px rgba(39, 174, 96, 0.4)',
              animation: step === 3 ? 'popIn 0.5s ease-out' : 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: '32px' }}>✅</span>
              <span>Publié sur Instagram</span>
            </div>
          </div>
        </div>
      </div>

      {/* Time Counter */}
      {step === 4 && (
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(39, 174, 96, 0.95)',
          color: 'white',
          padding: '15px 40px',
          borderRadius: '50px',
          fontSize: '22px',
          fontWeight: 'bold',
          boxShadow: '0 10px 30px rgba(39, 174, 96, 0.4)',
          animation: 'popIn 0.5s ease-out',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
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
      `}</style>
    </div>
  );
};

// Benefits Component
export const FlyerGeneratorBenefits = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      marginTop: '30px'
    }}>
      <div style={{
        background: 'white',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>⚡</div>
        <h3 style={{
          margin: '0 0 10px 0',
          fontSize: '18px',
          fontWeight: '600',
          color: '#2c3e50'
        }}>
          Design pro instantané
        </h3>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#7f8c8d',
          lineHeight: '1.6'
        }}>
          De 20 minutes sur Canva à 15 secondes. L'IA crée un flyer professionnel
        </p>
      </div>

      <div style={{
        background: 'white',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎨</div>
        <h3 style={{
          margin: '0 0 10px 0',
          fontSize: '18px',
          fontWeight: '600',
          color: '#2c3e50'
        }}>
          Respect charte graphique
        </h3>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#7f8c8d',
          lineHeight: '1.6'
        }}>
          Votre logo, couleurs et style appliqués automatiquement
        </p>
      </div>

      <div style={{
        background: 'white',
        padding: '25px',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>📱</div>
        <h3 style={{
          margin: '0 0 10px 0',
          fontSize: '18px',
          fontWeight: '600',
          color: '#2c3e50'
        }}>
          Publication directe
        </h3>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#7f8c8d',
          lineHeight: '1.6'
        }}>
          Flyer créé et publié sur Instagram/Facebook en un seul message
        </p>
      </div>
    </div>
  );
};

export default FlyerGeneratorAnimation;
