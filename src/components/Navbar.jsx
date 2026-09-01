import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Globe } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { siteConfig } from '../config/site';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLanguage, openModal, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navHome'), href: '#hero' },
    { name: t('navServices'), href: '#layanan' },
    { name: t('navAbout'), href: '#tentang' },
    { name: t('navTestimonials'), href: '#testimoni' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0a0a0f]/90 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/50 py-3' 
        : 'bg-[#0a0a0f]/60 backdrop-blur-md border-b border-white/5 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#ff4d5e] to-[#ff8577] opacity-70 group-hover:opacity-100 blur-sm transition duration-300"></div>
              <img 
                src={logo} 
                alt="Sipa Store Logo" 
                className="relative w-10 h-10 rounded-full object-cover border border-white/20"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-wider text-white group-hover:text-gradient-red transition-all duration-300">
                SIPA<span className="text-[#ff4d5e]">STORE</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-widest -mt-1 uppercase">
                Official Digital Store
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-gray-300 hover:text-[#ff4d5e] text-sm font-semibold tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action: Language Switcher & Chat Admin Button */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Language Switcher Button */}
            <button
              onClick={() => setLanguage(lang === 'id' ? 'en' : 'id')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181826] hover:bg-[#222235] border border-white/15 text-gray-300 hover:text-white text-xs font-bold transition-all"
              title="Change Language / Ganti Bahasa"
            >
              <span>{lang === 'id' ? '🇮🇩 ID' : '🇬🇧 EN'}</span>
              <Globe className="w-3.5 h-3.5 text-[#ff4d5e]" />
            </button>

            {/* Chat Admin Button */}
            <a
              href={siteConfig.getWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff4d5e] to-[#ff8577] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#ff4d5e]/25 hover:shadow-[#ff4d5e]/40 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t('chatAdmin')}</span>
            </a>
          </div>

          {/* Mobile Actions (Language Toggle + Hamburger Button) */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setLanguage(lang === 'id' ? 'en' : 'id')}
              className="px-2.5 py-1.5 rounded-lg bg-[#181826] border border-white/15 text-xs font-bold text-gray-200"
            >
              {lang === 'id' ? '🇮🇩 ID' : '🇬🇧 EN'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0d14]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-gray-200 hover:text-white hover:bg-[#ff4d5e]/15 font-semibold text-base transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 space-y-2">
            <button
              onClick={() => { openModal(); setIsOpen(false); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#181826] border border-white/15 text-gray-200 font-bold text-sm"
            >
              <Globe className="w-4 h-4 text-[#ff4d5e]" />
              <span>Pilih Bahasa / Select Language ({lang.toUpperCase()})</span>
            </button>

            <a
              href={siteConfig.getWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#ff4d5e] to-[#ff8577] text-white font-bold text-center text-sm tracking-wide shadow-md shadow-[#ff4d5e]/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t('chatAdmin')} WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
