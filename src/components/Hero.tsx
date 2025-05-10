import React, { useEffect, useState } from 'react';
import { weddingDate, coupleNames } from '../data/weddingData';
import { formatDate } from '../utils/dateUtils';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ 
        backgroundImage: 'url(https://img.freepik.com/free-photo/antique-gold-flower-light-candle_1232-4150.jpg)',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-wedding-navy bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className={`transform transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-wedding-gold font-serif text-xl md:text-2xl mb-4 tracking-widest">
            SAVE THE DATE
          </p>
          
          <h1 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl mb-6 tracking-wide">
            {coupleNames.partner1} & {coupleNames.partner2}
          </h1>
          
          <div className="w-24 h-0.5 bg-wedding-gold mx-auto mb-6"></div>
          
          <p className="text-white font-serif text-xl md:text-3xl mb-8">
            {formatDate(weddingDate)}
          </p>
          
          <div className="mt-12">
            <a 
              href="#rsvp" 
              className="inline-block bg-wedding-gold hover:bg-opacity-80 text-wedding-navy px-8 py-3 rounded-sm font-sans uppercase tracking-wider text-sm transition-all duration-300"
            >
              RSVP Now
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <a 
          href="#story" 
          className="text-white animate-bounce inline-block"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;