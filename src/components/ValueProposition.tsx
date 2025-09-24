import React from 'react';
import { CheckCircle } from 'lucide-react';

const ValueProposition = () => {
  const benefits = [
    'Más clientes gracias al marketing digital',
    'Automatización de pedidos y reservas',
    'Pack completo: fotos, redes, web, chatbot',
    'Modelo flexible: suscripción mensual o packs puntuales'
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
              ¿Por qué elegir <span className="text-gold">nuestra agencia</span>?
            </h2>
            <p className="text-xl text-gray-300 font-poppins max-w-2xl mx-auto">
              Transformamos restaurantes tradicionales en negocios digitales exitosos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-700 hover:border-gold/50 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle className="h-8 w-8 text-gold group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-lg font-poppins text-white font-medium group-hover:text-gold transition-colors">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-gold/10 to-gold-light/10 border border-gold/30 rounded-2xl p-8 text-center animate-slide-up">
            <h3 className="text-2xl font-bold font-poppins text-gold mb-4">
              Resultados Garantizados
            </h3>
            <p className="text-lg text-gray-300 font-poppins leading-relaxed max-w-3xl mx-auto">
              Trabajamos con métricas claras y objetivos específicos. Nuestros clientes ven un 
              <span className="text-gold font-semibold"> aumento promedio del 40% en reservas</span> y 
              <span className="text-gold font-semibold"> 60% más engagement</span> en redes sociales 
              en los primeros 3 meses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;