import { useState } from 'react'
import './App.css'

import Layout from './Layout'
import Home from './home'
import About from './about'
import NoPage from './NoPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Layout/>
      <Routes>
        <Route path='/'/>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
