import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gold/10 to-gold-light/10 border-y border-gold/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-8">
            <span data-lang="es">¿Listo para llenar la terraza este mes?</span>
            <span data-lang="fr" className="hidden">Prêt à remplir la terrasse ce mois-ci ?</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <a 
              href="https://calendly.com/punto360-demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center group text-lg"
              data-event="cta_demo"
            >
              <Calendar className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              <span data-lang="es">Reserva demo (15 min)</span>
              <span data-lang="fr" className="hidden">Réserver démo (15 min)</span>
            </a>
            
            <a 
              href="https://wa.me/34636814464?text=Hola%20Punto360%2C%20quiero%20automatizar%20reservas"
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-dark font-poppins font-semibold px-10 py-4 rounded-full transition-all duration-300 flex items-center justify-center group text-lg"
              data-event="cta_whatsapp"
            >
              <MessageCircle className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span data-lang="es">WhatsApp directo</span>
              <span data-lang="fr" className="hidden">WhatsApp direct</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;