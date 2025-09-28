

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12">
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
          <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded shadow hover:bg-blue-800">
            Mulai Test
          </button>
        </div>

       

     

        {/* Right Illustration */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/img/Learning.png" 
            alt="Ilustrasi orang naik tangga buku"
            className="w-80 h-auto"
          />
        </div>
      </section>
    </div>
    
  );
}
