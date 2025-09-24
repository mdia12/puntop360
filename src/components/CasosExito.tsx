import React from 'react';
import { TrendingUp, Star, Phone } from 'lucide-react';

const CasosExito = () => {
  const casos = [
    {
      nombre: 'Triana Brunch',
      tipo: 'Café & brunch • Triana',
      nombreFr: 'Triana Brunch',
      tipoFr: 'Café & brunch • Triana',
      metricas: [
        { es: '+28% clics "Cómo llegar" (30 días)', fr: '+28% clics "Itinéraire" (30 jours)' },
        { es: '+22% reservas desde IG/WhatsApp', fr: '+22% réservations depuis IG/WhatsApp' },
        { es: '12 publicaciones GMB + 3 Reels/sem', fr: '12 publications GMB + 3 Reels/sem' }
      ],
      testimonial: {
        es: 'Más mesas al mediodía y fines de semana. Fácil de medir.',
        fr: 'Plus de tables à midi et le week-end. Facile à mesurer.'
      },
      chart: 'trending'
    },
    {
      nombre: 'Pizzería Atlántico',
      tipo: 'Casual • Guanarteme',
      nombreFr: 'Pizzería Atlántico',
      tipoFr: 'Décontracté • Guanarteme',
      metricas: [
        { es: '+36 reseñas 5★ en 6 semanas', fr: '+36 avis 5★ en 6 semaines' },
        { es: 'QR en mesa + mensajes post-visita', fr: 'QR en table + messages post-visite' },
        { es: 'Respuesta a reseñas en 24 h', fr: 'Réponse aux avis en 24 h' }
      ],
      testimonial: {
        es: 'Subimos a 4,7★ y entramos en el mapa de barrio.',
        fr: 'Nous sommes montés à 4,7★ et sommes entrés sur la carte du quartier.'
      },
      chart: 'bars'
    },
    {
      nombre: 'Bar Marina Tapas',
      tipo: 'Tapas • Vegueta',
      nombreFr: 'Bar Marina Tapas',
      tipoFr: 'Tapas • Vegueta',
      metricas: [
        { es: '−42% llamadas perdidas (IVR + WhatsApp)', fr: '−42% appels manqués (IVR + WhatsApp)' },
        { es: '+17% ocupación fin de semana', fr: '+17% occupation week-end' },
        { es: 'Botones "Reserva / Cómo llegar" en todo', fr: 'Boutons "Réserver / Itinéraire" partout' }
      ],
      testimonial: {
        es: 'Menos teléfono sonando, más mesas confirmadas.',
        fr: 'Moins de téléphone qui sonne, plus de tables confirmées.'
      },
      chart: 'decline'
    }
  ];

  const renderChart = (type: string, index: number) => {
    const baseProps = {
      className: "w-full h-16 text-gold",
      role: "img",
      "aria-label": type === 'trending' ? '+28% clics Cómo llegar' : 
                   type === 'bars' ? '+36 reseñas 5★ en 6 semanas' : 
                   '-42% llamadas perdidas'
    };

    if (type === 'trending') {
      return (
        <svg viewBox="0 0 160 60" {...baseProps}>
          <polyline 
            points="0,40 30,35 60,38 90,28 120,25 150,20" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3"
            className="animate-pulse"
          />
          <circle cx="150" cy="20" r="3" fill="currentColor" />
        </svg>
      );
    }

    if (type === 'bars') {
      return (
        <svg viewBox="0 0 160 60" {...baseProps}>
          <rect x="10" y="30" width="18" height="20" fill="currentColor" opacity="0.6" />
          <rect x="50" y="22" width="18" height="28" fill="currentColor" opacity="0.7" />
          <rect x="90" y="16" width="18" height="34" fill="currentColor" opacity="0.8" />
          <rect x="130" y="10" width="18" height="40" fill="currentColor" opacity="1" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 160 60" {...baseProps}>
        <polyline 
          points="0,20 40,24 80,30 120,38 160,45" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3"
          strokeDasharray="5,5"
        />
        <circle cx="0" cy="20" r="3" fill="currentColor" />
      </svg>
    );
  };

  return (
    <section id="casos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
            <span data-lang="es">Casos de <span className="text-gold">Éxito</span></span>
            <span data-lang="fr" className="hidden">Études de <span className="text-gold">Cas</span></span>
          </h2>
          <p className="text-xl text-gray-300 font-poppins max-w-2xl mx-auto">
            <span data-lang="es">Resultados reales en 30–60 días con restaurantes de Las Palmas</span>
            <span data-lang="fr" className="hidden">Résultats réels en 30–60 jours avec des restaurants de Las Palmas</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {casos.map((caso, index) => (
            <article 
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:bg-gray-700 hover:border-gold/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold font-poppins text-white mb-1">
                  <span data-lang="es">{caso.nombre}</span>
                  <span data-lang="fr" className="hidden">{caso.nombreFr}</span>
                </h3>
                <p className="text-sm text-gray-400 font-poppins">
                  <span data-lang="es">{caso.tipo}</span>
                  <span data-lang="fr" className="hidden">{caso.tipoFr}</span>
                </p>
              </div>
              
              {/* Mini Chart */}
              <div className="bg-gray-900/50 rounded-xl p-4 mb-4 border border-gray-600">
                {renderChart(caso.chart, index)}
              </div>
              
              {/* Metrics */}
              <ul className="text-sm space-y-2 mb-4">
                {caso.metricas.map((metrica, metricaIndex) => (
                  <li key={metricaIndex} className="text-gray-300 font-poppins flex items-start">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      <span data-lang="es">{metrica.es}</span>
                      <span data-lang="fr" className="hidden">{metrica.fr}</span>
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* Testimonial */}
              <blockquote className="text-sm italic text-gray-300 border-l-4 border-gold pl-4 font-poppins">
                <span data-lang="es">"{caso.testimonial.es}"</span>
                <span data-lang="fr" className="hidden">"{caso.testimonial.fr}"</span>
              </blockquote>
            </article>
          ))}
        </div>
        
        {/* CTAs */}
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pilot" 
              className="bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              data-event="cta_pilot"
            >
              <span data-lang="es">Empezar piloto 14 días</span>
              <span data-lang="fr" className="hidden">Commencer pilote 14 jours</span>
            </a>
            
            <a 
              href="https://wa.me/34636814464?text=Hola%20Punto360%2C%20quiero%20aumentar%20reservas"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-dark font-poppins font-semibold px-8 py-4 rounded-full transition-all duration-300"
              data-event="cta_whatsapp"
            >
              <span data-lang="es">WhatsApp directo</span>
              <span data-lang="fr" className="hidden">WhatsApp direct</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasosExito;