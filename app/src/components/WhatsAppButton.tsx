import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/919360666448"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 animate-bounce-in hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
      style={{ animationDelay: '1s' }}
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" />
      {/* Subtle ping ring */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30" style={{ animationDuration: '3s' }} />
    </a>
  );
};

export default WhatsAppButton;
