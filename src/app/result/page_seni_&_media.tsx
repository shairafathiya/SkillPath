"use client";
import Link from "next/link";
import React from "react";

export default function InformatikaDetail() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-2xl shadow-lg border border-gray-300">
        {/* Judul */}
        <h1 className="text-4xl font-extrabold text-blue-900 text-center mb-6">
          Seni & Media
        </h1>

        {/* Penjelasan Karier */}
        <section className="mb-8">
          
          <p className="text-gray-700 leading-relaxed">
            Hasil kuis menunjukkan bahwa kamu memiliki jiwa kreatif dan imajinatif. Kamu lebih menikmati kegiatan yang melibatkan ekspresi visual, ide kreatif, dan komunikasi melalui media.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Karakteristik:</h2>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
            <li>Kreatif dan inovatif</li>
            <li>Peka terhadap visual dan estetika</li>
            <li>Menyukai karya seni dan media</li>
            <li>Suka mengekspresikan ide secara bebas</li>
            
          </ul>
        </section>

        {/* Rekomendasi Jurusan */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Rekomendasi Jurusan:</h2>
          <div className="bg-white p-4 rounded-xl border shadow-sm">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Desain Komunikasi Visual (DKV)</li>
              <li>Ilmu Komunikasi</li>
              <li>Sastra</li>
              <li>Perfilman</li>
 
            </ul>
          </div>
        </section>

        {/* Contoh Karier */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Contoh Karier:</h2>
          <div className="bg-white p-4 rounded-xl border shadow-sm">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Desain Grafis</li>
              <li>Content Creator</li>
              <li>Penulis</li>
              <li>Creative Director</li>
 
            </ul>
          </div>
        </section>

        {/* Rekomendasi Kampus */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Rekomendasi Kampus Terbaik</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Institut Kesenian Jakarta (IKJ)</h3>
              <p className="text-gray-700 text-sm">Seni Rupa, Film</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Multimedia Nusantara (UMN)</h3>
              <p className="text-gray-700 text-sm">DKV, Film & Animasi</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Telkom University</h3>
              <p className="text-gray-700 text-sm">DKV, Broadcasting</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Indonesia (UI)</h3>
              <p className="text-gray-700 text-sm">Ilmu Komunikasi</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Padjadjaran (UNPAD)</h3>
              <p className="text-gray-700 text-sm">Sastra, Ilmu Komunikasi</p>
            </div>
          </div>
        </section>

        {/* Tombol Navigasi */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
           <Link href= "/quiz">Kembali ke Home</Link> 
          </button>
          <button className="bg-gray-300 text-blue-900 px-6 py-2 rounded-lg hover:bg-gray-400 transition">
            <Link href="/quiz1">Coba Quiz Lagi</Link>
          </button>
        </div>
      </div>
    </div>
  );
}