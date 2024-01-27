import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetails from "./pages/VanDetails"
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import "./server"

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
