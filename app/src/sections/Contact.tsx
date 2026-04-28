import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const leftRef = useScrollReveal<HTMLDivElement>({ direction: 'left', distance: 40 });
  const rightRef = useScrollReveal<HTMLDivElement>({ direction: 'right', distance: 40 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a backend
    alert('Thank you for your enquiry! We will contact you within 24 hours.');
    setFormData({ firstName: '', email: '', phone: '', interest: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="content-container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div ref={leftRef}>
            <p className="overline text-sage mb-3">Get in Touch</p>
            <h2 className="text-charcoal mb-6">Begin Your Sound Healing Journey</h2>
            <p className="text-warmgray leading-relaxed mb-8">
              Whether you're looking for a personal instrument, planning a musical garden, or interested in our workshops — we'd love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="space-y-5 mb-8">
              <a
                href="https://wa.me/919360666448"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="text-xs text-warmgray uppercase tracking-wider">WhatsApp</p>
                  <p className="text-charcoal font-medium">+91 93606 66448</p>
                </div>
              </a>

              <a href="tel:+919080111076" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-colors">
                  <Phone className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="text-xs text-warmgray uppercase tracking-wider">Phone</p>
                  <p className="text-charcoal font-medium">+91 90801 11076</p>
                </div>
              </a>

              <a
                href="mailto:sargammusicalinstrument@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-colors">
                  <Mail className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="text-xs text-warmgray uppercase tracking-wider">Email</p>
                  <p className="text-charcoal font-medium text-sm">
                    sargammusicalinstrument@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="text-xs text-warmgray uppercase tracking-wider">Address</p>
                  <p className="text-charcoal text-sm leading-relaxed">
                    1st Floor, Isaiambalam Road, Alankuppam,
                    <br />
                    Auroville, Puducherry-605111, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div ref={rightRef}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-1.5">
                  First Name <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-cream border border-warmborder rounded-lg text-charcoal placeholder:text-warmgray/60 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                  Email <span className="text-terracotta">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-cream border border-warmborder rounded-lg text-charcoal placeholder:text-warmgray/60 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-cream border border-warmborder rounded-lg text-charcoal placeholder:text-warmgray/60 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all"
                  placeholder="+91 ..."
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-charcoal mb-1.5">
                  Product Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-cream border border-warmborder rounded-lg text-charcoal focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all appearance-none"
                >
                  <option value="">Select an interest</option>
                  <option value="chimes">Chimes & Bars</option>
                  <option value="drums">Drums & Percussion</option>
                  <option value="flutes">Flutes & Wind</option>
                  <option value="outdoor">Outdoor Musical Garden</option>
                  <option value="workshop">Workshop/Program</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                  Message <span className="text-terracotta">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-cream border border-warmborder rounded-lg text-charcoal placeholder:text-warmgray/60 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all resize-none"
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              <button type="submit" className="btn-primary w-full min-h-[48px]">
                Send Enquiry
              </button>

              <p className="text-warmgray text-xs text-center">
                We typically respond within 24 hours via WhatsApp or email.
              </p>
            </form>

            {/* Map Placeholder */}
            <div className="mt-8 aspect-video rounded-xl overflow-hidden bg-sage/10 flex items-center justify-center relative">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-sage/40 mx-auto mb-2" />
                <p className="text-sage font-medium">Auroville, India</p>
                <p className="text-warmgray text-xs mt-1">Puducherry-605111</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
