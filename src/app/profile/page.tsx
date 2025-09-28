export default function ProfilePage() {
    return (
      <main className="flex justify-center mt-24 px-4">
        <div className="bg-gray-200 rounded-xl shadow-lg p-8 w-full max-w-3xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Data Profile */}
            <div className="space-y-3 text-lg">
              <p>
                <span className="font-medium">Nama</span> : 
              </p>
              <p>
                <span className="font-medium">Usia</span> : 
              </p>
              <p>
                <span className="font-medium">Jenis kelamin</span> : 
              </p>
              <p>
                <span className="font-medium">Tingkat pendidikan</span> : 
              </p>
              <p>
                <span className="font-medium">Total quiz</span> : 
              </p>
            </div>
  
            {/* Tombol Edit */}
            <div className="self-end md:self-center">
              <button className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
  