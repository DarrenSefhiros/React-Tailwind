import React from 'react';
import { Link } from 'react-router-dom';
import gambar from '../../public/ppdb.jpg';

function LandingPage() {
  return (
<div className="flex flex-row min-h-screen bg-gray-300">
  <div className="flex flex-col justify-center items-start w-1/2 px-16 mr-50">
    <h1 className="text-4xl font-bold text-blue-700 mb-4">SMK BINA NUSANTARA SEMARANG</h1>
    <p className="text-lg font-medium text-gray-800 bg-white p-4 rounded shadow">
      Selamat datang di website SMK Bina Nusantara Semarang. Kami membuka penerimaan siswa baru tahun 2025/2026
    </p>
  </div>
  <div className="bg-white p-10 shadow-lg w-[420px] flex flex-col items-center mr-20">
    <img src={gambar} alt="PPDB" className="w-80 h-45" />
    <h2 className="text-xl font-semibold text-gray-800 mb-4">PPDB SMK Bina Nusantara</h2>
    <h1 className="text-2xl font-bold text-center mb-5">Register</h1>
    <form className="w-full max-w-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nama</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="name" type="text" placeholder="Masukan nama Anda" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="email" type="email" placeholder="Masukan email Anda" required />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="password" type="password" placeholder="Buat password Anda" required />
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Masuk
        </button>
        <Link to="/landingpage" className="text-blue-500 hover:text-blue-800 text-sm font-bold">
          Belum punya akun? Daftar
        </Link>
      </div>
    </form>
  </div>
</div>
  );
}

export default LandingPage;