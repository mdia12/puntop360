import React from 'react';
import { Camera, Users, Smartphone, Image, Calendar } from 'lucide-react';

const Photography = () => {
  const services = [
    {
      icon: Camera,
      title: 'Fotografía Gastronómica Profesional',
      description: 'Imágenes de alta calidad de platos, bebidas y detalles de la carta que despiertan el apetito y aumentan las ventas.'
    },
    {
      icon: Users,
      title: 'Ambiente y Equipo',
      description: 'Fotos del local, decoración, staff y momentos especiales que transmiten la experiencia única de tu restaurante.'
    },
    {
      icon: Smartphone,
      title: 'Contenido para Redes Sociales',
      description: 'Sesiones optimizadas en formato vertical para Instagram, Facebook y TikTok, listas para publicar y generar engagement.'
    },
    {
      icon: Image,
      title: 'Banco de Imágenes Personalizado',
      description: 'Galería privada con todo el material para usar en web, Google Business, cartas digitales y campañas publicitarias.'
    },
    {
      icon: Calendar,
      title: 'Reportajes Recurrentes',
      description: 'Paquetes mensuales para actualizar contenido con nuevas propuestas, temporadas especiales y eventos exclusivos.'
    }
  ];

  return (
    <section id="fotografia" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
            Fotografía y <span className="text-gold">Contenido</span>
          </h2>
          <p className="text-xl text-gray-300 font-poppins max-w-3xl mx-auto leading-relaxed">
            Servicios de fotografía profesional y creación de contenido para restaurantes, 
            bares y cafeterías en <span className="text-gold font-medium">Canarias</span>
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="mb-16 animate-fade-in">
          <div className="relative rounded-2xl overflow-hidden h-64 md:h-80">
            <img 
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" 
              alt="Fotografía gastronómica profesional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-transparent flex items-center">
              <div className="pl-8 md:pl-12">
                <h3 className="text-2xl md:text-3xl font-bold font-poppins text-white mb-2">
                  Imágenes que venden
                </h3>
                <p className="text-lg text-gray-200 font-poppins max-w-md">
                  Cada foto cuenta la historia de tu restaurante y conecta con tus clientes
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800 hover:border-gold/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gold/10 rounded-full p-4 mb-6 w-fit group-hover:bg-gold/20 transition-colors">
                <service.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold font-poppins text-white mb-4 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 font-poppins leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 to-gold-light/10 border border-gold/30 rounded-2xl p-8 text-center animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold font-poppins text-gold mb-4">
            ¿Listo para destacar visualmente?
          </h3>
          <p className="text-lg text-gray-300 font-poppins leading-relaxed max-w-2xl mx-auto mb-6">
            Transforma la percepción de tu restaurante con fotografías profesionales 
            que aumentan reservas y pedidos online
          </p>
          <a 
            href="https://wa.me/34636814464" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Solicitar presupuesto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Photography;