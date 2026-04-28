import React from 'react';
import { Sparkles, Music, Hammer, Calendar, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const programs = [
  {
    icon: Sparkles,
    title: 'Sound Healing Sessions',
    description: 'Individual and group sound baths using handcrafted instruments tuned to specific frequencies for chakra balancing and deep relaxation.',
    meta: '60-90 min · Groups up to 12',
  },
  {
    icon: Music,
    title: 'Drumming Circles',
    description: 'Community drumming experiences rooted in West African tradition. No experience needed — just bring your open heart.',
    meta: '90 min · All skill levels',
  },
  {
    icon: Hammer,
    title: 'Instrument Making Workshops',
    description: 'Learn the craft of sound healing instrument creation from Prakash and his team. Take home your own handcrafted piece.',
    meta: 'Full day · Small groups',
  },
];

const events = [
  { text: 'Next Sound Healing Workshop: May 15, 2026', color: 'bg-terracotta/10 text-terracotta' },
  { text: 'Corporate Wellness Programs Available', color: 'bg-softblue/10 text-softblue' },
];

const Programs: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: 'up' });
  const cardsRef = useScrollReveal<HTMLDivElement>({
    direction: 'up',
    childSelector: '.program-card',
    stagger: 0.15,
  });
  const eventsRef = useScrollReveal<HTMLDivElement>({
    direction: 'up',
    childSelector: '.event-pill',
    stagger: 0.1,
  });

  return (
    <section id="programs" className="section-padding bg-cream">
      <div className="content-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <p className="overline text-sage mb-3">Experiences</p>
          <h2 className="text-charcoal mb-4">Workshops & Programs</h2>
          <p className="text-warmgray max-w-[560px] mx-auto text-lg leading-relaxed">
            Immerse yourself in the healing power of sound through our guided sessions
          </p>
        </div>

        {/* Program Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10"
        >
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <div
                key={i}
                className="program-card bg-white rounded-xl border border-warmborder/50 p-6 lg:p-8 transition-all duration-400 hover:border-sage/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-charcoal/5"
              >
                <div className="w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-sage" />
                </div>
                <h3 className="text-charcoal mb-3">{program.title}</h3>
                <p className="text-warmgray text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <p className="text-warmgray text-xs">{program.meta}</p>
              </div>
            );
          })}
        </div>

        {/* Event Pills */}
        <div ref={eventsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {events.map((event, i) => (
            <div
              key={i}
              className={`event-pill flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium ${event.color}`}
            >
              <Calendar className="w-4 h-4 flex-shrink-0" />
              {event.text}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href="#contact" className="inline-flex items-center gap-2 text-teal font-medium hover:gap-3 transition-all duration-300">
            <Users className="w-4 h-4" />
            View All Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
