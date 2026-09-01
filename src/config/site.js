// Konfigurasi Kontak & Sosial Media Sipa Store
// Cukup ubah nomor WhatsApp & link Instagram di sini, seluruh tombol di website akan otomatis berubah!

export const siteConfig = {
  // Masukkan nomor WhatsApp admin kamu diawali dengan kode negara (contoh: 6281234567890)
  whatsappNumber: "6281377136411",

  // Link Instagram toko kamu
  instagramUrl: "https://www.instagram.com/sipastore.gt?igsi=cDl5aTluYmtlaHJj",

  // Helper fungsi untuk generate link WhatsApp dengan pesan otomatis
  getWaLink: (customMessage = "") => {
    const defaultMsg = "Halo Admin Sipa Store, saya ingin bertransaksi";
    const msg = customMessage ? customMessage : defaultMsg;
    return `https://wa.me/6281377136411?text=${encodeURIComponent(msg)}`;
  }
};
