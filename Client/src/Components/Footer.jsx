import React from 'react'
import logo from "../assets/logo.png"
import { FaInstagram, FaTimes,FaFacebook } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
const Footer = () => {
  return (
    <>
<footer className="bg-[#142241] text-white px-6 md:px-16 py-10">
  <div className="w-[100%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
    {/* Logo */}
    <div className="md:col-span-2">
      <h1 className="text-xl font-bold flex items-center gap-2">
        <img src={logo} alt="" className="h-8" />
        <span className="bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] bg-clip-text text-transparent font-bold">
          Aruh Koncepts
        </span>
      </h1>
      <p className="mt-6 text-sm">Copyright © 2025</p>
    </div>

    {/* Quick Links */}
    <div>
      <h2 className="font-semibold mb-4">Quick Links</h2>
      <ul className="space-y-1 text-sm">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">Portfolio</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
        <li><a href="#" className="hover:underline">Checkout</a></li>
        <li><a href="#" className="hover:underline">Service Page</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h2 className="font-semibold mb-4">Services</h2>
      <ul className="space-y-1 text-sm">
        <li>Residential Interior Design</li>
        <li>Commercial Interior Design</li>
        <li>TurnKey Interior Solutions</li>
        <li>3D Visualization & Conceptual Design</li>
        <li>Renovation & Remodeling</li>
        <li>Custom Furniture & Decor</li>
        <li>Vastu Consultation</li>
      </ul>
    </div>

    {/* Projects */}
    <div>
      <h2 className="font-semibold mb-4">Projects</h2>
      <ul className="space-y-1 text-sm">
        <li>Residential Projects</li>
        <li>Commercial Projects</li>
        <li>Corporate Projects</li>
        <li>TurnKey Interior Projects</li>
      </ul>
    </div>
  </div>

  {/* Horizontal Row */}
  <div className="mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm border-t border-gray-700">
    {/* Address */}
    <div className="flex items-start gap-2 max-w-xs">
      <MdLocationOn className="text-white w-5 h-5 mt-1 flex-shrink-0" />
      <p>
        5th Floor, Plot No.138, HIG, 6th Phase, above Bank of India bank,
        Kukatpally Housing Board Colony, Kukatpally, Hyderabad,
        Telangana 500072
      </p>
    </div>

    {/* Contact */}
    <div className="flex flex-col">
      <h2 className="font-semibold flex items-center gap-2">
        <MdEmail /> Contact Us
      </h2>
      <p className="flex items-center gap-2 mt-1">
        <FiPhone /> +91 63098 92801
      </p>
      <p>arunkoncepts@gmail.com</p>
    </div>

    {/* Follow Us */}
    <div>
      <h2 className="font-semibold">Follow Us</h2>
      <div className="flex gap-3 mt-2 text-xl">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTimes /></a>
        <a href="#"><FaFacebook /></a>
      </div>
    </div>
  </div>

  {/* Bottom Copyright Row */}
  <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
    <p>© 2025 Aruh Koncepts | All Rights Reserved</p>
    <p>Developed by <span className="text-[#C8966B]">Zenith Studio</span></p>
  </div>
</footer>

    </>
  )
}

export default Footer
