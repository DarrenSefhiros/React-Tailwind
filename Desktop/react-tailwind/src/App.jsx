import { useState } from 'react'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
