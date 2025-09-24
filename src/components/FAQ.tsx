import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      questionEs: '¿Necesito cambiar mi sistema de reservas?',
      questionFr: 'Dois-je changer mon système de réservations ?',
      answerEs: 'No. Podemos capturar por WhatsApp/DM y volcar a hoja/Calendario.',
      answerFr: 'Non. Nous pouvons capturer via WhatsApp/DM et transférer vers feuille/Calendrier.'
    },
    {
      questionEs: '¿Incluye publicidad?',
      questionFr: 'La publicité est-elle incluse ?',
      answerEs: 'Gestión ligera hasta 500 € de inversión (opcional).',
      answerFr: 'Gestion légère jusqu\'à 500 € d\'investissement (optionnel).'
    },
    {
      questionEs: '¿Compromiso mínimo?',
      questionFr: 'Engagement minimum ?',
      answerEs: '3 meses tras el piloto.',
      answerFr: '3 mois après le pilote.'
    },
    {
      questionEs: '¿Idiomas?',
      questionFr: 'Langues ?',
      answerEs: 'ES/FR.',
      answerFr: 'ES/FR.'
    },
    {
      questionEs: '¿Qué medimos?',
      questionFr: 'Que mesurons-nous ?',
      answerEs: 'Reservas, clics "Cómo llegar", reseñas 5★, DM.',
      answerFr: 'Réservations, clics "Itinéraire", avis 5★, DM.'
    },
    {
      questionEs: '¿Historias de éxito?',
      questionFr: 'Histoires de succès ?',
      answerEs: 'Sí, pídelo en la demo.',
      answerFr: 'Oui, demandez-le lors de la démo.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
            <span data-lang="es">Preguntas <span className="text-gold">Frecuentes</span></span>
            <span data-lang="fr" className="hidden">Questions <span className="text-gold">Fréquentes</span></span>
          </h2>
          <p className="text-xl text-gray-300 font-poppins max-w-2xl mx-auto">
            <span data-lang="es">Resolvemos tus dudas más comunes</span>
            <span data-lang="fr" className="hidden">Nous répondons à vos questions les plus courantes</span>
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-gold/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
              >
                <h3 className="text-lg font-semibold font-poppins text-white">
                  <span data-lang="es">{faq.questionEs}</span>
                  <span data-lang="fr" className="hidden">{faq.questionFr}</span>
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gold flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gold flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 border-t border-gray-700">
                  <p className="text-gray-300 font-poppins leading-relaxed pt-4">
                    <span data-lang="es">{faq.answerEs}</span>
                    <span data-lang="fr" className="hidden">{faq.answerFr}</span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;