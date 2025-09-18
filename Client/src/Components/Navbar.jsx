import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { HashLink } from "react-router-hash-link"; // for home pe contact ke liye


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Animation effect for opening/closing menu
  // useEffect(() => {
  //   if (menuOpen) {
  //     gsap.fromTo(
  //       menuRef.current,
  //       { y: "-100%", opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
  //     );
  //   } else {
  //     gsap.to(menuRef.current, {
  //       y: "-100%",
  //       opacity: 0,
  //       duration: 0.5,
  //       ease: "power3.in",
  //     });
  //   }
  // }, [menuOpen]);
useEffect(() => {
  if (menuOpen) {
    gsap.fromTo(
      menuRef.current,
      { yPercent: -100, opacity: 0, scale: 0.95 },
      {
        yPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power4.out",
      }
    );
  } else {
    gsap.to(menuRef.current, {
      yPercent: -100,
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      ease: "power4.in",
    });
  }
}, [menuOpen]);

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
              <span className="bg-gradient-to-r from-[#d5a127] via-[#F7EF8A] to-[#D2AC47] bg-clip-text text-transparent font-bold">
                Aruh Koncepts
              </span>
            </h1>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex items-center gap-1 text-[#C8966B] font-semibold text-base"
          >
            {menuOpen ? (
              <div className="flex justify-center items-center space-x-2">
                <span className="text-black">Close</span>
                <div className="border border-black rounded-full bg-black">
                  <span className="text-xl leading-none px-1 py-1 text-white">
                    ×
                  </span>
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
        <div
          ref={menuRef}
          style={{ display: menuOpen ? "flex" : "none" }}
          className="bg-white rounded pt-12 pb-4 flex justify-between items-center text-gray-800 font-normal md:font-medium"
        >
          {/* Left: h1 text */}
          <div className="text-black hidden md:block">
            <h1 className="text-3xl lg:text-5xl">
              When reality looks <br /> better than the <br />
              renders.
            </h1>

            <div className="flex mb:space-x-2 lg:space-x-9 mt-18">
              <h2>
                <span className="font-bold">Email: </span> aruhkoncepts@gmail.com
              </h2>
              <h2>
                <span className="font-bold">Phone:</span> +91 63098 92801
              </h2>
            </div>
          </div>

          {/* Right: Menu items in two columns */}
          <div className="flex gap-x-12 text-black text-4xl">
            <div className="flex flex-col  space-y-4  items-start">
              <Link
                to="/#home"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/mainproject"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Our Projects
              </Link>
            </div>
            <div className="flex flex-col space-y-3 lg:space-y-4 items-start">
              <Link
                to="ourservice"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <HashLink
                smooth
                to="/#contact"
                className="hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </HashLink>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
