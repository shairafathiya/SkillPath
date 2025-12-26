"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

export default function QuizPage() {
  const [current, setCurrent] = useState(1);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const totalSoal = 5;
  const router = useRouter();

  const questions = [
    {
      id: 1,
      text: "Saat mempelajari hal baru, saya lebih mudah memahami jika...",
      options: [
        "A. Ada gambar/diagramnya",
        "B. Ada penjelasan suara atau saya mendengarkan orang lain",
        "C. Saya langsung mencoba atau mempraktikkannya",
      ],
    },
    {
      id: 2,
      text: "Ketika mencatat pelajaran, saya cenderung...",
      options: [
        "A. Membuat mindmap atau catatan penuh warna",
        "B. Mendengarkan sambil mencatat poin penting",
        "C. Menulis sedikit lalu lebih suka bergerak/tanya langsung",
      ],
    },
    {
      id: 3,
      text: "3. Saat mengingat sesuatu, saya mengingat...",
      options: [
        "A. Bentuk visual (gambar/tulisan)",
        "B. Suara atau kata-kata yang pernah saya dengar",
        "C. Perasaan atau gerakan ketika melakukannya",
      ],
    },
    {
      id: 4,
      text: "Ketika belajar sendiri, saya lebih nyaman dengan...",
      options: [
        "A. Baca buku, lihat video visual",
        "B. Dengerin rekaman, penjelasan guru/dosen",
        "C. Latihan langsung, eksperimen, praktik",
      ],
    },
    {
      id: 5,
      text: "Dalam sebuah aktivitas kelompok, peran yang paling cocok untuk saya adalah...",
      options: [
        "A. Desainer/pembuat diagram",
        "B. Presenter/pembicara",
        "C. Pelaksana/praktisi yang mengatur gerakan/aktivitas",
      ],
    },
  ];

    const handleFinish = () => {
    
    if (Object.keys(answers).length < totalSoal) {
      alert("Harap jawab semua soal sebelum menyelesaikan quiz");
      return;
    }

    localStorage.setItem("quizAnswers", JSON.stringify(answers));


    router.push("/quiz/result");
  };


  const soal = questions.find((q) => q.id === current);

  if (!soal) return null;

  const handleSelectOption = (optionIndex: number) => {
    setAnswers({ ...answers, [current]: optionIndex });
  };

  return (
    <div className="min-h-screen flex bg-white pt-8">
      {/* ===== SIDEBAR ===== */}
      <div className="w-64 bg-blue-900 text-white flex flex-col items-center py-10 relative">
        {/* Toggle Button */}
        <button className="absolute left-[-25px] bg-blue-900 text-white px-3 py-2 rounded-lg shadow">
          {"<<"}
        </button>

        {/* Numbers */}
        <div className="grid grid-cols-3 gap-3 mt-8">
          {Array.from({ length: totalSoal }).map((_, i) => {
            const questionNumber = i + 1;
            const isAnswered = answers[questionNumber] !== undefined;
            const isCurrent = current === questionNumber;
            
            return (
              <button
                key={i}
                onClick={() => setCurrent(questionNumber)}
                className={`w-12 h-12 flex items-center justify-center rounded font-semibold border transition-all ${
                  isCurrent
                    ? "scale-110 shadow-lg bg-white text-blue-900"
                    : isAnswered
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-white text-blue-900 hover:bg-gray-200"
                }`}
              >
                {questionNumber}
              </button>
            );
          })}
        </div>

        {/* Exit Button */}
        <Link
          href="/quizmenu"
          className="absolute bottom-10 bg-red-600 text-white px-8 py-2 rounded-lg shadow hover:bg-red-700"
        >
          Keluar
        </Link>
      </div>

      {/* ===== MAIN QUIZ AREA ===== */}
      <div className="flex-1 px-6 md:px-20 py-10">
        <h1 className="text-center text-3xl font-extrabold tracking-wider mb-10">
          QUIZ GAYA BELAJAR
        </h1>

        {/* Blue Box Soal */}
        <div className="bg-sky-400 rounded-2xl p-8 shadow max-w-3xl mx-auto">
          <p className="font-medium text-lg mb-6">
            {soal.id}. {soal.text}
          </p>

          <div className="flex flex-col gap-4">
            {soal.options.map((opt, idx) => {
              const isSelected = answers[current] === idx;
              
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`text-left px-5 py-3 rounded-lg transition-all ${
                    isSelected
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
       <div className="flex justify-between max-w-3xl mx-auto mt-10">
          <button
            disabled={current === 1}
            onClick={() => setCurrent((p) => p - 1)}
            className="bg-blue-900 text-white px-6 py-3 rounded-lg disabled:bg-gray-400"
          >
            {"<"}
          </button>

          {current === totalSoal ? (
            <button
              onClick={handleFinish}
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-green-500"
            >
              Finish
            </button>
          ) : (
            <button
              onClick={() => setCurrent((p) => p + 1)}
              className="bg-blue-900 text-white px-6 py-3 rounded-lg"
            >
              {">"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}