
import React, { useState } from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`shadow-md fixed w-full z-10 transition-colors duration-300`}
      style={{ backgroundColor: menuOpen ? "#ffffff" : "#142241" }}
    >
      <div className="w-[92%] mx-auto py-3">
        {/* Logo and Hamburger/X icon */}
        <div className="flex justify-between items-center">
           <h1 className="text-xl font-bold flex items-center gap-2">
  {/* <span className="border-4 border-[#C8966B] text-[#C8966B] rounded-full px-3 py-1 font-bold text-lg">
    A
  </span> */}
  <img src={logo} alt="" className="h-8" />
  <span className="bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] bg-clip-text text-transparent font-bold">
    Aruh Koncepts
  </span>
</h1>
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <svg
              className={`w-6 h-6 ${
                menuOpen ? "text-[#C8966B]" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Items and h1 text */}
        {menuOpen && (
          <div className="bg-white rounded mt-4 flex justify-between items-center text-gray-800 font-medium">
            {/* Left: h1 text */}
            <h1 className="text-lg font-semibold max-w-xs">
              When reality looks better than the renders
            </h1>

            {/* Right: Menu items in two columns */}
            <div className="flex gap-x-12">
              <div className="flex flex-col space-y-2 max-w-[120px] items-start">
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/project" onClick={() => setMenuOpen(false)}>Our Projects</Link>
              </div>
              <div className="flex flex-col space-y-2 max-w-[120px] items-start">
                <Link to="ourservice" onClick={() => setMenuOpen(false)}>Services</Link>
                <a href="#" onClick={() => setMenuOpen(false)}>Team</a>
                <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
