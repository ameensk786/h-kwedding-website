import React from 'react';
import RSVPForm from './RSVPForm';

const RSVP: React.FC = () => {
  return (
    <section id="rsvp" className="py-20 bg-wedding-sage bg-opacity-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/5997959/pexels-photo-5997959.jpeg)' }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-wedding-navy font-serif text-4xl text-center mb-4">RSVP</h2>
        <div className="w-24 h-0.5 bg-wedding-gold mx-auto mb-12"></div>
        
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 font-sans leading-relaxed">
          We would be honored to have you join us on our special day. Please let us know if you'll be able to attend.
        </p>
        
        <RSVPForm />
      </div>
    </section>
  );
};

export default RSVP;