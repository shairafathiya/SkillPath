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
      text: "Jenis aktivitas yang paling saya nikmati adalah...",
      options: [
        "A. Memecahkan masalah logika/teknologi",
        "B. Membuat karya kreatif/visual",
        "C. Berkegiatan sosial/komunikasi",
        "D. Melakukan riset/eksperimen",
      ],
    },
    {
      id: 2,
      text: "Saya ingin kuliah yang membuat saya menjadi...",
      options: [
        "A. Programmer, data analyst, engineer",
        "B. Desainer, penulis, kreator konten",
        "C. Psikolog, guru, konselor, komunikator",
        "D. Dokter, peneliti sains, farmasis",
      ],
    },
    {
      id: 3,
      text: "Tugas kuliah yang paling saya sukai adalah...",
      options: [
        "A. Coding, hitungan, analisis data",
        "B. Desain grafis, karya tulis, seni",
        "C. Presentasi, interview, diskusi",
        "D. Percobaan laboratorium"
      ],
    },
    {
      id: 4,
      text: "Saya merasa paling kuat dalam kemampuan...",
      options: [
        "A. Berpikir logis dan sistematis",
        "B. Kreativitas & imajinasi",
        "C. Kepekaan sosial & komunikasi",
        "D. Observasi ilmiah & analisis eksperimen",
      ],
    },
    {
      id: 5,
      text: "Bidang topik yang paling menarik bagi saya...",
      options: [
        "A. Teknologi, komputer, matematika",
        "B. Seni, media, bahasa",
        "C. Manajemen, psikologi, pendidikan",
        "D. Biologi, kesehatan, lingkungan"
      ],
    },
  ];

    const handleFinish = () => {
      if (Object.keys(answers).length < totalSoal) {
        alert("Harap jawab semua soal sebelum menyelesaikan quiz");
        return;
      }

      // Hitung jumlah jawaban A, B, C
      let countA = 0;
      let countB = 0;
      let countC = 0;
      let countD = 0;

      Object.values(answers).forEach((value) => {
        if (value === 0) countA++;
        if (value === 1) countB++;
        if (value === 2) countC++;
        if (value === 3) countC++;
      });

      // Tentukan hasil dominan
      let result = "";

      if (countA >= countB && countA >= countC && countA >= countD) {
        result = "teknik-informatika";      // dominan A
      } else if (countB >= countA && countB >= countC) {
        result = "seni-media"; }   // dominan B
        else if (countC >= countA && countC >= countD) {
        result = "sosial-humaniora"; //dominan c
      } else {
        result = "sains-kesehatan"; // dominan D
      }

      // Simpan ke localStorage (opsional)
      localStorage.setItem("quizAnswers", JSON.stringify(answers));
      localStorage.setItem("quizResult", result);

      // Redirect ke halaman hasil
      router.push(`/result/${result}`);
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
          QUIZ JURUSAN KULIAH
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