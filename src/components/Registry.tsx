import React from 'react';
import { Gift } from 'lucide-react';
import { giftRegistries } from '../data/weddingData';

const Registry: React.FC = () => {
  return (
    <section id="registry" className="py-20 bg-wedding-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-wedding-navy font-serif text-4xl text-center mb-4">Gift Registry</h2>
        <div className="w-24 h-0.5 bg-wedding-gold mx-auto mb-8"></div>
        
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 font-sans leading-relaxed">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we've registered at the following places:
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {giftRegistries.map((registry, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Gift className="text-wedding-gold mr-3" size={24} />
                  <h3 className="font-serif text-xl text-wedding-navy">{registry.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 font-sans text-sm">{registry.description}</p>
                
                <a 
                  href={registry.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-wedding-navy text-white px-5 py-2 rounded-sm font-sans text-sm uppercase tracking-wider hover:bg-opacity-80 transition-all"
                >
                  View Registry
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Registry;