import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

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

      {/* Chat Window with n8n embed */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl z-50 flex flex-col animate-slide-up">
          {/* Header */}
          <div className="bg-gold text-dark p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span className="font-semibold font-poppins">Asistente Punto360</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-gold-dark p-1 rounded-full transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* n8n Chat Embed */}
          <div className="flex-1 rounded-b-2xl overflow-hidden">
            <iframe
              src="https://mdia.app.n8n.cloud/webhook/e48e654c-7e4b-4c09-8731-c80a453e9246/chat"
              className="w-full h-full border-0"
              title="Chat Punto360"
              allow="microphone; camera"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;