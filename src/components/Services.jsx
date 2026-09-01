import React from 'react';
import { servicesData } from '../data/services';
import { Gem, Smartphone, ArrowRightLeft, Coins, ShieldCheck, QrCode, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/site';

// Icon mapper helper
const iconComponents = {
  Gem: Gem,
  Smartphone: Smartphone,
  ArrowRightLeft: ArrowRightLeft,
  Coins: Coins,
  ShieldCheck: ShieldCheck,
  QrCode: QrCode,
};

export default function Services() {
  return (
    <section id="layanan" className="py-20 md:py-28 bg-[#12121a] relative overflow-hidden border-t border-b border-white/5">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#ff4d5e]/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#ff4d5e]/10 border border-[#ff4d5e]/20 text-[#ff4d5e] text-xs font-bold uppercase tracking-wider">
            Katalog Layanan
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Layanan Kami di <span className="text-gradient-red">Sipa Store</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Kami menyediakan berbagai keperluan digital & kebutuhan transaksi game terlengkap dengan pelayanan profesional & amanah.
          </p>
        </div>

        {/* 6 Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const IconComponent = iconComponents[service.iconName] || Gem;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#0a0a0f]/80 border border-white/10 hover:border-[#ff4d5e]/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#ff4d5e]/10"
              >
                <div>
                  {/* Icon Box + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff4d5e]/20 to-[#ff8577]/5 border border-[#ff4d5e]/30 flex items-center justify-center text-[#ff4d5e] group-hover:scale-110 group-hover:bg-[#ff4d5e] group-hover:text-white transition-all duration-300 shadow-md">
                      <IconComponent className="w-7 h-7 stroke-[2.2]" />
                    </div>
                    {service.badge && (
                      <span className="px-2.5 py-1 rounded-md bg-[#181826] border border-white/10 text-gray-300 text-[11px] font-bold tracking-wide">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer Link Divider & Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {service.tag}
                  </span>
                  <a
                    href={siteConfig.getWaLink(`Halo Admin, saya tertarik dengan layanan ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#ff4d5e] hover:text-[#ff8577] transition-colors group/link"
                  >
                    <span>LIHAT DETAIL</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
