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
                100 Universitas Terbaik di Indonesia 2025 versi Webometrics
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="max-w-4xl mx-auto px-6 mt-10 text-gray-900 leading-relaxed text-[15px] md:text-base">
        <h2 className="text-2xl text-center font-semibold mb-6">Berita</h2>

        <p className="mb-4">
          Selamat memasuki tahun ajaran baru! Bagi kamu yang naik ke kelas 12 pastinya mulai menyiapkan hal-hal terkait perkuliahan. Tapi, udah tau belum mau lanjut ke kampus mana? Nah, Webometrics punya daftar peringkat universitas terbaik di Indonesia yang bisa dijadikan acuan.
        </p>

        <p className="mb-4 font-medium">Let’s check this out!</p>
        <p className="mb-4 font-semibold">Apa itu Webometrics?</p>

        <p className="mb-4">
          Webometrics merupakan salah satu lembaga pemeringkatan universitas di seluruh dunia. Selain Webometrics, ada pula QS World dan 4ICU. Setiap lembaga mempunyai indikator penilaian masing-masing, sehingga hasilnya mungkin berbeda.
        </p>

        <p className="mb-3 font-semibold">Kriteria dan Tujuan Pemeringkatan Webometrics</p>
        <p className="mb-4">
          Gimana sih, cara kerja Webometrics? Penilaian Webometric terletak pada situs universitas. Terdapat 3 indikator penilaian, yaitu: impact, openness, dan excellence.
        </p>

        <p className="mb-4">
          <strong>Impact</strong>, yakni seberapa banyak situs tersebut direferensikan oleh orang lain.  
          <br />
          <strong>Openness</strong>, apabila file yang terhubung dengan situs memiliki publikasi ilmiah cukup tinggi.  
          <br />
          <strong>Excellence</strong>, dilihat dari banyaknya jumlah artikel publikasi ilmiah.
        </p>

        <p className="mb-4">
          Tujuan penilaian Webometrics adalah untuk meningkatkan partisipasi perguruan tinggi dalam menyediakan akses pengetahuan bagi masyarakat. Diharapkan mahasiswa atau dosen universitas tersebut dapat membagikan ilmu mereka dalam bentuk skripsi, jurnal, tesis, dan sejenisnya.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-4">
          Daftar Universitas Terbaik di Indonesia versi Webometrics 2025
        </h3>

        {/* List Universitas */}
        <div className="space-y-1 text-sm md:text-[15px]">
          <p>1. Universitas Indonesia 540 365</p>
          <p>2. Universitas Gadjah Mada 700 043</p>
          <p>3. Universitas Airlangga 711 693</p>
          <p>4. Institut Teknologi Bandung 846 765</p>
          <p>5. Universitas Brawijaya 852 441</p>
          <p>6. IPB University 935 722</p>
          <p>7. Universitas Sebelas Maret 1027 763</p>
          <p>8. Universitas Hasanuddin 1172 143</p>
          <p>9. Institut Teknologi Sepuluh Nopember 1172 1074</p>
          <p>10. Telkom University 1201 649</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>

          {/* ... (list panjang tetap bisa kamu lanjutkan) */}
        </div>
      </div>

      {/* ===== BUTTON KEMBALI ===== */}
      <div className="max-w-4xl mx-auto px-6 mt-12 text-center">
        <Link
          href="/news"
          className="bg-blue-900 text-white py-2 px-6 rounded-md text-sm hover:bg-blue-800"
        >
          Kembali
        </Link>
      </div>

    </div>
  );
}
