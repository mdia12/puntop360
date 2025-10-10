import React from 'react';
import { Calendar, User, ArrowRight, Camera, TrendingUp, Star } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: '5 Consejos para Fotografía Gastronómica que Aumentan las Ventas',
      titleFr: '5 Conseils pour la Photographie Gastronomique qui Augmentent les Ventes',
      excerpt: 'Descubre las técnicas profesionales que hacen que tus platos se vean irresistibles en redes sociales y aumenten tus reservas.',
      excerptFr: 'Découvrez les techniques professionnelles qui rendent vos plats irrésistibles sur les réseaux sociaux et augmentent vos réservations.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dominique B.',
      date: '15 Dic 2024',
      dateFr: '15 Déc 2024',
      category: 'Fotografía',
      categoryFr: 'Photographie',
      icon: Camera,
      readTime: '5 min',
      readTimeFr: '5 min'
    },
    {
      id: 2,
      title: 'Cómo Conseguir +50 Reseñas 5★ en Google Business en 30 Días',
      titleFr: 'Comment Obtenir +50 Avis 5★ sur Google Business en 30 Jours',
      excerpt: 'Estrategia paso a paso para generar reseñas positivas auténticas que mejoren tu posicionamiento local y atraigan más clientes.',
      excerptFr: 'Stratégie étape par étape pour générer des avis positifs authentiques qui améliorent votre référencement local et attirent plus de clients.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dominique B.',
      date: '10 Dic 2024',
      dateFr: '10 Déc 2024',
      category: 'Marketing',
      categoryFr: 'Marketing',
      icon: Star,
      readTime: '7 min',
      readTimeFr: '7 min'
    },
    {
      id: 3,
      title: 'Instagram para Restaurantes: Guía Completa 2025',
      titleFr: 'Instagram pour Restaurants : Guide Complet 2025',
      excerpt: 'Todo lo que necesitas saber para dominar Instagram: desde el contenido hasta las stories, reels y colaboraciones con influencers.',
      excerptFr: 'Tout ce que vous devez savoir pour maîtriser Instagram : du contenu aux stories, reels et collaborations avec les influenceurs.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dominique B.',
      date: '5 Dic 2024',
      dateFr: '5 Déc 2024',
      category: 'Redes Sociales',
      categoryFr: 'Réseaux Sociaux',
      icon: TrendingUp,
      readTime: '10 min',
      readTimeFr: '10 min'
    },
    {
      id: 4,
      title: 'Automatización de Reservas: Casos de Éxito Reales',
      titleFr: 'Automatisation des Réservations : Cas de Succès Réels',
      excerpt: 'Descubre cómo 3 restaurantes en Canarias aumentaron sus reservas un 60% con sistemas de automatización inteligente.',
      excerptFr: 'Découvrez comment 3 restaurants aux Canaries ont augmenté leurs réservations de 60% avec des systèmes d\'automatisation intelligente.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dominique B.',
      date: '1 Dic 2024',
      dateFr: '1er Déc 2024',
      category: 'Automatización',
      categoryFr: 'Automatisation',
      icon: TrendingUp,
      readTime: '8 min',
      readTimeFr: '8 min'
    },
    {
      id: 5,
      title: 'Tendencias Gastronómicas 2025: Lo que Debes Fotografiar',
      titleFr: 'Tendances Gastronomiques 2025 : Ce que Vous Devez Photographier',
      excerpt: 'Las últimas tendencias culinarias que están triunfando en redes sociales y cómo capturarlas para tu restaurante.',
      excerptFr: 'Les dernières tendances culinaires qui triomphent sur les réseaux sociaux et comment les capturer pour votre restaurant.',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dominique B.',
      date: '28 Nov 2024',
      dateFr: '28 Nov 2024',
      category: 'Tendencias',
      categoryFr: 'Tendances',
      icon: Camera,
      readTime: '6 min',
      readTimeFr: '6 min'
    },
    {
      id: 6,
      title: 'WhatsApp Business para Restaurantes: Guía Práctica',
      titleFr: 'WhatsApp Business pour Restaurants : Guide Pratique',
      excerpt: 'Configura WhatsApp Business para capturar reservas automáticamente y mejorar la atención al cliente 24/7.',
      excerptFr: 'Configurez WhatsApp Business pour capturer automatiquement les réservations et améliorer le service client 24/7.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dominique B.',
      date: '25 Nov 2024',
      dateFr: '25 Nov 2024',
      category: 'Automatización',
      categoryFr: 'Automatisation',
      icon: TrendingUp,
      readTime: '9 min',
      readTimeFr: '9 min'
    }
  ];

  const categories = [
    { es: 'Todos', fr: 'Tous', value: 'all' },
    { es: 'Fotografía', fr: 'Photographie', value: 'Fotografía' },
    { es: 'Marketing', fr: 'Marketing', value: 'Marketing' },
    { es: 'Redes Sociales', fr: 'Réseaux Sociaux', value: 'Redes Sociales' },
    { es: 'Automatización', fr: 'Automatisation', value: 'Automatización' },
    { es: 'Tendencias', fr: 'Tendances', value: 'Tendencias' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <section id="blog" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
            <span data-lang="es">Blog & <span className="text-gold">Recursos</span></span>
            <span data-lang="fr" className="hidden">Blog & <span className="text-gold">Ressources</span></span>
          </h2>
          <p className="text-xl text-gray-300 font-poppins max-w-2xl mx-auto">
            <span data-lang="es">Consejos, estrategias y casos de éxito para hacer crecer tu restaurante</span>
            <span data-lang="fr" className="hidden">Conseils, stratégies et cas de succès pour faire grandir votre restaurant</span>
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <article 
              key={article.id}
              className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-750 hover:border-gold/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-gold/90 text-dark px-3 py-1 rounded-full text-sm font-poppins font-semibold flex items-center">
                    <article.icon className="h-4 w-4 mr-1" />
                    <span data-lang="es">{article.category}</span>
                    <span data-lang="fr" className="hidden">{article.categoryFr}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 font-poppins mb-3">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{article.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">
                    <span data-lang="es">{article.date}</span>
                    <span data-lang="fr" className="hidden">{article.dateFr}</span>
                  </span>
                  <span className="text-gold">
                    <span data-lang="es">{article.readTime}</span>
                    <span data-lang="fr" className="hidden">{article.readTimeFr}</span>
                  </span>
                </div>
                
                <h3 className="text-xl font-bold font-poppins text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  <span data-lang="es">{article.title}</span>
                  <span data-lang="fr" className="hidden">{article.titleFr}</span>
                </h3>
                
                <p className="text-gray-300 font-poppins text-sm leading-relaxed mb-4 line-clamp-3">
                  <span data-lang="es">{article.excerpt}</span>
                  <span data-lang="fr" className="hidden">{article.excerptFr}</span>
                </p>
                
                <button className="flex items-center text-gold hover:text-gold-light font-poppins font-semibold text-sm transition-colors group-hover:translate-x-1 transform duration-300">
                  <span data-lang="es">Leer más</span>
                  <span data-lang="fr" className="hidden">Lire plus</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 to-gold-light/10 border border-gold/30 rounded-2xl p-8 text-center animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold font-poppins text-gold mb-4">
            <span data-lang="es">¿Quieres más consejos como estos?</span>
            <span data-lang="fr" className="hidden">Vous voulez plus de conseils comme ceux-ci ?</span>
          </h3>
          <p className="text-lg text-gray-300 font-poppins leading-relaxed max-w-2xl mx-auto mb-6">
            <span data-lang="es">Únete a nuestra comunidad y recibe estrategias exclusivas para hacer crecer tu restaurante</span>
            <span data-lang="fr" className="hidden">Rejoignez notre communauté et recevez des stratégies exclusives pour faire grandir votre restaurant</span>
          </p>
          <a 
            href="https://wa.me/34636814464?text=Hola%20Punto360%2C%20quiero%20recibir%20consejos%20para%20mi%20restaurante"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <span data-lang="es">Contactar para más consejos</span>
            <span data-lang="fr" className="hidden">Contacter pour plus de conseils</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;