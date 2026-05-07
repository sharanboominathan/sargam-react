import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import sargamLogo from '@/media/sargam.png';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Our Story', href: '#story' },
  { label: 'Programs', href: '#programs' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 lg:h-[72px] transition-all duration-500 bg-white/50 backdrop-blur-md border-b border-warmborder shadow-sm`}
      >
        <div className="content-container h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-2 group"
          >
            <img 
              src={sargamLogo} 
              alt="Sargam Musicals Logo" 
              className="h-12 lg:h-14 w-auto object-contain"
            />
            <span
              className={`font-serif text-xl lg:text-2xl font-medium tracking-tight transition-colors duration-300 text-charcoal`}
            >
              {/* Sargam Musicals */}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`relative text-sm font-medium uppercase tracking-[0.05em] transition-colors duration-300 group ${
                  activeSection === link.href.slice(1)
                    ? 'text-sage'
                    : 'text-charcoal hover:text-sage'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-1/2 h-[2px] bg-current transition-all duration-300 -translate-x-1/2 ${
                    activeSection === link.href.slice(1)
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/919360666448"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-colors duration-300 text-charcoal hover:text-sage`}
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }} className="btn-primary">
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors text-charcoal`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="font-serif text-3xl text-charcoal hover:text-sage transition-colors"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.4s ease-out ${0.1 * i}s`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
            className="btn-primary mt-4"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transition: 'opacity 0.4s ease-out 0.5s',
            }}
          >
            Enquire Now
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
