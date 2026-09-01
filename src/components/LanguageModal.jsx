import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Check } from 'lucide-react';

export default function LanguageModal() {
  const { lang, setLanguage, showModal, closeModal, t } = useLanguage();

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-md bg-[#12121a]/95 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 space-y-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Globe Header Icon */}
        <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#ff4d5e]/20 to-[#ff8577]/10 border border-[#ff4d5e]/30 flex items-center justify-center text-[#ff4d5e] shadow-lg shadow-[#ff4d5e]/10">
          <Globe className="w-7 h-7 stroke-[2.2]" />
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-white tracking-tight">
            {t('modalTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed px-2">
            {t('modalSubtitle')}
          </p>
        </div>

        {/* Language Selection Buttons */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          
          {/* Bahasa Indonesia Option */}
          <button
            onClick={() => setLanguage('id')}
            className={`group relative p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 ${
              lang === 'id'
                ? 'bg-gradient-to-b from-[#ff4d5e]/20 to-[#ff4d5e]/5 border-[#ff4d5e] shadow-xl shadow-[#ff4d5e]/20'
                : 'bg-[#181826]/80 border-white/10 hover:border-white/30 hover:bg-[#1f1f33]'
            }`}
          >
            {/* Active Checkmark Badge */}
            {lang === 'id' && (
              <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#ff4d5e] flex items-center justify-center text-white text-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            )}

            {/* Flag Emoji Icon */}
            <span className="text-4xl filter drop-shadow transform group-hover:scale-110 transition-transform">
              🇮🇩
            </span>
            
            <div className="text-center">
              <div className="text-sm font-bold text-white group-hover:text-gradient-red transition-colors">
                Bahasa Indonesia
              </div>
              <span className="text-[10px] text-gray-400 font-mono uppercase">ID</span>
            </div>
          </button>

          {/* English Option */}
          <button
            onClick={() => setLanguage('en')}
            className={`group relative p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 ${
              lang === 'en'
                ? 'bg-gradient-to-b from-[#ff4d5e]/20 to-[#ff4d5e]/5 border-[#ff4d5e] shadow-xl shadow-[#ff4d5e]/20'
                : 'bg-[#181826]/80 border-white/10 hover:border-white/30 hover:bg-[#1f1f33]'
            }`}
          >
            {/* Active Checkmark Badge */}
            {lang === 'en' && (
              <div className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-[#ff4d5e] flex items-center justify-center text-white text-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            )}

            {/* Flag Emoji Icon */}
            <span className="text-4xl filter drop-shadow transform group-hover:scale-110 transition-transform">
              🇬🇧
            </span>

            <div className="text-center">
              <div className="text-sm font-bold text-white group-hover:text-gradient-red transition-colors">
                English
              </div>
              <span className="text-[10px] text-gray-400 font-mono uppercase">EN</span>
            </div>
          </button>

        </div>

      </div>
    </div>
  );
}
