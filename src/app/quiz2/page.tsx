"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const [current, setCurrent] = useState(1);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const totalSoal = 5;
  const router = useRouter();

  const questions = [
    {
      id: 1,
      text: "Saya lebih suka pelajaran...",
      options: [
        "A. Matematika, Biologi, Fisika",
        "B. Ekonomi, Geografi, Sosiologi",
        
      ],
    },
    {
      id: 2,
      text: "Jika diberi tugas proyek, saya lebih suka membuat...",
      options: [
        "A. Percobaan ilmiah atau penelitian",
        "B. Laporan sosial, wawancara, atau analisis ekonomi",
        
      ],
    },
    {
      id: 3,
      text: "Saya lebih tertarik membahas topik tentang...",
      options: [
        "A. Alam, eksperimen, teknologi sains",
        "B. Perilaku masyarakat, sejarah, ekonomi",
       
      ],
    },
    {
      id: 4,
      text: "Pekerjaan impian saya lebih dekat dengan...",
      options: [
        "A. Dokter, peneliti, insinyur",
        "B. Pengusaha, analis ekonomi, pekerja sosial",
       
      ],
    },
    {
      id: 5,
      text: "Cara berpikir saya lebih cenderung...",
      options: [
        "A. Analitis, logis, numerik",
        "B. Observatif, sosial, berbasis kasus nyata masyarakat",
        
      ],
    },
  ];

    const handleFinish = () => {
      // optional: validasi semua soal terjawab
      if (Object.keys(answers).length < totalSoal) {
        alert("Harap jawab semua soal sebelum menyelesaikan quiz");
        return;
      }

      // Simpan jawaban (sementara) → localStorage
      localStorage.setItem("quizAnswers", JSON.stringify(answers));

      // Arahkan ke halaman result
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
          QUIZ MINAT JURUSAN IPA / IPS
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