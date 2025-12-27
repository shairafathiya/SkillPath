// "use client";
// import Link from "next/link";
// import React from "react";

// export default function Result() {
//   const result = "Informatika";
//   const rekomendasi = [
//     "Ilmu Komputer",
//     "Data Science",
//     "Software Engineering",
//   ];

//   return (
//     <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
//       {/* Card Result */}
//       <div className="bg-gray-200 shadow-lg rounded-2xl p-8 w-full max-w-2xl text-center border border-gray-300">
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
//           QUIZ SELESAI
//         </h1>

//         <p className="text-lg text-gray-800 mb-2">
//           Bakat Minat anda adalah:
//         </p>
//         <p className="text-2xl font-semibold text-blue-900 mb-6">{result}</p>

//         {/* Rekomendasi */}
//         <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm mb-6">
//           <h2 className="text-lg font-semibold text-blue-900 mb-2">
//             💡 Rekomendasi Jurusan/Karier
//           </h2>
//           <ul className="text-gray-700 space-y-1">
//             {rekomendasi.map((item, index) => (
//               <li key={index} className="flex items-center justify-center gap-2">
//                 <span className="text-blue-700 font-bold">•</span> {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Tombol Aksi */}
//         <div className="flex gap-4 justify-center">
//           <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
//             <Link href="/result">Detail</Link>
//           </button>
//           <button className="bg-gray-300 text-blue-900 px-6 py-2 rounded-lg hover:bg-gray-400 transition">
//             <Link href ="/quiz">Coba Lagi</Link>
//           </button>
//         </div>
//       </div>

//       {/* Footer ilustrasi */}
//       <div className="mt-8 opacity-80">
//         <img
//           src="../img/Learning2.png"
//           alt="Books"
//           className="w-40 mx-auto"
//         />
//       </div>
//     </div>
//   );
// }
