"use client";
import Link from "next/link";
import React from "react";

export default function InformatikaDetail() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-2xl shadow-lg border border-gray-300">
        {/* Judul */}
        <h1 className="text-4xl font-extrabold text-blue-900 text-center mb-6">
          Sosial & Humaniora
        </h1>

        {/* Penjelasan Karier */}
        <section className="mb-8">
          
          <p className="text-gray-700 leading-relaxed">
            Berdasarkan hasil kuis, kamu memiliki kepekaan sosial dan kemampuan komunikasi yang baik. Kamu tertarik memahami manusia, perilaku sosial, serta berkontribusi langsung dalam kehidupan masyarakat.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Karakteristik:</h2>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
            <li>Empati tinggi</li>
            <li>Komunikatif dan mudah beradaptasi</li>
            <li>Suka berdiskusi dan bekerja dengan orang lain</li>
            <li>Tertarik pada isu sosial dan pendidikan</li>
            
          </ul>
        </section>

        {/* Rekomendasi Jurusan */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Rekomendasi Jurusan:</h2>
          <div className="bg-white p-4 rounded-xl border shadow-sm">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Psikologi</li>
              <li>Pendidikan</li>
              <li>Sosiologi</li>
              <li>Manajemen</li>
 
            </ul>
          </div>
        </section>

        {/* Contoh Karier */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Contoh Karier:</h2>
          <div className="bg-white p-4 rounded-xl border shadow-sm">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Psikolog</li>
              <li>Guru / Dosen</li>
              <li>PHRD</li>
              <li>Konselor</li>
 
            </ul>
          </div>
        </section>

        {/* Rekomendasi Kampus */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Rekomendasi Kampus Terbaik</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Indonesia (UI)</h3>
              <p className="text-gray-700 text-sm">Psikologi, Manajemen</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Gadjah Mada (UGM)</h3>
              <p className="text-gray-700 text-sm">Psikologi, Ilmu Sosial</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Airlangga (UNAIR)</h3>
              <p className="text-gray-700 text-sm">Psikologi</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Padjadjaran (UNPAD)</h3>
              <p className="text-gray-700 text-sm">Sosiologi, Manajemen</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Brawijaya (UB)</h3>
              <p className="text-gray-700 text-sm">Psikologi</p>
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