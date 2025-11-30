export default function QuizListPage() {
  const quizzes = [
    {
      title: "QUIZ GAYA BELAJAR",
      desc: "Cari tahu bagaimana cara belajar yang paling efektif untuk kamu. Apakah kamu lebih mudah memahami melalui gambar, suara, atau praktek langsung? Kuis ini akan membantumu mengenali tipe gaya belajar terbaik untuk mendukung hasil belajarmu.",
      img: "/img/quiz.jpg",
    },
    {
      title: "QUIZ MINAT JURUSAN IPA / IPS",
      desc: "Masih bingung mau masuk IPA atau IPS? Kuis ini membantu menilai minat, cara berpikir, dan ketertarikanmu pada sains atau ilmu sosial. Hasilnya akan menunjukkan jurusan SMA yang paling cocok untuk kamu.",
      img: "/img/quiz.jpg",
    },
    {
      title: "QUIZ JURUSAN KULIAH",
      desc: "Belum yakin jurusan kuliah apa yang sesuai dengan dirimu? Kuis ini dirancang untuk melihat minat, kemampuan, dan kecenderunganmu di berbagai bidang seperti teknologi, seni, sosial, atau kesehatan.",
      img: "/img/quiz.jpg",
    },
  ];

  return (
    <div className="flex  justify-center item-center  pt-20 px-6 py-8  mx-auto max-w-4xl ">

      <div className="  space-y-10">
        {quizzes.map((q, i) => (
          <div key={i} className="flex gap-6 bg-gray-100 p-6 rounded-lg shadow ">
            {/* Left Image */}
            <div className="w-1/3">
              <img
                src={q.img}
                alt="quiz illustration"
                className="rounded-lg"
              />
            </div>

            {/* Right Content */}
            <div className="w-2/3 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{q.title}</h2>
                <p className="text-gray-700 mt-2 leading-relaxed">{q.desc}</p>
              </div>

              <button className="mt-4 bg-blue-900 text-white px-6 py-3 rounded-lg w-fit text-lg font-semibold hover:bg-blue-800 transition">
                Mulai Test
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
