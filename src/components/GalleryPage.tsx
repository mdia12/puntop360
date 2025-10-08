import React from 'react';
import { ArrowLeft, Camera, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const GalleryPage = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
      alt: "Latte art profesional",
      altFr: "Latte art professionnel",
      category: "Bebidas",
      categoryFr: "Boissons"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg",
      alt: "Croissant recién horneado",
      altFr: "Croissant fraîchement cuit",
      category: "Panadería",
      categoryFr: "Boulangerie"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      alt: "Plato signature del chef",
      altFr: "Plat signature du chef",
      category: "Platos principales",
      categoryFr: "Plats principaux"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      alt: "Terraza al atardecer",
      altFr: "Terrasse au coucher du soleil",
      category: "Ambiente",
      categoryFr: "Ambiance"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
      alt: "Pasta italiana artesanal",
      altFr: "Pâtes italiennes artisanales",
      category: "Platos principales",
      categoryFr: "Plats principaux"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg",
      alt: "Cóctel signature",
      altFr: "Cocktail signature",
      category: "Bebidas",
      categoryFr: "Boissons"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
      alt: "Tarta de chocolate",
      altFr: "Gâteau au chocolat",
      category: "Postres",
      categoryFr: "Desserts"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg",
      alt: "Ensalada fresca",
      altFr: "Salade fraîche",
      category: "Entrantes",
      categoryFr: "Entrées"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
      alt: "Interior del restaurante",
      altFr: "Intérieur du restaurant",
      category: "Ambiente",
      categoryFr: "Ambiance"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg",
      alt: "Paella valenciana",
      altFr: "Paella valencienne",
      category: "Platos principales",
      categoryFr: "Plats principaux"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",
      alt: "Café con arte latte",
      altFr: "Café avec latte art",
      category: "Bebidas",
      categoryFr: "Boissons"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg",
      alt: "Mesa preparada",
      altFr: "Table dressée",
      category: "Ambiente",
      categoryFr: "Ambiance"
    }
  ];

  const categories = [
    { es: "Todos", fr: "Tous", value: "all" },
    { es: "Platos principales", fr: "Plats principaux", value: "Platos principales" },
    { es: "Bebidas", fr: "Boissons", value: "Bebidas" },
    { es: "Postres", fr: "Desserts", value: "Postres" },
    { es: "Entrantes", fr: "Entrées", value: "Entrantes" },
    { es: "Ambiente", fr: "Ambiance", value: "Ambiente" },
    { es: "Panadería", fr: "Boulangerie", value: "Panadería" }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [selectedImage, setSelectedImage] = React.useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="font-poppins bg-dark min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors mr-6"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="font-poppins">
                  <span data-lang="es">Volver</span>
                  <span data-lang="fr" className="hidden">Retour</span>
                </span>
              </Link>
              <div className="flex items-center space-x-3">
                <Camera className="h-8 w-8 text-gold" />
                <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white">
                  <span data-lang="es">Galería de <span className="text-gold">Ejemplos</span></span>
                  <span data-lang="fr" className="hidden">Galerie d'<span className="text-gold">Exemples</span></span>
                </h1>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 font-poppins mb-12 max-w-3xl">
              <span data-lang="es">Descubre ejemplos reales de nuestro trabajo fotográfico para restaurantes en Canarias. Cada imagen está optimizada para redes sociales y marketing digital.</span>
              <span data-lang="fr" className="hidden">Découvrez des exemples réels de notre travail photographique pour restaurants aux Canaries. Chaque image est optimisée pour les réseaux sociaux et le marketing digital.</span>
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-full font-poppins font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-gold text-dark'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gold border border-gray-600'
                  }`}
                >
                  <span data-lang="es">{category.es}</span>
                  <span data-lang="fr" className="hidden">{category.fr}</span>
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id}
                  className="relative group cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-xl aspect-square bg-gray-800">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-poppins font-medium text-sm mb-1">
                          <span data-lang="es">{image.alt}</span>
                          <span data-lang="fr" className="hidden">{image.altFr}</span>
                        </p>
                        <p className="text-gold font-poppins text-xs">
                          <span data-lang="es">{image.category}</span>
                          <span data-lang="fr" className="hidden">{image.categoryFr}</span>
                        </p>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Eye className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 bg-gradient-to-r from-gold/10 to-gold-light/10 border border-gold/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold font-poppins text-gold mb-4">
                <span data-lang="es">¿Te gusta lo que ves?</span>
                <span data-lang="fr" className="hidden">Vous aimez ce que vous voyez ?</span>
              </h3>
              <p className="text-lg text-gray-300 font-poppins leading-relaxed max-w-2xl mx-auto mb-6">
                <span data-lang="es">Estas son solo algunas muestras. Cada sesión fotográfica se personaliza según tu restaurante, tu estilo y tus necesidades específicas.</span>
                <span data-lang="fr" className="hidden">Ce ne sont que quelques échantillons. Chaque séance photo est personnalisée selon votre restaurant, votre style et vos besoins spécifiques.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/34636814464?text=Hola%20Punto360%2C%20quiero%20el%20Pack%20Foto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <span data-lang="es">Solicitar Pack Foto</span>
                  <span data-lang="fr" className="hidden">Demander Pack Photo</span>
                </a>
                <a 
                  href="https://calendly.com/punto360-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-dark font-poppins font-semibold px-8 py-4 rounded-full transition-all duration-300"
                >
                  <span data-lang="es">Reservar consulta</span>
                  <span data-lang="fr" className="hidden">Réserver consultation</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-dark/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors"
            >
              <span className="text-2xl">×</span>
            </button>
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 to-transparent p-6 rounded-b-xl">
              <h3 className="text-white font-poppins font-bold text-lg mb-1">
                <span data-lang="es">{selectedImage.alt}</span>
                <span data-lang="fr" className="hidden">{selectedImage.altFr}</span>
              </h3>
              <p className="text-gold font-poppins">
                <span data-lang="es">{selectedImage.category}</span>
                <span data-lang="fr" className="hidden">{selectedImage.categoryFr}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;