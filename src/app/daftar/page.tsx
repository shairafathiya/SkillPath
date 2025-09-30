"use client"

import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="p-6">
        <h1 className="text-3xl font-bold text-blue-900">SkillPath</h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center relative">
        {/* Left Illustration */}
        <img
          src="../img/Learning1.png"
          alt="Orang berjalan"
          className="absolute bottom-0 left-10 w-40 h-auto"
        />

        {/* Form Card */}
        <div className="bg-gray-200 p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-6">DAFTAR</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded border focus:outline-none"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 rounded border focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded border focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded border focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
            >
             <Link href= "/login"></Link> DAFTAR
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-700">
            Sudah Memiliki Akun?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login disini
            </a>
          </p>
        </div>

        {/* Right Illustration */}
        <img
          src="../img/learning2.png"
          alt="Tumpukan buku"
          className="absolute bottom-0 right-10 w-56 h-auto"
        />
      </main>
    </div>
  );
}
