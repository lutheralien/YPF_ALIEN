import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Program from './pages/Program'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/program" element={<Program />} />
      </Routes>
    </>
  )
}

export default App