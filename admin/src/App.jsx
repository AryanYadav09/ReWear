import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import NavBar from './components/NavBar.jsx';
import SideBar from './components/SideBar.jsx';
import Add from './pages/Add.jsx';
import List from './pages/List.jsx';
import Orders from './pages/Orders.jsx';
import Login from './components/Login.jsx';
import { ToastContainer } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

const App = () => {
  const [token, setToken] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Always require login on refresh
    localStorage.removeItem('token');
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]);

  const isAuthenticated = !!token;

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />

      {isAuthenticated ? (
        <>
          <NavBar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <SideBar />
            <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/orders" element={<Orders token={token} />} />
                <Route path="*" element={<Navigate to="/add" />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
