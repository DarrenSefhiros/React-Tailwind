import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
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

  return (
    <>
<div className="box text-3xl text-blue-600 ml-170 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-5 gap-5">
    <h1 className="font-bold text-center">Dashboard</h1>
    <div className="flex flex-nowrap gap-50">
      <div className="box box bg-blue-600 rounded h-30 flex items-center justify-center my-20 mr-130 -mx-145 px-15 shadow-xl">
        <h1 className="text-white text-center font-bold text-xl">Pesanan</h1>
      </div>
      <div className="box box bg-blue-600 rounded h-30 flex items-center justify-center my-20 mr-130 -mx-145 px-15 shadow-xl">
        <h1 className="text-white text-center font-bold text-xl">Penerima</h1>
      </div>
      <div className="box box bg-blue-600 rounded h-30 flex items-center justify-center my-20 mr-130 -mx-145 px-15 shadow-xl">
        <h1 className="text-white text-center font-bold text-xl">Ulasan</h1>
      </div>
    </div>
    </div>
      <table className="border-separate border border-gray-400 w-250 mx-75">
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
export default Dashboard;
