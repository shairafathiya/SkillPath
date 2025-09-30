"use client";
import { useState } from "react";


export default function ProfilePage() {
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
    <div className="min-h-screen bg-white flex flex-col items-center mt-15">
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
