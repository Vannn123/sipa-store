import React from 'react';
import { ShieldCheck, Zap, Tag, Clock } from 'lucide-react';
import whyChooseUsImg from '../assets/images/why-choose-us.png';

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: ShieldCheck,
      title: 'Keamanan Terjamin 100%',
      description: 'Setiap transaksi diproses secara transparan & legal dengan reputasi terpercaya tanpa risiko banned.'
    },
    {
      icon: Zap,
      title: 'Proses Kilat 1-5 Menit',
      description: 'Sistem pengiriman & konfirmasi otomatis super cepat, pesanan langsung masuk dalam hitungan detik.'
    },
    {
      icon: Tag,
      title: 'Harga Paling Kompetitif',
      description: 'Dapatkan rate terbaik untuk jual beli DL/BGL Growtopia, pulsa convert, serta aplikasi premium murah.'
    },
    {
      icon: Clock,
      title: 'Layanan Non-Stop 24/7',
      description: 'Customer service & admin siap melayani kebutuhan transaksi kamu kapan saja tanpa batasan waktu.'
    }
  ];

  return (
    <section id="tentang" className="py-20 md:py-28 bg-[#0a0a0f] relative overflow-hidden">
      
      {/* Glow effect in background */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#ff4d5e]/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Image with Dark Tech Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg group">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#ff4d5e] to-[#ff8577] opacity-30 group-hover:opacity-60 blur-xl transition duration-500"></div>

              {/* Image Container with Dark Glass Frame */}
              <div className="relative rounded-2xl bg-[#12121a] border border-white/15 overflow-hidden p-2 shadow-2xl">
                <img
                  src={whyChooseUsImg}
                  alt="Mengapa Memilih Sipa Store"
                  className="w-full h-auto rounded-xl object-cover transform group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Floating overlay stats badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0a0a0f]/90 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#ff4d5e]/20 flex items-center justify-center text-[#ff4d5e]">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Trust Guarantee</div>
                      <div className="text-xs text-gray-400">Thousands of Happy Gamers</div>
                    </div>
                  </div>
                  <span className="text-xs font-black text-[#ff4d5e] bg-[#ff4d5e]/10 px-2.5 py-1 rounded-md border border-[#ff4d5e]/20">
                    VERIFIED
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Heading & 4 Key Benefit Cards */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#ff4d5e]/10 border border-[#ff4d5e]/20 text-[#ff4d5e] text-xs font-bold uppercase tracking-wider">
                Keunggulan Utama
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Mengapa Memilih <br />
                <span className="text-gradient-red">Sipa Store?</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Kami berkomitmen memberikan keamanan terbaik, kecepatan transaksi instan, serta kenyamanan bagi setiap pelanggan.
              </p>
            </div>

            {/* 4 Points List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {advantages.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#12121a]/80 border border-white/10 hover:border-[#ff4d5e]/40 transition-all duration-300 hover:bg-[#181826] group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-[#ff4d5e]/10 border border-[#ff4d5e]/20 flex items-center justify-center text-[#ff4d5e] mb-4 group-hover:bg-[#ff4d5e] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-gradient-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
