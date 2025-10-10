import React, { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const Chatbot = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://mdia.app.n8n.cloud/webhook/e48e654c-7e4b-4c09-8731-c80a453e9246/chat',
      target: '#n8n-chat',
      mode: 'window',
      showWelcomeScreen: true,
      defaultLanguage: 'en',
      initialMessages: [
        '¡Hola! 👋',
        'Soy el asistente de Punto360. ¿Cómo puedo ayudarte hoy?'
      ],
      i18n: {
        en: {
          title: '¡Hola! 👋',
          subtitle: 'Inicia una conversación. Estamos aquí para ayudarte 24/7.',
          footer: '',
          getStarted: 'Nueva conversación',
          inputPlaceholder: 'Escribe tu pregunta...',
        },
      },
      loadPreviousSession: true,
      enableStreaming: false,
    });
  }, []);

  return <div id="n8n-chat"></div>;
};

export default Chatbot;