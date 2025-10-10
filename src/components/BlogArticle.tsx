import React from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const BlogArticle = () => {
  const { slug } = useParams();

  // Articles data
  const articles = {
    'fotografia-gastronomica-consejos': {
      id: 1,
      title: '5 Consejos para Fotografía Gastronómica que Aumentan las Ventas',
      titleFr: '5 Conseils pour la Photographie Gastronomique qui Augmentent les Ventes',
      excerpt: 'Descubre las técnicas profesionales que hacen que tus platos se vean irresistibles en redes sociales y aumenten tus reservas.',
      excerptFr: 'Découvrez les techniques professionnelles qui rendent vos plats irrésistibles sur les réseaux sociaux et augmentent vos réservations.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
      author: 'Dominique B.',
      date: '15 Dic 2024',
      dateFr: '15 Déc 2024',
      category: 'Fotografía',
      categoryFr: 'Photographie',
      readTime: '5 min',
      content: `
        <p>La fotografía gastronómica es mucho más que capturar un plato bonito. Es el arte de despertar el apetito a través de una imagen, de contar la historia de tu restaurante y de convertir espectadores en clientes.</p>
        
        <h2>1. La Iluminación es Todo</h2>
        <p>La luz natural es tu mejor aliada. Coloca los platos cerca de una ventana durante las horas doradas (temprano en la mañana o al atardecer). Evita el flash directo que crea sombras duras y hace que la comida se vea artificial.</p>
        
        <h2>2. Composición: La Regla de los Tercios</h2>
        <p>Divide mentalmente tu imagen en 9 secciones iguales. Coloca los elementos más importantes en las intersecciones de estas líneas. Esto crea una composición más dinámica y atractiva que centrar el plato.</p>
        
        <h2>3. Props y Styling</h2>
        <p>Los elementos que rodean tu plato son tan importantes como el plato mismo. Utiliza:</p>
        <ul>
          <li>Servilletas de lino natural</li>
          <li>Cubiertos elegantes</li>
          <li>Ingredientes frescos como decoración</li>
          <li>Superficies con textura (madera, mármol)</li>
        </ul>
        
        <h2>4. Ángulos que Venden</h2>
        <p>Experimenta con diferentes ángulos:</p>
        <ul>
          <li><strong>Cenital (90°):</strong> Perfecto para platos planos como pizzas o ensaladas</li>
          <li><strong>45°:</strong> El más versátil, muestra altura y textura</li>
          <li><strong>Lateral:</strong> Ideal para hamburguesas o postres altos</li>
        </ul>
        
        <h2>5. Post-Producción Sutil</h2>
        <p>La edición debe realzar, no transformar:</p>
        <ul>
          <li>Ajusta el contraste para hacer los colores más vibrantes</li>
          <li>Aumenta ligeramente la saturación de los rojos y amarillos</li>
          <li>Corrige la temperatura de color para que se vea apetitosa</li>
          <li>Elimina elementos distractores del fondo</li>
        </ul>
        
        <h2>Conclusión</h2>
        <p>Una buena fotografía gastronómica puede aumentar las ventas de un plato hasta un 30%. Invierte tiempo en perfeccionar estas técnicas y verás cómo tus redes sociales y tu negocio crecen exponencialmente.</p>
        
        <p><strong>¿Necesitas ayuda profesional?</strong> En Punto360 creamos sesiones fotográficas que convierten. Contacta con nosotros para transformar la imagen de tu restaurante.</p>
      `
    },
    'google-business-resenas': {
      id: 2,
      title: 'Cómo Conseguir +50 Reseñas 5★ en Google Business en 30 Días',
      titleFr: 'Comment Obtenir +50 Avis 5★ sur Google Business en 30 Jours',
      excerpt: 'Estrategia paso a paso para generar reseñas positivas auténticas que mejoren tu posicionamiento local y atraigan más clientes.',
      excerptFr: 'Stratégie étape par étape pour générer des avis positifs authentiques qui améliorent votre référencement local et attirent plus de clients.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1200',
      author: 'Dominique B.',
      date: '10 Dic 2024',
      dateFr: '10 Déc 2024',
      category: 'Marketing',
      categoryFr: 'Marketing',
      readTime: '7 min',
      content: `
        <p>Las reseñas de Google Business son el factor más importante para el SEO local. Un restaurante con 50+ reseñas 5★ aparece 3 veces más en las búsquedas locales que uno sin reseñas.</p>
        
        <h2>Semana 1: Configuración del Sistema</h2>
        <h3>Día 1-2: Optimiza tu Perfil</h3>
        <ul>
          <li>Completa al 100% tu perfil de Google Business</li>
          <li>Añade fotos profesionales (mínimo 10)</li>
          <li>Actualiza horarios, menú y información de contacto</li>
          <li>Configura mensajería directa</li>
        </ul>
        
        <h3>Día 3-7: Crea el Sistema QR</h3>
        <p>Genera códigos QR que lleven directamente a tu página de reseñas:</p>
        <ul>
          <li>Colócalos en mesas, recibos y cartas</li>
          <li>Añade un incentivo sutil: "Tu opinión nos ayuda a mejorar"</li>
          <li>Entrena al personal para mencionarlo naturalmente</li>
        </ul>
        
        <h2>Semana 2-3: Implementación Activa</h2>
        <h3>El Momento Perfecto</h3>
        <p>Pide reseñas cuando el cliente está más satisfecho:</p>
        <ul>
          <li>Después de un cumplido sobre la comida</li>
          <li>Al finalizar una experiencia positiva</li>
          <li>Nunca cuando hay algún problema</li>
        </ul>
        
        <h3>Script para el Personal</h3>
        <p><em>"Me alegra saber que han disfrutado su experiencia. Si les apetece, nos ayudaría mucho una reseña en Google. Aquí tienen el código QR, solo toma un minuto."</em></p>
        
        <h2>Semana 4: Automatización</h2>
        <h3>WhatsApp Post-Visita</h3>
        <p>Envía un mensaje 2-3 horas después de la visita:</p>
        <p><em>"¡Gracias por visitarnos! Esperamos que hayan disfrutado su experiencia. Si fue así, nos encantaría conocer su opinión en Google: [enlace]. ¡Hasta la próxima!"</em></p>
        
        <h3>Email Follow-up</h3>
        <p>Para clientes que han dado su email:</p>
        <ul>
          <li>Mensaje personalizado con fotos de su visita</li>
          <li>Enlace directo a reseñas</li>
          <li>Oferta especial para la próxima visita</li>
        </ul>
        
        <h2>Gestión de Reseñas Negativas</h2>
        <h3>Respuesta en 24h</h3>
        <ul>
          <li>Agradece el feedback</li>
          <li>Disculpate sinceramente</li>
          <li>Ofrece una solución específica</li>
          <li>Invita a contactar directamente</li>
        </ul>
        
        <h3>Ejemplo de Respuesta</h3>
        <p><em>"Gracias por su feedback, [Nombre]. Lamentamos que su experiencia no haya sido la esperada. Nos tomamos muy en serio sus comentarios sobre [problema específico]. Nos gustaría invitarle a volver para demostrarle nuestro verdadero nivel de servicio. Por favor, contacte conmigo directamente en [teléfono]."</em></p>
        
        <h2>Métricas a Seguir</h2>
        <ul>
          <li><strong>Número de reseñas nuevas por semana</strong></li>
          <li><strong>Puntuación promedio</strong></li>
          <li><strong>Tasa de respuesta a reseñas</strong></li>
          <li><strong>Menciones de palabras clave</strong> (comida, servicio, ambiente)</li>
        </ul>
        
        <h2>Resultados Esperados</h2>
        <p>Siguiendo esta estrategia, nuestros clientes obtienen:</p>
        <ul>
          <li>15-20 reseñas nuevas por semana</li>
          <li>Puntuación promedio de 4.6+ estrellas</li>
          <li>30% más de clics en "Cómo llegar"</li>
          <li>25% más de llamadas desde Google</li>
        </ul>
        
        <p><strong>¿Quieres implementar este sistema automáticamente?</strong> En Punto360 configuramos todo el proceso por ti, incluyendo QR personalizados y mensajes automatizados.</p>
      `
    },
    'instagram-restaurantes-2025': {
      id: 3,
      title: 'Instagram para Restaurantes: Guía Completa 2025',
      titleFr: 'Instagram pour Restaurants : Guide Complet 2025',
      excerpt: 'Todo lo que necesitas saber para dominar Instagram: desde el contenido hasta las stories, reels y colaboraciones con influencers.',
      excerptFr: 'Tout ce que vous devez savoir pour maîtriser Instagram : du contenu aux stories, reels et collaborations avec les influenceurs.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
      author: 'Dominique B.',
      date: '5 Dic 2024',
      dateFr: '5 Déc 2024',
      category: 'Redes Sociales',
      categoryFr: 'Réseaux Sociaux',
      readTime: '10 min',
      content: `
        <p>Instagram sigue siendo la plataforma más importante para restaurantes en 2025. Con más de 2 mil millones de usuarios activos, es donde tus clientes descubren, evalúan y comparten experiencias gastronómicas.</p>
        
        <h2>Configuración del Perfil Profesional</h2>
        <h3>Elementos Esenciales</h3>
        <ul>
          <li><strong>Foto de perfil:</strong> Logo claro y reconocible</li>
          <li><strong>Bio optimizada:</strong> Tipo de cocina + ubicación + CTA</li>
          <li><strong>Enlace en bio:</strong> Usa herramientas como Linktree</li>
          <li><strong>Información de contacto:</strong> Teléfono, dirección, horarios</li>
          <li><strong>Categoría:</strong> "Restaurante" para aparecer en búsquedas locales</li>
        </ul>
        
        <h3>Ejemplo de Bio Efectiva</h3>
        <p><em>🍽️ Cocina mediterránea auténtica<br/>
        📍 Las Palmas, Canarias<br/>
        🕒 Mar-Dom 12:00-23:00<br/>
        📞 Reservas: 928 XXX XXX<br/>
        👇 Menú y reservas</em></p>
        
        <h2>Estrategia de Contenido 2025</h2>
        <h3>Mix de Contenido (Regla 80/20)</h3>
        <ul>
          <li><strong>80% Valor:</strong> Platos, behind-the-scenes, tips culinarios</li>
          <li><strong>20% Promocional:</strong> Ofertas, eventos, reservas</li>
        </ul>
        
        <h3>Tipos de Posts que Funcionan</h3>
        <ol>
          <li><strong>Food Porn de Calidad</strong>
            <ul>
              <li>Platos recién servidos</li>
              <li>Ingredientes frescos</li>
              <li>Proceso de preparación</li>
            </ul>
          </li>
          <li><strong>Behind the Scenes</strong>
            <ul>
              <li>Chef cocinando</li>
              <li>Preparación matutina</li>
              <li>Equipo trabajando</li>
            </ul>
          </li>
          <li><strong>User Generated Content</strong>
            <ul>
              <li>Repostea fotos de clientes</li>
              <li>Testimonios en stories</li>
              <li>Celebraciones especiales</li>
            </ul>
          </li>
        </ol>
        
        <h2>Reels: El Formato Rey</h2>
        <h3>Ideas de Reels que Viralizan</h3>
        <ul>
          <li><strong>Recetas rápidas:</strong> 30-60 segundos mostrando preparación</li>
          <li><strong>Antes/Después:</strong> Ingredientes → plato terminado</li>
          <li><strong>Day in the life:</strong> Un día en la cocina</li>
          <li><strong>Trucos de chef:</strong> Técnicas profesionales</li>
          <li><strong>Reacciones:</strong> Clientes probando platos nuevos</li>
        </ul>
        
        <h3>Mejores Horarios para Publicar</h3>
        <ul>
          <li><strong>Desayuno:</strong> 8:00-10:00</li>
          <li><strong>Almuerzo:</strong> 12:00-14:00</li>
          <li><strong>Cena:</strong> 18:00-21:00</li>
          <li><strong>Fines de semana:</strong> 11:00-15:00</li>
        </ul>
        
        <h2>Stories: Conexión Diaria</h2>
        <h3>Contenido para Stories</h3>
        <ul>
          <li><strong>Menú del día</strong> con sticker de ubicación</li>
          <li><strong>Polls:</strong> "¿Qué prefieres: pasta o pizza?"</li>
          <li><strong>Questions:</strong> "¿Qué plato quieres que preparemos?"</li>
          <li><strong>Countdown:</strong> Para eventos especiales</li>
          <li><strong>Behind the scenes</strong> en tiempo real</li>
        </ul>
        
        <h3>Highlights Estratégicos</h3>
        <ul>
          <li>🍽️ <strong>Menú:</strong> Platos principales organizados</li>
          <li>📍 <strong>Ubicación:</strong> Cómo llegar, parking</li>
          <li>⭐ <strong>Reseñas:</strong> Testimonios de clientes</li>
          <li>🎉 <strong>Eventos:</strong> Celebraciones, música en vivo</li>
          <li>👨‍🍳 <strong>Chef:</strong> Presentación del equipo</li>
        </ul>
        
        <h2>Hashtags Estratégicos</h2>
        <h3>Mix de Hashtags (30 máximo)</h3>
        <ul>
          <li><strong>Generales (5-7):</strong> #restaurant #food #foodie</li>
          <li><strong>Locales (8-10):</strong> #laspalmas #canarias #grancanaria</li>
          <li><strong>Específicos (10-12):</strong> #paella #tapas #mariscos</li>
          <li><strong>Branded (3-5):</strong> #nombrerestaurante #slogan</li>
        </ul>
        
        <h2>Colaboraciones e Influencers</h2>
        <h3>Micro-Influencers Locales</h3>
        <ul>
          <li><strong>Criterios:</strong> 1K-10K seguidores locales</li>
          <li><strong>Engagement rate:</strong> Mínimo 3%</li>
          <li><strong>Audiencia:</strong> Alineada con tu target</li>
        </ul>
        
        <h3>Tipos de Colaboración</h3>
        <ul>
          <li><strong>Canje:</strong> Comida gratis por post + stories</li>
          <li><strong>Eventos:</strong> Invitaciones a inauguraciones</li>
          <li><strong>Takeovers:</strong> Influencer gestiona tu cuenta por un día</li>
        </ul>
        
        <h2>Métricas Importantes</h2>
        <h3>KPIs a Seguir</h3>
        <ul>
          <li><strong>Alcance:</strong> Personas únicas que ven tu contenido</li>
          <li><strong>Engagement rate:</strong> (Likes + comentarios + shares) / alcance</li>
          <li><strong>Saves:</strong> Contenido guardado (muy valioso)</li>
          <li><strong>Profile visits:</strong> Visitas a tu perfil</li>
          <li><strong>Website clicks:</strong> Clics en tu enlace</li>
        </ul>
        
        <h2>Herramientas Recomendadas</h2>
        <ul>
          <li><strong>Planificación:</strong> Later, Buffer, Hootsuite</li>
          <li><strong>Edición:</strong> VSCO, Lightroom Mobile, Canva</li>
          <li><strong>Analytics:</strong> Instagram Insights, Sprout Social</li>
          <li><strong>Hashtags:</strong> Hashtagify, RiteTag</li>
        </ul>
        
        <h2>Errores Comunes a Evitar</h2>
        <ul>
          <li><strong>Fotos de baja calidad</strong> o mal iluminadas</li>
          <li><strong>Publicar solo cuando hay ofertas</strong></li>
          <li><strong>No responder a comentarios</strong> y DMs</li>
          <li><strong>Usar siempre los mismos hashtags</strong></li>
          <li><strong>No tener consistencia visual</strong></li>
        </ul>
        
        <p><strong>¿Necesitas ayuda para implementar esta estrategia?</strong> En Punto360 gestionamos tu Instagram de forma integral: contenido, community management y campañas pagadas que convierten.</p>
      `
    }
  };

  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="font-poppins bg-dark min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Artículo no encontrado</h1>
            <Link to="/" className="text-gold hover:text-gold-light">
              Volver al inicio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-poppins bg-dark min-h-screen">
      <Header />
      
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link 
              to="/#blog" 
              className="flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-poppins">Volver al blog</span>
            </Link>

            {/* Article header */}
            <header className="mb-12">
              <div className="mb-6">
                <span className="bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-poppins font-semibold">
                  {article.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex items-center text-gray-400 font-poppins text-sm mb-8">
                <User className="h-4 w-4 mr-2" />
                <span className="mr-6">{article.author}</span>
                <Calendar className="h-4 w-4 mr-2" />
                <span className="mr-6">{article.date}</span>
                <Clock className="h-4 w-4 mr-2" />
                <span>{article.readTime}</span>
              </div>
              
              <p className="text-xl text-gray-300 font-poppins leading-relaxed">
                {article.excerpt}
              </p>
            </header>

            {/* Featured image */}
            <div className="mb-12">
              <img 
                src={article.image}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl"
              />
            </div>

            {/* Article content */}
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                color: '#D1D5DB',
                lineHeight: '1.8'
              }}
            />

            {/* Share buttons */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 font-poppins">Compartir:</span>
                  <button className="text-gray-400 hover:text-gold transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
                
                <a 
                  href="https://wa.me/34636814464?text=Hola%20Punto360%2C%20me%20interesa%20más%20información"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-6 py-3 rounded-full transition-all duration-300"
                >
                  Contactar para más info
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogArticle;