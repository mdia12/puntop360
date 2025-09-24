import React from 'react';
import { ArrowLeft, Shield, FileText, Globe, Database, User } from 'lucide-react';

interface LegalNoticeProps {
  onClose: () => void;
}

const LegalNotice: React.FC<LegalNoticeProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-dark/95 backdrop-blur-md z-50 overflow-y-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl border border-gray-700 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins text-white">
              Aviso <span className="text-gold">Legal</span>
            </h1>
            <button
              onClick={onClose}
              className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-poppins">Volver</span>
            </button>
          </div>

          <div className="space-y-8">
            {/* 1. Editor del sitio web */}
            <section className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <User className="h-6 w-6 text-gold" />
                <h2 className="text-xl font-semibold font-poppins text-gold">
                  1. Editor del Sitio Web
                </h2>
              </div>
              <div className="text-gray-300 font-poppins space-y-2">
                <p><strong>Nombre y apellidos:</strong> Dominique B</p>
                <p><strong>N.I.E.:</strong> Y7565891D</p>
                <p><strong>Dirección:</strong> Telde, Las Palmas</p>
                <p><strong>Teléfono:</strong> +34 636 81 44 64</p>
                <p><strong>Correo electrónico:</strong> contact@punto360.es</p>
              </div>
            </section>

            {/* 2. Propiedad intelectual */}
            <section className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-gold" />
                <h2 className="text-xl font-semibold font-poppins text-gold">
                  2. Propiedad Intelectual
                </h2>
              </div>
              <div className="text-gray-300 font-poppins leading-relaxed space-y-3">
                <p>
                  Todos los contenidos del sitio web punto360.es, incluyendo pero no 
                  limitándose a textos, imágenes, logotipos, gráficos, diseños, código 
                  fuente y cualquier otro material, son propiedad exclusiva de punto360.es 
                  o de sus respectivos propietarios.
                </p>
                <p>
                  Queda expresamente prohibida la reproducción, distribución, comunicación 
                  pública, transformación o cualquier otra forma de explotación de dichos 
                  contenidos sin la autorización previa y por escrito del titular de los derechos.
                </p>
              </div>
            </section>

            {/* 3. Protección de datos (RGPD) */}
            <section className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <Database className="h-6 w-6 text-gold" />
                <h2 className="text-xl font-semibold font-poppins text-gold">
                  3. Protección de Datos (RGPD)
                </h2>
              </div>
              <div className="text-gray-300 font-poppins leading-relaxed space-y-3">
                <p>
                  En cumplimiento del Reglamento General de Protección de Datos (UE 2016/679), 
                  informamos que los datos personales facilitados a través de los formularios 
                  de contacto de este sitio web (nombre, correo electrónico, mensaje) serán 
                  tratados por punto360.es.
                </p>
                <p>
                  <strong>Finalidad:</strong> Los datos se utilizarán únicamente para responder 
                  a sus solicitudes de información y consultas relacionadas con nuestros servicios.
                </p>
                <p>
                  <strong>Legitimación:</strong> El consentimiento del interesado al facilitar 
                  sus datos a través del formulario de contacto.
                </p>
                <p>
                  <strong>Conservación:</strong> Los datos se conservarán durante el tiempo 
                  necesario para atender su solicitud y cumplir con las obligaciones legales.
                </p>
                <p>
                  <strong>Derechos:</strong> Puede ejercer sus derechos de acceso, rectificación, 
                  supresión, limitación del tratamiento, portabilidad y oposición dirigiéndose 
                  a contact@punto360.es.
                </p>
                <p>
                  Los datos personales no serán cedidos a terceros salvo obligación legal.
                </p>
              </div>
            </section>

            {/* 4. Condiciones de uso */}
            <section className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="h-6 w-6 text-gold" />
                <h2 className="text-xl font-semibold font-poppins text-gold">
                  4. Condiciones de Uso
                </h2>
              </div>
              <div className="text-gray-300 font-poppins leading-relaxed space-y-3">
                <p>
                  El acceso y uso de este sitio web implica la aceptación expresa y sin 
                  reservas de todas las condiciones establecidas en este Aviso Legal.
                </p>
                <p>
                  El usuario se compromete a hacer un uso adecuado de los contenidos y 
                  servicios ofrecidos en el sitio web, de conformidad con la legislación 
                  aplicable y las buenas costumbres.
                </p>
                <p>
                  punto360.es se reserva el derecho a modificar en cualquier momento las 
                  condiciones de uso del sitio web, siendo válidas las que se encuentren 
                  publicadas en el momento del acceso por parte del usuario.
                </p>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400 font-poppins text-sm">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;