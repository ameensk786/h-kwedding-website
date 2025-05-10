import React, { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '../data/weddingData';

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-wedding-navy font-serif text-4xl text-center mb-4">Photo Gallery</h2>
        <div className="w-24 h-0.5 bg-wedding-gold mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => openLightbox(image.src)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover"
                  loading={index < 4 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-wedding-navy bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-wedding-gold"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-h-screen max-w-screen-lg p-4 object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;