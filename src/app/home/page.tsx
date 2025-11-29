import Image from "next/image";
import Link from "next/link";

export default function HomeAfterLogin() {
  return (
    <div className="min-h-screen bg-white pb-16">

      {/* === PROFILE CARD === */}
      <div className="max-w-5xl mx-auto px-6 mt-10">
        <div className="bg-indigo-400 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">

          {/* Profile Icon */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow">
              <img src="/img/profile-icon.png" className="w-20" />
            </div>
            <p className="mt-3 text-lg font-medium text-black">Username</p>
          </div>

          {/* Profile Info */}
          <div className="text-white text-lg leading-relaxed md:ml-10">
            <p>Nama : ................................</p>
            <p>Usia : ...................................</p>
            <p>Jenis kelamin : .....................</p>
            <p>Tingkat pendidikan : ...........</p>
            <p>Total quiz : ..............................</p>
          </div>

        </div>
      </div>

      {/* === CTA BOX === */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <div className="bg-sky-400 rounded-2xl py-14 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Temukan Jati Diri mu !
          </h2>

          <Link
            href="/quiz"
            className="inline-block mt-8 bg-blue-900 text-white px-8 py-3 rounded-lg text-lg shadow hover:bg-blue-800"
          >
            Mulai Test →
          </Link>
        </div>
      </div>

      {/* === NEWS TITLE === */}
      <div className="max-w-5xl mx-auto px-6 mt-20">
        <div className="bg-indigo-400 rounded-xl py-4">
          <h3 className="text-center text-3xl font-bold text-white italic">
            News!
          </h3>
        </div>
      </div>

      {/* === NEWS CARDS === */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <div className="bg-blue-900 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-indigo-500 rounded-2xl p-4 shadow">
            <img
              src="/img/uni2.jpg"
              className="rounded-xl w-full h-40 object-cover"
            />
            <Link href={"/news1"}>
            <p className="text-center text-white mt-4 font-medium">
              100 Universitas Terbaik di Indonesia 2025 versi Webometrics
            </p>
            </Link>
            
          </div>

          {/* Card 2 */}
          <div className="bg-indigo-500 rounded-2xl p-4 shadow">
            <img
              src="/img/uni.webp"
              className="rounded-xl w-full h-40 object-cover"
            />
            <Link href={"/news2"}>
             <p className="text-center text-white mt-4 font-medium">
              Kampus Terbaik di Indonesia Versi Unirank 2025
            </p>
            </Link>
           
          </div>

          {/* Card 3 */}
          <div className="bg-indigo-500 rounded-2xl p-4 shadow">
            <img
              src="/img/rajin.jpg"
              className="rounded-xl w-full h-40 object-cover"
            />
            <Link href={"/news3"}>
            <p className="text-center text-white mt-4 font-medium">
              10 Strategi Belajar Efektif untuk Meningkatkan Prestasi Akademik
            </p>
            </Link>
            
          </div>

        </div>
      </div>

    </div>
  );
}
