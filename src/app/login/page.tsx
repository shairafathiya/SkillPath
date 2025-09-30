import Image from "next/image";
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
  <input type="text" placeholder="Username" className="w-full p-2 border rounded" />
  <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
  <button
    type="submit"
    className="w-full bg-blue-900 text-white p-2 rounded hover:bg-blue-800"
  >
    MASUK
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
 {/* Ilustrasi kiri bawah */}
 <div className="absolute bottom-0 left-0">
 <Image
          src="/img/Learning2.png"
          alt="Ilustrasi orang"
          width={200}
          height={200}
          className="object-contain"
 />
 <Image
          src="/img/Learning1.png"
          alt="Ilustrasi orang"
          width={200}
          height={200}
          className="object-contain"
        />
    </div>
     {/* Ilustrasi kanan bawah */}
     <div className="absolute bottom-0 right-0">
<Image        
          src="/img/Learning2.png"
          alt="Ilustrasi buku"
          width={200}
          height={200}
          className="object-contain"
/>
<Image
          src="/img/Learning1.png"
          alt="Ilustrasi buku"
          width={200}
          height={200}
          className="object-contain"
/>
      </div>
    </div>
    
  )
}