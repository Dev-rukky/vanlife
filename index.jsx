import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vanLoader } from "./pages/Vans"
import Login, { loader as loginLoader } from "./pages/Login.jsx"
import VanDetails, { loader as vanDetailLoader } from "./pages/VanDetails"
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans, { loader as hostVansLoader }  from './pages/Host/HostVans';
import HostVansDetails, { loader as hostVansDetailsLoader } from './pages/Host/HostVansDetails.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import NotFound from './pages/404.jsx';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
import Error from './components/Error.jsx';
import { requiredAuth } from './utils.js';



import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path='login' element={<Login />} loader={loginLoader}/>
    <Route path="vans" element={<Vans />} loader={vanLoader} />
    <Route path="vans/:id" element={<VanDetails />} loader={vanDetailLoader} />
    <Route path="host" element={<HostLayout />} >
      <Route
        index
        element={<Dashboard />}
        loader={async () => await requiredAuth() }
      />
      <Route
        path="income"
        element={<Income />}
        loader={async () => await requiredAuth() }
      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async () => await requiredAuth() }
      />
      <Route
        path="vans"
        element={<HostVans />}
        loader={hostVansLoader}
      />
      <Route
        path="vans/:id"
        element={<HostVansDetails />}
        loader={hostVansDetailsLoader}
      >

        <Route
          index
          element={<HostVanInfo />}
          loader={async () => await requiredAuth() }
        />
        <Route
          path="pricing"
          element={<HostVanPricing />}
          loader={async () => await requiredAuth() }
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
          loader={async () => await requiredAuth() }
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
