import React from "react";
import { Link } from "react-router-dom";
import gambar from "../../public/ppdb.jpg";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row w-[900px]">
        <div className="md:w-1/2 flex flex-col items-center justify-center bg-gray-50 p-6">
          <img
            src={gambar}
            alt="PPDB"
            className="w-full h-[280px] rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
            PPDB SMK Bina Nusantara
          </h2>
          <p className="text-gray-600 text-center px-4">
            Selamat datang di website resmi SMK Bina Nusantara Semarang.
            <br />
            Kami membuka penerimaan siswa baru tahun ajaran{" "}
            <span className="font-semibold">2025/2026</span>.
          </p>
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Register
          </h1>
          <form className="space-y-5">
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Nama Lengkap
              </label>
              <input
                id="name"
                type="text"
                placeholder="Masukkan nama Anda"
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Masukkan email Anda"
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Buat password Anda"
                required
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Daftar
            </button>
          </form>

          <p className="text-sm text-center mt-4 text-gray-600">
            Sudah punya akun?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;