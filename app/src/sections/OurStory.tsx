import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '2019', label: 'Founded' },
  { number: '5', label: 'Elements Tuned' },
  { number: '16+', label: 'Years of Craft' },
  { number: '🌏', label: 'India, Vietnam & Nepal' },
];

const teamMembers = [
  {
    name: 'Prakash Sathiyadharan',
    role: 'Founder & Master Craftsman',
    bio: 'Musician, instrument maker & sound healer. Specialised in Djembe, Silambam, Kalaripayattu & Kolattam. Travelled across India, Vietnam & Nepal.',
    image: 'team-prakash.png',
    gender: 'male',
  },
  {
    name: 'Keerthi Prakash',
    role: 'Administration',
    bio: 'B.A. English Literature, Meenakshi College, Chennai. Handles orders, programs & official communications since day one of Sargam.',
    image: 'team-keerthi.png',
    gender: 'female',
  },
  {
    name: 'Veeramani',
    role: 'Team Member',
    bio: 'A dedicated pillar of support at Sargam Musicals.',
    image: 'team-male-placeholder.png',
    gender: 'male',
  },
  {
    name: 'Thamizh Selvan',
    role: 'Team Member',
    bio: 'A dedicated pillar of support at Sargam Musicals.',
    image: 'team-male-placeholder.png',
    gender: 'male',
  },
  {
    name: 'Sangavi',
    role: 'Team Member',
    bio: 'A dedicated pillar of support at Sargam Musicals.',
    image: 'team-female-placeholder.png',
    gender: 'female',
  },
  {
    name: 'Rithika',
    role: 'Team Member',
    bio: 'A dedicated pillar of support at Sargam Musicals.',
    image: 'team-female-placeholder.png',
    gender: 'female',
  },
  {
    name: 'Kalai Mani',
    role: 'Team Member',
    bio: 'A dedicated pillar of support at Sargam Musicals.',
    image: 'team-male-placeholder.png',
    gender: 'male',
  },
];

const OurStory: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useScrollReveal<HTMLDivElement>({ direction: 'right', distance: 50 });
  const teamRef = useScrollReveal<HTMLDivElement>({ direction: 'up', distance: 40 });

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
    <>
      {/* ── Our Story ── */}
      <section id="story" className="section-padding bg-sage-light">
        <div className="content-container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Image Column */}
            <div ref={imageRef} className="relative overflow-hidden rounded-xl aspect-[3/4] lg:aspect-auto lg:h-[640px]">
              <img
                src={`${import.meta.env.BASE_URL}team-prakash.png`}
                alt="Prakash Sathiyadharan – Founder of Sargam Musicals"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <p className="absolute bottom-4 left-4 right-4 text-center text-white/80 text-xs bg-charcoal/50 backdrop-blur-sm rounded-lg py-2 px-3">
                Prakash Sathiyadharan — Founder & Master Craftsman
              </p>
            </div>

            {/* Text Column */}
            <div ref={textRef}>
              <p className="overline text-terracotta mb-3">Our Story</p>
              <h2 className="text-charcoal mb-6">From Pondicherry's Stage to Sound Healing</h2>

              <div className="space-y-4 text-warmgray leading-relaxed mb-8">
                <p>
                  Prakash Sathiyadharan, a passionate youth, began his musical journey at MCC — a vibrant cultural centre in Pondicherry — involving himself in performances and cultural activities as a teenager.
                </p>
                <p>
                  He was soon picked up by a company in Auroville to work on sound healing instruments. Driven by an unquenchable passion for music, he left formal education behind and dedicated 16 full years to mastering the craft — as both an instrument maker and a musician.
                </p>
                <p>
                  In 2019, Prakash ventured out on his own and founded <strong>Sargam Musicals</strong>. The name reflects the Indian classical raga — the syllables Sa, Re, Ga, Ma — which are used to tune every instrument they create. Their instruments are tuned to the five elements: Air, Water, Fire, Space &amp; Earth, each connected to the emotions of classical ragas.
                </p>
                <p>
                  Starting from paper-bowl Kalimbas and small wind chimes, Sargam grew through social media into a recognised maker of sound healing instruments, sound sonoriums, and outdoor musical installations — installed at places like Delhi International Experiential School and public parks in Jaipur.
                </p>
                <p>
                  Prakash is also well versed in martial arts — <em>Silambam, Kalaripayattu &amp; Kolattam</em> — and is a specialist West African Djembe player, widely celebrated for his drumming skill. He has performed across India and in countries including Vietnam and Nepal.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <p className="font-serif text-2xl lg:text-3xl text-sage mb-1">{stat.number}</p>
                    <p className="text-warmgray text-xs uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>

              <a href="#products" className="btn-primary inline-flex">
                Explore Our Instruments
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet the Team ── */}
      <section id="team" className="section-padding bg-cream">
        <div className="content-container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="overline text-terracotta mb-3">The People Behind the Music</p>
            <h2 className="text-charcoal">Meet Our Team</h2>
            <p className="text-warmgray mt-4 max-w-xl mx-auto leading-relaxed">
              Our pillars of support — each one passionate, each one essential to crafting the Sargam experience.
            </p>
          </div>

          <div ref={teamRef}>
            {/* Founders Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-10">
              {teamMembers.slice(0, 2).map((member) => (
                <TeamCard key={member.name} member={member} featured />
              ))}
            </div>

            {/* Team Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {teamMembers.slice(2).map((member) => (
                <TeamCard key={member.name} member={member} featured={false} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ─── Team Card Component ─── */
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  gender: string;
}

const TeamCard: React.FC<{ member: TeamMember; featured: boolean }> = ({ member, featured }) => {
  return (
    <div
      className={`group flex flex-col items-center text-center rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 ${
        featured ? 'p-6' : 'p-4'
      }`}
    >
      {/* Photo */}
      <div
        className={`relative overflow-hidden rounded-xl mb-4 ${
          featured ? 'w-40 h-40 sm:w-48 sm:h-48' : 'w-28 h-28 sm:w-32 sm:h-32'
        }`}
      >
        <img
          src={`${import.meta.env.BASE_URL}${member.image}`}
          alt={member.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Overlay ring */}
        <div className="absolute inset-0 rounded-xl ring-2 ring-sage/20 group-hover:ring-sage/60 transition-all duration-300" />
      </div>

      {/* Info */}
      <h4 className={`text-charcoal font-semibold leading-tight mb-1 ${featured ? 'text-lg' : 'text-sm'}`}>
        {member.name}
      </h4>
      <p className={`text-terracotta font-medium uppercase tracking-wider mb-2 ${featured ? 'text-xs' : 'text-[10px]'}`}>
        {member.role}
      </p>
      {featured && (
        <p className="text-warmgray text-xs leading-relaxed">{member.bio}</p>
      )}
    </div>
  );
};

export default OurStory;
