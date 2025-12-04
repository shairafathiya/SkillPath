import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="bg-gray-200 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">LOGIN</h1>
         {/* Form Login */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
        </form>
        <form className="space-y-4">

  <button
    type="submit"
    className="w-full bg-blue-900 text-white p-2 rounded hover:bg-blue-800 mt-4"
  >
   <Link href="/home">MASUK</Link> 
  </button>
</form>
 {/* Link ke halaman daftar */}
  <p className="text-center text-sm mt-4">
  Belum Memiliki Akun ?{" "}
  <a href="/daftar" className="text-blue-600 hover:underline">
    Daftar disini
  </a>
</p>
</div>
</div>
    
  )
}