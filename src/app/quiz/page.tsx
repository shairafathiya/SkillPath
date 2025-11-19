"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

export default function QuizPage() {
  return (
    <main className="flex justify-center mt-24 px-4">
      <div className="bg-gray-200 rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full">
        {/* Gambar Kiri */}
        <div className="w-full md:w-1/2">
          <Image
            src="/img/Belajar.jpg" 
            alt="Quiz Illustration"
            width={500}
            height={300}
            className="rounded-md border-4 border-blue-900 object-cover"
          />
        </div>

        {/* Konten Kanan */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-extrabold mb-4 text-black">
            QUIZ PENENTUAN JURUSAN
          </h2>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Quiz ini membantu kamu mengetahui jurusan yang cocok berdasarkan minat,
            cara belajar, dan preferensi aktivitas. Hasil akhir memberikan rekomendasi
            jurusan yang paling sesuai untuk perjalanan akademikmu.
          </p>
          <button className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition">
           <Link href="/quiz1">Mulai Test</Link> 
          </button>
        </div>
      </div>
    </main>
  );
}
