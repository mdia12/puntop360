import React from 'react';
import { useState } from 'react';
import { Utensils, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import LegalNotice from './LegalNotice';

const Footer = () => {
  const [showLegalNotice, setShowLegalNotice] = useState(false);

  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gold rounded-full p-2">
                <Utensils className="h-6 w-6 text-dark" />
              </div>
              <span className="text-2xl font-bold font-poppins text-white">
                Punto360
              </span>
            </div>
            <p className="text-gray-300 font-poppins leading-relaxed">
              Punto360 - Agencia especializada en comunicación y automatización para restaurantes. 
              Ayudamos a negocios gastronómicos a crecer en el mundo digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold font-poppins text-gold">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <span className="text-gray-300 font-poppins">contact@punto360.es</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-gray-300 font-poppins">+34 636 814 464</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="text-gray-300 font-poppins">Telde, Las Palmas</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold font-poppins text-gold">
              Servicios
            </h3>
            <ul className="space-y-3">
              {[
                'Fotografía Gastronómica',
                'Marketing Digital',
                'Diseño Web',
                'Automatización',
                'Chatbots con IA'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-gold font-poppins transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-poppins">
            © 2025 Punto360. Todos los derechos reservados.
            {' '}
            <button 
              onClick={() => setShowLegalNotice(true)}
              className="text-gold hover:text-yellow-400 underline transition-colors"
            >
              Aviso Legal
            </button>
          </p>
          
          {/* Legal Note */}
          <div className="mt-4 text-sm text-gray-500 font-poppins">
            <span data-lang="es">
              Punto360 procesa datos de contacto solo para gestionar tu solicitud. Ver política de privacidad.
            </span>
            <span data-lang="fr" className="hidden">
              Punto360 traite vos données de contact uniquement pour répondre à votre demande. Voir politique de confidentialité.
            </span>
          </div>
        </div>
      </div>
      
      {showLegalNotice && (
        <LegalNotice onClose={() => setShowLegalNotice(false)} />
      )}
    </footer>
  );
};

export default Footer;