import React, { useState } from 'react';
import { Calendar, MessageCircle, CheckCircle, Clock, Settings, BarChart3 } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const PilotPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    restaurante: '',
    telefono: '',
    comentarios: '',
    acepto: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const steps = [
    {
      icon: BarChart3,
      titleEs: 'Auditoría express',
      titleFr: 'Audit express',
      descriptionEs: 'GMB, llamadas/DM y oportunidades locales.',
      descriptionFr: 'GMB, appels/DM et opportunités locales.'
    },
    {
      icon: Settings,
      titleEs: 'Setup 48 h',
      titleFr: 'Setup 48 h',
      descriptionEs: 'Botón WhatsApp, QR reseñas, mensajes ES/FR.',
      descriptionFr: 'Bouton WhatsApp, QR avis, messages ES/FR.'
    },
    {
      icon: Clock,
      titleEs: 'Lanzamiento & Informe',
      titleFr: 'Lancement & Rapport',
      descriptionEs: 'Seguimiento diario y plan de acción final.',
      descriptionFr: 'Suivi quotidien et plan d\'action final.'
    }
  ];

  const includes = [
    {
      es: 'Captura de llamadas/DM → WhatsApp/Sheet',
      fr: 'Capture d\'appels/DM → WhatsApp/Sheet'
    },
    {
      es: 'Mensajes post-visita → +reseñas con foto',
      fr: 'Messages post-visite → +avis avec photo'
    },
    {
      es: '2 publicaciones Google Business/semana',
      fr: '2 publications Google Business/semaine'
    },
    {
      es: 'Informe con métricas y siguientes pasos',
      fr: 'Rapport avec métriques et prochaines étapes'
    }
  ];

  return (
    <div className="font-poppins bg-dark min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 animate-fade-in">
              <span data-lang="es">Piloto 14 días — <span className="text-gold">Reservation & Review Booster</span></span>
              <span data-lang="fr" className="hidden">Pilote 14 jours — <span className="text-gold">Booster Réservations & Avis</span></span>
            </h1>
            
            <p className="text-xl text-gray-300 font-poppins mb-12 max-w-3xl mx-auto animate-fade-in">
              <span data-lang="es">Objetivo: más reservas y +20–30 reseñas 5★ con WhatsApp/IG y Google Business, sin carga para tu equipo.</span>
              <span data-lang="fr" className="hidden">Objectif : plus de réservations et +20–30 avis 5★ avec WhatsApp/IG et Google Business, sans charge pour votre équipe.</span>
            </p>
            <p className="text-xs text-gray-300 font-poppins mt-2 text-center">
              <span data-lang="es">Si marcas la opción Pack Foto, te confirmamos fecha de sesión (media jornada).</span>
              <span data-lang="fr" className="hidden">Si vous cochez l'option Pack Photo, nous confirmons la date de session (demi-journée).</span>
            </p>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-700 hover:border-gold/50 transition-all duration-300"
                >
                  <div className="bg-gold/10 rounded-full p-3 w-fit mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-semibold font-poppins text-white mb-2">
                    <span data-lang="es">{step.titleEs}</span>
                    <span data-lang="fr" className="hidden">{step.titleFr}</span>
                  </h3>
                  <p className="text-sm text-gray-300 font-poppins">
                    <span data-lang="es">{step.descriptionEs}</span>
                    <span data-lang="fr" className="hidden">{step.descriptionFr}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Includes & Price */}
            <div className="max-w-2xl mx-auto text-left mb-8 animate-slide-up">
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold font-poppins text-gold mb-6 text-center">
                  <span data-lang="es">Incluye</span>
                  <span data-lang="fr" className="hidden">Inclut</span>
                </h3>
                
                <ul className="space-y-4 mb-6">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 font-poppins">
                        <span data-lang="es">{item.es}</span>
                        <span data-lang="fr" className="hidden">{item.fr}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center border-t border-gray-600 pt-6">
                  <div className="text-3xl font-bold font-poppins text-gold mb-2">
                    <span data-lang="es">Precio piloto: 290 €</span>
                    <span data-lang="fr" className="hidden">Prix pilote : 290 €</span>
                  </div>
                  <p className="text-sm text-gray-400 font-poppins">
                    <span data-lang="es">Pago único, sin compromiso mensual</span>
                    <span data-lang="fr" className="hidden">Paiement unique, sans engagement mensuel</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 animate-slide-up">
              <a 
                href="https://calendly.com/punto360-demo" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                data-event="cta_demo"
              >
                <Calendar className="mr-3 h-5 w-5" />
                <span data-lang="es">Reserva demo (15 min)</span>
                <span data-lang="fr" className="hidden">Réserver démo (15 min)</span>
              </a>
              
              <label className="flex items-start space-x-3 text-sm text-gray-300 font-poppins">
                <input
                  type="checkbox"
                  name="addon_photo"
                  className="mt-1 accent-gold"
                />
                <span>
                  <span data-lang="es">Quiero añadir <strong className="text-gold">Pack Foto</strong> con descuento <strong className="text-gold">(490 €)</strong> durante el piloto.</span>
                  <span data-lang="fr" className="hidden">Je veux ajouter le <strong className="text-gold">Pack Photo</strong> avec remise <strong className="text-gold">(490 €)</strong> pendant le pilote.</span>
                </span>
              </label>
              
              <a 
                href="https://wa.me/34636814464?text=Hola%20Punto360%2C%20quiero%20probar%20el%20piloto"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-dark font-poppins font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center"
                data-event="cta_whatsapp"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                <span data-lang="es">WhatsApp directo</span>
                <span data-lang="fr" className="hidden">WhatsApp direct</span>
              </a>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto animate-slide-up">
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold font-poppins text-white mb-6 text-center">
                  <span data-lang="es">Solicitar Piloto</span>
                  <span data-lang="fr" className="hidden">Demander Pilote</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      placeholder="Nombre y apellidos"
                      className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-gold transition-colors"
                      data-lang-placeholder-fr="Nom et prénoms"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Email"
                      className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="restaurante"
                      value={formData.restaurante}
                      onChange={handleInputChange}
                      required
                      placeholder="Nombre del restaurante"
                      className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-gold transition-colors"
                      data-lang-placeholder-fr="Nom du restaurant"
                    />
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                      placeholder="Teléfono / WhatsApp"
                      className="bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-gold transition-colors"
                      data-lang-placeholder-fr="Téléphone / WhatsApp"
                    />
                  </div>
                  
                  <textarea
                    name="comentarios"
                    value={formData.comentarios}
                    onChange={handleInputChange}
                    rows={3}
                    placeholder="Objetivo (reservas/ reseñas / horario…)"
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-gold transition-colors resize-none"
                    data-lang-placeholder-fr="Objectif (réservations/ avis / horaire…)"
                  />
                  
                  <label className="flex items-start space-x-3 text-sm text-gray-300 font-poppins">
                    <input
                      type="checkbox"
                      name="acepto"
                      checked={formData.acepto}
                      onChange={handleInputChange}
                      required
                      className="mt-1 accent-gold"
                    />
                    <span>
                      <span data-lang="es">Acepto que Punto360 procese mis datos para gestionar esta solicitud.</span>
                      <span data-lang="fr" className="hidden">J'accepte que Punto360 traite mes données pour gérer cette demande.</span>
                    </span>
                  </label>
                  
                  <button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-dark font-poppins font-bold py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                    data-event="cta_pilot_buy"
                  >
                    <span data-lang="es">Quiero el piloto</span>
                    <span data-lang="fr" className="hidden">Je veux le pilote</span>
                  </button>
                </form>
                
                <p className="text-xs text-gray-400 font-poppins mt-4 text-center">
                  <span data-lang="es">Política de privacidad y RGPD disponibles en el sitio. Tiempo de setup estimado: 48 h tras recepción de accesos.</span>
                  <span data-lang="fr" className="hidden">Politique de confidentialité et RGPD disponibles sur le site. Temps de setup estimé : 48 h après réception des accès.</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Piloto 14 días — Reservation & Review Booster",
            "priceCurrency": "EUR",
            "price": "290",
            "url": "https://punto360.es/pilot",
            "category": "MarketingService",
            "areaServed": "Canarias, España",
            "seller": {
              "@type": "Organization",
              "name": "Punto360"
            }
          })
        }}
      />
    </div>
  );
};

export default PilotPage;