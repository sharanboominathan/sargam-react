import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = ['All', 'Chimes', 'Drums', 'Flutes', 'Rattles', 'Outdoor'];

const products = [
  { name: 'Swinging Chimes (6-bar)', category: 'Chimes', price: 'From ₹2,500', image: '/product-chimes.jpg', badge: 'In Stock' },
  { name: 'Ohm Healing Chimes', category: 'Chimes', price: 'Request Quote', image: '/product-chimes.jpg', badge: 'Made to Order' },
  { name: 'Clay Ocarina', category: 'Flutes', price: 'From ₹1,800', image: '/product-beginner.jpg', badge: 'In Stock' },
  { name: 'Frame Drum (14")', category: 'Drums', price: 'From ₹3,200', image: '/product-drum.jpg', badge: 'In Stock' },
  { name: 'Rain Rattle', category: 'Rattles', price: 'From ₹950', image: '/product-beginner.jpg', badge: 'In Stock' },
  { name: 'Glassophone', category: 'Chimes', price: 'Request Quote', image: '/product-chimes.jpg', badge: 'Made to Order' },
  { name: 'Outdoor Xylophone', category: 'Outdoor', price: 'Request Quote', image: '/product-outdoor.jpg', badge: 'Made to Order' },
  { name: 'Angel Wind Chimes', category: 'Chimes', price: 'From ₹4,500', image: '/product-chimes.jpg', badge: 'In Stock' },
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
                  <button className="btn-primary flex-1 text-xs py-2.5 px-4 min-h-[40px]">
                    Enquire
                  </button>
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
