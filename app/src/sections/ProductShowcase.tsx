import React, { useState, useRef } from 'react';
import { Volume2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Product images
import imgSwingingChimes6 from '@/media/Products/Swinging_chimes_6_bars-removebg-preview.png';
import imgSwingingChimes9 from '@/media/Products/Swinging_chimes_9_bars-removebg-preview.png';
import imgSwingingChimes12 from '@/media/Products/Swinging_chimes_12_bars-removebg-preview.png';
import imgBrassWindChimes from '@/media/Products/Brass_wind_chimes-removebg-preview.png';
import imgAluminumWindChimes from '@/media/Products/Aluminum Wind chimes.png';
import imgWindChimesBlack from '@/media/Products/Wind chimes black.png';
import imgDoorChimes from '@/media/Products/Door chimes.png';
import imgTupeloChimes from '@/media/Products/Tupelo_chimes-removebg-preview.png';
import imgAngelChimes from '@/media/Products/Angel chimes bg removed - Copy.png';
import imgBrassPlateGong from '@/media/Products/Brass_Plate_gong-removebg-preview - Copy.png';
import imgAluminumGong from '@/media/Products/Aluminungong.png';
import imgClayOcarina from '@/media/Products/Clay_ocarina-removebg-preview(1).png';
import imgClayBirdFlute from '@/media/Products/Clay_Bird_flute-removebg-preview.png';
import imgClayWhistle from '@/media/Products/Clay__whistle_-removebg-preview.png';
import imgDoubleDroneFlute from '@/media/Products/Double_drone_flute-removebg-preview.png';
import imgSvaraveena from '@/media/Products/Svaraveena-removebg-preview(1).png';
import imgBulroara from '@/media/Products/Bulroara-removebg-preview.png';
import imgWindSound from '@/media/Products/Wind_sound-removebg-preview.png';
import imgFrameDrum from '@/media/Products/Frame drum bg removed.png';
import imgStormDrumBig from '@/media/Products/Storm drum Big.png';
import imgStormDrumBlue from '@/media/Products/Storm drum blue.png';
import imgThunderDrum from '@/media/Products/Thunder drum drum large.png';
import imgHopeRattle from '@/media/Products/Hope_rattle-removebg-preview.png';
import imgSeaRattle from '@/media/Products/Sea_rattle-removebg-preview.png';
import imgRubbingTubes from '@/media/Products/Rubbing tubes.png';
import imgGlassophone from '@/media/Products/Glassophone bg removed.png';
import imgMetallophone from '@/media/Products/Metallophone - Copy.png';
import imgSingleResonator from '@/media/Products/Single_resonator-removebg-preview.png';
import imgXylophone from '@/media/Products/Xylophone-removebg-preview.png';
import imgSwaramandalam from '@/media/Products/swaramandalam.png';
import imgSoundBed from '@/media/Products/Sound bed.png';
import imgShruthiThaali from '@/media/Products/Shruthi thaali set.png';
import imgPulseTubeBlack from '@/media/Products/Pulse tube black - Copy.png';
import imgPulseTubeSetBlack from '@/media/Products/Pulse tube set (black).png';
import imgPulseTubeSetSilver from '@/media/Products/Pulse tube set silver.png';
import imgOceanDrum from '@/media/Products/Ocean drum.png';
import imgOhmChimes from '@/media/Products/Ohm-removebg-preview.png';
import imgRodChimes from '@/media/Products/RC-removebg-preview.png';
import imgRotatingChimes from '@/media/Products/rotating_chimes-removebg-preview.png';

// Audio files
import audioSwingingChimes6 from '@/media/Audio/Swinging chimes 6 bars.mpeg';
import audioSwingingChimes9 from '@/media/Audio/Swinging chimes 9 bars.mpeg';
import audioSwingingChimes12 from '@/media/Audio/Swinging chimes 12 bars.mpeg';
import audioBrassWindChimes from '@/media/Audio/Brass wind chime 12inch.mpeg';
import audioAluminumWindChimes from '@/media/Audio/Aluminium wind chime 0.75 inch.mpeg';
import audioWindChimesBlack from '@/media/Audio/Aluminum wind chime 1 inch.mpeg';
import audioDoorChimes from '@/media/Audio/Door chimes.mpeg';
import audioAluminumGong from '@/media/Audio/Aluminium gong.mpeg';
import audioHopeRattle from '@/media/Audio/Hope rattle.mpeg';
import audioSeaRattleBig from '@/media/Audio/Sea rattle big.mpeg';
import audioRubbingTubes from '@/media/Audio/Rubbing tube.mpeg';
import audioGlassophone from '@/media/Audio/Glassophone.mpeg';
import audioMetallophone from '@/media/Audio/Metallophone with resonater 1 inch.mpeg';
import audioSingleResonator from '@/media/Audio/Single resonater.mpeg';
import audioSwaramandalam from '@/media/Audio/Svaramandal.mpeg';
import audioStormDrumBlue from '@/media/Audio/Storm drum small.mpeg';
import audioPulseTube from '@/media/Audio/Pulse tubes.mpeg';
import audioPulseTubeSet from '@/media/Audio/Pulse tubes - set.mpeg';
import audioOceanDrum from '@/media/Audio/Ocean drum large.mpeg';
import audioOhmChimes from '@/media/Audio/Ohm chimes 1 inch.mpeg';
import audioRodChimes from '@/media/Audio/Rod chimes 8 mm.mpeg';
import audioRotatingChimes from '@/media/Audio/Rotating chimes.mpeg';

const categories = ['All', 'Chimes', 'Drums', 'Flutes', 'Rattles', 'Outdoor', 'Healing'];

const products = [
  // Chimes
  { name: 'Swinging Chimes (6-bar)', category: 'Chimes', price: 'From ₹2,500', image: imgSwingingChimes6, badge: 'In Stock', audio: audioSwingingChimes6 },
  { name: 'Swinging Chimes (9-bar)', category: 'Chimes', price: 'From ₹3,200', image: imgSwingingChimes9, badge: 'In Stock', audio: audioSwingingChimes9 },
  { name: 'Swinging Chimes (12-bar)', category: 'Chimes', price: 'From ₹4,200', image: imgSwingingChimes12, badge: 'In Stock', audio: audioSwingingChimes12 },
  { name: 'Brass Wind Chimes', category: 'Chimes', price: 'From ₹1,800', image: imgBrassWindChimes, badge: 'In Stock', audio: audioBrassWindChimes },
  { name: 'Aluminum Wind Chimes', category: 'Chimes', price: 'From ₹1,600', image: imgAluminumWindChimes, badge: 'In Stock', audio: audioAluminumWindChimes },
  { name: 'Wind Chimes (Black)', category: 'Chimes', price: 'From ₹2,000', image: imgWindChimesBlack, badge: 'In Stock', audio: audioWindChimesBlack },
  { name: 'Door Chimes', category: 'Chimes', price: 'From ₹1,500', image: imgDoorChimes, badge: 'In Stock', audio: audioDoorChimes },
  { name: 'Tupelo Chimes', category: 'Chimes', price: 'From ₹2,800', image: imgTupeloChimes, badge: 'In Stock', audio: null },
  { name: 'Angel Chimes', category: 'Chimes', price: 'From ₹2,200', image: imgAngelChimes, badge: 'In Stock', audio: null },
  { name: 'Brass Plate Gong', category: 'Chimes', price: 'Request Quote', image: imgBrassPlateGong, badge: 'Made to Order', audio: null },
  { name: 'Aluminum Gong', category: 'Chimes', price: 'Request Quote', image: imgAluminumGong, badge: 'Made to Order', audio: audioAluminumGong },
  // Flutes & Wind
  { name: 'Clay Ocarina', category: 'Flutes', price: 'From ₹1,800', image: imgClayOcarina, badge: 'In Stock', audio: null },
  { name: 'Clay Bird Flute', category: 'Flutes', price: 'From ₹1,200', image: imgClayBirdFlute, badge: 'In Stock', audio: null },
  { name: 'Clay Whistle', category: 'Flutes', price: 'From ₹650', image: imgClayWhistle, badge: 'In Stock', audio: null },
  { name: 'Double Drone Flute', category: 'Flutes', price: 'From ₹3,800', image: imgDoubleDroneFlute, badge: 'In Stock', audio: null },
  { name: 'Svaraveena', category: 'Flutes', price: 'Request Quote', image: imgSvaraveena, badge: 'Made to Order', audio: null },
  { name: 'Bulroara', category: 'Flutes', price: 'From ₹1,100', image: imgBulroara, badge: 'In Stock', audio: null },
  { name: 'Wind Sound', category: 'Flutes', price: 'From ₹800', image: imgWindSound, badge: 'In Stock', audio: null },
  // Drums
  { name: 'Frame Drum', category: 'Drums', price: 'From ₹3,200', image: imgFrameDrum, badge: 'In Stock', audio: null },
  { name: 'Storm Drum (Large)', category: 'Drums', price: 'Request Quote', image: imgStormDrumBig, badge: 'Made to Order', audio: null },
  { name: 'Storm Drum (Blue)', category: 'Drums', price: 'Request Quote', image: imgStormDrumBlue, badge: 'Made to Order', audio: audioStormDrumBlue },
  { name: 'Thunder Drum (Large)', category: 'Drums', price: 'Request Quote', image: imgThunderDrum, badge: 'Made to Order', audio: null },
  // Rattles
  { name: 'Hope Rattle', category: 'Rattles', price: 'From ₹1,100', image: imgHopeRattle, badge: 'In Stock', audio: audioHopeRattle },
  { name: 'Sea Rattle', category: 'Rattles', price: 'From ₹1,300', image: imgSeaRattle, badge: 'In Stock', audio: audioSeaRattleBig },
  { name: 'Rubbing Tubes', category: 'Rattles', price: 'From ₹950', image: imgRubbingTubes, badge: 'In Stock', audio: audioRubbingTubes },
  // Healing / Outdoor
  { name: 'Glassophone', category: 'Healing', price: 'Request Quote', image: imgGlassophone, badge: 'Made to Order', audio: audioGlassophone },
  { name: 'Metallophone', category: 'Healing', price: 'Request Quote', image: imgMetallophone, badge: 'Made to Order', audio: audioMetallophone },
  { name: 'Single Resonator', category: 'Healing', price: 'Request Quote', image: imgSingleResonator, badge: 'Made to Order', audio: audioSingleResonator },
  { name: 'Outdoor Xylophone', category: 'Outdoor', price: 'Request Quote', image: imgXylophone, badge: 'Made to Order', audio: null },
  { name: 'Swaramandalam', category: 'Healing', price: 'Request Quote', image: imgSwaramandalam, badge: 'Made to Order', audio: audioSwaramandalam },
  { name: 'Sound Bed', category: 'Healing', price: 'Request Quote', image: imgSoundBed, badge: 'Made to Order', audio: null },
  { name: 'Shruthi Thaali Set', category: 'Healing', price: 'Request Quote', image: imgShruthiThaali, badge: 'Made to Order', audio: null },
  { name: 'Pulse Tube (Black)', category: 'Healing', price: 'From ₹2,200', image: imgPulseTubeBlack, badge: 'In Stock', audio: audioPulseTube },
  { name: 'Pulse Tube Set (Black)', category: 'Healing', price: 'From ₹5,500', image: imgPulseTubeSetBlack, badge: 'In Stock', audio: audioPulseTubeSet },
  { name: 'Pulse Tube Set (Silver)', category: 'Healing', price: 'From ₹5,500', image: imgPulseTubeSetSilver, badge: 'In Stock', audio: audioPulseTubeSet },
  // New products
  { name: 'Ocean Drum (Large)', category: 'Drums', price: 'Request Quote', image: imgOceanDrum, badge: 'Made to Order', audio: audioOceanDrum },
  { name: 'Ohm Chimes', category: 'Chimes', price: 'From ₹1,800', image: imgOhmChimes, badge: 'In Stock', audio: audioOhmChimes },
  { name: 'Rod Chimes', category: 'Chimes', price: 'From ₹2,200', image: imgRodChimes, badge: 'In Stock', audio: audioRodChimes },
  { name: 'Rotating Chimes', category: 'Chimes', price: 'From ₹3,500', image: imgRotatingChimes, badge: 'In Stock', audio: audioRotatingChimes },
];

const ProductShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  const handlePlayAudio = (audio: string | null, index: number) => {
    if (!audio) return;

    // Stop currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // If clicking the same product, just stop
    if (playingIndex === index) {
      setPlayingIndex(null);
      audioRef.current = null;
      return;
    }

    const newAudio = new Audio(audio);
    audioRef.current = newAudio;
    setPlayingIndex(index);
    newAudio.play();
    newAudio.onended = () => {
      setPlayingIndex(null);
      audioRef.current = null;
    };
  };

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
          {filteredProducts.map((product, i) => {
            const globalIndex = products.indexOf(product);
            const isPlaying = playingIndex === globalIndex;
            const hasAudio = !!product.audio;

            return (
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
                      onClick={() => handlePlayAudio(product.audio, globalIndex)}
                      disabled={!hasAudio}
                      title={hasAudio ? (isPlaying ? 'Stop' : 'Listen to sound') : 'No audio available'}
                      className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors ${
                        !hasAudio
                          ? 'border-warmborder/40 text-warmgray/30 cursor-not-allowed'
                          : isPlaying
                          ? 'border-teal bg-teal text-white'
                          : 'border-warmborder text-warmgray hover:border-sage hover:text-sage'
                      }`}
                      aria-label={isPlaying ? 'Stop audio' : 'Listen to sound'}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
