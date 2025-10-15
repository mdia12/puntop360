import React, { useState } from 'react';
import { BarChart3, CheckCircle, Send, Shield, Sparkles } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const DiagnosticPage = () => {
  const [formData, setFormData] = useState({
    restaurant_name: '',
    type: '',
    city: '',
    presence: [] as string[],
    comms_state: [] as string[],
    main_goal: '',
    business_description: '',
    photo_history: '',
    visual_needs: [] as string[],
    style: '',
    pain_points: [] as string[],
    email: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'newsletter') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
            ? [...prev[name as keyof typeof prev] as string[], value]
            : (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        'nom du restaurant': formData.restaurant_name,
        'type d etablissement': formData.type,
        'ville': formData.city,
        'situation actuelle': `Présence en ligne: ${formData.presence.join(', ')}. Communication: ${formData.comms_state.join(', ')}. Objectif: ${formData.main_goal}. ${formData.business_description}`,
        'visuel et image': `Séance photo pro: ${formData.photo_history}. Besoins visuels: ${formData.visual_needs.join(', ')}. Style souhaité: ${formData.style}`,
        'Problematique actuelle': formData.pain_points.join(', '),
        'email': formData.email
      };

      console.log('Envoi des données:', payload);
      console.log('URL webhook:', 'https://mdia.app.n8n.cloud/webhook/b10c96a5-9a5c-4b48-8115-34e4f145ba35');

      const response = await fetch('https://mdia.app.n8n.cloud/webhook/b10c96a5-9a5c-4b48-8115-34e4f145ba35', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      console.log('Réponse reçue:', response);

      // Avec mode no-cors, on ne peut pas lire la réponse mais on peut supposer que ça a fonctionné
      // si aucune erreur n'est levée
      setIsSubmitted(true);
      console.log('Données envoyées au webhook (mode no-cors)');

    } catch (error) {
      console.error('Erreur complète:', error);
      alert(`Erreur lors de l'envoi: ${error instanceof Error ? error.message : 'Erreur inconnue'}. Veuillez réessayer.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="font-poppins bg-dark min-h-screen">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-br from-gold/20 to-gold-light/10 border border-gold/30 rounded-2xl p-12">
                <div className="bg-gold/20 rounded-full p-4 w-fit mx-auto mb-6">
                  <Sparkles className="h-12 w-12 text-gold" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">
                  Merci ! 🙌
                </h1>
                <p className="text-xl text-gray-300 font-poppins leading-relaxed mb-8">
                  Votre mini-audit est en cours de génération. Vous le recevrez par e-mail dans quelques minutes.
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
                  <p className="text-gray-300 font-poppins text-sm leading-relaxed">
                    En attendant, n'hésitez pas à nous contacter directement pour discuter de vos besoins spécifiques.
                  </p>
                </div>
                <a 
                  href="https://wa.me/34636814464?text=Hola%20Punto360%2C%20j'ai%20fait%20le%20diagnostic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Discuter sur WhatsApp
                </a>
              </div>
            </div>
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
        <section className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <BarChart3 className="h-12 w-12 text-gold" />
                <h1 className="text-4xl md:text-5xl font-bold font-poppins text-white">
                  Recevez votre <span className="text-gold">mini-audit gratuit</span> 📈
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 font-poppins font-light max-w-3xl mx-auto leading-relaxed">
                Découvrez comment booster la visibilité et l'image de votre restaurant ou bar en 2 minutes.
              </p>
            </div>

            {/* Form */}
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Partie 1 - Informations de base */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-poppins text-gold mb-4">
                    1. Informations de base
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-poppins font-medium mb-2">
                        Nom du restaurant / bar *
                      </label>
                      <input
                        type="text"
                        name="restaurant_name"
                        value={formData.restaurant_name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-gold transition-colors"
                        placeholder="Ex: La Terraza del Mar"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-poppins font-medium mb-2">
                        Type d'établissement *
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-gold transition-colors"
                      >
                        <option value="">Sélectionnez...</option>
                        <option value="Restaurant traditionnel">Restaurant traditionnel</option>
                        <option value="Bar-Lounge">Bar-Lounge</option>
                        <option value="Coffee shop">Coffee shop</option>
                        <option value="Snack-food truck">Snack-food truck</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-2">
                      Ville ou quartier *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-gold transition-colors"
                      placeholder="Ex: Las Palmas, Triana"
                    />
                  </div>
                </div>

                {/* Partie 2 - Situation actuelle */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-poppins text-gold mb-4">
                    2. Situation actuelle
                  </h3>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-3">
                      Présence en ligne (plusieurs choix possibles)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Site web', 'Page Google', 'Instagram', 'Non'].map((option) => (
                        <label key={option} className="flex items-center space-x-2 text-gray-300 font-poppins cursor-pointer">
                          <input
                            type="checkbox"
                            name="presence"
                            value={option}
                            onChange={handleInputChange}
                            className="accent-gold"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-3">
                      Communication actuelle (plusieurs choix possibles)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['Active', 'Peu régulière', 'Visuels amateurs', 'Professionnelle mais peu visible'].map((option) => (
                        <label key={option} className="flex items-center space-x-2 text-gray-300 font-poppins cursor-pointer">
                          <input
                            type="checkbox"
                            name="comms_state"
                            value={option}
                            onChange={handleInputChange}
                            className="accent-gold"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-2">
                      Objectif principal *
                    </label>
                    <select
                      name="main_goal"
                      value={formData.main_goal}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="Attirer plus de clients">Attirer plus de clients</option>
                      <option value="Développer les livraisons">Développer les livraisons</option>
                      <option value="Améliorer l'image">Améliorer l'image</option>
                      <option value="Mettre en avant les plats">Mettre en avant les plats</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-poppins font-medium mb-2">
                      Parlez-nous de votre restaurant : objectifs, défis, besoins spécifiques *
                    </label>
                    <textarea
                      name="business_description"
                      value={formData.business_description}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Ex: Nous sommes un restaurant méditerranéen qui cherche à attirer plus de clients le midi. Notre principal défi est de nous démarquer de la concurrence et de mieux présenter nos plats signature sur les réseaux sociaux..."
                    />
                  </div>
                </div>

                {/* Partie 3 - Visuels & image */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-poppins text-gold mb-4">
                    3. Visuels & image
                  </h3>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-2">
                      Séance photo pro déjà réalisée ? *
                    </label>
                    <select
                      name="photo_history"
                      value={formData.photo_history}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="Oui récemment">Oui récemment</option>
                      <option value="Oui mais il y a +1 an">Oui mais il y a +1 an</option>
                      <option value="Non">Non</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-3">
                      Types de visuels à améliorer (plusieurs choix possibles)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Plats', 'Ambiance', 'Équipe', 'Cocktails'].map((option) => (
                        <label key={option} className="flex items-center space-x-2 text-gray-300 font-poppins cursor-pointer">
                          <input
                            type="checkbox"
                            name="visual_needs"
                            value={option}
                            onChange={handleInputChange}
                            className="accent-gold"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-2">
                      Style visuel souhaité
                    </label>
                    <select
                      name="style"
                      value={formData.style}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Sélectionnez...</option>
                      <option value="Chic & élégant">Chic & élégant</option>
                      <option value="Moderne & dynamique">Moderne & dynamique</option>
                      <option value="Authentique & convivial">Authentique & convivial</option>
                      <option value="Je ne sais pas encore">Je ne sais pas encore</option>
                    </select>
                  </div>
                </div>

                {/* Partie 4 - Problématiques */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-poppins text-gold mb-4">
                    4. Problématiques actuelles
                  </h3>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-3">
                      Freins actuels (plusieurs choix possibles)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {['Manque de temps', 'Manque d\'idées', 'Difficulté à attirer', 'Problème visuel', 'Pas de stratégie'].map((option) => (
                        <label key={option} className="flex items-center space-x-2 text-gray-300 font-poppins cursor-pointer">
                          <input
                            type="checkbox"
                            name="pain_points"
                            value={option}
                            onChange={handleInputChange}
                            className="accent-gold"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Partie 5 - Contact */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-poppins text-gold mb-4">
                    5. Livraison de votre audit
                  </h3>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-2">
                      Votre e-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-3 font-poppins focus:outline-none focus:border-gold transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <label className="flex items-start space-x-3 text-gray-300 font-poppins cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="mt-1 accent-gold"
                    />
                    <span>Oui, je souhaite recevoir les conseils mensuels Punto360</span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gold hover:bg-gold-light text-dark font-poppins font-bold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-dark mr-3"></div>
                        Génération en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 h-5 w-5" />
                        Recevoir mon plan personnalisé
                      </>
                    )}
                  </button>
                </div>

                {/* RGPD Notice */}
                <div className="bg-gray-800/50 rounded-xl p-6 mt-8">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-300 font-poppins leading-relaxed">
                      <p className="mb-2">
                        <strong className="text-gold">Confidentialité garantie :</strong> Vos données sont strictement confidentielles et ne sont utilisées que pour la création de votre guide personnalisé.
                      </p>
                      <p>
                        Aucune revente, suppression sur simple demande à <a href="mailto:contact@punto360.es" className="text-gold hover:text-gold-light">contact@punto360.es</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Branding */}
                <div className="text-center pt-4">
                  <p className="text-gray-400 font-poppins text-sm">
                    Propulsé par <span className="text-gold font-semibold">Punto360</span> — IA & Automatisation pour restaurants 🍽️
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DiagnosticPage;