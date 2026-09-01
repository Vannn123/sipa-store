import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LanguageModal from './components/LanguageModal';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0a0a0f] text-slate-100 selection:bg-[#ff4d5e] selection:text-white">
        {/* Initial Language Selection Modal */}
        <LanguageModal />

        {/* 1. Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* 2. Hero Section */}
          <Hero />

          {/* 3. Section "Layanan Kami" */}
          <Services />

          {/* 4. Section "Mengapa Memilih Sipa Store?" */}
          <WhyChooseUs />

          {/* 5. Section "Testimoni Pelanggan" */}
          <Testimonials />
        </main>

        {/* 6. Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
