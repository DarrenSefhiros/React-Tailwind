import React from "react";
import { Routes, Route } from "react-router-dom";
import Tabeltailwind from "./Component/tabeltailwind";
import RegisterPage from "./pages/RegisterPage";
import Tambahdata from "./pages/Tambahdata";
import EditData from "./pages/Editdata";
import TabelData from "./pages/Tabeldata";
import Sidnav from "./Component/sidnav";
import Dashboard from "./pages/Dashboard";
import Profile from "./Component/profile";
import TabelMenu from "./pages/TabelMenu";
import LoginPage from "./pages/LoginPage";
import EditMenu from "./pages/Editmenu";

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
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit/:id" element={<EditData />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Menu" element={<TabelMenu />} />
      <Route path="/EditMenu/:id" element={<EditMenu />} />
    </Routes>
      </div>
    </div>
  );
};

export default App;