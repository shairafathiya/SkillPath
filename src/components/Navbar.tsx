"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-900">SkillPath</h1>

        {/* Menu */}
        <ul className="flex space-x-8 text-lg">
          {/* <li>
            <Link href="/home" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link href="/quiz" className="hover:text-blue-600">Quiz</Link>
          </li>
          <li>
            <Link href="/result" className="hover:text-blue-600">Result</Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-blue-600">Profile</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
