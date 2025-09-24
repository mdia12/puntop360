import React from 'react';
import { Search, Settings, Rocket, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: '1',
      titleEs: 'Auditoría express',
      titleFr: 'Audit express',
      descriptionEs: 'GMB + canales',
      descriptionFr: 'GMB + canaux'
    },
    {
      icon: Settings,
      number: '2',
      titleEs: 'Setup en 48h',
      titleFr: 'Setup en 48h',
      descriptionEs: 'WhatsApp, botones, QR reseñas',
      descriptionFr: 'WhatsApp, boutons, QR avis'
    },
    {
      icon: Rocket,
      number: '3',
      titleEs: 'Lanzamiento piloto',
      titleFr: 'Lancement pilote',
      descriptionEs: '14 días',
      descriptionFr: '14 jours'
    },
    {
      icon: BarChart3,
      number: '4',
      titleEs: 'Informe + escala',
      titleFr: 'Rapport + échelle',
      descriptionEs: 'mes 2–3',
      descriptionFr: 'mois 2–3'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
            <span data-lang="es">Cómo <span className="text-gold">Funciona</span></span>
            <span data-lang="fr" className="hidden">Comment <span className="text-gold">Ça Marche</span></span>
          </h2>
          <p className="text-xl text-gray-300 font-poppins max-w-2xl mx-auto">
            <span data-lang="es">Proceso simple y efectivo para transformar tu restaurante</span>
            <span data-lang="fr" className="hidden">Processus simple et efficace pour transformer votre restaurant</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="bg-gold/10 border-2 border-gold rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4 hover:bg-gold/20 transition-colors group">
                  <step.icon className="h-8 w-8 text-gold group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute -top-2 -right-2 bg-gold text-dark rounded-full w-8 h-8 flex items-center justify-center font-bold font-poppins text-sm">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-bold font-poppins text-white mb-2">
                <span data-lang="es">{step.titleEs}</span>
                <span data-lang="fr" className="hidden">{step.titleFr}</span>
              </h3>
              
              <p className="text-gray-300 font-poppins">
                <span data-lang="es">{step.descriptionEs}</span>
                <span data-lang="fr" className="hidden">{step.descriptionFr}</span>
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full">
                  <div className="w-full h-0.5 bg-gradient-to-r from-gold to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <a 
            href="/demo" 
            className="inline-block bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span data-lang="es">Ver demo (5 min)</span>
            <span data-lang="fr" className="hidden">Voir démo (5 min)</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;