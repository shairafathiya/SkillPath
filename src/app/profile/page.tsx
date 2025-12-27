// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// export default function ProfileCard() {
//   const [isEdit, setIsEdit] = useState(false);

//   const [profile, setProfile] = useState({
//     username: "Username",
//     nama: "",
//     usia: "",
//     gender: "",
//     pendidikan: "",
//     totalQuiz: "0",
//     photo: "/default-avatar.png",
//   });

//   // Load data dari localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("profileData");
//     if (saved) setProfile(JSON.parse(saved));
//   }, []);

//   // Simpan data
//   const handleSave = () => {
//     localStorage.setItem("profileData", JSON.stringify(profile));
//     setIsEdit(false);
//   };

//   // Handle input
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   // Handle foto profil
//   const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = () => {
//       setProfile({ ...profile, photo: reader.result as string });
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="min-h-screen bg-white pb-16 mt-20 pt-4">
//       <div className="max-w-5xl mx-auto px-6">
//         <div className="bg-indigo-400 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">

//           {/* FOTO PROFIL */}
//           <div className="flex flex-col items-center">
//             <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow">
//               <Image
//                 src={profile.photo}
//                 alt="profilpic"
//                 className="w-28 h-28 rounded-full object-cover"
//               />
//             </div>

//             {isEdit && (
//               <label className="mt-2 text-sm text-black cursor-pointer">
//                 Ganti Foto
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handlePhotoChange}
//                 />
//               </label>
//             )}

//             {isEdit ? (
//               <input
//                 name="username"
//                 value={profile.username}
//                 onChange={handleChange}
//                 className="mt-3 px-2 py-1 rounded text-black"
//               />
//             ) : (
//               <p className="mt-3 text-lg font-medium text-black">
//                 {profile.username}
//               </p>
//             )}
//           </div>

//           {/* INFO PROFIL */}
//           <div className="text-white text-lg leading-relaxed md:ml-10 space-y-2">
//             {[
//               ["nama", "Nama"],
//               ["usia", "Usia"],
//               ["gender", "Jenis Kelamin"],
//               ["pendidikan", "Tingkat Pendidikan"],
//               ["totalQuiz", "Total Quiz"],
//             ].map(([key, label]) => (
//               <p key={key}>
//                 {label} :{" "}
//                 {isEdit ? (
//                   <input
//                     name={key}
//                     value={(profile as any)[key]}
//                     onChange={handleChange}
//                     className="ml-2 px-2 py-1 rounded text-black"
//                   />
//                 ) : (
//                   <span>{(profile as any)[key] || "—"}</span>
//                 )}
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* BUTTON */}
//         <div className="flex justify-end mt-6">
//           {isEdit ? (
//             <button
//               onClick={handleSave}
//               className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
//             >
//               Simpan
//             </button>
//           ) : (
//             <button
//               onClick={() => setIsEdit(true)}
//               className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600"
//             >
//               Edit Profil
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
