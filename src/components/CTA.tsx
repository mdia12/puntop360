import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gold/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold font-poppins text-white mb-6">
            ¿Listo para <span className="text-gold">transformar</span> tu restaurante?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 font-poppins font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Comienza hoy mismo y ve cómo tu restaurante alcanza todo su potencial digital. 
            Primera consulta completamente gratuita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <a 
              href="https://wa.me/34636814464" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center group text-lg"
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Contactar por WhatsApp
            </a>
            
            <a 
              href="tel:+34636814464"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-dark font-poppins font-semibold px-10 py-4 rounded-full transition-all duration-300 flex items-center justify-center group text-lg"
            >
              <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Llamar ahora
            </a>
          </div>
          
          <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-gray-400 font-poppins text-sm mb-4">
              También puedes escribirnos a:
            </p>
            <a 
              href="mailto:contact@punto360.es" 
              className="text-gold hover:text-gold-light transition-colors font-poppins font-medium text-lg"
            >
              contact@punto360.es
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;