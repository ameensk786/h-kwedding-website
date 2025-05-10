import React from 'react';
import { timelineEvents } from '../data/weddingData';

const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-wedding-navy font-serif text-4xl text-center mb-4">Our Story</h2>
        <div className="w-24 h-0.5 bg-wedding-gold mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-700 mb-12 font-sans leading-relaxed">
            Every love story is beautiful, but ours is our favorite. Here's how our journey unfolded.
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-wedding-gold"></div>
            
            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                {/* Event date bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-wedding-gold flex items-center justify-center z-10">
                  <span className="text-xs font-sans font-medium text-white">{index + 1}</span>
                </div>
                
                {/* Event content */}
                <div className={`relative ${index % 2 === 0 ? 'pr-12 md:pr-0 md:mr-auto md:text-right md:w-5/12' : 'pl-12 md:pl-0 md:ml-auto md:w-5/12'}`}>
                  <div className="bg-wedding-cream p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fadeIn">
                    <span className="text-wedding-gold font-sans text-sm font-medium tracking-wide block mb-2">
                      {event.date}
                    </span>
                    <h3 className="font-serif text-xl text-wedding-navy mb-2">{event.title}</h3>
                    <p className="font-sans text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;