import React from "react";
import Tabeltailwind from "./Component/tabeltailwind";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Tambahdata from "./pages/Tambahdata";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Tabeltailwind />} />
      <Route path="/RegisterPage" element={<RegisterPage />} />
      <Route path="/home" element={<Tabeltailwind />} />
      <Route path="/Tambahdata" element={<Tambahdata />} />
    </Routes>
  );
};

export default App;
