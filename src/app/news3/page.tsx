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
                10 Strategi Belajar Efektif Untuk Meningkatkan Prestasi Akademik
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="max-w-4xl mx-auto px-6 mt-10 text-gray-900 leading-relaxed text-[15px] md:text-base">
        <h2 className="text-2xl text-center font-semibold mb-6">Berita</h2>

        <p className="mb-4">
        Sudah belajar lama tapi hasilnya belum maksimal? Bisa jadi bukan soal rajin atau tidak, melainkan cara belajar yang belum tepat. Faktanya, strategi belajar yang efektif memiliki peran besar dalam meningkatkan pemahaman dan prestasi akademik.
        </p>

        <p className="mb-4 font-medium">Let’s check this out!</p>

        <p className="mb-4">
        Dengan metode yang tepat, belajar tidak harus melelahkan. Justru bisa lebih terarah, efisien, dan menyenangkan. Berikut ini adalah 10 strategi belajar efektif yang banyak digunakan oleh siswa dan mahasiswa berprestasi.
        </p>

        <h3 className="font-semibold text-lg mt-6 mb-4">
          10 Strategi Belajar Efektif Untuk Meningkatkan Prestasi Akademik
        </h3>

        {/* List Universitas */}
        <div className="space-y-1 text-sm md:text-[15px]">
                    1. Buat Jadwal Belajar yang Teratur
                    Manajemen waktu adalah kunci sukses dalam belajar. Buatlah jadwal belajar yang teratur dan pastikan untuk mematuhinya. Alokasikan waktu khusus setiap hari untuk belajar, menyelesaikan tugas, dan mengulas materi yang telah dipelajari.

                    Dengan jadwal yang terstruktur, kamu dapat menghindari kebiasaan belajar dadakan yang tidak efektif.

                    2. Tentukan Prioritas Belajar
                    Dalam jadwal yang sudah kamu buat, tentukan prioritas belajar berdasarkan tingkat kesulitan dan tenggat waktu. Fokuslah terlebih dahulu pada mata kuliah yang paling menantang atau yang memiliki ujian atau tugas yang lebih dekat.

                    Dengan mengatur prioritas, kamu dapat memastikan bahwa waktu dan energi kamu digunakan secara optimal.

                    3. Buat Catatan yang Efektif
                    Catatan yang baik dapat menjadi alat belajar yang sangat efektif. Gunakan metode seperti Cornell Notes, mind mapping, atau bullet points untuk membuat catatan yang rapi dan mudah dipahami.

                    Catatan yang terstruktur membantu kamu mengingat informasi lebih baik dan mempermudah saat review.

                    4. Aktif dalam Diskusi Kelas
                    Partisipasi aktif dalam diskusi kelas tidak hanya membantumu memahami materi lebih baik, tetapi juga meningkatkan keterlibatan kamu dalam proses belajar.

                    Jangan ragu untuk bertanya jika ada yang tidak dipahami dan berbagi pendapat. Ini juga dapat membantu kamu menjalin hubungan yang baik dengan dosen dan teman sekelas.

                    5. Manfaatkan Sumber Belajar Tambahan
                    Perguruan tinggi biasanya menyediakan berbagai sumber belajar tambahan seperti perpustakaan, jurnal online, dan layanan tutor. Manfaatkan sumber-sumber ini untuk memperdalam pemahaman Kamu tentang materi kuliah.

                    Membaca jurnal atau buku tambahan bisa memberikan perspektif yang lebih luas dan mendalam.

                    6. Gunakan Teknologi dengan Bijak
                    Teknologi dapat menjadi alat belajar yang sangat bermanfaat jika digunakan dengan bijak. Ada banyak aplikasi dan platform online yang dapat membantu kamu dalam belajar, seperti aplikasi flashcard, video pembelajaran, dan forum diskusi online.

                    Namun, hindari godaan untuk menghabiskan waktu terlalu banyak di media sosial atau game yang bisa mengganggu fokus belajar kamu.

                    7. Terapkan Metode Belajar yang Beragam
                    Setiap orang memiliki gaya belajar yang berbeda. Cobalah berbagai metode belajar untuk menemukan yang paling efektif bagi kamu.

                    Misalnya, belajar secara visual dengan membuat diagram dan gambar, belajar secara auditori dengan mendengarkan rekaman kuliah, atau belajar kinestetik dengan melakukan eksperimen praktis.

                    8. Istirahat yang Cukup
                    Keseimbangan antara belajar dan istirahat sangat penting. Pastikan kamu mendapatkan tidur yang cukup setiap malam dan beri waktu istirahat di sela-sela sesi belajar.

                    Istirahat yang cukup membantu otak memproses informasi yang telah dipelajari dan meningkatkan konsentrasi serta produktivitas Anda saat belajar.

                    9. Bentuk Kelompok Belajar
                    Bergabung atau membentuk kelompok belajar bisa sangat membantu. Diskusi kelompok dapat membuka wawasan baru, memungkinkan kamu untuk saling berbagi pengetahuan, dan membantu mengatasi kesulitan yang mungkin tidak bisa diselesaikan sendiri.

                    Namun, pastikan kelompok belajar tetap fokus dan tidak berubah menjadi sesi hangout semata.

                    10. Evaluasi dan Refleksi Diri
                    Secara berkala, lakukan evaluasi terhadap cara belajar Kamu. Tanyakan pada diri sendiri apa yang sudah berjalan dengan baik dan apa yang masih perlu diperbaiki.

                    Refleksi diri membantu Kamu mengenali kebiasaan belajar yang efektif dan yang tidak, sehingga Kamu dapat terus meningkatkan strategi belajar.

                    Mengembangkan strategi belajar efektif memerlukan waktu dan usaha.

                    Namun, dengan menerapkan tips di atas, Kamu dapat meningkatkan prestasi akademik dan mengatasi berbagai tantangan di perguruan tinggi.

        
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
