"use client";

import Link from "next/link";
import React from "react";


export default function QuizResult() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center mt-8">


      {/* Card Result */}
      <div className="mt-16 w-[80%] md:w-[60%] lg:w-[50%] bg-gray-300 rounded-lg shadow-md p-10 flex flex-col items-center text-center">
        <h2 className="text-4xl font-extrabold mb-6">QUIZ SELESAI</h2>
        <p className="text-lg mb-6">
          Bakat Minat anda adalah :{" "}
          <span className="font-semibold">Informatika</span>
        </p>
        <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-lg">
          <Link href="/result">Detail</Link> 
        </button>
      </div>

      {/* Hiasan buku (pojok kanan bawah) */}
      <div className="fixed bottom-0 right-0 p-4">
        <img
          src="/books.png"
          alt="Books Illustration"
          className="w-32 md:w-40 lg:w-48"
        />
      </div>
    </div>
  );
}
