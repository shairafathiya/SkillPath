"use client";
import { profile } from "console";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Tambahan

export default function HomeAfterLogin() {
        
        const [profile, setProfile] = useState({
          nama: "Username",
          usia: "",
          gender: "",
          pendidikan: "",
          totalQuiz: "",
        });
      
        const [isEditing, setIsEditing] = useState(false);
        const [profilePic, setProfilePic] = useState("/img/Userpfp.png"); // default foto profil
      
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          setProfile({ ...profile, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          setIsEditing(false);
        };
      
        const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file) {
            const imgUrl = URL.createObjectURL(file);
            setProfilePic(imgUrl);
          }
        };
  return (
    
    <div className="min-h-screen bg-white pb-16 mt-20">
      {/* === PROFILE CARD === */}
      <div className="max-w-5xl mx-auto px-6 ">
        <div className="bg-indigo-400 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">

          {/* Profile Icon */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow">
              <img 
              src={profilePic}
              alt="profilpic"
              className="w-28 h-28 rounded-full object-cover " />
            </div>
            <p className="mt-3 text-lg font-medium text-black">Username</p>
          </div>

          {/* Profile Info */}
          <div className="text-white text-lg leading-relaxed md:ml-10">
            <p>Nama : ................................</p>
            <p>Usia : ...................................</p>
            <p>Jenis kelamin : .....................</p>
            <p>Tingkat pendidikan : ...........</p>
            <p>Total quiz : ..............................</p>
          </div>

        </div>
      </div>

      {/* === CTA BOX === */}
      <div className="max-w-5xl mx-auto px-6 mt-4">
        <div className="bg-sky-400 rounded-2xl py-14 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Temukan Jati Diri mu !
          </h2>

          <Link
            href="/quizmenu"
            className="inline-block mt-8 bg-blue-900 text-white px-8 py-3 rounded-lg text-lg shadow hover:bg-blue-800"
          >
            Mulai Test →
          </Link>
        </div>
      </div>

      {/* === NEWS TITLE === */}
      <div className="max-w-5xl mx-auto px-6 mt-4">
        <div className="bg-indigo-400 rounded-xl py-4">
           
          <h3 className="text-center text-3xl font-bold text-white italic">
            News!
          </h3>
        </div>
      </div>

      {/* === NEWS CARDS === */}
      <div className="max-w-6xl mx-auto px-6 mt-4">
        <div className="bg-blue-900 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-indigo-500 rounded-2xl p-4 shadow">
            <img
              src="/img/uni2.jpg"
              className="rounded-xl w-full h-40 object-cover"
            />
             <Link
            href={"/news1"}>
                 <p className="text-center text-white mt-4 font-medium">
              100 Universitas Terbaik di Indonesia 2025 versi Webometrics
            </p>
            </Link>
           
          </div>

          {/* Card 2 */}
          <div className="bg-indigo-500 rounded-2xl p-4 shadow">
            <img
              src="/img/uni.webp"
              className="rounded-xl w-full h-40 object-cover"
            />
            <p className="text-center text-white mt-4 font-medium">
              Kampus Terbaik di Indonesia Versi Unirank 2025
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-indigo-500 rounded-2xl p-4 shadow">
            <img
              src="/img/rajin.jpg"
              className="rounded-xl w-full h-40 object-cover"
            />
            <p className="text-center text-white mt-4 font-medium">
              10 Strategi Belajar Efektif untuk Meningkatkan Prestasi Akademik
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}


      export function ProfilePage() {
        const [profile, setProfile] = useState({
          nama: "Username",
          usia: "",
          gender: "",
          pendidikan: "",
          totalQuiz: "",
        });
      
        const [isEditing, setIsEditing] = useState(false);
        const [profilePic, setProfilePic] = useState("/img/Userpfp.png"); // default foto profil
      
        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          setProfile({ ...profile, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          setIsEditing(false);
        };
      
        const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0];
          if (file) {
            const imgUrl = URL.createObjectURL(file);
            setProfilePic(imgUrl);
          }
        };
      
        return (
          <div className="min-h-screen bg-white flex flex-col items-center mt-15 ">
            {/* Profile Card */}
            <div className="bg-gray-200 p-8 rounded-lg shadow-md w-full max-w-4xl mt-8 flex relative">
              
              {/* Foto Profil */}
              <div className="flex flex-col items-center w-1/3">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow"
                />
                <p className="mt-3 font-medium text-lg">{profile.nama || "Username"}</p>
                {isEditing && (
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-3 text-sm"
                  />
                )}
              </div>
      
              {/* Data Profil */}
              <div className="w-2/3 pl-6">
                {isEditing ? (
                  <form className="space-y-3" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="nama"
                      placeholder="Nama"
                      value={profile.nama}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded border"
                    />
                    <input
                      type="number"
                      name="usia"
                      placeholder="Usia"
                      value={profile.usia}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded border"
                    />
                    <select
                      name="gender"
                      value={profile.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded border"
                    >
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                    <input
                      type="text"
                      name="pendidikan"
                      placeholder="Tingkat Pendidikan"
                      value={profile.pendidikan}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded border"
                    />
                    <input
                      type="number"
                      name="totalQuiz"
                      placeholder="Total Quiz"
                      value={profile.totalQuiz}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded border"
                    />
                    <button
                      type="submit"
                      className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800"
                    >
                      Simpan
                    </button>
                  </form>
                ) : (
                  <div className="space-y-1">
                    <p><strong>Nama</strong> : {profile.nama}</p>
                    <p><strong>Usia</strong> : {profile.usia}</p>
                    <p><strong>Jenis Kelamin</strong> : {profile.gender}</p>
                    <p><strong>Tingkat Pendidikan</strong> : {profile.pendidikan}</p>
                    <p><strong>Total Quiz</strong> : {profile.totalQuiz}</p>
                  </div>
                )}
              </div>
      
              {/* Tombol Edit */}
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="absolute bottom-4 right-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 flex items-center gap-2"
                >
                  Edit Profile  
                </button>
              )}
            </div>
          </div>
        );
      }
      