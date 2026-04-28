import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react';
import AudioWave from '@/components/AudioWave';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero-bg', {
      scale: 1.05,
      duration: 1.2,
    })
    .from('.hero-overline', {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, 0.3)
    .from('.hero-headline span', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.08,
    }, 0.5)
    .from('.hero-subheadline', {
      opacity: 0,
      y: 20,
      duration: 0.6,
    }, 0.9)
    .from('.hero-cta', {
      opacity: 0,
      y: 15,
      duration: 0.5,
    }, 1.1)
    .from('.hero-audio', {
      opacity: 0,
      duration: 0.5,
    }, 1.3)
    .from('.hero-chevron', {
      opacity: 0,
      duration: 0.5,
    }, 1.5);
  }, { scope: containerRef });

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const headlineWords = 'Handcrafted Instruments for Sound Healing & Inner Peace'.split(' ');

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="hero-bg absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Auroville craftsman workshop with lush greenery"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sage/30 via-charcoal/30 to-forest/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-[800px] mx-auto pt-20">
        {/* Overline */}
        <p className="hero-overline overline text-white/90 mb-6">
          Handcrafted in Auroville, India
        </p>

        {/* Headline */}
        <h1 className="hero-headline font-serif text-white text-4xl sm:text-5xl lg:text-[4.5rem] font-light leading-[1.1] mb-6">
          {headlineWords.map((word, i) => (
            <span key={i} className="inline-block mr-[0.25em]">{word}</span>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="hero-subheadline text-lg sm:text-xl text-white/85 max-w-[560px] mx-auto mb-10 leading-relaxed">
          Made with intention by master craftsman Prakash Sathiyadharan after 16+ years at Svaram
        </p>

        {/* CTAs */}
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button onClick={scrollToProducts} className="btn-primary w-full sm:w-auto min-h-[48px]">
            Explore Instruments
          </button>
          <button className="btn-secondary w-full sm:w-auto min-h-[48px]">
            Watch Our Story
          </button>
        </div>

        {/* Audio Toggle */}
        <div className="hero-audio flex items-center justify-center gap-3 text-white/70">
          <AudioWave barClassName="bg-white/70" className="h-4" />
          <span className="text-sm">Experience the Sound</span>
        </div>
      </div>

      {/* Scroll Chevron */}
      <div className="hero-chevron absolute bottom-8 left-1/2 -translate-x-1/2 animate-chevron-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
