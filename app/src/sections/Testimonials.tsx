import React, { useState } from 'react';
import { Star, Hand, Leaf, TreePine, MapPin, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    quote: "The chimes from Sargam have transformed my yoga studio's meditation sessions. The quality and resonance is unmatched.",
    name: 'Priya M.',
    role: 'Yoga Studio Owner',
    initials: 'PM',
  },
  {
    quote: "We installed a musical garden from Sargam in our school playground. Children absolutely love it — and so do the teachers!",
    name: 'Rahul K.',
    role: 'School Principal',
    initials: 'RK',
  },
  {
    quote: "Prakash's sound healing session was a profound experience. His instruments carry such pure, intentional energy.",
    name: 'Elena T.',
    role: 'Wellness Practitioner',
    initials: 'ET',
  },
];

const trustBadges = [
  { icon: Hand, label: 'Handcrafted in India' },
  { icon: Leaf, label: 'Natural Materials' },
  { icon: TreePine, label: 'Sustainable Wood' },
  { icon: MapPin, label: 'Auroville Crafted' },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: 'up' });
  const badgesRef = useScrollReveal<HTMLDivElement>({
    direction: 'up',
    childSelector: '.trust-badge',
    stagger: 0.1,
  });
  const mediaRef = useScrollReveal<HTMLDivElement>({ direction: 'up' });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="content-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <p className="overline text-terracotta mb-3">Testimonials</p>
          <h2 className="text-charcoal">Voices from Our Community</h2>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-16">
          {/* Desktop: All visible */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="text-center">
                <Quote className="w-8 h-8 text-sage/30 mx-auto mb-4" />
                <p className="font-serif text-lg text-charcoal italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-terracotta fill-terracotta" />
                  ))}
                </div>
                <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-2">
                  <span className="text-sage text-sm font-semibold">{t.initials}</span>
                </div>
                <p className="text-charcoal text-sm font-semibold">{t.name}</p>
                <p className="text-warmgray text-xs">{t.role}</p>
              </div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <div className="text-center">
              <Quote className="w-8 h-8 text-sage/30 mx-auto mb-4" />
              <p className="font-serif text-lg text-charcoal italic leading-relaxed mb-6 transition-opacity duration-300">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-terracotta fill-terracotta" />
                ))}
              </div>
              <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-2">
                <span className="text-sage text-sm font-semibold">
                  {testimonials[activeIndex].initials}
                </span>
              </div>
              <p className="text-charcoal text-sm font-semibold">
                {testimonials[activeIndex].name}
              </p>
              <p className="text-warmgray text-xs">{testimonials[activeIndex].role}</p>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-warmborder flex items-center justify-center text-charcoal hover:bg-sage-light transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === activeIndex ? 'bg-sage' : 'bg-warmborder'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-warmborder flex items-center justify-center text-charcoal hover:bg-sage-light transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div
          ref={badgesRef}
          className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 mb-16"
        >
          {trustBadges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div key={i} className="trust-badge flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-sage" />
                </div>
                <span className="text-warmgray text-xs uppercase tracking-wider">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Media Mention */}
        <div ref={mediaRef} className="max-w-xl mx-auto text-center border-t border-warmborder pt-10">
          <p className="overline text-warmgray mb-3">As Featured In</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="bg-charcoal text-white px-4 py-2 rounded font-bold text-lg tracking-tight">
              DT <span className="text-sage">NEXT</span>
            </div>
            <div className="text-left">
              <p className="text-charcoal text-sm font-medium italic">
                "Fostering gifts of music to the subconscious mind"
              </p>
              <p className="text-warmgray text-xs">January 26, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
