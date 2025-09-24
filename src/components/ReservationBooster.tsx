import React from 'react';
import { Calendar, Star, MapPin, BarChart3, Clock, MessageSquare, Camera } from 'lucide-react';

const ReservationBooster = () => {
  const features = [
    {
      icon: Clock,
      textEs: 'Reservas 24/7 (teléfono/WhatsApp/IG) – respuesta en segundos',
      textFr: 'Réservations 24/7 (téléphone/WhatsApp/IG) – réponse en secondes'
    },
    {
      icon: Star,
      textEs: '+30 reseñas 5★/mes con QR y mensajes post-visita',
      textFr: '+30 avis 5★/mois via QR et messages post-visite'
    },
    {
      icon: MapPin,
      textEs: '2 publicaciones Google Business por semana (Itinerario & Oferta)',
      textFr: '2 publications Google Business par semaine (Itinéraire & Offre)'
    },
    {
      icon: BarChart3,
      textEs: 'Informes claros y plan de acción semanal',
      textFr: 'Rapports clairs + plan d\'actions hebdo'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gold/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-4">
              <span className="text-gold">Reservation & Review</span> Booster
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-poppins font-light max-w-3xl mx-auto">
              <span data-lang="es">Resultados en 30 días: más reservas y reseñas 5★.</span>
              <span data-lang="fr" className="hidden">Résultats en 30 jours : plus de réservations et d'avis 5★.</span>
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <div className="space-y-6 animate-slide-up">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800 hover:border-gold/30 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 bg-gold/10 rounded-full p-3 group-hover:bg-gold/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-poppins font-medium leading-relaxed group-hover:text-gold transition-colors">
                      <span data-lang="es">{feature.textEs}</span>
                      <span data-lang="fr" className="hidden">{feature.textFr}</span>
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Compatibility note */}
              <div className="flex items-start space-x-4 bg-gray-800/50 border border-gold/30 rounded-xl p-6 hover:bg-gray-800 hover:border-gold/50 transition-all duration-300 group">
                <div className="flex-shrink-0 bg-gold/10 rounded-full p-3 group-hover:bg-gold/20 transition-colors">
                  <Camera className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-white font-poppins font-medium leading-relaxed group-hover:text-gold transition-colors">
                    <span data-lang="es">Compatible con Pack Foto (precio especial con el Booster)</span>
                    <span data-lang="fr" className="hidden">Compatible avec le Pack Photo (tarif préférentiel avec le Booster)</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Visual/Screenshot Placeholder */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 text-center">
                <div className="bg-gold/10 rounded-full p-6 w-fit mx-auto mb-6">
                  <Calendar className="h-12 w-12 text-gold" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white mb-4">
                  <span data-lang="es">Sistema en Acción</span>
                  <span data-lang="fr" className="hidden">Système en Action</span>
                </h3>
                <p className="text-gray-300 font-poppins leading-relaxed mb-6">
                  <span data-lang="es">Captura automática de reservas desde cualquier canal de comunicación</span>
                  <span data-lang="fr" className="hidden">Capture automatique de réservations depuis tous les canaux</span>
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <MessageSquare className="h-6 w-6 text-gold mx-auto mb-2" />
                    <p className="text-sm text-gray-300 font-poppins">WhatsApp</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <Star className="h-6 w-6 text-gold mx-auto mb-2" />
                    <p className="text-sm text-gray-300 font-poppins">Reviews</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <Calendar className="h-6 w-6 text-gold mx-auto mb-2" />
                    <p className="text-sm text-gray-300 font-poppins">
                      <span data-lang="es">Reservas</span>
                      <span data-lang="fr" className="hidden">Réservations</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pilot" 
                className="bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                data-event="cta_pilot"
              >
                <span data-lang="es">Empezar piloto 14 días (290 €)</span>
                <span data-lang="fr" className="hidden">Commencer pilote 14 jours (290 €)</span>
              </a>
              
              <a 
                href="#como-funciona" 
                className="border-2 border-gold text-gold hover:bg-gold hover:text-dark font-poppins font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                <span data-lang="es">Ver cómo funciona</span>
                <span data-lang="fr" className="hidden">Voir comment ça marche</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationBooster;