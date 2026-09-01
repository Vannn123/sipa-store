import React from 'react';
import logo from '../assets/images/logo.png';
import { ShieldCheck, MessageSquare, Instagram } from 'lucide-react';
import { siteConfig } from '../config/site';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#07070b] border-t border-white/10 text-gray-400 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Info & Social Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Sipa Store Logo" className="w-10 h-10 rounded-full border border-white/20" />
              <span className="font-extrabold text-2xl tracking-wider text-white">
                SIPA<span className="text-[#ff4d5e]">STORE</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 font-bold tracking-wide uppercase">
              {t('footerTagline')}
            </p>

            <p className="text-xs text-gray-400 leading-relaxed">
              {t('footerDesc')}
            </p>
          </div>

          {/* Social Badges: WhatsApp & Instagram */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.getWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#12121a] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff4d5e] hover:bg-[#ff4d5e]/20 transition-all shadow-md"
              aria-label="WhatsApp Admin"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#12121a] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#ff4d5e] hover:bg-[#ff4d5e]/20 transition-all shadow-md"
              aria-label="Instagram Sipa Store"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Copyright Area */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{t('copyright')}</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gray-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> {t('sslSecured')}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
