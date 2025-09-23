import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function TabelData() {
    const [data, setData] = useState ([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData =async () => {
        try {
            const res = await axios.get
            ("http:localhost:5000/menu");
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
    const konfirmasi = window.confirm
    ("yakin ingin menghapus data ini?")
    if (!konfirmasi) return;

    try {
        await axios.delete
        (`http://localhost:5000/menu/${id}`);
        alert("Data berhasil dihapus");
        setData(data.filter((item) => item.id !== id))
    } catch (err) {
        console.error("Gagal menghapus data:", err);
        alert("Gagal menghapus data")
    }
};
}

export default TabelData