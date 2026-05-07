import React from 'react';

import sargamFooterLogo from '@/media/sargam footer.png';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Our Story', href: '#story' },
  { label: 'Programs', href: '#programs' },
  { label: 'Musical Garden', href: '#' },
  { label: 'Contact', href: '#contact' },
];

const Footer: React.FC = () => {
  const contentRef = useScrollReveal<HTMLDivElement>({ direction: 'up', stagger: 0.1, childSelector: '.footer-col' });

  const scrollTo = (href: string) => {
    if (href === '#') return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest pt-16 lg:pt-20 pb-8 lg:pb-10">
      <div ref={contentRef} className="content-container px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12">
          {/* Brand Column */}
          <div className="footer-col">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={sargamFooterLogo} 
                alt="Sargam Musicals Logo" 
                className="h-16 md:h-20 w-auto object-contain"
              />
              {/* <span className="font-serif text-xl text-white">Sargam Musicals</span> */}
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Handcrafted sound healing instruments from Auroville, India
            </p>
          </div>

          {/* Links Column */}
          <div className="footer-col">
            <h4 className="text-white mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://wa.me/919360666448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  WhatsApp: +91 93606 66448
                </a>
              </li>
              <li>
                <a
                  href="mailto:sargammusicalinstrument@gmail.com"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  sargammusicalinstrument@gmail.com
                </a>
              </li>
              <li className="text-white/60">
                Auroville, Puducherry, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; 2026 Sargam Musicals. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Made with intention in Auroville
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
