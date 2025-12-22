"use client";
import Link from "next/link";
import React from "react";

export default function InformatikaDetail() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-2xl shadow-lg border border-gray-300">
        {/* Judul */}
        <h1 className="text-4xl font-extrabold text-blue-900 text-center mb-6">
          Sains & Kesehatan
        </h1>

        {/* Penjelasan Karier */}
        <section className="mb-8">
          
          <p className="text-gray-700 leading-relaxed">
            Hasil kuis menunjukkan bahwa kamu cocok di bidang sains dan kesehatan, dengan ketertarikan pada penelitian, eksperimen, dan pemahaman ilmiah tentang alam serta kesehatan manusia.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Karakteristik:</h2>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
            <li>Teliti dan detail</li>
            <li>Menyukai eksperimen dan observasi</li>
            <li>Tertarik pada dunia medis dan sains</li>
            <li>Sabar dan tekun dalam penelitian</li>
            
          </ul>
        </section>

        {/* Rekomendasi Jurusan */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Rekomendasi Jurusan:</h2>
          <div className="bg-white p-4 rounded-xl border shadow-sm">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Kedokteran</li>
              <li>Farmasi</li>
              <li>Biologi</li>
              <li>Kesehatan Masyarakat</li>
 
            </ul>
          </div>
        </section>

        {/* Contoh Karier */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Contoh Karier:</h2>
          <div className="bg-white p-4 rounded-xl border shadow-sm">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Dokter</li>
              <li>Apoteker</li>
              <li>Peneliti</li>
              <li>Tenaga Kesehatan</li>
 
            </ul>
          </div>
        </section>

        {/* Rekomendasi Kampus */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Rekomendasi Kampus Terbaik</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Indonesia (UI)</h3>
              <p className="text-gray-700 text-sm">Kedokteran, Farmasi</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Airlangga (UNAIR)</h3>
              <p className="text-gray-700 text-sm">Kedokteran</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Gadjah Mada (UGM)</h3>
              <p className="text-gray-700 text-sm">Kedokteran, Biologi</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Padjadjaran (UNPAD)</h3>
              <p className="text-gray-700 text-sm">Kedokteran, Farmasi</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Hasanuddin (UNHAS)</h3>
              <p className="text-gray-700 text-sm">Kedokteran</p>
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