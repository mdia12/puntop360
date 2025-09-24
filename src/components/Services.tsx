import React from 'react';
import { Camera, Smartphone, Globe, Settings, Bot } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: 'Fotografía & Contenido Visual',
      description: 'Fotografía profesional de alimentos, ambientes y sesiones para redes sociales que aumentan el apetito y las ganas de visitar tu restaurante.'
    },
    {
      icon: Smartphone,
      title: 'Marketing Digital & Redes Sociales',
      description: 'Gestión completa de redes sociales, campañas publicitarias en Meta y Google Ads para atraer más comensales.'
    },
    {
      icon: Globe,
      title: 'Diseño Web & Branding',
      description: 'Páginas web optimizadas para conversión, diseño de marca coherente y presencia digital profesional.'
    },
    {
      icon: Settings,
      title: 'Automatización del Negocio',
      description: 'Sistemas QR para pedidos, reservas online automatizadas, gestión de inventarios y procesos optimizados.'
    },
    {
      icon: Bot,
      title: 'Atención al Cliente con IA',
      description: 'Chatbots inteligentes para WhatsApp y redes sociales que responden 24/7 y capturan leads automáticamente.'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
            Nuestros <span className="text-gold">Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 font-poppins max-w-2xl mx-auto">
            Soluciones integrales para hacer crecer tu restaurante en el mundo digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:bg-gray-700 hover:border-gold/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gold/10 rounded-full p-3 mb-4 w-fit group-hover:bg-gold/20 transition-colors">
                <service.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-lg font-semibold font-poppins text-white mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 font-poppins text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;