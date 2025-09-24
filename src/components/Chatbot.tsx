import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy el asistente virtual de Punto360. ¿En qué puedo ayudarte hoy? Puedo responder preguntas sobre nuestros servicios de fotografía, marketing digital, automatización y más.",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    fotografia: [
      "Ofrecemos fotografía gastronómica profesional, fotos de ambiente y equipo, contenido para redes sociales, banco de imágenes personalizado y reportajes recurrentes. ¿Te interesa algún servicio en particular?",
      "Nuestros servicios de fotografía incluyen sesiones profesionales de platos, bebidas, ambiente del local y contenido optimizado para redes sociales. Trabajamos en toda Canarias."
    ],
    marketing: [
      "Nuestros servicios de marketing digital incluyen gestión de redes sociales, campañas en Meta Ads y Google Ads, diseño web y branding. Todo enfocado en restaurantes y bares.",
      "Ayudamos a restaurantes a aumentar sus reservas y pedidos online a través de estrategias de marketing digital personalizadas y automatización de procesos."
    ],
    automatizacion: [
      "Implementamos sistemas QR para pedidos, reservas online automatizadas, chatbots con IA para WhatsApp y gestión optimizada de inventarios.",
      "La automatización te permite reducir la gestión manual y mejorar la experiencia del cliente con sistemas de pedidos QR, reservas automáticas y atención 24/7."
    ],
    precios: [
      "Ofrecemos tanto suscripciones mensuales como packs puntuales. Los precios varían según los servicios que necesites. ¿Te gustaría que te enviemos un presupuesto personalizado?",
      "Nuestros precios son flexibles y se adaptan a cada restaurante. Contáctanos por WhatsApp al +34 636 814 464 para un presupuesto personalizado."
    ],
    contacto: [
      "Puedes contactarnos por WhatsApp al +34 636 814 464, llamarnos directamente o escribirnos a contact@punto360.es. ¡Estamos aquí para ayudarte!",
      "La mejor forma de contactarnos es por WhatsApp: +34 636 814 464. También puedes llamarnos o escribirnos a contact@punto360.es"
    ],
    ubicacion: [
      "Estamos ubicados en Telde, Las Palmas, pero trabajamos con restaurantes en toda Canarias. ¿En qué isla te encuentras?",
      "Trabajamos en todas las Islas Canarias. Nuestra base está en Telde, Las Palmas, pero nos desplazamos donde sea necesario."
    ],
    default: [
      "Entiendo que tienes preguntas sobre nuestros servicios. Puedo ayudarte con información sobre fotografía, marketing digital, automatización, precios o contacto. ¿Qué te interesa más?",
      "¡Perfecto! Estoy aquí para resolver tus dudas sobre Punto360. Pregúntame sobre nuestros servicios de fotografía, marketing, automatización o cualquier otra cosa.",
      "Me encanta poder ayudarte. ¿Te gustaría saber más sobre cómo podemos hacer crecer tu restaurante con nuestros servicios digitales?"
    ]
  };

  const getRandomResponse = (category: keyof typeof botResponses) => {
    const responses = botResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('foto') || message.includes('imagen') || message.includes('contenido')) {
      return getRandomResponse('fotografia');
    }
    if (message.includes('marketing') || message.includes('publicidad') || message.includes('redes') || message.includes('social')) {
      return getRandomResponse('marketing');
    }
    if (message.includes('automatiz') || message.includes('qr') || message.includes('reserva') || message.includes('chatbot')) {
      return getRandomResponse('automatizacion');
    }
    if (message.includes('precio') || message.includes('coste') || message.includes('tarifa') || message.includes('presupuesto')) {
      return getRandomResponse('precios');
    }
    if (message.includes('contacto') || message.includes('teléfono') || message.includes('whatsapp') || message.includes('email')) {
      return getRandomResponse('contacto');
    }
    if (message.includes('ubicación') || message.includes('dónde') || message.includes('canarias') || message.includes('isla')) {
      return getRandomResponse('ubicacion');
    }
    if (message.includes('hola') || message.includes('buenos') || message.includes('buenas')) {
      return "¡Hola! Me alegra saludarte. Soy el asistente de Punto360 y estoy aquí para ayudarte con cualquier pregunta sobre nuestros servicios para restaurantes. ¿En qué puedo ayudarte?";
    }
    if (message.includes('gracias') || message.includes('perfecto') || message.includes('genial')) {
      return "¡De nada! Es un placer ayudarte. Si tienes más preguntas o quieres contactar directamente con nuestro equipo, puedes escribirnos por WhatsApp al +34 636 814 464.";
    }
    
    return getRandomResponse('default');
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gold hover:bg-gold-light text-dark p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 animate-float"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl z-50 flex flex-col animate-slide-up">
          {/* Header */}
          <div className="bg-gold text-dark p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span className="font-semibold font-poppins">Asistente Punto360</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-gold-dark p-1 rounded-full transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-800 text-white'
                      : 'bg-gold text-dark'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    {!message.isBot && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <p className="text-sm font-poppins leading-relaxed">
                      {message.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-white p-3 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu pregunta..."
                className="flex-1 bg-gray-800 text-white border border-gray-600 rounded-full px-4 py-2 text-sm font-poppins focus:outline-none focus:border-gold"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-gold hover:bg-gold-light text-dark p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;