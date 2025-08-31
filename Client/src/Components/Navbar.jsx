
import React, { useState } from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed w-full z-10 transition-colors duration-300`} 
      style={{ backgroundColor: menuOpen ? "#ffffff" : "#142241" }}
    >
      <div className="w-[92%] mx-auto py-3">
        {/* Logo and Hamburger/X icon */}
        <div className="flex justify-between items-center">

          <Link to="/headNav" className="inline-block">
            <h1 className="text-xl font-bold flex items-center gap-2 cursor-pointer">
              <img src={logo} alt="Logo" className="h-8" />
              <span className="bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] bg-clip-text text-transparent font-bold">
                Aruh Koncepts
              </span>
            </h1>
          </Link>

          <button onClick={toggleMenu} aria-label="Toggle menu" className="flex items-center gap-1 text-[#C8966B] font-semibold text-base">
            {menuOpen ? (
              <div className="flex justify-center items-center space-x-2">
                <span className="text-black">Close</span>
                <div className="border border-black rounded-full bg-black">

                  <span className="text-xl leading-none px-1 py-1 text-white">×</span>
                </div>
              </div>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>

        {/* Menu Items and h1 text */}
        {menuOpen && (
          <div className="bg-white rounded pt-12 pb-4 flex justify-between items-center text-gray-800 font-medium">
            {/* Left: h1 text */}
            <div className="text-black">
              <h1 className="text-5xl">
                When reality looks <br /> better than the <br />renders.
              </h1>

              <div className="flex space-x-9 mt-18">
                <h2><span className="font-bold">Email: </span> aruhkoncepts@gmail.com</h2>
                <h2><span className="font-bold">Phone:</span> +91 63098 92801</h2>

              </div>
            </div>

            {/* Right: Menu items in two columns */}
            <div className="flex gap-x-12 text-black text-4xl">
              <div className="flex flex-col space-y-4  items-start">
                <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to="/mainproject" onClick={() => setMenuOpen(false)}>Our Projects</Link>
              </div>
              <div className="flex flex-col space-y-4 items-start">
                <Link to="ourservice" onClick={() => setMenuOpen(false)}>Services</Link>
                {/* <a href="#" onClick={() => setMenuOpen(false)}>Team</a> */}
                <Link to="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
