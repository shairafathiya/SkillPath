"use client";
import Link from "next/link";
import React from "react";

export default function InformatikaDetail() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-2xl shadow-lg border border-gray-300">
        {/* Judul */}
        <h1 className="text-4xl font-extrabold text-blue-900 text-center mb-6">
          Rekomendasi Jurusan IPS
        </h1>

        {/* Penjelasan Karier */}
        <section className="mb-8">
          
          <p className="text-gray-700 leading-relaxed">
            Hasil kuis menunjukkan bahwa kamu lebih cocok masuk jurusan IPS. Kamu cenderung memiliki kemampuan observasi sosial, komunikasi, dan analisis berbasis kasus nyata, serta tertarik memahami perilaku manusia dan dinamika masyarakat.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Karakteristik:</h2>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
            <li>Tertarik pada isu sosial, ekonomi, dan budaya</li>
            <li>Memiliki kemampuan komunikasi yang baik</li>
            <li>Suka berdiskusi dan menganalisis kasus nyata</li>
            <li>Berpikir kontekstual dan berbasis realitas sosial</li>
            
          </ul>
        </section>

        {/* Rekomendasi Jurusan */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Rekomendasi Jurusan:</h2>
          <div className="bg-white p-4 rounded-xl border shadow-sm">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Manajemen</li>
              <li>Akuntansi</li>
              <li>Ilmu Komunikasi (Elektro, Mesin, Sipil)</li>
              <li>Sosiologi</li>
              <li>Psikologi</li>
 
             
            </ul>
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

