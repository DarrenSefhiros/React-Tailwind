import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';


function Tambahmenu() {
    const [formData, setFormData] = useState({
        nama: '',
        umur: '',
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const response = await axios.post("http://localhost:5000/menu", formData);

          console.log("Respon server:", response.data);
          Swal.fire({
  position: "center",
  icon: "success",
  title: "data anda telah di simpan",
  showConfirmButton: false,
  timer: 1500
           });

          setFormData({
            nama: "",
            umur: "",
            email: "",
            password: "",
          })


          navigate("/Menu");
        } catch (error) {
          console.error(err);
          Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
        } finally {
          setLoading(false);
        }
    };
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-r from-cyan-500 to-blue-500">
            <div className="bg-amber-50 p-8 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-6">Tambah Data Menu</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            name="email"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Masukan menu makanan anda"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
                            nama
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nama"
                            type="nama"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            placeholder="Masukan nama anda"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="umur">
                            umur
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="umur"
                            type="umur"
                            name="umur"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="masukan umur anda"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="total password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 justify-between rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Simpan
                        </button>
                        <div className="flex items-center justify-between">
                          <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                            <a href="/">kembali</a>
                          </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Tambahmenu;
