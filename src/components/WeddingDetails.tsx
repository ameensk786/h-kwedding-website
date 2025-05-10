import React from 'react';
import { MapPin, Clock, Hotel, Shirt } from 'lucide-react';
import { weddingDetails } from '../data/weddingData';

const DetailItem: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  location: string; 
  address: string; 
  notes?: string;
  time?: string;
}> = ({ icon, title, location, address, notes, time }) => (
  <div className="mb-10 last:mb-0 md:mb-0 bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1 duration-300 flex-1">
    <div className="flex items-start">
      <div className="text-wedding-gold mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-serif text-wedding-navy mb-2">{title}</h3>
        {time && (
          <p className="font-sans text-gray-700 mb-1">
            <span className="font-medium">Time:</span> {time}
          </p>
        )}
        <p className="font-sans text-gray-700 mb-1">
          <span className="font-medium">Location:</span> {location}
        </p>
        <p className="font-sans text-gray-700 mb-3">{address}</p>
        {notes && <p className="font-sans text-sm text-gray-600 italic">{notes}</p>}
      </div>
    </div>
  </div>
);

const WeddingDetails: React.FC = () => {
  return (
    <section id="details" className="py-20 bg-wedding-blush bg-opacity-30">
      <div className="container mx-auto px-4">
        <h2 className="text-wedding-navy font-serif text-4xl text-center mb-4">Wedding Details</h2>
        <div className="w-24 h-0.5 bg-wedding-gold mx-auto mb-12"></div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <DetailItem 
              icon={<Clock size={24} />} 
              title="Ceremony" 
              location={weddingDetails.ceremony.location} 
              address={weddingDetails.ceremony.address}
              time={weddingDetails.ceremony.time}
              notes={weddingDetails.ceremony.notes}
            />
            
            <DetailItem 
              icon={<MapPin size={24} />} 
              title="Reception" 
              location={weddingDetails.reception.location} 
              address={weddingDetails.reception.address}
              time={weddingDetails.reception.time}
              notes={weddingDetails.reception.notes}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <DetailItem 
              icon={<Hotel size={24} />} 
              title="Accommodation" 
              location={weddingDetails.accommodation.name} 
              address={weddingDetails.accommodation.address}
              notes={`Booking Code: ${weddingDetails.accommodation.bookingCode}. ${weddingDetails.accommodation.notes}`}
            />
            
            <DetailItem 
              icon={<Shirt size={24} />} 
              title="Dress Code" 
              location={weddingDetails.dress} 
              address="We kindly request that guests follow the dress code."
              notes="If you have any questions about attire, please don't hesitate to ask."
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          {/* <iframe 
            className="w-full max-w-4xl mx-auto h-96 rounded-lg shadow-lg"
            src="https://maps.app.goo.gl/WshXccxo35qLMXC89" 
            loading="lazy"
            title="Wedding Location Map"
          ></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.57215233075!2d81.52548047491459!3d16.535126284213938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2ba6a8803f3%3A0x49136283b286c833!2sSri%20Krishna%20Devaraya%20Kalyana%20Mandapam!5e1!3m2!1sen!2sin!4v1746868102065!5m2!1sen!2sin" width="600" height="450"   loading="lazy" ></iframe>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;