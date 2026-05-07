import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Product images
import imgSwingingChimes6 from '@/media/Products/Swinging_chimes_6_bars-removebg-preview.png';
import imgSwingingChimes9 from '@/media/Products/Swinging_chimes_9_bars-removebg-preview.png';
import imgSwingingChimes12 from '@/media/Products/Swinging_chimes_12_bars-removebg-preview.png';
import imgOhm from '@/media/Products/Ohm-removebg-preview.png';
import imgBrassWindChimes from '@/media/Products/Brass_wind_chimes-removebg-preview.png';
import imgCopperWindChimes from '@/media/Products/Copper-wind-chimes.png.png';
import imgDoorChimes from '@/media/Products/Door-chimes.png';
import imgRodChimes from '@/media/Products/Rod_chimes_-removebg-preview.png';
import imgTupeloChimes from '@/media/Products/Tupelo_chimes-removebg-preview.png';
import imgRotatingChimes from '@/media/Products/rotating_chimes-removebg-preview.png';
import imgClayOcarina from '@/media/Products/Clay_ocarina-removebg-preview1.png';
import imgClayBirdFlute from '@/media/Products/Clay_Bird_flute-removebg-preview.png';
import imgClayBirdFluteSmall from '@/media/Products/Clay_bird_flute_small-removebg-preview.png';
import imgClayWhistle from '@/media/Products/Clay__whistle_-removebg-preview.png';
import imgSingleDroneFlute from '@/media/Products/Single_drone_flute-removebg-preview.png';
import imgDoubleDroneFlute from '@/media/Products/Double_drone_flute-removebg-preview.png';
import imgSvaraveena from '@/media/Products/Svaraveena-removebg-preview1.png';
import imgBulroara from '@/media/Products/Bulroara-removebg-preview.png';
import imgFrameDrum from '@/media/Products/Frame-drum-bg-removed.png';
import imgOceanDrum from '@/media/Products/Ocean-drum.png';
import imgRainRattle from '@/media/Products/Rain_Rattle-removebg-preview.png';
import imgHopeRattle from '@/media/Products/Hope_rattle-removebg-preview.png';
import imgSeaRattle from '@/media/Products/Sea_rattle-removebg-preview.png';
import imgGlassophone from '@/media/Products/Glassophone-bg-removed.png';
import imgMetallophone from '@/media/Products/Metallophone-removebg-preview.png';
import imgMetallophoneNoRes from '@/media/Products/Metallophone_without_resonater-removebg-preview.png';
import imgXylophone from '@/media/Products/Xylophone-removebg-preview.png';
import imgSwaramandalam from '@/media/Products/swaramandalam.png';
import imgSoundBed from '@/media/Products/Sound-bed.png';
import imgSoundSpiral from '@/media/Products/Sound_spiral-removebg-preview.png';
import imgPulseTubeBlack from '@/media/Products/Pulse-tube-black.png';
import imgPulseTubeSetBlack from '@/media/Products/Pulse-tube-set-black.png';
import imgPulseTubeSetSilver from '@/media/Products/Pulse-tube-set-silver.png';
import imgRc from '@/media/Products/RC-removebg-preview.png';
import imgWindSound from '@/media/Products/Wind_sound-removebg-preview.png';

const categories = ['All', 'Chimes', 'Drums', 'Flutes', 'Rattles', 'Outdoor', 'Healing'];

