import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.png";
import { ChevronDown, Phone } from "lucide-react";
import PopupForm from "../Components/PopupForm";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Scroll for shrinking navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close Services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".services-dropdown")) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close Services dropdown on scroll
  useEffect(() => {
    const handleScrollClose = () => {
      if (open) setOpen(false);
    };
    window.addEventListener("scroll", handleScrollClose);
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [open]);

  // Active Link Checkers
  const isActive = (path) => location.pathname === path;
  const isActiveHash = (hash) => location.hash === hash;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 bg-[#142241] transition-all duration-500 ease-in-out`}
      style={{
        top: scrolled ? "1rem" : "0",
        width: scrolled ? "95%" : "100%",
        margin: scrolled ? "0 auto" : "0",
        padding: scrolled ? "0.5rem 0" : "0.75rem 0",
        borderRadius: scrolled ? "2rem" : "0",
        boxShadow: scrolled ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
      }}
    >
      <div className="w-[92%] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <Link to="/headNav" className="inline-block">
            <h1 className="text-xl font-bold flex items-center gap-2 cursor-pointer">
              <img src={logo} alt="Logo" className="h-8" />
              <div className="inline-flex">
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#d5a127] via-[#F7EF8A] to-[#D2AC47] font-bold">
                  Aruh Konce
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-[#d5a127] via-[#F7EF8A] to-[#D2AC47]"></span>
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a127] via-[#F7EF8A] to-[#D2AC47] font-bold">p</span>
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#d5a127] via-[#F7EF8A] to-[#D2AC47] font-bold">
                  ts
                  <span className="absolute left-[-6px] bottom-0 h-[2px] w-[calc(100%+8px)] bg-gradient-to-r from-[#d5a127] via-[#F7EF8A] to-[#D2AC47]"></span>
                </span>
              </div>
            </h1>
          </Link>
        </div>

        {/* Menu Links */}
        <div className="flex-1 flex justify-center gap-x-12 text-gray-100 font-medium text-base tracking-wide">
          {/* About */}
          <Link to="/about" className={`relative pb-1 transition-all duration-300 ease-out hover:text-white ${isActive("/about") ? "text-white" : ""}`}>
            About
            {isActive("/about") && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white rounded-full transition-all duration-300 ease-out"></span>}
          </Link>

          {/* Projects */}
          <Link to="/mainproject" className={`relative pb-1 transition-all duration-300 ease-out hover:text-white ${isActive("/mainproject") ? "text-white" : ""}`}>
            Projects
            {isActive("/mainproject") && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white rounded-full transition-all duration-300 ease-out"></span>}
          </Link>

          {/* Services Dropdown */}
          <div className="relative services-dropdown">
            <button onClick={() => setOpen(!open)} className={`flex items-center gap-1 relative pb-1 transition-all duration-300 ease-out hover:text-white ${open || isActive("/ourservice") ? "text-white" : "text-gray-100"}`}>
              <span>Services</span>
              <ChevronDown size={18} className={`transition-all duration-300 ease-out ${open ? "rotate-180" : "rotate-0"}`} />
              {(open || isActive("/ourservice")) && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white rounded-full transition-all duration-300 ease-out"></span>}
            </button>

            {open && (
              <div className="absolute left-0 mt-2 w-66 bg-white/10 backdrop-blur-md text-black rounded-lg shadow-lg p-2 z-50 border border-white/20 transition-all duration-300 ease-out">
                <Link to="/service/furniture" className="block px-3 py-2 rounded hover:bg-white/20 transition-all duration-200 ease-out" onClick={() => setOpen(false)}>Custom Furniture & Decor</Link>
                <div className="w-full h-[1px] bg-[#142241] my-2 transition-all duration-200"></div>
                <Link to="/service/turnkey" className="block px-3 py-2 rounded hover:bg-white/20 transition-all duration-200 ease-out" onClick={() => setOpen(false)}>TurnKey Interior Solutions</Link>
                <div className="w-full h-[1px] bg-[#142241] my-2 transition-all duration-200"></div>
                <Link to="/service/commercial" className="block px-3 py-2 rounded hover:bg-white/20 transition-all duration-200 ease-out" onClick={() => setOpen(false)}>Commercial Interior Design</Link>
                <div className="w-full h-[1px] bg-[#142241] my-2 transition-all duration-200"></div>
                <Link to="/ourservice" className="block px-3 py-2 rounded text-center hover:bg-white/20 transition-all duration-200 ease-out" onClick={() => setOpen(false)}>View All Services</Link>
              </div>
            )}
          </div>

          {/* Testimonials */}
          <HashLink smooth to="/#testimonials" className={`relative pb-1 transition-all duration-300 ease-out hover:text-white ${isActiveHash("#testimonials") ? "text-white" : ""}`}>
            Testimonials
            {isActiveHash("#testimonials") && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white rounded-full transition-all duration-300 ease-out"></span>}
          </HashLink>

          {/* FAQ */}
          <HashLink smooth to="/#faq" className={`relative pb-1 transition-all duration-300 ease-out hover:text-white ${isActiveHash("#faq") ? "text-white" : ""}`}>
            FAQs
            {isActiveHash("#faq") && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white rounded-full transition-all duration-300 ease-out"></span>}
          </HashLink>

          {/* Contact */}
          <HashLink smooth to="/#contact" className={`relative pb-1 transition-all duration-300 ease-out hover:text-white ${isActiveHash("#contact") ? "text-white" : ""}`}>
            Contact
            {isActiveHash("#contact") && <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white rounded-full transition-all duration-300 ease-out"></span>}
          </HashLink>
        </div>

        {/* Right: Book a Call */}
        <div className="flex-1 flex justify-end">
          <button onClick={() => setShowPopup(true)} className="px-2 hover:cursor-pointer py-2 border border-[#C9966B] rounded-full text-[#142241] font-semibold transition-all duration-300 ease-out hover:scale-105 flex items-center gap-2">
            <div className="bg-[#C8966B] rounded-full p-2 flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#142241]" />
            </div>
            <span className="bg-white text-[#142241] px-3 py-1 rounded-full font-semibold">Book a Call</span>
          </button>

          {/* PopupForm */}
          <PopupForm showForm={showPopup} onClose={() => setShowPopup(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
