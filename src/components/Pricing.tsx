import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter – Growth Local',
      price: '690',
      description: '12 Reels/mes, stories diarias, gestión DM 3x/sem, reporting IG.',
      descriptionFr: '12 Reels/mois, stories quotidiennes, gestion DM 3x/sem, reporting IG.',
      features: [
        { es: '12 Reels por mes', fr: '12 Reels par mois' },
        { es: 'Stories diarias', fr: 'Stories quotidiennes' },
        { es: 'Gestión DM 3 veces/semana', fr: 'Gestion DM 3x/semaine' },
        { es: 'Reporting Instagram', fr: 'Reporting Instagram' }
      ],
      cta: 'Empezar',
      ctaFr: 'Commencer',
      popular: false
    },
    {
      name: 'Reservation & Review Booster',
      nameEs: 'Reservation & Review Booster',
      nameFr: 'Booster Réservations & Avis',
      price: '990',
      description: 'Starter + 8 posts GMB/mes, gestion avis, QR code avis, reporting complet.',
      descriptionFr: 'Starter + 8 posts GMB/mois, gestion avis, QR code avis, reporting complet.',
      features: [
        { es: '12 Reels por mes', fr: '12 Reels par mois' },
        { es: 'Stories diarias', fr: 'Stories quotidiennes' },
        { es: 'Gestión DM 3 veces/semana', fr: 'Gestion DM (3x/sem.)' },
        { es: '8 posts Google Business/mes', fr: '8 posts Google Business/mois' },
        { es: 'Gestión avis GMB', fr: 'Gestion avis GMB' },
        { es: 'QR code avis Google', fr: 'QR code avis Google' },
        { es: 'Lien en bio optimisé', fr: 'Lien en bio optimisé' },
        { es: 'Reporting complet (IG + GMB)', fr: 'Reporting complet (IG + GMB)' }
      ],
      cta: 'Recomendado',
      ctaFr: 'Recommandé',
      popular: true
    },
    {
      name: 'AI Agent Completo',
      nameEs: 'AI Agent Completo',
      nameFr: 'Agent IA Complet',
      price: '1.490–2.490',
      description: 'Agente voz + WhatsApp, recordatorios/no-show, integraciones.',
      descriptionFr: 'Agent vocal + WhatsApp, rappels/no-show, intégrations.',
      features: [
        { es: 'Agente de voz inteligente', fr: 'Agent vocal intelligent' },
        { es: 'Gestión completa no-shows', fr: 'Gestion complète no-shows' },
        { es: 'Integraciones avanzadas', fr: 'Intégrations avancées' },
        { es: 'Automatización completa', fr: 'Automatisation complète' },
        { es: 'Soporte prioritario', fr: 'Support prioritaire' }
      ],
      cta: 'Contactar',
      ctaFr: 'Contacter',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
            <span data-lang="es">Planes y <span className="text-gold">Precios</span></span>
            <span data-lang="fr" className="hidden">Plans et <span className="text-gold">Tarifs</span></span>
          </h2>
          <p className="text-xl text-gray-300 font-poppins max-w-2xl mx-auto">
            <span data-lang="es">Elige el plan que mejor se adapte a las necesidades de tu restaurante</span>
            <span data-lang="fr" className="hidden">Choisissez le plan qui convient le mieux à votre restaurant</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gray-900 border rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 animate-slide-up ${
                plan.popular 
                  ? 'border-gold shadow-2xl shadow-gold/20 scale-105' 
                  : 'border-gray-700 hover:border-gold/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold text-dark px-4 py-2 rounded-full text-sm font-bold font-poppins flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    <span data-lang="es">Recomendado</span>
                    <span data-lang="fr" className="hidden">Recommandé</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold font-poppins text-white mb-2">
                  <span data-lang="es">{plan.nameEs || plan.name}</span>
                  <span data-lang="fr" className="hidden">{plan.nameFr || plan.name}</span>
                </h3>
                <div className="text-4xl font-bold font-poppins text-gold mb-2">
                  {plan.price}<span className="text-lg text-gray-400">/mes</span>
                </div>
                <p className="text-gray-300 font-poppins text-sm">
                  <span data-lang="es">{plan.description}</span>
                  <span data-lang="fr" className="hidden">{plan.descriptionFr}</span>
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-poppins">
                      <span data-lang="es">{feature.es}</span>
                      <span data-lang="fr" className="hidden">{feature.fr}</span>
                    </span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-full font-poppins font-bold transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gold hover:bg-gold-light text-dark'
                    : 'border-2 border-gold text-gold hover:bg-gold hover:text-dark'
                }`}
                data-event="cta_pricing_buy"
              >
                <span data-lang="es">{plan.cta}</span>
                <span data-lang="fr" className="hidden">{plan.ctaFr}</span>
              </button>
            </div>
          ))}
        </div>
        
        {/* Micro-proof */}
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-400 font-poppins italic max-w-2xl mx-auto">
            <span data-lang="es">Sin "herramientas raras": tú ves reservas y reseñas, nosotros nos encargamos de la automatización.</span>
            <span data-lang="fr" className="hidden">Sans "usine à gaz" : vous voyez des réservations et des avis, nous gérons l'automatisation.</span>
          </p>
        </div>
        
        {/* Add-ons Section */}
        <div className="mt-20 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-poppins text-white mb-4">
              <span data-lang="es">Opciones</span>
              <span data-lang="fr" className="hidden">Options</span>
            </h3>
            <p className="text-xl text-gray-300 font-poppins max-w-2xl mx-auto">
              <span data-lang="es">Refuerza tu plan con producción visual lista para redes y Google Business</span>
              <span data-lang="fr" className="hidden">Renforcez votre plan avec une production visuelle prête pour les réseaux et Google Business</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pack Foto */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800 hover:border-gold/50 transition-all duration-300 transform hover:-translate-y-2">
              <h4 className="text-xl font-bold font-poppins text-white mb-2">
                <span data-lang="es">Pack Foto Restaurante</span>
                <span data-lang="fr" className="hidden">Pack Photo Restaurant</span>
              </h4>
              <p className="text-sm text-gray-400 font-poppins mb-4">
                <span data-lang="es">Media jornada en local · entrega en 48 h</span>
                <span data-lang="fr" className="hidden">Demi-journée sur site · livraison en 48 h</span>
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 font-poppins text-sm">
                    <span data-lang="es">30 fotos editadas (vertical + horizontal)</span>
                    <span data-lang="fr" className="hidden">30 photos éditées (vertical + horizontal)</span>
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 font-poppins text-sm">
                    <span data-lang="es">Derechos de uso en web/redes del restaurante</span>
                    <span data-lang="fr" className="hidden">Droits d'usage web/réseaux du restaurant</span>
                  </span>
                </li>
              </ul>
              
              <div className="text-3xl font-bold font-poppins text-gold mb-8">790 €</div>
              
              <div className="flex flex-col gap-3">
                <a 
                  href="https://wa.me/34636814464?text=Hola%20Punto360%2C%20quiero%20el%20Pack%20Foto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-light text-dark font-poppins font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-center"
                  data-event="cta_addon_photo"
                >
                  <span data-lang="es">Quiero el Pack Foto</span>
                  <span data-lang="fr" className="hidden">Je veux le Pack Photo</span>
                </a>
                <a 
                  href="#galeria"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-dark font-poppins font-semibold py-3 px-6 rounded-full transition-all duration-300 text-center"
                  data-event="cta_addon_gallery"
                >
                  <span data-lang="es">Ver ejemplo</span>
                  <span data-lang="fr" className="hidden">Voir exemple</span>
                </a>
              </div>
            </div>
            
            {/* Pack Video */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800 hover:border-gold/50 transition-all duration-300 transform hover:-translate-y-2">
              <h4 className="text-xl font-bold font-poppins text-white mb-2">
                <span data-lang="es">Pack Vídeo Corto</span>
                <span data-lang="fr" className="hidden">Pack Vidéo Court</span>
              </h4>
              <p className="text-sm text-gray-400 font-poppins mb-4">
                <span data-lang="es">3 vídeos listos para publicar + teasers cortos</span>
                <span data-lang="fr" className="hidden">3 vidéos prêtes à poster + teasers courts</span>
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 font-poppins text-sm">
                    <span data-lang="es">3 vídeos listos + teasers (stories, 5–10 seg)</span>
                    <span data-lang="fr" className="hidden">3 vidéos prêtes + teasers courts (stories, 5–10 sec)</span>
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 font-poppins text-sm">
                    <span data-lang="es">Formatos adaptados (vertical, cuadrado, horizontal)</span>
                    <span data-lang="fr" className="hidden">Formats adaptés (vertical, carré, horizontal)</span>
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 font-poppins text-sm">
                    <span data-lang="es">Alojamiento cloud (Drive/Dropbox) para descarga ilimitada</span>
                    <span data-lang="fr" className="hidden">Hébergement cloud (Drive/Dropbox) pour téléchargement illimité</span>
                  </span>
                </li>
              </ul>
              
              <div className="text-3xl font-bold font-poppins text-gold mb-8">990 €</div>
              
              <a 
                href="https://wa.me/34636814464?text=Hola%20Punto360%2C%20pack%20video%20corto"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gold hover:bg-gold-light text-dark font-poppins font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-center"
                data-event="cta_addon_video"
              >
                <span data-lang="es">Solicitar</span>
                <span data-lang="fr" className="hidden">Demander</span>
              </a>
            </div>
            
            {/* Carta & Delivery */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800 hover:border-gold/50 transition-all duration-300 transform hover:-translate-y-2">
              <h4 className="text-xl font-bold font-poppins text-white mb-2">
                <span data-lang="es">Carta & Delivery</span>
                <span data-lang="fr" className="hidden">Carte & Livraison</span>
              </h4>
              <p className="text-sm text-gray-400 font-poppins mb-4">
                <span data-lang="es">10 platos con recorte y luz homogénea</span>
                <span data-lang="fr" className="hidden">10 plats avec détourage et éclairage homogène</span>
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 font-poppins text-sm">
                    <span data-lang="es">Formato web y apps (Glovo/Uber)</span>
                    <span data-lang="fr" className="hidden">Format web et apps (Glovo/Uber)</span>
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 font-poppins text-sm">
                    <span data-lang="es">Corrección de color y consistencia</span>
                    <span data-lang="fr" className="hidden">Correction couleur et cohérence</span>
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300 font-poppins text-sm">
                    <span data-lang="es">Entrega en 72 h</span>
                    <span data-lang="fr" className="hidden">Livraison en 72 h</span>
                  </span>
                </li>
              </ul>
              
              <div className="text-3xl font-bold font-poppins text-gold mb-8">390 €</div>
              
              <a 
                href="https://wa.me/34636814464?text=Hola%20Punto360%2C%20fotos%20de%20carta"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gold hover:bg-gold-light text-dark font-poppins font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-center"
                data-event="cta_addon_menu"
              >
                <span data-lang="es">Solicitar</span>
                <span data-lang="fr" className="hidden">Demander</span>
              </a>
            </div>
          </div>
          
          <p className="mt-8 text-sm text-gray-400 font-poppins text-center max-w-4xl mx-auto">
            <span data-lang="es">*Precios sin IGIC. Desplazamiento fuera de Las Palmas: +0,50 €/km (islas: gastos de ferry/avión). Derechos de uso no exclusivos en canales del restaurante.</span>
            <span data-lang="fr" className="hidden">*Prix hors IGIC. Déplacement hors Las Palmas : +0,50 €/km (îles : frais ferry/avion). Droits d'usage non exclusifs sur les canaux du restaurant.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;