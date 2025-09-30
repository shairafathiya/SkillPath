"use client";
import Link from "next/link";
import { useState } from "react";

export default function QuizPage() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Card */}
      <div className="bg-gray-200 p-8 rounded-lg shadow-md w-full max-w-3xl border-2 border-blue-400">
        {/* Judul */}
        <h1 className="text-3xl font-bold text-center mb-6">QUIZ BLABLA</h1>

        {/* Pertanyaan */}
        <p className="text-center mb-6 text-lg">
          Saat belajar, kamu lebih suka:
        </p>

        {/* Opsi Jawaban */}
        <div className="space-y-4">
          {[
            { key: "A", text: "Menghitung angka atau memecahkan masalah" },
            { key: "B", text: "Menggambar, menulis, atau berkreasi" },
            { key: "C", text: "Berdiskusi dengan orang lain" },
            { key: "D", text: "Melakukan percobaan atau praktik langsung" },
          ].map((option) => (
            <div
              key={option.key}
              onClick={() => handleSelect(option.key)}
              className={`cursor-pointer border rounded px-4 py-2 ${
                selectedAnswer === option.key
                  ? "bg-blue-900 text-white border-blue-900"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {option.key}. {option.text}
            </div>
          ))}
        </div>

        {/* Tombol Navigasi */}
        <div className="flex justify-between mt-8">
          <button className="bg-blue-900 text-white w-12 h-12 rounded flex items-center justify-center text-xl hover:bg-blue-800">
            <Link href ="/quiz1"> {"<"}</Link>
          </button>
          <button className="bg-blue-900 text-white w-12 h-12 rounded flex items-center justify-center text-xl hover:bg-blue-800">
            <Link href ="/quiz2"> {">"}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
