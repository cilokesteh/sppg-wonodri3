import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kebijakan Privasi & Perlindungan Data (UU PDP) | SPPG Wonodri 3",
  description:
    "Komitmen perlindungan data pribadi dan transparansi pemenuhan gizi sesuai Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27 Tahun 2022) di SPPG Wonodri 3 Kota Semarang.",
  alternates: {
    canonical: "https://sppgwonodri3.web.id/privasi/",
  },
};

export default function PrivasiPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 pb-20 bg-[var(--background)] text-gray-900 dark:text-white transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-5 md:px-8">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-widest uppercase px-3 py-1 border border-blue-900/15 bg-blue-50/50 dark:bg-blue-950/20 text-blue-800 dark:text-blue-300 rounded mb-4">
            KEPATUHAN UU PDP NO. 27 TAHUN 2022
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Kebijakan Privasi &amp; Perlindungan Data Pribadi
          </h1>
          <p className="text-sm text-gray-500 mb-10 pb-6 border-b border-gray-200 dark:border-white/10">
            Terakhir diperbarui: 5 September 2026 • SPPG Wonodri 3 Kota Semarang
          </p>

          <div className="space-y-8 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                1. Prinsip Perlindungan Data
              </h2>
              <p>
                SPPG Wonodri 3 Kota Semarang berkomitmen menjaga kerahasiaan dan keamanan data penerima manfaat program Makan Bergizi Gratis (MBG), mitra sekolah, dan masyarakat sesuai dengan <strong>UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP)</strong>. Kami menjalankan prinsip pembatasan tujuan dan minimisasi data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                2. Data yang Dikelola &amp; Tujuannya
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Data Alokasi Sekolah &amp; Porsi:</strong> Jumlah siswa, pembagian porsi besar/kecil/posyandu semata-mata digunakan untuk ketepatan distribusi gizi harian sesuai instruksi Badan Gizi Nasional (BGN).
                </li>
                <li>
                  <strong>Data Kontak Kemitraan:</strong> Nomor telepon dan kontak perwakilan sekolah/posyandu untuk koordinasi kedatangan pengiriman ompreng makanan.
                </li>
                <li>
                  <strong>Zero-PAN / Transaksi Keuangan:</strong> Website ini adalah profil layanan publik dan tidak memproses maupun menyimpan nomor kartu kredit/debit atau data perbankan pribadi.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                3. SOP Notifikasi Kegagalan Pelindungan Data (Breach Notification)
              </h2>
              <p>
                Sesuai amanat Pasal 46 UU PDP, jika terjadi insiden kebocoran atau kegagalan pelindungan data pribadi pada sistem kami, SPPG Wonodri 3 akan mengirimkan pemberitahuan tertulis kepada pihak terdampak dan lembaga pengawas paling lambat dalam waktu <strong>3 × 24 jam (72 jam)</strong> sejak insiden tersebut diketahui secara terverifikasi.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                4. Hak Subjek Data (Data Subject Rights)
              </h2>
              <p>
                Pihak yang datanya tercatat berhak mengajukan permohonan akses, ralat data yang tidak akurat, maupun penghapusan data kontak kemitraan yang sudah tidak aktif dengan menghubungi sekretariat operasional SPPG Wonodri 3 melalui kontak resmi di halaman kontak.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-white/10 flex justify-between">
            <Link href="/" className="text-sm font-semibold text-blue-700 dark:text-blue-300 hover:underline">
              ← Kembali ke Beranda
            </Link>
            <Link href="/about/" className="text-sm font-semibold text-blue-700 dark:text-blue-300 hover:underline">
              Tentang Dapur Kami →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
