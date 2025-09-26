import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function TabelData() {
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
    const konfirmasi = window.confirm("yakin ingin menghapus data ini?");
    if (!konfirmasi) return;

    try {
      await axios.delete(`http://localhost:5000/menu/${id}`);
      Swal.fire({
  title: "Berhasil",
  icon: "success",
  draggable: true
});
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Gagal menghapus data:", err);
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
    }
  };

  return (
    <>
      <table className="border-separate border border-gray-400 w-250 m-50 mx-75">
        <thead className="bg-gray-400">
          <tr>
            <th className="border border-gray-300">nomer</th>
            <th className="border border-gray-300">Makanan</th>
            <th className="border border-gray-300">minuman</th>
            <th className="border border-gray-300">harga</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id}>
                <td className="border border-gray-300">{index + 1}</td>
                <td className="border border-gray-300">{item.Makanan}</td>
                <td className="border border-gray-300">{item.Minuman}</td>
                <td className="border border-gray-300">{item.harga}</td>
                <td className="border border-gray-300">
                  <div className="">
                    <div>          
                  <Link to={`/edit/${item.id}`}>
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
export default TabelData;
