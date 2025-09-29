import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function TabelMenu() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/menu");
        setData(res.data);
      } catch (err) {
        console.error("gagal mengambil data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
      Swal.fire({
    title: "Are you sure?",
    text: "Data tidak akan bisa dikembalikan jika telah dihapus",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus data"
  }).then(async (result) => {
    if (result.isConfirmed) {


    try {
      await axios.delete(`http://localhost:5000/menu/${id}`);
      setData((prev) => prev.filter ((item) => item.id !== id))

              Swal.fire({
          title: "Deleted!",
          text: "Data anda telah dihapus",
          icon: "success"
        });
    } catch (err) {
      console.error("Gagal menghapus data:", err);
        Swal.fire({
          title: "Error!",
          text: "Terjadi kesalahan saat menghapus data.",
          icon: "error",
          confirmButtonText: "OK"
        });
    }
  };
});
  };

  return (
   <>
  <table className="border-separate border border-gray-400 w-250 m-50 mx-75">
    <thead className="bg-gray-400">
      <tr>
        <th className="border border-gray-300">nomer</th>
        <th className="border border-gray-300">nama</th>
        <th className="border border-gray-300">email</th>
        <th className="border border-gray-300">password</th>
      </tr>
    </thead>
    <tbody>
      {data.length > 0 ? (
        data.map((item, index) => (
          <tr key={item.id}>
            <td className="border border-gray-300">{index + 1}</td>
            <td className="border border-gray-300">{item.nama}</td>
            <td className="border border-gray-300">{item.email}</td>
            <td className="border border-gray-300">{item.password}</td>
            <td className="border border-gray-300">
              <div>
                <div>          
                  <Link to={`/EditMenu/${item.id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline my-2">
                      Edit
                    </button>
                  </Link>
                </div>

                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(item.id)}
                >
                  Hapus
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="4" className="text-center">
            Tidak ada data
          </td>
        </tr>
      )}
    </tbody>
  </table>
</>

  );
}
export default TabelMenu;
