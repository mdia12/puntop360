import React, { useState, useEffect } from 'react';
import { Shield, X, Check } from 'lucide-react';

const GDPRBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted GDPR
    const gdprAccepted = localStorage.getItem('gdpr-accepted');
    if (!gdprAccepted) {
      setShowBanner(true);
      // Small delay for animation
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  const acceptGDPR = () => {
    localStorage.setItem('gdpr-accepted', 'true');
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  const rejectGDPR = () => {
    // Redirect to Google or show message
    window.location.href = 'https://www.google.com';
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className={`fixed inset-0 bg-dark/80 backdrop-blur-sm z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {/* GDPR Banner */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="bg-gray-900 border-t-2 border-gold shadow-2xl">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-gold flex-shrink-0" />
                  <h3 className="text-xl font-bold font-poppins text-white">
                    <span data-lang="es">Protección de Datos - RGPD</span>
                    <span data-lang="fr" className="hidden">Protection des Données - RGPD</span>
                  </h3>
                </div>
                
                <div className="text-gray-300 font-poppins leading-relaxed space-y-3">
                  <p>
                    <span data-lang="es">
                      Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y cookies analíticas para mejorar nuestros servicios. 
                      Al continuar navegando, aceptas nuestra política de privacidad y el tratamiento de tus datos según el RGPD.
                    </span>
                    <span data-lang="fr" className="hidden">
                      Ce site utilise des cookies techniques nécessaires à son fonctionnement et des cookies analytiques pour améliorer nos services. 
                      En continuant à naviguer, vous acceptez notre politique de confidentialité et le traitement de vos données selon le RGPD.
                    </span>
                  </p>
                  
                  <div className="text-sm space-y-1">
                    <p>
                      <span data-lang="es">
                        <strong className="text-gold">Responsable:</strong> Dominique B. (Y7565891D) - Telde, Las Palmas
                      </span>
                      <span data-lang="fr" className="hidden">
                        <strong className="text-gold">Responsable:</strong> Dominique B. (Y7565891D) - Telde, Las Palmas
                      </span>
                    </p>
                    <p>
                      <span data-lang="es">
                        <strong className="text-gold">Finalidad:</strong> Gestión de consultas y mejora de servicios
                      </span>
                      <span data-lang="fr" className="hidden">
                        <strong className="text-gold">Finalité:</strong> Gestion des consultations et amélioration des services
                      </span>
                    </p>
                    <p>
                      <span data-lang="es">
                        <strong className="text-gold">Derechos:</strong> Acceso, rectificación, supresión, limitación, portabilidad y oposición
                      </span>
                      <span data-lang="fr" className="hidden">
                        <strong className="text-gold">Droits:</strong> Accès, rectification, suppression, limitation, portabilité et opposition
                      </span>
                    </p>
                    <p>
                      <span data-lang="es">
                        <strong className="text-gold">Contacto:</strong> contact@punto360.es
                      </span>
                      <span data-lang="fr" className="hidden">
                        <strong className="text-gold">Contact:</strong> contact@punto360.es
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <button
                  onClick={acceptGDPR}
                  className="bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  <Check className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  <span data-lang="es">Acepto y continúo</span>
                  <span data-lang="fr" className="hidden">J'accepte et continue</span>
                </button>
                
                <button
                  onClick={rejectGDPR}
                  className="border-2 border-gray-600 text-gray-300 hover:border-red-500 hover:text-red-400 font-poppins font-semibold px-8 py-3 rounded-full transition-all duration-300 flex items-center justify-center group"
                >
                  <X className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  <span data-lang="es">Rechazar y salir</span>
                  <span data-lang="fr" className="hidden">Refuser et quitter</span>
                </button>
              </div>
            </div>
            
            {/* Legal note */}
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-400 font-poppins">
                <span data-lang="es">
                  Al hacer clic en "Acepto y continúo", consientes el uso de cookies y el tratamiento de datos personales conforme a nuestra 
                  <button className="text-gold hover:text-gold-light underline ml-1">Política de Privacidad</button> y 
                  <button className="text-gold hover:text-gold-light underline ml-1">Aviso Legal</button>.
                </span>
                <span data-lang="fr" className="hidden">
                  En cliquant sur "J'accepte et continue", vous consentez à l'utilisation de cookies et au traitement des données personnelles conformément à notre 
                  <button className="text-gold hover:text-gold-light underline ml-1">Politique de Confidentialité</button> et 
                  <button className="text-gold hover:text-gold-light underline ml-1">Mentions Légales</button>.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GDPRBanner;