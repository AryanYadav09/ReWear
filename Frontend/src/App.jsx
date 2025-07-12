import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // <-- this includes Popper too
import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Orders from './pages/Orders.jsx'
import About from "./pages/About.jsx";
import Collection from "./pages/Collection.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Product from "./pages/Product.jsx";
import Home from "./pages/Home.jsx";
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import { ToastContainer, toast } from 'react-toastify';
import Verify from './pages/Verify.jsx'
import { LoadingProvider, useLoading } from './context/LoadingContext.jsx'
import LoadingSpinner from './components/LoadingSpinner.jsx'






function App() {
  const { loading } = useLoading();

  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

        <ToastContainer />
        <NavBar />
        <SearchBar />
        <Routes>
          {loading && <LoadingSpinner />}
          <Route path='/' element={<Home />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/about' element={<About />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-Order' element={<PlaceOrder />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/verify' element={<Verify />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App
