import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '16+', label: 'Years Experience' },
  { number: '100+', label: 'Instruments Crafted' },
  { number: '5+', label: 'Countries Performed' },
  { number: 'Made in', label: 'Auroville' },
];

const OurStory: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useScrollReveal<HTMLDivElement>({ direction: 'right', distance: 50 });

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
    <section id="story" className="section-padding bg-sage-light">
      <div className="content-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Column */}
          <div ref={imageRef} className="relative overflow-hidden rounded-xl aspect-[3/4] lg:aspect-auto lg:h-[640px]">
            <img
              src={`${import.meta.env.BASE_URL}founder-prakash.jpg`}
              alt="Prakash Sathiyadharan crafting instruments in his workshop"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <p className="absolute bottom-4 left-4 right-4 text-center text-white/80 text-xs bg-charcoal/50 backdrop-blur-sm rounded-lg py-2 px-3">
              Prakash Sathiyadharan, Founder & Master Craftsman
            </p>
          </div>

          {/* Text Column */}
          <div ref={textRef}>
            <p className="overline text-terracotta mb-3">Our Story</p>
            <h2 className="text-charcoal mb-6">From Village Youth to Sound Healer</h2>

            <div className="space-y-4 text-warmgray leading-relaxed mb-8">
              <p>
                Prakash began his music career at age 16, dedicating 16 years to Svaram — Auroville's renowned musical instrument unit. There, he mastered the art of crafting instruments that heal.
              </p>
              <p>
                After earning a degree in West African drumming and performing internationally across Thailand and Vietnam, he founded Sargam Musicals to create sound healing instruments and teach village youth the craft as a livelihood.
              </p>
              <p>
                The name 'Sargam' refers to the syllables of raga — the foundational notes of Indian classical music: Sa, Re, Ga, Ma...
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <p className="font-serif text-2xl lg:text-3xl text-sage mb-1">{stat.number}</p>
                  <p className="text-warmgray text-xs uppercase tracking-wider">{stat.label}</p>
                  {i < stats.length - 1 && (
                    <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-warmborder" />
                  )}
                </div>
              ))}
            </div>

            <a href="#products" className="btn-primary inline-flex">
              Meet Our Artisans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
