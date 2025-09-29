import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function EditMenu() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/menu/${id}`);
      const data = Array.isArray(res.data) ? res.data[0] : res.data;
      setFormData(data);
      // alert("Berhasil mengambil data!"); 
    } catch (err) {
      console.error("Gagal mengambil data:", err);
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Gagal mengambil data",
  footer: '<a href="#">Why do I have this issue?</a>'
});
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [id]); 



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const dataToSend = {
    ...formData,
    harga: Number(formData.harga),
  };

  console.log("Mengirim data:", dataToSend);

  try {
    await axios.put(`http://localhost:5000/menu/${id}`, dataToSend);
    Swal.fire({
  title: "Data berhasil diubah",
  icon: "success",
  draggable: true
});
    navigate("/Tabeldata");
  } catch (err) {
    console.error("Gagal mengupdate data:", err.response?.data || err.message);
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Gagal mengambil data",
  footer: '<a href="#">Why do I have this issue?</a>'
});
  }
};


  if (loading) return <p className="text-center mt-10">Loading data...</p>;

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Data</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="nama" className="block text-gray-700 text-sm font-bold mb-2">
            nama
          </label>
          <input
            id="nama"
            name="nama"
            type="text"
            value={formData.nama || ""}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            value={formData.email || ""}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            password
          </label>
          <input
            id="password"
            name="password"
            type="text"
            value={formData.password || ""}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full p-2"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={() => navigate("/tabeldata")}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Kembali
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditMenu;
