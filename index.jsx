import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vanLoader } from "./pages/Vans"
import Login from "./pages/Login.jsx"
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
import Error from './components/Error.jsx';



import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path='login' element={<Login />} />
    <Route path="vans" element={<Vans />} loader={vanLoader} />
    <Route path="vans/:id" element={<VanDetails />} />
    <Route path="host" element={<HostLayout />} >
      <Route
        index
        element={<Dashboard />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={async () => {
          return null
        }}
      />
      <Route
        path="vans/:id"
        element={<HostVansDetails />}
        loader={async () => {
          return null
        }}
      >

        <Route
          index
          element={<HostVanInfo />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path="pricing"
          element={<HostVanPricing />}
          loader={async () => {
            return null
          }}
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
          loader={async () => {
            return null
          }}
        />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
