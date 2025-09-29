import React, { useState } from "react";
import { Link, Navigate, useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    nama: '',
    password: '',
  });

  const [loading, setLoading]
  = useState(false);
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
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukan email anda"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="nama"
            >
              Nama
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nama"
              type="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Masukan Nama Anda"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Masukan Password Anda"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Masuk
            </button>
            <Link
              to="/Tabeldata"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Kembali
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
