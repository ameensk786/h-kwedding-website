import React from 'react';
import { Heart } from 'lucide-react';
import { coupleNames } from '../data/weddingData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wedding-navy text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-px bg-wedding-gold"></div>
            <Heart className="text-wedding-gold mx-4" size={24} />
            <div className="w-16 h-px bg-wedding-gold"></div>
          </div>
          
          <h3 className="font-serif text-2xl mb-4">
            {coupleNames.partner1} & {coupleNames.partner2}
          </h3>
          
          <p className="font-sans text-sm text-gray-400 mb-8">
            Thank you for being part of our special day
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#home" className="text-wedding-cream hover:text-wedding-gold transition-colors">
              Home
            </a>
            <a href="#details" className="text-wedding-cream hover:text-wedding-gold transition-colors">
              Details
            </a>
            <a href="#rsvp" className="text-wedding-cream hover:text-wedding-gold transition-colors">
              RSVP
            </a>
          </div>
          
          <p className="text-xs text-gray-500">
            &copy; {currentYear} {coupleNames.partner1} & {coupleNames.partner2}. With love and happiness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;