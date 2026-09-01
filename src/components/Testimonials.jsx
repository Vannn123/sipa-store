import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { ShieldCheck, Maximize2, X, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

export default function Testimonials() {
  // State for active lightbox modal preview
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="testimoni" className="py-20 md:py-28 bg-[#12121a] relative overflow-hidden border-t border-white/5">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#ff4d5e]/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#ff8577]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#ff4d5e]/10 border border-[#ff4d5e]/20 text-[#ff4d5e] text-xs font-bold uppercase tracking-wider">
            Real Proof & Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Testimoni <span className="text-gradient-red">Pelanggan Setia</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Bukti nyata kejujuran & transaksi sukses setiap hari di Sipa Store. Klik gambar untuk melihat dalam ukuran penuh.
          </p>
        </div>

        {/* Clean Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 pt-2 snap-x">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="snap-center min-w-[260px] sm:min-w-0 rounded-2xl bg-[#0a0a0f] border border-white/10 hover:border-[#ff4d5e]/40 p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#ff4d5e]/15 group"
            >
              {/* Testimonial Image Container with Zoom Hover & Click */}
              <div 
                onClick={() => setSelectedImage(item)}
                className="relative rounded-xl overflow-hidden border border-white/15 bg-[#181826] aspect-square flex items-center justify-center cursor-pointer group/img shadow-md"
              >
                <img
                  src={item.image}
                  alt={`Testimoni ${item.id} Sipa Store`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
                
                {/* Hover Overlay Zoom Effect */}
                <div className="absolute inset-0 bg-[#0a0a0f]/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white">
                  <Maximize2 className="w-8 h-8 text-[#ff4d5e] animate-bounce" />
                  <span className="text-xs font-bold bg-[#ff4d5e] px-3 py-1 rounded-full shadow-lg">
                    Lihat Gambar Penuh
                  </span>
                </div>
              </div>

              {/* Card Footer: 100% Verified Only */}
              <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-center text-xs font-mono text-gray-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold tracking-wider uppercase text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  100% Verified
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* View All Testimonials Button */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.getWaLink("Halo Admin, saya mau cek testimoni lengkap")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#181826] hover:bg-[#202033] border border-white/15 hover:border-[#ff4d5e]/40 text-white font-bold text-sm tracking-wide shadow-lg transition-all"
          >
            <span>Lihat Ribuan Testimoni Lainnya di WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-[#ff4d5e]" />
          </a>
        </div>

      </div>

      {/* Lightbox Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-2xl w-full bg-[#12121a] border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="font-extrabold text-white text-sm flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> 100% Verified Testimonial
              </span>
              <button 
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-black max-h-[75vh] flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt="Testimoni Full View"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
