import React from 'react';
import { ArrowDownRight, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import logo from '../assets/images/logo.png';
import { siteConfig } from '../config/site';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-hero">
      {/* Background Decorative Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ff4d5e]/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#ff8577]/10 blur-[90px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#181826]/90 border border-[#ff4d5e]/30 shadow-inner">
              <span className="text-[#ff4d5e] font-bold text-xs sm:text-sm animate-soft-pulse">⚡</span>
              <span className="text-gray-200 text-xs sm:text-sm font-semibold tracking-wide">
                {t('heroBadge')}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              {t('heroHeadline1')} <br className="hidden sm:inline" />
              <span className="text-gradient-red">{t('heroHeadlineGrad')}</span> {t('heroHeadline2')}
            </h1>

            {/* Paragraph Description */}
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t('heroDesc')}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#layanan"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff4d5e] to-[#ff8577] text-white font-extrabold text-base tracking-wide shadow-lg shadow-[#ff4d5e]/30 hover:shadow-[#ff4d5e]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>{t('btnViewServices')}</span>
                <ArrowDownRight className="w-5 h-5" />
              </a>

              <a
                href={siteConfig.getWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#12121a] hover:bg-[#181826] text-white font-bold text-base tracking-wide border border-white/15 hover:border-[#ff4d5e]/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 text-[#ff4d5e]" />
                <span>{t('btnContactAdmin')}</span>
              </a>
            </div>

            {/* Trust Highlights under Hero */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl sm:text-2xl font-black text-white">5,000+</span>
                <span className="text-xs text-gray-400 font-medium">{t('statTrades')}</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl sm:text-2xl font-black text-white">100%</span>
                <span className="text-xs text-gray-400 font-medium">{t('statGuarantee')}</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl sm:text-2xl font-black text-white">24/7</span>
                <span className="text-xs text-gray-400 font-medium">{t('statSpeed')}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Glowing Circular Logo Image Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              
              {/* Radial Glowing Aura */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#ff4d5e] via-[#ff8577] to-[#ff4d5e] opacity-50 group-hover:opacity-80 blur-2xl transition duration-500 animate-pulse"></div>

              {/* Decorative Floating Badges */}
              <div className="absolute -top-3 -left-3 z-20 bg-[#12121a]/90 backdrop-blur-md border border-white/15 px-3 py-2 rounded-xl shadow-xl flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#ff4d5e]" />
                <span className="text-xs font-bold text-white">{t('floatingSpeed')}</span>
              </div>

              <div className="absolute -bottom-3 -right-3 z-20 bg-[#12121a]/90 backdrop-blur-md border border-white/15 px-3 py-2 rounded-xl shadow-xl flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">{t('floatingVerified')}</span>
              </div>

              {/* Main Glowing Circle Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-br from-[#ff4d5e] to-[#ff8577]/20 border border-white/20 shadow-2xl overflow-hidden">
                <img
                  src={logo}
                  alt="Official Sipa Store Glowing Emblem"
                  className="w-full h-full rounded-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
