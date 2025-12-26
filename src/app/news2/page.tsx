import Link from "next/link";

export default function NewsDetail() {
  return (
    <div className="min-h-screen bg-white pb-10">

      {/* ===== HEADER IMAGE ===== */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="rounded-2xl overflow-hidden">
          <div className="relative w-full h-64 md:h-72">
            <img
              src="/img/news1.jpg"
              className="w-full h-full object-cover"
              alt="Berita Universitas"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
              <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
                Daftar Universitas Terbaik di Indonesia versi UniRank 2025
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="max-w-4xl mx-auto px-6 mt-10 text-gray-900 leading-relaxed text-[15px] md:text-base">
        <h2 className="text-2xl text-center font-semibold mb-6">Berita</h2>

        <p className="mb-4">
          Bingung menentukan kampus impian? Tenang, kamu nggak sendirian. Menjelang kelulusan, banyak calon mahasiswa mulai mencari referensi universitas terbaik sebagai bahan pertimbangan. Salah satu rujukan yang sering digunakan adalah pemeringkatan UniRank 2025.
        </p>

        <p className="mb-4 font-medium">Let’s check this out!</p>
        <p className="mb-4 font-semibold">Apa itu UniRank?</p>

        <p className="mb-4">
          UniRank (4 International Colleges & Universities) merupakan lembaga pemeringkatan internasional yang menilai universitas berdasarkan popularitas dan visibilitas digital. Berbeda dengan pemeringkatan akademik, UniRank melihat seberapa dikenal dan diaksesnya sebuah kampus melalui situs resminya di tingkat nasional maupun global.
        </p>

        <p className="mb-3 font-semibold">Bagaimana UniRank Menilai Universitas?</p>
        <p className="mb-4">
          UniRank hanya memasukkan perguruan tinggi yang:
        </p>

        <p className="mb-4">
          <strong>-</strong>, Diakui secara resmi oleh lembaga pendidikan nasional.  
          <br />
          <strong>-</strong>, Menyediakan program sarjana atau pascasarjana.  
          <br />
          <strong>-</strong>, Menyelenggarakan pembelajaran tatap muka.
        </p>

        <p className="mb-4">
        Penilaian dilakukan berdasarkan popularitas web, yang mencerminkan minat dan kepercayaan publik terhadap universitas tersebut.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-4">
          Daftar Universitas Terbaik di Indonesia versi UniRank 2025
        </h3>

        {/* List Universitas */}
        <div className="space-y-1 text-sm md:text-[15px]">
                Daftar 100 Kampus Terbaik di Indonesia Versi UniRank 2025

                Universitas Indonesia – Depok
                Universitas Gadjah Mada – Sleman
                Universitas Telkom – Bandung
                Institut Teknologi Bandung – Bandung
                Universitas Airlangga – Surabaya
                Universitas Bina Nusantara – Jakarta
                Universitas Brawijaya – Malang
                Universitas Diponegoro – Semarang
                Universitas Muhammadiyah Sumatera Utara – Medan
                Universitas Sebelas Maret – Surakarta
                Universitas Lampung – Bandar Lampung
                Institut Pertanian Bogor – Bogor
                Universitas Teknokrat Indonesia – Bandar Lampung
                Institut Teknologi Sepuluh Nopember – Surabaya
                Universitas Padjadjaran – Sumedang
                Universitas Gunadarma – Depok
                Universitas Medan Area – Medan
                Universitas Syiah Kuala – Banda Aceh
                Universitas Pendidikan Indonesia – Bandung
                Universitas Budi Luhur – Jakarta
                Universitas Negeri Malang – Malang
                Universitas Andalas – Padang
                Universitas Islam Indonesia – Sleman
                Universitas Islam Negeri Sunan Ampel – Surabaya
                Universitas Hasanuddin – Makassar
                Universitas Sains dan Teknologi Komputer – Semarang
                Universitas Negeri Semarang – Semarang
                Universitas Sumatera Utara – Medan
                Universitas Negeri Yogyakarta – Sleman
                Universitas Jenderal Soedirman – Banyumas
                Universitas Muhammadiyah Jakarta – Tangerang Selatan
                Universitas Islam Negeri Maulana Malik Ibrahim – Malang
                Universitas Jember – Jember
                Universitas Muhammadiyah Yogyakarta – Bantul
                Universitas Muhammadiyah Malang – Malang
                Universitas Muhammadiyah Surakarta – Surakarta
                Universitas Riau – Pekanbaru
                Universitas Udayana – Badung
                Universitas Negeri Padang – Padang
                Universitas Negeri Surabaya – Surabaya
                Universitas Islam Negeri Sunan Kalijaga – Sleman
                Universitas Islam Negeri Sunan Gunung Djati – Bandung
                Universitas Lambung Mangkurat – Banjarmasin
                Universitas Sriwijaya – Palembang
                Universitas Kristen Petra – Surabaya
                Universitas Islam Negeri Syarif Hidayatullah – Tangerang Selatan
                Universitas Esa Unggul – Jakarta
                Universitas Ahmad Dahlan – Yogyakarta
                Universitas Muhammadiyah Prof. Dr. Hamka – Jakarta
                Universitas Pelita Harapan – Tangerang
                Universitas Mataram – Mataram
                Universitas Mercu Buana – Jakarta
                Universitas Sultan Ageng Tirtayasa – Serang
                Universitas Halu Oleo – Kendari
                Universitas Negeri Jakarta – Jakarta
                Universitas Pembangunan Nasional Veteran Jakarta – Jakarta
                Universitas Islam Negeri Raden Intan Lampung – Bandar Lampung
                Universitas Tadulako – Palu
                Universitas Mulawarman – Samarinda
                Universitas Bengkulu – Bengkulu
                Universitas Dian Nuswantoro – Semarang
                Universitas Tanjungpura – Pontianak
                Universitas Atma Jaya Yogyakarta – Sleman
                Universitas Negeri Makassar – Makassar
                Universitas Jambi – Jambi
                Universitas Sam Ratulangi – Manado
                Universitas Islam Sultan Agung – Semarang
                Universitas Multimedia Nusantara – Tangerang
                Universitas Palangka Raya – Palangka Raya
                Universitas Islam Bandung – Bandung
                Universitas Tarumanagara – Jakarta Barat
                Universitas Pamulang – Tangerang
                Universitas Pembangunan Nasional Veteran Yogyakarta – Sleman
                Universitas Kristen Satya Wacana – Salatiga
                Universitas Muhammadiyah Surabaya – Surabaya
                Universitas Bakrie – Jakarta
                Universitas Katolik Soegijapranata – Semarang
                Universitas Negeri Medan – Medan
                Universitas Pendidikan Ganesha – Singaraja
                Universitas Islam Negeri Sultan Syarif Kasim Riau – Pekanbaru
                Universitas Pasundan – Bandung
                Universitas Katolik Parahyangan – Bandung
                Universitas Islam Malang – Malang
                Universitas Pertamina – Jakarta
                Universitas Muhammadiyah Kendari – Kendari
                Universitas Islam Negeri Ar-Raniry – Banda Aceh
                Universitas Bina Sarana Informatika – Jakarta
                Universitas Muhammadiyah Purworejo – Purworejo
                Universitas Sanata Dharma – Sleman
                Universitas Islam Negeri Alauddin – Makassar
                Universitas Surabaya – Surabaya
                Universitas Trisakti – Jakarta
                Universitas Jenderal Achmad Yani – Cimahi
                Universitas Islam Negeri Walisongo – Semarang
                Universitas Islam Negeri Sulthan Thaha Saifuddin – Jambi
                Universitas Alma Ata – Yogyakarta
                Universitas Pembangunan Nasional Veteran Jawa Timur – Surabaya
                Universitas Ibn Khaldun – Bogor
                Universitas Katolik Indonesia Atma Jaya – Jakarta
                Universitas Muhammadiyah Ponorogo – Ponorogo

          {/* ... (list panjang tetap bisa kamu lanjutkan) */}
        </div>
      </div>

      {/* ===== BUTTON KEMBALI ===== */}
      <div className="max-w-4xl mx-auto px-6 mt-12 text-center">
        <Link
          href="/home"
          className="bg-blue-900 text-white py-2 px-6 rounded-md text-sm hover:bg-blue-800"
        >
          Kembali
        </Link>
      </div>

    </div>
  );
}
