import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const examples = [
    {
      src: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
      alt: "Latte art profesional",
      altFr: "Latte art professionnel"
    },
    {
      src: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg",
      alt: "Croissant recién horneado",
      altFr: "Croissant fraîchement cuit"
    },
    {
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      alt: "Plato signature del chef",
      altFr: "Plat signature du chef"
    },
    {
      src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      alt: "Terraza al atardecer",
      altFr: "Terrasse au coucher du soleil"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold font-poppins text-white mb-4">
            <span data-lang="es">Ejemplos de Pack Foto</span>
            <span data-lang="fr" className="hidden">Exemples de Pack Photo</span>
          </h3>
          <p className="text-xl text-gray-300 font-poppins max-w-2xl mx-auto">
            <span data-lang="es">Latte art, croissant recién horneado, plato signature y terraza al atardecer</span>
            <span data-lang="fr" className="hidden">Latte art, croissant fraîchement cuit, plat signature et terrasse au coucher du soleil</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {examples.map((image, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-xl aspect-square group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                data-lang-alt-fr={image.altFr}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <Link 
            to="/galeria"
            className="inline-block bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
            data-event="cta_gallery_contact"
          >
            <span data-lang="es">Ver más ejemplos</span>
            <span data-lang="fr" className="hidden">Voir plus d'exemples</span>
          </Link>
        </div>
        
        {/* Legal note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 font-poppins max-w-3xl mx-auto">
            <span data-lang="es">Derechos de uso no exclusivos en redes y web del restaurante. No incluye modelos/rostros sin autorización explícita.</span>
            <span data-lang="fr" className="hidden">Droits d'usage non exclusifs sur les réseaux et le site du restaurant. Hors modèles/visages sans autorisation écrite.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;