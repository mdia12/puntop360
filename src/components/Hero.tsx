import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" 
          alt="Restaurante elegante"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white leading-tight mb-6">
            <span className="text-gold">Punto360</span>
            <span className="text-white block">Fotografía Gastronómica</span> 
            <span className="text-white">& Marketing Digital</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-poppins font-light mb-8 max-w-2xl leading-relaxed">
            Fotografía profesional + Marketing digital = <span className="text-gold font-medium">Más reservas, más engagement</span>
          </p>
          
          {/* Outcome-oriented sub-promise */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg md:text-xl text-gold font-poppins font-medium max-w-3xl leading-relaxed">
              <span data-lang="es">Imágenes que despiertan el apetito + estrategias digitales que convierten. Tu restaurante destacará en redes y Google.</span>
              <span data-lang="fr" className="hidden">Images qui donnent faim + stratégies digitales qui convertissent. Votre restaurant se démarquera sur les réseaux et Google.</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <a 
              href="https://calendly.com/punto360-demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-dark font-poppins font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
              data-event="cta_demo"
            >
              <span data-lang="es">Reserva demo (15 min)</span>
              <span data-lang="fr" className="hidden">Réserver démo (15 min)</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://wa.me/34636814464?text=Hola%20Punto360%2C%20quiero%20aumentar%20reservas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-dark font-poppins font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center group"
              data-event="cta_whatsapp"
            >
              <span data-lang="es">WhatsApp directo</span>
              <span data-lang="fr" className="hidden">WhatsApp direct</span>
            </a>
            
            <a 
              href="#casos" 
              className="border-2 border-gold text-gold hover:bg-gold hover:text-dark font-poppins font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span data-lang="es">Ver casos de éxito</span>
              <span data-lang="fr" className="hidden">Voir cas de succès</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 animate-float">
        <div className="w-16 h-16 bg-gold/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-8 h-8 bg-gold/30 rounded-full blur-md"></div>
      </div>
    </section>
  );
};

export default Hero;