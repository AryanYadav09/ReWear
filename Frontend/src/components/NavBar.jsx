import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearchBar, getCartCount, navigate, token, setToken } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <div className="bg-white shadow-sm">
      {/* Centered navbar container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 font-medium">
        <Link to="/" className="no-underline text-black">
          <h1 className="text-3xl sm:text-4xl font-light tracking-widest">REWEAR.</h1>
        </Link>


        {/* Desktop Navigation Links */}
        <ul className="hidden sm:flex gap-8 text-sm items-center">
          {/* HOME */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-800 no-underline hover:text-black transition duration-200 pb-1 border-b-2 ${isActive ? 'border-black font-semibold' : 'border-transparent hover:border-gray-400'
              }`
            }
          >
            HOME
          </NavLink>

          {/* BROWSE ITEMS */}
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `text-gray-800 no-underline hover:text-black transition duration-200 pb-1 border-b-2 ${isActive ? 'border-black font-semibold' : 'border-transparent hover:border-gray-400'
              }`
            }
          >
            BROWSE ITEMS
          </NavLink>

          {/* LIST AN ITEM (External Link with Login Check) */}
          <li
            onClick={() => {
              if (token) {
                window.location.href = "http://localhost:5174/add"; // change path as needed
              } else {
                toast.error("Please login first!");
                navigate("/login");
              }
            }}
            className="text-gray-800 no-underline hover:text-black transition duration-200 pb-1 border-b-2 border-transparent hover:border-gray-400 cursor-pointer"
          >
            LIST AN ITEM
          </li>

          {/* START SWAPPING */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-gray-800 no-underline hover:text-black transition duration-200 pb-1 border-b-2 ${isActive ? 'border-black font-semibold' : 'border-transparent hover:border-gray-400'
              }`
            }
          >
            START SWAPPING
          </NavLink>
        </ul>





        {/* Icons and Account Controls */}
        <div className="flex items-center gap-6">
          <img
            onClick={() => setShowSearchBar(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="Search"
          />

          <div className="group relative">
            <img
              onClick={() => token ? null : navigate('/login')}
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt="Profile"
            />
            {token && (
              <div className="group-hover:block hidden absolute right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-5 pl-3 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                  <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                  <p onClick={logout} className="cursor-pointer hover:text-black">LogOut</p>
                </div>
              </div>
            )}
          </div>

          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt="Menu"
          />
        </div>
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
