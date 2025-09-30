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
    </div>
    </main>
  )
}