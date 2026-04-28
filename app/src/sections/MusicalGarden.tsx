import React, { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const installations = [
  'Delhi — Community Park Installation',
  'Jodhpur — School Musical Garden',
  'Pune — Wellness Retreat Center',
];

const MusicalGarden: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useScrollReveal<HTMLDivElement>({ direction: 'left', distance: 50 });

  useGSAP(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current.querySelector('img'),
      { y: '-8%' },
      {
        y: '8%',
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );
  }, { scope: imageRef });

  return (
    <section className="section-padding bg-sage-light">
      <div className="content-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Column */}
          <div ref={textRef} className="order-2 lg:order-1">
            <p className="overline text-sage mb-3">Outdoor Installations</p>
            <h2 className="text-charcoal mb-6">Musical Gardens for Public Spaces</h2>

            <div className="space-y-4 text-warmgray leading-relaxed mb-8">
              <p>
                Transform parks, schools, and wellness centers into interactive sound experiences. Our weather-resistant instruments are designed for outdoor durability while maintaining beautiful resonance.
              </p>
            </div>

            {/* Installations List */}
            <ul className="space-y-3 mb-8">
              {installations.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-sage" />
                  </div>
                  <span className="text-charcoal text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Plan Your Musical Garden
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Image Column */}
          <div
            ref={imageRef}
            className="order-1 lg:order-2 relative overflow-hidden rounded-xl aspect-[4/3] lg:aspect-auto lg:h-[540px]"
          >
            <img
              src="/outdoor-installation.jpg"
              alt="Children playing with outdoor musical instruments in school courtyard"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <p className="absolute bottom-4 left-4 right-4 text-center text-white/80 text-xs bg-charcoal/50 backdrop-blur-sm rounded-lg py-2 px-3">
              School installation, Jodhpur
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicalGarden;
