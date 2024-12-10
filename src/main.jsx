<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Login from '../pages/login.jsx';
import DashboardLayout from '../pages/DashboardLayout.jsx'
import Transfer from '../pages/Transfer.jsx'
>>>>>>> c449dd74f4b75dcf7302954c3ca734dbd4b05d6c

import "./index.css";
import App from "./App.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Login from "./pages/Login.jsx";
import Transfer from "./pages/Transfer.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route index element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<App />} />
          <Route path="/transfer" element={<Transfer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
=======
        <Route element={<DashboardLayout/>}>
          <Route path='/dashboard' element={<App/>}/>
          <Route path='/transfer' element={<Transfer/>}/>
        </Route>
          <Route index element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
>>>>>>> c449dd74f4b75dcf7302954c3ca734dbd4b05d6c
