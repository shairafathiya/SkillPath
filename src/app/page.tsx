import Link from "next/link";
import React from "react";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16">
        
        {/* Left Text */}
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-blue-900">SkillPath</h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-900 leading-snug">
            Temukan Jurusan <br /> Sesuai Bakat dan Minat
          </h2>

          <p className="mt-4 text-gray-700">
            Platform ini membantumu mengenali potensi diri, mengeksplorasi pilihan jurusan,
            dan memilih jalur pendidikan yang tepat untuk masa depan.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <Link
              href="/login"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800"
            >
              Masuk
            </Link>

            <Link
              href="/daftar"
              className="border border-blue-900 text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-100"
            >
              Daftar
            </Link>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/img/Learning.png"
            alt="Ilustrasi orang naik tangga buku"
            className="w-[350px] md:w-[420px] h-auto"
            
          />
        </div>
      </section>

      {/* TENTANG KAMI TITLE */}
      <div className="bg-gray-200 py-4">
        <h2 className="text-center text-3xl font-semibold text-blue-900">
          Tentang Kami
        </h2>
      </div>

      {/* Section Cards */}
      <section className="max-w-6xl mx-auto px-6 py-12 space-y-16">

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="bg-blue-500 text-white p-8 rounded-xl md:w-1/2">
            <p className="text-lg font-medium">
              Platform ini membantumu mengenali potensi diri, mengeksplorasi pilihan jurusan,
              dan memilih jalur pendidikan yang tepat untuk masa depan.
            </p>
          </div>
          <img
            src="/img/about1.png"
            className="rounded-xl w-full md:w-1/2 h-64 object-cover"
            alt="Students studying"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="bg-blue-500 text-white p-8 rounded-xl md:w-1/2">
            <p className="text-lg font-medium">
              Kami membantu siswa memahami minat, bakat, serta jalur pendidikan
              yang paling sesuai demi masa depan yang lebih terarah.
            </p>
          </div>
          <img
            src="/img/rajin.jpg"
            className="rounded-xl w-full md:w-1/2 h-64 object-cover"
            alt="Students discussing"
          />
        </div>

      </section>

      {/* Footer */}
      <div className="bg-blue-900 h-24"></div>
    </div>
  );
}
