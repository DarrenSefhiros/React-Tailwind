import React from 'react'
import Tabeltailwind from './pages/tabeltailwind';
import { Routes, Route, Form } from 'react-router-dom';
import LOGIN from '../pages/LOGIN'

const App = () => {
  return (
    <Routes>
       <Route path="/" element={<Tabeltailwind/>}/>
    </Routes>
  )
}

export default App