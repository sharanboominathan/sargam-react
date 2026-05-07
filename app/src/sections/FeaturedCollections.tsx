import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

import imgChimes from '@/media/Products/Swinging_chimes_9_bars-removebg-preview.png';
import imgDrums from '@/media/Products/Frame-drum-bg-removed.png';
import imgOutdoor from '@/media/Products/Xylophone-removebg-preview.png';
import imgBeginner from '@/media/Products/Clay_ocarina-removebg-preview1.png';

const collections = [
  {
    title: 'Chimes for Meditation',
    description: 'Hand-tuned aluminum chimes for meditation and sound baths',
    image: imgChimes,
    badge: 'Most Popular',
    badgeColor: 'bg-terracotta',
  },
  {
    title: 'Drums for Healing Circles',
    description: 'West African inspired drums for group ceremonies',
    image: imgDrums,
    badge: null,
    badgeColor: '',
  },
  {
    title: 'Outdoor Musical Gardens',
    description: 'Weather-resistant instruments for parks and schools',
    image: imgOutdoor,
    badge: null,
    badgeColor: '',
  },
  {
    title: "Beginner's Collection",
    description: 'Start your sound healing journey with curated starter sets',
    image: imgBeginner,
    badge: 'Staff Pick',
    badgeColor: 'bg-teal',
  },
];

const FeaturedCollections: React.FC = () => {
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: 'up' });
  const gridRef = useScrollReveal<HTMLDivElement>({
    direction: 'up',
    childSelector: '.collection-card',
    stagger: 0.15,
  });

  return (
    <section className="section-padding bg-cream">
      <div className="content-container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <p className="overline text-sage mb-3">Our Instruments</p>
          <h2 className="text-charcoal mb-4">Curated Collections for Healing</h2>
          <p className="text-warmgray max-w-[600px] mx-auto text-lg leading-relaxed">
            Each instrument is handcrafted from natural materials and tuned for specific healing frequencies
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {collections.map((item, index) => (
            <div
              key={index}
              className="collection-card group bg-white rounded-xl overflow-hidden border border-warmborder/50 transition-all duration-500 hover:shadow-lg hover:shadow-charcoal/5 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {item.badge && (
                  <span
                    className={`absolute top-3 left-3 ${item.badgeColor} text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6">
                <h4 className="text-charcoal mb-2">{item.title}</h4>
                <p className="text-warmgray text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sage text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
