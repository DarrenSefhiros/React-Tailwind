import React from "react";
import { Routes, Route } from "react-router-dom";
import Tabeltailwind from "./Component/tabeltailwind";
import RegisterPage from "./pages/RegisterPage";
import Tambahdata from "./pages/Tambahdata";
import EditData from "./pages/Editdata";
import TabelData from "./pages/Tabeldata";
import Sidnav from "./Component/sidnav";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <Sidnav />
      <div>
    <Routes>
      <Route path="/r" element={<Tabeltailwind />} />
      <Route path="/RegisterPage" element={<RegisterPage />} />
      <Route path="/" element={<Tambahdata />} />
      <Route path="/home" element={<Tambahdata />} />
      <Route path="/Tabeldata" element={<TabelData />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/edit/:id" element={<EditData />} />
    </Routes>
      </div>
    </div>
  );
};

export default App;