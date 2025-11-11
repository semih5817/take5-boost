import React, { useState, useEffect } from 'react';

const MultiPublicationAnimation = () => {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    // Animation loop: 5 seconds per cycle
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    if (step === 3 && counter < 30) {
      const timer = setInterval(() => {
        setCounter((prev) => Math.min(prev + 3, 30));
      }, 100);
      return () => clearInterval(timer);
    } else if (step === 0) {
      setCounter(0);
    }
  }, [step, counter]);

  return (
    <div className="multi-publication-animation" style={{
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      position: 'relative',
      minHeight: '500px'
    }}>
      {/* Phone 1 - WhatsApp Sender */}
      <div style={{
        position: 'absolute',
        left: step >= 0 ? '10%' : '-100%',
        top: '50%',
        transform: `translateY(-50%) perspective(1000px) rotateY(-15deg) ${step >= 1 ? 'scale(0.9)' : 'scale(1)'}`,
        transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: step >= 1 ? 0.5 : 1
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
            borderRadius: '0 0 20px 20px'
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
              <span>TakeFive Assistant</span>
            </div>
            
            {/* Message Bubble */}
            <div style={{
              padding: '20px',
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              <div style={{
                background: '#DCF8C6',
                borderRadius: '15px 15px 0 15px',
                padding: '12px 16px',
                maxWidth: '80%',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                animation: step === 0 ? 'slideUp 0.6s ease-out' : 'none'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: '14px',
                  lineHeight: '1.4',
                  color: '#000'
                }}>
                  Publie sur Insta et Google : nouvelle pizza truffe 🍕 à 12,90€ dispo ce week-end
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
            </div>
            
            {/* Processing indicator */}
            {step >= 1 && (
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
                    <span style={{ fontSize: '14px', color: '#666' }}>Publication en cours...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Phone 2 - Social Media Display */}
      <div style={{
        position: 'absolute',
        right: step >= 1 ? '10%' : '120%',
        top: '50%',
        transform: 'translateY(-50%) perspective(1000px) rotateY(15deg)',
        transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: step >= 1 ? 1 : 0
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
          
          {/* Screen with sliding social apps */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '8px',
            right: '8px',
            bottom: '8px',
            background: '#fff',
            borderRadius: '32px',
            overflow: 'hidden'
          }}>
            {/* Instagram View */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `translateX(${step === 1 ? '0%' : step > 1 ? '-100%' : '100%'})`,
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
              background: 'white'
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
              
              {/* Instagram Post Image */}
              <div style={{
                width: '100%',
                height: '300px',
                background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px'
              }}>
                🍕
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
                padding: '0 16px',
                fontSize: '13px'
              }}>
                <span style={{ fontWeight: '600' }}>votre_restaurant</span>{' '}
                <span>Nouvelle pizza truffe 🍕 à 12,90€ ! Disponible ce week-end 🔥 #pizza #foodlover #truffe</span>
              </div>
              
              {/* Published Checkmark */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(39, 174, 96, 0.95)',
                color: 'white',
                padding: '20px 30px',
                borderRadius: '15px',
                fontSize: '18px',
                fontWeight: 'bold',
                boxShadow: '0 10px 30px rgba(39, 174, 96, 0.4)',
                animation: step === 1 ? 'popIn 0.5s ease-out' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '24px' }}>✅</span> Publié sur Instagram
              </div>
            </div>

            {/* Google My Business View */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `translateX(${step === 2 ? '0%' : step > 2 ? '-100%' : '100%'})`,
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
              background: 'white'
            }}>
              {/* Google Header */}
              <div style={{
                padding: '12px 16px',
                borderBottom: '1px solid #e0e0e0',
                background: '#4285f4',
                color: 'white',
                fontSize: '18px',
                fontWeight: '500'
              }}>
                Google My Business
              </div>
              
              {/* Business Card */}
              <div style={{
                padding: '20px 16px'
              }}>
                <div style={{
                  background: '#fff',
                  borderRadius: '8px',
                  padding: '16px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    gap: '12px',
                    marginBottom: '12px'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '30px',
                      flexShrink: 0
                    }}>
                      🍕
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        margin: '0 0 8px 0',
                        fontSize: '16px',
                        fontWeight: '600'
                      }}>
                        Nouvelle pizza truffe !
                      </h3>
                      <p style={{
                        margin: 0,
                        fontSize: '14px',
                        color: '#5f6368',
                        lineHeight: '1.4'
                      }}>
                        Découvrez notre nouvelle pizza truffe à seulement 12,90€. Disponible ce week-end ! 🔥
                      </p>
                    </div>
                  </div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '12px',
                    color: '#5f6368',
                    paddingTop: '12px',
                    borderTop: '1px solid #e0e0e0'
                  }}>
                    <span>Il y a quelques secondes</span>
                    <div style={{
                      display: 'flex',
                      gap: '12px'
                    }}>
                      <span>❤️ 0</span>
                      <span>💬 0</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Published Checkmark */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(66, 133, 244, 0.95)',
                color: 'white',
                padding: '20px 30px',
                borderRadius: '15px',
                fontSize: '18px',
                fontWeight: 'bold',
                boxShadow: '0 10px 30px rgba(66, 133, 244, 0.4)',
                animation: step === 2 ? 'popIn 0.5s ease-out' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '24px' }}>✅</span> Publié sur Google
              </div>
            </div>

            {/* Facebook View */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transform: `translateX(${step === 3 ? '0%' : '100%'})`,
              transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
              background: 'white'
            }}>
              {/* Facebook Header */}
              <div style={{
                padding: '12px 16px',
                borderBottom: '1px solid #e4e6eb',
                background: '#1877f2',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold'
              }}>
                facebook
              </div>
              
              {/* Facebook Post */}
              <div style={{
                padding: '12px'
              }}>
                <div style={{
                  background: 'white',
                  border: '1px solid #dddfe2',
                  borderRadius: '8px'
                }}>
                  {/* Post Header */}
                  <div style={{
                    padding: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#1877f2'
                    }}></div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: '600' }}>Votre Restaurant</div>
                      <div style={{ fontSize: '12px', color: '#65676b' }}>À l'instant · 🌍</div>
                    </div>
                  </div>
                  
                  {/* Post Content */}
                  <div style={{
                    padding: '0 12px 8px',
                    fontSize: '14px'
                  }}>
                    Nouvelle pizza truffe 🍕 à 12,90€ ! Disponible ce week-end 🔥
                  </div>
                  
                  {/* Post Image */}
                  <div style={{
                    width: '100%',
                    height: '200px',
                    background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '60px'
                  }}>
                    🍕
                  </div>
                  
                  {/* Post Actions */}
                  <div style={{
                    padding: '8px 12px',
                    borderTop: '1px solid #e4e6eb',
                    display: 'flex',
                    justifyContent: 'space-around',
                    fontSize: '13px',
                    color: '#65676b'
                  }}>
                    <span>👍 J'aime</span>
                    <span>💬 Commenter</span>
                    <span>📤 Partager</span>
                  </div>
                </div>
              </div>
              
              {/* Published Checkmark */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'rgba(24, 119, 242, 0.95)',
                color: 'white',
                padding: '20px 30px',
                borderRadius: '15px',
                fontSize: '18px',
                fontWeight: 'bold',
                boxShadow: '0 10px 30px rgba(24, 119, 242, 0.4)',
                animation: step === 3 ? 'popIn 0.5s ease-out' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ fontSize: '24px' }}>✅</span> Publié sur Facebook
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Time Counter */}
      {step === 3 && (
        <div style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(39, 174, 96, 0.95)',
          color: 'white',
          padding: '15px 40px',
          borderRadius: '50px',
          fontSize: '24px',
          fontWeight: 'bold',
          boxShadow: '0 10px 30px rgba(39, 174, 96, 0.4)',
          animation: 'popIn 0.5s ease-out',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span>⏱️</span>
          <span>Publié en {counter} secondes</span>
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
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
          }
          60% {
            transform: translate(-50%, -50%) scale(1.1);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
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
export const MultiPublicationBenefits = () => {
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
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>⏱️</div>
        <h3 style={{
          margin: '0 0 10px 0',
          fontSize: '18px',
          fontWeight: '600',
          color: '#2c3e50'
        }}>
          Gain de temps massif
        </h3>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#7f8c8d',
          lineHeight: '1.6'
        }}>
          De 5 heures de publication manuelle à 30 secondes via WhatsApp
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
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>🚀</div>
        <h3 style={{
          margin: '0 0 10px 0',
          fontSize: '18px',
          fontWeight: '600',
          color: '#2c3e50'
        }}>
          Simplicité d'utilisation
        </h3>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#7f8c8d',
          lineHeight: '1.6'
        }}>
          Un simple message WhatsApp suffit. Pas d'application à ouvrir
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
          Portée multipliée x3
        </h3>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#7f8c8d',
          lineHeight: '1.6'
        }}>
          Touchez tous vos clients en publiant simultanément sur 3 réseaux
        </p>
      </div>
    </div>
  );
};

export default MultiPublicationAnimation;