const products = [
  // Chimes
  { name: 'Swinging Chimes (6-bar)', category: 'Chimes', price: 'From ₹2,500', image: imgSwingingChimes6, badge: 'In Stock' },
  { name: 'Swinging Chimes (9-bar)', category: 'Chimes', price: 'From ₹3,200', image: imgSwingingChimes9, badge: 'In Stock' },
  { name: 'Swinging Chimes (12-bar)', category: 'Chimes', price: 'From ₹4,200', image: imgSwingingChimes12, badge: 'In Stock' },
  { name: 'Ohm Healing Chimes', category: 'Chimes', price: 'Request Quote', image: imgOhm, badge: 'Made to Order' },
  { name: 'Brass Wind Chimes', category: 'Chimes', price: 'From ₹1,800', image: imgBrassWindChimes, badge: 'In Stock' },
  { name: 'Copper Wind Chimes', category: 'Chimes', price: 'From ₹2,200', image: imgCopperWindChimes, badge: 'In Stock' },
  { name: 'Door Chimes', category: 'Chimes', price: 'From ₹1,500', image: imgDoorChimes, badge: 'In Stock' },
  { name: 'Rod Chimes', category: 'Chimes', price: 'From ₹3,500', image: imgRodChimes, badge: 'In Stock' },
  { name: 'Tupelo Chimes', category: 'Chimes', price: 'From ₹2,800', image: imgTupeloChimes, badge: 'In Stock' },
  { name: 'Rotating Chimes', category: 'Chimes', price: 'Request Quote', image: imgRotatingChimes, badge: 'Made to Order' },
  // Flutes & Wind
  { name: 'Clay Ocarina', category: 'Flutes', price: 'From ₹1,800', image: imgClayOcarina, badge: 'In Stock' },
  { name: 'Clay Bird Flute', category: 'Flutes', price: 'From ₹1,200', image: imgClayBirdFlute, badge: 'In Stock' },
  { name: 'Clay Bird Flute (Small)', category: 'Flutes', price: 'From ₹950', image: imgClayBirdFluteSmall, badge: 'In Stock' },
  { name: 'Clay Whistle', category: 'Flutes', price: 'From ₹650', image: imgClayWhistle, badge: 'In Stock' },
  { name: 'Single Drone Flute', category: 'Flutes', price: 'From ₹2,400', image: imgSingleDroneFlute, badge: 'In Stock' },
  { name: 'Double Drone Flute', category: 'Flutes', price: 'From ₹3,800', image: imgDoubleDroneFlute, badge: 'In Stock' },
  { name: 'Svaraveena', category: 'Flutes', price: 'Request Quote', image: imgSvaraveena, badge: 'Made to Order' },
  { name: 'Bulroara', category: 'Flutes', price: 'From ₹1,100', image: imgBulroara, badge: 'In Stock' },
  { name: 'Wind Sound', category: 'Flutes', price: 'From ₹800', image: imgWindSound, badge: 'In Stock' },
  // Drums
  { name: 'Frame Drum', category: 'Drums', price: 'From ₹3,200', image: imgFrameDrum, badge: 'In Stock' },
  { name: 'Ocean Drum', category: 'Drums', price: 'From ₹4,500', image: imgOceanDrum, badge: 'In Stock' },
  // Rattles
  { name: 'Rain Rattle', category: 'Rattles', price: 'From ₹950', image: imgRainRattle, badge: 'In Stock' },
  { name: 'Hope Rattle', category: 'Rattles', price: 'From ₹1,100', image: imgHopeRattle, badge: 'In Stock' },
  { name: 'Sea Rattle', category: 'Rattles', price: 'From ₹1,300', image: imgSeaRattle, badge: 'In Stock' },
  // Healing / Outdoor
  { name: 'Glassophone', category: 'Healing', price: 'Request Quote', image: imgGlassophone, badge: 'Made to Order' },
  { name: 'Metallophone (with resonator)', category: 'Healing', price: 'Request Quote', image: imgMetallophone, badge: 'Made to Order' },
  { name: 'Metallophone (without resonator)', category: 'Healing', price: 'Request Quote', image: imgMetallophoneNoRes, badge: 'Made to Order' },
  { name: 'Outdoor Xylophone', category: 'Outdoor', price: 'Request Quote', image: imgXylophone, badge: 'Made to Order' },
  { name: 'Swaramandalam', category: 'Healing', price: 'Request Quote', image: imgSwaramandalam, badge: 'Made to Order' },
  { name: 'Sound Bed', category: 'Healing', price: 'Request Quote', image: imgSoundBed, badge: 'Made to Order' },
  { name: 'Sound Spiral', category: 'Healing', price: 'Request Quote', image: imgSoundSpiral, badge: 'Made to Order' },
  { name: 'Pulse Tube (Black)', category: 'Healing', price: 'From ₹2,200', image: imgPulseTubeBlack, badge: 'In Stock' },
  { name: 'Pulse Tube Set (Black)', category: 'Healing', price: 'From ₹5,500', image: imgPulseTubeSetBlack, badge: 'In Stock' },
  { name: 'Pulse Tube Set (Silver)', category: 'Healing', price: 'From ₹5,500', image: imgPulseTubeSetSilver, badge: 'In Stock' },
  { name: 'RC Instrument', category: 'Healing', price: 'Request Quote', image: imgRc, badge: 'Made to Order' },
];

const ProductShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const headerRef = useScrollReveal<HTMLDivElement>({ direction: 'up' });
  const gridRef = useScrollReveal<HTMLDivElement>({
    direction: 'up',
    childSelector: '.product-card',
    stagger: 0.1,
  });

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="section-padding bg-cream">
      <div className="content-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-10 lg:mb-14">
          <p className="overline text-sage mb-3">Shop</p>
          <h2 className="text-charcoal mb-4">Handcrafted Sound Healing Instruments</h2>
          <p className="text-warmgray max-w-[640px] mx-auto text-lg leading-relaxed">
            Every instrument is made to order with natural materials and hand-tuned for optimal resonance
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 min-h-[40px] ${
                activeCategory === cat
                  ? 'bg-teal text-white'
                  : 'bg-white text-charcoal border border-warmborder hover:border-sage hover:text-sage'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, i) => (
            <div
              key={`${product.name}-${i}`}
              className="product-card bg-white rounded-xl border border-warmborder/50 overflow-hidden transition-all duration-400 hover:shadow-lg hover:shadow-charcoal/5 hover:-translate-y-1 group"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Badge */}
                <span
                  className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${
                    product.badge === 'In Stock'
                      ? 'bg-sage/10 text-sage'
                      : 'bg-terracotta/10 text-terracotta'
                  }`}
                >
                  {product.badge}
                </span>
                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-5 py-2.5 bg-white text-charcoal text-sm font-medium rounded-lg hover:bg-sage-light transition-colors">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 lg:p-5">
                <p className="text-warmgray text-xs uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h4 className="text-charcoal mb-2">{product.name}</h4>
                <p className="text-teal font-semibold text-sm mb-3">{product.price}</p>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/919360666448?text=${encodeURIComponent(`Hi, I'm interested in the ${product.name}. Could you provide more details?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-xs py-2.5 px-4 min-h-[40px] flex items-center justify-center text-center"
                  >
                    Enquire
                  </a>
                  <button
                    className="w-10 h-10 rounded-lg border border-warmborder flex items-center justify-center text-warmgray hover:border-sage hover:text-sage transition-colors"
                    aria-label="Listen to sound"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
