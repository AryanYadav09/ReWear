import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between shadow-sm bg-white">
      <Link to="/" className="no-underline text-black">
        <h1 className="text-3xl sm:text-4xl font-light tracking-widest">REWEAR.</h1>
      </Link>
      <button
        onClick={() => setToken('')}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default NavBar;
