import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.png";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import PopupForm from "../Components/PopupForm";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // desktop dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // mobile menu
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // mobile services dropdown
  
  const location = useLocation();

  // Scroll for shrinking navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".services-dropdown")) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns on scroll
  useEffect(() => {
    const handleScrollClose = () => {
      if (open) setOpen(false);
    };
    window.addEventListener("scroll", handleScrollClose);
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [open]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Active Link Checkers
  const isActive = (path) => location.pathname === path;
  const isActiveHash = (hash) => location.hash === hash;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-[#142241] transition-all duration-500 ease-in-out`}
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
          {/* Logo - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:flex flex-1 justify-start">
            <Link to="/headNav" className="inline-block">
              <h1 className="text-xl font-bold flex items-center gap-2 cursor-pointer">
                <img src={logo} alt="Logo" className="h-8" />
                <div className="hidden sm:inline-flex">
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

          {/* Desktop Menu Links - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 justify-center lg:gap-x-6 xl:gap-x-12 text-gray-100 font-medium text-base tracking-wide">
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
              <button 
  onClick={() => setOpen(!open)} 
  className={`flex items-center gap-1 relative pb-1 transition-all duration-300 ease-out hover:text-white ${open || isActive("/ourservice") ? "text-white" : "text-gray-100"}`}
>
  <span className="leading-none">Services</span>
  <ChevronDown 
    size={18} 
    className={`mt-1 transition-all duration-300 ease-out ${open ? "rotate-180" : "rotate-0"}`} 
  />
  {(open || isActive("/ourservice")) && (
    <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white rounded-full transition-all duration-300 ease-out"></span>
  )}
</button>

              {open && (
                <div className="absolute left-0 mt-2 w-66 bg-white/10 backdrop-blur-md text-black rounded-lg shadow-lg p-2 z-50 border border-white/20 transition-all duration-300 ease-out">
                  <Link to="/service/furniture" className="block px-3 py-2 rounded hover:text-[#C9966B] hover:bg-white/5 transition-all duration-200 ease-out" onClick={() => setOpen(false)}>Custom Furniture & Decor</Link>
                  <div className="w-full h-[1px]  bg-[#142241] my-2 transition-all duration-200"></div>
                  <Link to="/service/turnkey" className="block hover:text-[#C9966B] px-3 py-2 rounded hover:bg-white/5 transition-all duration-200 ease-out" onClick={() => setOpen(false)}>TurnKey Interior Solutions</Link>
                  <div className="w-full h-[1px] bg-[#142241] my-2 transition-all duration-200"></div>
                  <Link to="/service/commercial" className="block px-3 py-2 hover:text-[#C9966B] rounded hover:bg-white/5 transition-all duration-200 ease-out" onClick={() => setOpen(false)}>Commercial Interior Design</Link>
                  <div className="w-full h-[1px] bg-[#142241] my-2 transition-all duration-200"></div>
                  <Link to="/ourservice" className="block px-3 py-2 rounded hover:text-[#C9966B] text-center hover:bg-white/5 transition-all duration-200 ease-out" onClick={() => setOpen(false)}>View All Services</Link>
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

          {/* Desktop Book a Call - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 justify-end">
            <button onClick={() => setShowPopup(true)} className="px-2 hover:cursor-pointer py-2 border border-[#C9966B] rounded-full text-[#142241] font-semibold transition-all duration-300 ease-out hover:scale-105 flex items-center gap-2">
              <div className="bg-[#C8966B] rounded-full p-2 flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#142241]" />
              </div>
              <span className="bg-white text-[#142241] px-3 py-1 rounded-full font-semibold">Book a Call</span>
            </button>
          </div>

     
{/* Mobile Top Bar - Visible only on mobile */}


<div className="flex lg:hidden items-center justify-between w-full">

  {/* LEFT — Hamburger */}
  <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="p-2 text-gray-100 hover:text-white transition-colors duration-200"
  >
    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
  </button>

  {/* CENTER — Logo */}
  <Link to="/headNav" className="inline-flex flex-row items-center gap-1 absolute left-1/2 -translate-x-1/2">
    <img src={logo} alt="Logo" className="h-7" />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a127] via-[#F7EF8A] to-[#D2AC47] font-bold text-sm">
      Aruh Koncepts
    </span>
  </Link>

  {/* RIGHT — Call Button */}
<button
  onClick={() => setShowPopup(true)}
  className="py-2 px-3 border border-white rounded-full text-white flex items-center gap-2 justify-center
  shadow-[0_0_2px_rgba(255,255,255,0.4)] hover:shadow-[0_0_2px_rgba(255,255,255,0.7)]
  hover:scale-105 transition-all duration-200"
>
  Call <Phone size={18} className="text-[#C8A75E]" />
</button>



</div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Sidebar */}
            <div className="lg:hidden fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-[#142241] border-l border-white/20 shadow-xl z-50 transform transition-transform duration-300 ease-out">
              {/* Close Button */}
              <div className="flex justify-between p-4 border-b border-white/10">
                <Link to="/headNav" className="inline-flex items-center gap-2">
                  <img src={logo} alt="Logo" className="h-8" />
                  <div className="inline-flex">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d5a127] via-[#F7EF8A] to-[#D2AC47] font-bold text-lg">
                      Aruh Koncepts
                    </span>
                  </div>
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-100 hover:text-white transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="py-6 px-6 space-y-4">
                {/* About */}
                <Link
                  to="/about"
                  className={`flex items-center gap-2 ${isActive("/about") ? "text-[#C8966B]" : "text-gray-100"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-gray-300">→</span>
                  <span>About</span>
                </Link>
                <div className="h-[1px] bg-white my-3 -mx-6 w-[116%]"></div>

                {/* Projects */}
                <Link
                  to="/mainproject"
                  className={`flex items-center gap-2 ${isActive("/mainproject") ? "text-[#C8966B]" : "text-gray-100"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-gray-300">→</span>
                  <span>Projects</span>
                </Link>
                <div className="h-[1px] bg-white my-3 -mx-6 w-[116%]"></div>

                {/* Services Dropdown */}
                <div className="space-y-2">
              <button
  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
  className={`w-full flex items-center justify-between ${mobileDropdownOpen ? "text-[#C8966B]" : "text-gray-100"}`}
>
  <span className="flex items-center gap-2">
    <span className="text-gray-300">→</span>
    <span className="flex items-center">
      Services
    </span>
  </span>

  {/* Arrow horizontally center aligned with the text */}
  <div className="flex items-center">
    <ChevronDown
      size={18}
      className={`transition-transform duration-300 ${
        mobileDropdownOpen ? "rotate-180" : "rotate-0"
      }`}
    />
  </div>
</button>


                  {mobileDropdownOpen && (
                    <div className="ml-4 space-y-3 font-medium text-white">
                      <Link
                        to="/service/residential"
                        className="flex items-center gap-2 px-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-light">Residential Interior Design</span>
                      </Link>
                      <Link
                        to="/service/commercial"
                        className="flex items-center gap-2 px-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-light">Commercial Interior Design</span>
                      </Link>
                      <Link
                        to="/service/turnkey"
                        className="flex items-center gap-2 px-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-light">TurnKey Interior Solutions</span>
                      </Link>
                      <Link
                        to="/service/visualization"
                        className="flex items-center gap-2 px-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-light">3D Visualization & Conceptual Design</span>
                      </Link>
                      <Link
                        to="/service/renovation"
                        className="flex items-center gap-2 px-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-light">Renovation & Remodeling</span>
                      </Link>
                      <Link
                        to="/service/furniture"
                        className="flex items-center gap-2 px-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-light">Custom Furniture & Decor</span>
                      </Link>
                      <Link
                        to="/service/vastu"
                        className="flex items-center gap-2 px-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="font-light">Vastu Consultation</span>
                      </Link>
                    </div>
                  )}
                </div>
                <div className="h-[1px] bg-white my-3 -mx-6 w-[116%]"></div>

                {/* Testimonials */}
                <HashLink
                  smooth
                  to="/#testimonials"
                  className={`flex items-center gap-2 ${isActiveHash("#testimonials") ? "text-[#C8966B]" : "text-gray-100"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-gray-300">→</span>
                  <span>Testimonials</span>
                </HashLink>
                <div className="h-[1px] bg-white my-3 -mx-6 w-[116%]"></div>

                {/* FAQ */}
                <HashLink
                  smooth
                  to="/#faq"
                  className={`flex items-center gap-2 ${isActiveHash("#faq") ? "text-[#C8966B]" : "text-gray-100"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-gray-300">→</span>
                  <span>FAQs</span>
                </HashLink>
                <div className="h-[1px] bg-white my-3 -mx-6 w-[116%]"></div>

                {/* Contact */}
                <HashLink
                  smooth
                  to="/#contact"
                  className={`flex items-center gap-2 ${isActiveHash("#contact") ? "text-[#C8966B]" : "text-gray-100"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-gray-300">→</span>
                  <span>Contact</span>
                </HashLink>
                <div className="h-[1px] bg-white my-3 -mx-6 w-[116%]"></div>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* PopupForm */}
      <PopupForm showForm={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default Navbar;