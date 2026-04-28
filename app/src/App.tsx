import React from 'react';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import FeaturedCollections from '@/sections/FeaturedCollections';
import OurStory from '@/sections/OurStory';
import SoundHealing from '@/sections/SoundHealing';
import Programs from '@/sections/Programs';
import Testimonials from '@/sections/Testimonials';
import ProductShowcase from '@/sections/ProductShowcase';
import MusicalGarden from '@/sections/MusicalGarden';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileBottomNav from '@/components/MobileBottomNav';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <FeaturedCollections />
        <OurStory />
        <SoundHealing />
        <Programs />
        <Testimonials />
        <ProductShowcase />
        <MusicalGarden />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomNav />
    </div>
  );
};

export default App;
