import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import OurStory from './components/OurStory';
import WeddingDetails from './components/WeddingDetails';
import PhotoGallery from './components/PhotoGallery';
// import RSVP from './components/RSVP';
// import Registry from './components/Registry';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (target) {
        const element = document.querySelector(target);
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Countdown />
      <OurStory />
      <WeddingDetails />
      <PhotoGallery />
      {/* <RSVP /> */}
      {/* <Registry /> */}
      <Footer />
    </div>
  );
}

export default App;