export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  content: { h?: string; p?: string; ul?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "apa-itu-mbg",
    title: "Apa Itu MBG (Makan Bergizi Gratis)? Penjelasan Lengkap",
    description:
      "MBG (Makan Bergizi Gratis) adalah program nasional penyediaan makanan bergizi bagi anak sekolah. Simak penjelasan lengkap tentang program MBG, tujuannya, dan cara kerjanya di SPPG.",
    date: "2026-08-17",
    readTime: "4 menit",
    category: "Program MBG",
    keywords: ["MBG", "Makan Bergizi Gratis", "program MBG", "BGN"],
    content: [
      {
        p: "Makan Bergizi Gratis (MBG) adalah program prioritas nasional yang bertujuan menyediakan makanan bergizi bagi anak-anak Indonesia, terutama siswa sekolah. Program ini dikelola oleh Badan Gizi Nasional (BGN) dan dilaksanakan di berbagai daerah, termasuk Kota Semarang.",
      },
      {
        h: "Tujuan Program MBG",
        p: "Program MBG dirancang untuk mengatasi tiga masalah utama: kekurangan gizi anak, tingkat kehadiran sekolah yang rendah, dan kualitas belajar yang menurun. Dengan perut yang terisi makanan bergizi, anak-anak diharapkan lebih fokus dan semangat belajar.",
      },
      {
        h: "Siapa yang Menerima Manfaat MBG?",
        p: "Penerima manfaat program ini adalah siswa TK, SD, hingga jenjang lainnya, serta balita di posyandu. Di wilayah kerja SPPG Wonodri 3, program ini melayani 1.577 penerima manfaat dari 12 sekolah dan 1 posyandu di Semarang Selatan.",
      },
      {
        h: "Bagaimana MBG Dilaksanakan?",
        p: "Pelaksanaan MBG dilakukan melalui Satuan Pelayanan Pemenuhan Gizi (SPPG) — unit layanan yang bertugas menyiapkan dan mendistribusikan makanan bergizi. Di SPPG, makanan diolah oleh tim profesional dengan standar higienitas ketat, mulai dari perencanaan menu, pengadaan bahan, pengolahan, hingga distribusi tepat waktu ke sekolah.",
      },
      {
        h: "Kesimpulan",
        p: "MBG bukan sekadar program pemberian makanan — ini investasi jangka panjang untuk generasi sehat Indonesia. Melalui SPPG di seluruh daerah, program ini memastikan setiap anak mendapatkan asupan gizi yang layak setiap hari sekolah.",
      },
    ],
  },
  {
    slug: "menu-gizi-seimbang-anak-sekolah",
    title: "Menu Gizi Seimbang untuk Anak Sekolah: Panduan Lengkap",
    description:
      "Panduan menu gizi seimbang untuk anak sekolah: karbohidrat, protein, sayur, buah, dan susu. Pelajari prinsip Isi Piringku dan contoh menu MBG yang diterapkan SPPG Wonodri 3.",
    date: "2026-08-17",
    readTime: "5 menit",
    category: "Gizi",
    keywords: ["gizi seimbang", "menu anak sekolah", "Isi Piringku", "menu sehat"],
    content: [
      {
        p: "Gizi seimbang adalah kunci tumbuh kembang anak yang optimal. Untuk anak usia sekolah, kebutuhan energi harian rata-rata adalah 1.600–2.000 kkal, yang harus dipenuhi dari berbagai kelompok makanan.",
      },
      {
        h: "Prinsip Isi Piringku",
        p: "Kementerian Kesehatan menganjurkan konsep Isi Piringku: setengah piring berisi sayur dan buah, setengahnya lagi karbohidrat dan protein. Komposisi ideal untuk satu porsi makan anak sekolah:",
        ul: [
          "Karbohidrat: nasi, nasi jagung, atau kentang (± 3/4 piring bagian karbohidrat)",
          "Protein hewani: ayam, ikan, telur, atau daging",
          "Protein nabati: tempe atau tahu",
          "Sayuran: sayur tumis atau sup",
          "Buah: pisang, jeruk, atau semangka",
        ],
      },
      {
        h: "Contoh Menu MBG Sehari",
        p: "Di SPPG Wonodri 3, menu disusun oleh ahli gizi mengikuti pedoman BGN. Contoh menu yang biasa disajikan: nasi, ayam goreng atau ikan, tumis sayur, tempe goreng, dan buah segar. Menu bervariasi setiap hari agar anak tidak bosan dan kebutuhan gizinya terpenuhi.",
      },
      {
        h: "Kenapa Variasi Menu Penting?",
        p: "Variasi menu memastikan anak mendapatkan beragam vitamin dan mineral. Semakin berwarna piring makan anak, semakin lengkap nutrisinya. Itulah mengapa SPPG merotasi menu secara berkala dengan tetap memperhatikan harga bahan dan ketersediaan lokal.",
      },
      {
        h: "Tips untuk Orang Tua",
        p: "Orang tua bisa mendukung gizi seimbang di rumah dengan membiasakan sarapan, membawa bekal sehat, membatasi makanan manis dan gorengan berlebih, serta menjadi contoh pola makan baik.",
      },
    ],
  },
  {
    slug: "peran-sppg-program-mbg",
    title: "Peran SPPG dalam Program Makan Bergizi Gratis",
    description:
      "SPPG (Satuan Pelayanan Pemenuhan Gizi) adalah ujung tombak program MBG. Pelajari peran, struktur tim, dan proses kerja SPPG Wonodri 3 dalam menyediakan makanan bergizi.",
    date: "2026-08-17",
    readTime: "4 menit",
    category: "Program MBG",
    keywords: ["SPPG", "Satuan Pelayanan Pemenuhan Gizi", "peran SPPG", "dapur MBG"],
    content: [
      {
        p: "Satuan Pelayanan Pemenuhan Gizi (SPPG) adalah unit pelaksana program Makan Bergizi Gratis di tingkat kecamatan/kota. SPPG menjadi ujung tombak yang memastikan makanan bergizi sampai ke tangan penerima manfaat setiap hari sekolah.",
      },
      {
        h: "Tugas Utama SPPG",
        ul: [
          "Merencanakan menu sesuai pedoman gizi BGN",
          "Mengadakan bahan baku berkualitas dan segar",
          "Mengolah makanan di dapur higienis dengan SOP ketat",
          "Mengemas dan mendistribusikan makanan tepat waktu",
          "Melaporkan pelaksanaan secara transparan",
        ],
      },
      {
        h: "Struktur Tim SPPG Wonodri 3",
        p: "SPPG Wonodri 3 digerakkan oleh 36 personel yang terbagi dalam delapan tim: Persiapan, Pengolahan, Pemorsian, Packing, Distribusi, Cuci Ompreng, Keamanan, dan Kebersihan — dipimpin KASPPG dan didukung perwakilan yayasan serta staf profesional (chef, ahli gizi, akuntan, asisten lapangan).",
      },
      {
        h: "Standar Mutu yang Dijaga",
        p: "Setiap tahap di SPPG menerapkan standar mutu: dapur bersih, alat masak terawat, bahan baku segar, dan pengemasan yang aman. Jaminan kualitas ini penting karena makanan dikonsumsi anak-anak setiap hari.",
      },
      {
        h: "SPPG sebagai Bagian dari Ekosistem MBG",
        p: "SPPG tidak bekerja sendiri — mereka berkoordinasi dengan sekolah, posyandu, pemasok bahan, dan pemerintah daerah. Kolaborasi ini memastikan program berjalan lancar dari hulu ke hilir.",
      },
    ],
  },
  {
    slug: "dapur-mbg-semarang",
    title: "Dapur MBG di Semarang: Cara Kerja SPPG Wonodri 3",
    description:
      "Mengenal dapur MBG di Semarang Selatan — SPPG Wonodri 3. Dari perencanaan menu hingga distribusi 1.577 porsi ke 12 sekolah dan 1 posyandu setiap hari.",
    date: "2026-08-17",
    readTime: "4 menit",
    category: "SPPG Wonodri 3",
    keywords: ["dapur MBG Semarang", "SPPG Wonodri 3", "MBG Semarang Selatan", "dapur MBG"],
    content: [
      {
        p: "Di Jl. Erlangga Raya No 38, Kel. Pleburan, Kec. Semarang Selatan, terdapat dapur MBG yang setiap hari menyiapkan 1.577 porsi makanan bergizi. Ini adalah SPPG Wonodri 3 — salah satu satuan pelayanan pemenuhan gizi di Kota Semarang.",
      },
      {
        h: "Alur Produksi Harian",
        p: "Produksi makanan dimulai pagi hari dengan tahapan yang terukur:",
        ul: [
          "Perencanaan menu oleh ahli gizi",
          "Penerimaan dan sortir bahan baku",
          "Pengolahan di dapur dengan SOP kebersihan",
          "Pemorsian ke ompreng/tray sesuai standar porsi",
          "Packing dan penataan untuk distribusi",
          "Pengiriman ke sekolah dan posyandu",
          "Cuci ompreng dan sanitasi peralatan",
        ],
      },
      {
        h: "Kapasitas dan Jangkauan",
        p: "Dapur SPPG Wonodri 3 melayani 12 sekolah dan 1 posyandu dengan total 1.577 penerima manfaat — terdiri dari peserta didik TK, SD, dan balita posyandu di wilayah Semarang Selatan.",
      },
      {
        h: "Tim di Balik Dapur",
        p: "Dapur dikelola oleh 36 personel dalam 8 tim yang bekerja terkoordinasi. Setiap tim punya peran spesifik — dari tim persiapan yang mengupas dan mencuci bahan, hingga tim kebersihan yang memastikan dapur steril setelah produksi.",
      },
      {
        h: "Kunjungan dan Transparansi",
        p: "Sebagai unit layanan publik, SPPG Wonodri 3 terbuka terhadap kunjungan dan menerima kritik serta saran dari masyarakat untuk terus meningkatkan kualitas layanan.",
      },
    ],
  },
  {
    slug: "manfaat-makan-bergizi-gratis",
    title: "5 Manfaat Program Makan Bergizi Gratis bagi Anak Indonesia",
    description:
      "Program MBG memberi dampak nyata: perbaikan gizi anak, kehadiran sekolah meningkat, prestasi belajar lebih baik. Simak 5 manfaat utama Makan Bergizi Gratis.",
    date: "2026-08-17",
    readTime: "3 menit",
    category: "Program MBG",
    keywords: ["manfaat MBG", "manfaat makan bergizi gratis", "dampak MBG"],
    content: [
      {
        p: "Program Makan Bergizi Gratis (MBG) membawa dampak positif yang terukur bagi anak-anak Indonesia. Berikut lima manfaat utamanya:",
      },
      {
        h: "1. Perbaikan Status Gizi Anak",
        p: "Asupan gizi yang cukup setiap hari membantu mencegah stunting dan kekurangan gizi. Anak yang terbiasa makan bergizi memiliki pertumbuhan dan perkembangan yang lebih optimal.",
      },
      {
        h: "2. Meningkatkan Kehadiran Sekolah",
        p: "Data dari berbagai daerah menunjukkan angka kehadiran siswa meningkat setelah program MBG berjalan. Anak-anak lebih semangat datang ke sekolah karena ada jaminan makanan bergizi.",
      },
      {
        h: "3. Mendukung Konsentrasi dan Prestasi Belajar",
        p: "Perut yang terisi makanan bergizi membuat anak lebih fokus di kelas. Karbohidrat memberi energi, protein mendukung fungsi otak, dan vitamin menjaga daya tahan tubuh.",
      },
      {
        h: "4. Mendorong Kebiasaan Makan Sehat",
        p: "Dengan menu yang disusun ahli gizi, anak-anak belajar mengenal makanan sehat sejak dini — sayur, buah, protein, dan karbohidrat dalam porsi seimbang.",
      },
      {
        h: "5. Meringankan Beban Ekonomi Keluarga",
        p: "Program MBG membantu meringankan pengeluaran pangan keluarga. Satu porsi makan bergizi setiap hari sekolah berarti beban belanja keluarga berkurang secara signifikan.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
