"use client";
import Link from "next/link";
import React from "react";

export default function InformatikaDetail() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-2xl shadow-lg border border-gray-300">
        {/* Judul */}
        <h1 className="text-4xl font-extrabold text-blue-900 text-center mb-6">
          Jurusan Informatika
        </h1>

        {/* Penjelasan Karier */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Karier di Informatika</h2>
          <p className="text-gray-700 leading-relaxed">
            Lulusan Informatika memiliki peluang karier yang sangat luas di era digital.
            Beberapa bidang populer antara lain:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
            <li><strong>Software Engineer</strong> – membangun aplikasi & sistem.</li>
            <li><strong>Data Scientist</strong> – menganalisis data untuk menghasilkan insight.</li>
            <li><strong>Cybersecurity Specialist</strong> – menjaga keamanan sistem & data.</li>
            <li><strong>AI/ML Engineer</strong> – mengembangkan kecerdasan buatan & machine learning.</li>
            <li><strong>UI/UX Designer</strong> – mendesain pengalaman pengguna yang optimal.</li>
          </ul>
        </section>

        {/* Rekomendasi Jurusan */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Rekomendasi Jurusan Terkait</h2>
          <div className="bg-white p-4 rounded-xl border shadow-sm">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Ilmu Komputer</li>
              <li>Sistem Informasi</li>
              <li>Teknik Komputer</li>
              <li>Data Science</li>
              <li>Artificial Intelligence</li>
            </ul>
          </div>
        </section>

        {/* Rekomendasi Kampus */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Rekomendasi Kampus Terbaik</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Indonesia (UI)</h3>
              <p className="text-gray-700 text-sm">Ilmu Komputer, Sistem Informasi</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Institut Teknologi Bandung (ITB)</h3>
              <p className="text-gray-700 text-sm">Informatika, Data Science</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Universitas Gadjah Mada (UGM)</h3>
              <p className="text-gray-700 text-sm">Ilmu Komputer, Elektronika & Instrumentasi</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">Institut Teknologi Sepuluh Nopember (ITS)</h3>
              <p className="text-gray-700 text-sm">Informatika, Sistem Informasi</p>
            </div>
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <h3 className="font-semibold text-blue-900">BINUS University</h3>
              <p className="text-gray-700 text-sm">Computer Science, Cyber Security</p>
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
