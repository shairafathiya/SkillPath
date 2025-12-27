"use client";
import { profile } from "console";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function HomeAfterLogin() {
  const [isEdit, setIsEdit] = useState(false);

  const [profile, setProfile] = useState({
    username: "Username",
    nama: "",
    usia: "",
    gender: "",
    pendidikan: "",
    totalQuiz: "0",
    photo: "/default-avatar.png",
  });

  // Load data dari localStorage
  useEffect(() => {
    const saved = localStorage.getItem("profileData");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  // Simpan data
  const handleSave = () => {
    localStorage.setItem("profileData", JSON.stringify(profile));
    setIsEdit(false);
  };

  // Handle input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle foto profil
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setProfile({ ...profile, photo: reader.result as string });
    };
    reader.readAsDataURL(file);
  };
  return (
    
    <div className="min-h-screen bg-white pb-16 mt-20 pt-4" >
      {/* === PROFILE CARD === */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-indigo-400 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">

          {/* FOTO PROFIL */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow">
              <Image
                src={profile.photo}
                alt="profilpic"
                className="w-28 h-28 rounded-full object-cover"
                width={28}
                height={28}
              />
            </div>

            {isEdit && (
              <label className="mt-2 text-sm text-black cursor-pointer">
                Ganti Foto
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoChange}
                />
              </label>
            )}

            {isEdit ? (
              <input
                name="username"
                value={profile.username}
                onChange={handleChange}
                className="mt-3 px-2 py-1 rounded text-black"
              />
            ) : (
              <p className="mt-3 text-lg font-medium text-black">
                {profile.username}
              </p>
            )}
          </div>

          {/* INFO PROFIL */}
          <div className="text-white text-lg leading-relaxed md:ml-10 space-y-2">
            {[
              ["nama", "Nama"],
              ["usia", "Usia"],
              ["gender", "Jenis Kelamin"],
              ["pendidikan", "Tingkat Pendidikan"],
              ["totalQuiz", "Total Quiz"],
            ].map(([key, label]) => (
              <p key={key}>
                {label} :{" "}
                {isEdit ? (
                  <input
                    name={key}
                    value={(profile as any)[key]}
                    onChange={handleChange}
                    className="ml-2 px-2 py-1 rounded text-black"
                  />
                ) : (
                  <span>{(profile as any)[key] || "—"}</span>
                )}
              </p>
            ))}
          </div>
        

        {/* BUTTON */}
        <div className="flex justify-end mt-6">
          {isEdit ? (
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            >
              Simpan
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600"
            >
              Edit Profil
            </button>
          )}
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
            <Image
              src="/img/uni2.jpg"
              width={200}
              height={200}
              className="rounded-xl w-full h-40 object-cover" 
              alt={"gambar 1 univ "}   
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
            <Image
              src="/img/uni2.jpg"
              width={200}
              height={200}
              className="rounded-xl w-full h-40 object-cover" 
              alt={"Gambar 2"}            />
            
            <Link
            href={"/news2"}>
                <p className="text-center text-white mt-4 font-medium">
               Kampus Terbaik di Indonesia Versi Unirank 2025
            </p>
            </Link>

          </div>

          {/* Card 3 */}
          <div className="bg-indigo-500 rounded-2xl p-4 shadow">
            <Image
              src="/img/rajin.jpg"
              width={200}
              height={200}
              className="rounded-xl w-full h-40 object-cover" 
              alt={"Gamabar Mahasiswa Belajar"}
            />
            <Link
            href={"/news3"}>
                <p className="text-center text-white mt-4 font-medium">
               10 Strategi Belajar Efektif untuk Meningkatkan Prestasi Akademik
            </p>
            </Link>
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
                <Image
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
                      className="w-full px-4 py-2 rounded borde bg-emerald-50"
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
                  className=" bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 flex items-center gap-2"
                >
                  Edit Profile  
                </button>
              )}
            </div>
          </div>
        );
      }
      