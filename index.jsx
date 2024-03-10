import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetails from "./pages/VanDetails"
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans';
import HostVansDetails from './pages/Host/HostVansDetails.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import NotFound from './pages/404.jsx';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';



import "./server"

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />
            <Route path="host" element={<HostLayout />} >
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetails />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
