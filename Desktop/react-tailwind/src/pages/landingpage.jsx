import React from 'react';
import { Link } from 'react-router-dom';
import gambar from '../../public/ppdb.jpg';

function LandingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="flex items-center bg-white p-10 rounded-lg shadow-lg w-[800px]">
        <div className="mr-50]">
          <img src={gambar} alt="PPDB" className="w-120 h-60 py-" />
        </div>
        <div className="w-70">
          <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Nama
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="name"
                type="text"
                placeholder="Masukan nama Anda"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="email"
                type="email"
                placeholder="Masukan email Anda"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="password"
                type="password"
                placeholder="Buat password Anda"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Masuk
              </button>
              <Link
                to="/landingpage"
                className="text-blue-500 hover:text-blue-800 text-sm font-bold"
              >
                Belum punya akun? Daftar
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
