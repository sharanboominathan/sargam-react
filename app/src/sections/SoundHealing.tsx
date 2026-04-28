import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const SoundHealing: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const sectionRef = useScrollReveal<HTMLDivElement>({ direction: 'fade', duration: 1 });

  return (
    <section className="section-padding bg-forest relative overflow-hidden">
      {/* Decorative subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-sage" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-sage" />
      </div>

      <div ref={sectionRef} className="content-container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[900px] mx-auto text-center">
          {/* Video Thumbnail */}
          <div
            className="relative aspect-video rounded-xl overflow-hidden mb-10 cursor-pointer group"
            onClick={() => setShowVideo(true)}
          >
            <img
              src="/video-thumbnail.jpg"
              alt="Sound healing session with gong and singing bowls"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-charcoal/30 transition-opacity group-hover:bg-charcoal/20" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <Play className="w-8 h-8 text-teal ml-1" fill="currentColor" />
              </div>
            </div>

            {/* Ring animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 rounded-full border-2 border-white/40 animate-ping" style={{ animationDuration: '2s' }} />
            </div>
          </div>

          {/* Quote */}
          <blockquote className="font-serif text-xl sm:text-2xl lg:text-[1.75rem] text-white italic leading-relaxed mb-4">
            "Different kinds of instruments producing various soothing rhythms are played one after the other in order — creating a journey from tension to deep relaxation."
          </blockquote>
          <p className="text-white/60 text-sm mb-8">— Prakash Sathiyadharan, Founder</p>

          <a href="#programs" className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-forest text-sm font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-sage-light hover:shadow-lg min-h-[48px]">
            Book a Healing Session
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Close video"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="w-full max-w-4xl aspect-video bg-charcoal rounded-xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white/50 text-lg">Video content coming soon</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SoundHealing;
