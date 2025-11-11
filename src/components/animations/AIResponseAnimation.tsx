import React, { useState, useEffect } from 'react';

const AIResponseAnimation = () => {
  const [step, setStep] = useState(0);
  const [counter, setCounter] = useState(0);
  const [reviewsAnswered, setReviewsAnswered] = useState(0);
  
  const reviews = [
    {
      author: "Marie Dubois",
      stars: 5,
      text: "Excellent restaurant ! Service rapide et plats délicieux. Je recommande vivement ! 😊",
      response: "Merci beaucoup Marie pour votre retour chaleureux ! Nous sommes ravis que notre service vous ait plu. Au plaisir de vous revoir bientôt ! 🙏"
    },
    {
      author: "Jean Martin",
      stars: 5,
      text: "Super endroit, ambiance conviviale et cuisine authentique. Les pizzas sont incroyables !",
      response: "Merci Jean ! Nous sommes heureux que vous ayez apprécié nos pizzas et l'ambiance. Votre satisfaction est notre priorité ! 🍕"
    },
    {
      author: "Sophie Laurent",
      stars: 5,
      text: "Un vrai régal ! Qualité exceptionnelle et prix très corrects. Bravo à toute l'équipe !",
      response: "Merci Sophie pour ce merveilleux retour ! Toute l'équipe est ravie de vous avoir régalée. À très bientôt ! ⭐"
    }
  ];

  useEffect(() => {
    // Animation cycle: 8 seconds total
    const timers = [
      setTimeout(() => setStep(1), 1500),  // Show report
      setTimeout(() => setStep(2), 3000),  // Show reviews
      setTimeout(() => setStep(3), 4500),  // Start counter
      setTimeout(() => setStep(0), 7500),  // Reset
    ];
    
    return () => timers.forEach(clearTimeout);
  }, [step === 0]);

  useEffect(() => {
    if (step === 3 && counter < 4) {
      const timer = setTimeout(() => {
        setCounter(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else if (step === 0) {
      setCounter(0);
    }
  }, [step, counter]);

  useEffect(() => {
    if (step === 3 && reviewsAnswered < 30) {
      const timer = setInterval(() => {
        setReviewsAnswered(prev => Math.min(prev + 3, 30));
      }, 100);
      return () => clearInterval(timer);
    } else if (step === 0) {
      setReviewsAnswered(0);
    }
  }, [step, reviewsAnswered]);

  return (
    <div className="ai-response-animation" style={{
      padding: '40px 20px',
      position: 'relative',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {/* Phone with Report */}
      <div style={{
        position: 'relative',
        transform: step >= 1 ? 'translateY(0)' : 'translateY(100%)',
        transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: step >= 1 ? 1 : 0
      }}>
        <div style={{
          width: '320px',
          height: '640px',
          background: 'linear-gradient(145deg, #1e1e1e, #2d2d2d)',
          borderRadius: '40px',
          border: '8px solid #000',
          boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)',
          position: 'relative',
          overflow: 'hidden',
          transform: 'perspective(1000px) rotateY(0deg)',
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
            background: 'white',
            borderRadius: '32px',
            overflow: 'hidden'
          }}>
            {/* PDF Report */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'white',
              transform: step >= 1 ? 'translateY(0)' : 'translateY(100%)',
              transition: 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
              overflowY: 'auto'
            }}>
              {/* Report Header */}
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '20px',
                textAlign: 'center'
              }}>
                <h2 style={{
                  margin: '0 0 8px 0',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>
                  📊 Rapport Hebdomadaire
                </h2>
                <p style={{
                  margin: 0,
                  fontSize: '14px',
                  opacity: 0.9
                }}>
                  Du 4 au 11 Nov 2025
                </p>
              </div>

              {/* Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                padding: '20px'
              }}>
                <div style={{
                  background: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#27ae60',
                    marginBottom: '5px'
                  }}>
                    {step >= 3 ? reviewsAnswered : '30'}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#7f8c8d'
                  }}>
                    Avis traités
                  </div>
                </div>

                <div style={{
                  background: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#3498db',
                    marginBottom: '5px'
                  }}>
                    4.8 ⭐
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#7f8c8d'
                  }}>
                    Note moyenne
                  </div>
                </div>

                <div style={{
                  background: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#e74c3c',
                    marginBottom: '5px'
                  }}>
                    100%
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#7f8c8d'
                  }}>
                    Taux réponse
                  </div>
                </div>

                <div style={{
                  background: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    color: '#9b59b6',
                    marginBottom: '5px'
                  }}>
                    {step >= 3 ? counter : '4'}s
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: '#7f8c8d'
                  }}>
                    Temps moyen
                  </div>
                </div>
              </div>

              {/* AI Highlight */}
              <div style={{
                margin: '20px',
                background: 'linear-gradient(135deg, #667eea20 0%, #764ba220 100%)',
                border: '2px solid #667eea',
                borderRadius: '15px',
                padding: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    fontSize: '32px'
                  }}>🤖</div>
                  <div>
                    <h3 style={{
                      margin: '0 0 4px 0',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#2c3e50'
                    }}>
                      IA TakeFive en action
                    </h3>
                    <p style={{
                      margin: 0,
                      fontSize: '13px',
                      color: '#7f8c8d'
                    }}>
                      {step >= 3 ? reviewsAnswered : '30'} avis traités automatiquement
                    </p>
                  </div>
                </div>
                
                <div style={{
                  fontSize: '13px',
                  color: '#2c3e50',
                  lineHeight: '1.5'
                }}>
                  ✓ Tous les avis ont reçu une réponse personnalisée<br/>
                  ✓ Ton de votre marque respecté<br/>
                  ✓ Aucun avis négatif ignoré
                </div>
              </div>

              {/* Top 3 Reviews Section */}
              {step >= 2 && (
                <div style={{
                  padding: '20px',
                  animation: 'fadeIn 0.5s ease-in'
                }}>
                  <h3 style={{
                    margin: '0 0 15px 0',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#2c3e50',
                    textAlign: 'center'
                  }}>
                    🌟 Top 3 des avis cette semaine
                  </h3>

                  {reviews.slice(0, 3).map((review, index) => (
                    <div key={index} style={{
                      marginBottom: '15px',
                      background: 'white',
                      borderRadius: '12px',
                      border: '1px solid #e0e0e0',
                      overflow: 'hidden',
                      animation: `slideInReview 0.5s ease-out ${index * 0.2}s both`
                    }}>
                      {/* Review */}
                      <div style={{
                        padding: '12px',
                        background: '#fff5f5',
                        borderBottom: '1px solid #e0e0e0'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginBottom: '8px'
                        }}>
                          <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: 'bold'
                          }}>
                            {review.author.charAt(0)}
                          </div>
                          <div>
                            <div style={{
                              fontSize: '13px',
                              fontWeight: '600',
                              color: '#2c3e50'
                            }}>
                              {review.author}
                            </div>
                            <div style={{
                              fontSize: '12px',
                              color: '#f39c12'
                            }}>
                              {'⭐'.repeat(review.stars)}
                            </div>
                          </div>
                        </div>
                        <p style={{
                          margin: 0,
                          fontSize: '12px',
                          color: '#2c3e50',
                          lineHeight: '1.4'
                        }}>
                          {review.text}
                        </p>
                      </div>

                      {/* AI Response */}
                      <div style={{
                        padding: '12px',
                        background: '#f0fff4',
                        borderLeft: '3px solid #27ae60'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          marginBottom: '6px'
                        }}>
                          <span style={{ fontSize: '14px' }}>🤖</span>
                          <span style={{
                            fontSize: '11px',
                            fontWeight: '600',
                            color: '#27ae60'
                          }}>
                            Réponse IA · Il y a 4 secondes
                          </span>
                        </div>
                        <p style={{
                          margin: 0,
                          fontSize: '12px',
                          color: '#27ae60',
                          lineHeight: '1.4',
                          fontWeight: '500'
                        }}>
                          {review.response}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Success Badge */}
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
          fontSize: '20px',
          fontWeight: 'bold',
          boxShadow: '0 10px 30px rgba(39, 174, 96, 0.4)',
          animation: 'popIn 0.5s ease-out',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          whiteSpace: 'nowrap'
        }}>
          <span>✅</span>
          <span>Répondu en {counter} secondes</span>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInReview {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes popIn {
          0% {
            transform: translateX(-50%) scale(0.5);
            opacity: 0;
          }
          60% {
            transform: translateX(-50%) scale(1.1);
          }
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

// Benefits Component
export const AIResponseBenefits = () => {
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
          Réactivité éclair
        </h3>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#7f8c8d',
          lineHeight: '1.6'
        }}>
          Réponse en 4 secondes maximum. Vos clients ne sont jamais ignorés
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
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>⭐</div>
        <h3 style={{
          margin: '0 0 10px 0',
          fontSize: '18px',
          fontWeight: '600',
          color: '#2c3e50'
        }}>
          Note Google améliorée
        </h3>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#7f8c8d',
          lineHeight: '1.6'
        }}>
          +0.3 étoiles en moyenne grâce à la réactivité et personnalisation
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
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎯</div>
        <h3 style={{
          margin: '0 0 10px 0',
          fontSize: '18px',
          fontWeight: '600',
          color: '#2c3e50'
        }}>
          Personnalisation totale
        </h3>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#7f8c8d',
          lineHeight: '1.6'
        }}>
          L'IA respecte le ton de votre marque. Réponses uniques à chaque avis
        </p>
      </div>
    </div>
  );
};

export default AIResponseAnimation;
