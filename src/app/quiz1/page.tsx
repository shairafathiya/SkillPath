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
          Apa jenis aktivitas yang paling kamu sukai?
        </p>

        {/* Opsi Jawaban */}
        <div className="space-y-4">
          {[
            { key: "A", text: "Memecahkan soal logika/matematika" },
            { key: "B", text: "Mendesain atau membuat karya kreatif" },
            { key: "C", text: "Membantu orang lain dan bekerja dalam tim" },
            { key: "D", text: "Melakukan eksperimen atau penelitian" },
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
            <Link href ="/quiz2"> {">"}</Link>
          </button>
          <button className="bg-blue-900 text-white w-12 h-12 rounded flex items-center justify-center text-xl hover:bg-blue-800">
            <Link href ="/quiz2"> {">"}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
