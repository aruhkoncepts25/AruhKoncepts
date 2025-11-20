import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SiX } from 'react-icons/si';
import { FaInstagram, FaFacebookF,FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { RiThreadsLine } from 'react-icons/ri'; // Threads icon from Remix Icons


const Footer = () => {
  return (
    <>  
 {/* /// For DeskTop //  */}
     <footer className="bg-[#142241] hidden md:block text-white px-6 md:px-16 py-10">
  {/* Top Grid */}
  <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

    {/* Logo */}
    <div className="md:col-span-2">
      <h1 className="text-xl font-bold flex items-center gap-2">
        <img src={logo} alt="" className="h-8" />
        <span className="bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] bg-clip-text text-transparent font-bold">
          Aruh Koncepts
        </span>
      </h1>
    </div>

    {/* Quick Links */}
    <div>
      <h2 className="font-semibold mb-4">Quick Links</h2>
      <ul className="space-y-1 text-sm">
        <li><Link to="/footerhome" className="hover:underline">Home</Link></li>
        <li><Link to="/footerAbout" className="hover:underline">About Us</Link></li>
        <li><Link to="/#contact" className="hover:underline">Contact</Link></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h2 className="font-semibold mb-4">Services</h2>
      <ul className="space-y-1 text-sm">
        <li><Link to="/footResidential" className="hover:underline">Residential Interior Design</Link></li>
        <li><Link to="/footerCommercial" className="hover:underline">Commercial Interior Design</Link></li>
        <li><Link to="/footerTurnkey" className="hover:underline">TurnKey Interior Solutions</Link></li>
        <li><Link to="/footerVisualization" className="hover:underline">3D Visualization & Conceptual Design</Link></li>
        <li><Link to="/footerRenovation" className="hover:underline">Renovation & Remodeling</Link></li>
        <li><Link to="/footerFurniture" className="hover:underline">Custom Furniture & Decor</Link></li>
        <li><Link to="/footerVastu" className="hover:underline">Vastu Consultation</Link></li>
      </ul>
    </div>

    {/* Projects */}
    <div>
      <h2 className="font-semibold mb-4">Projects</h2>
      <ul className="space-y-1 text-sm">
        <li><Link to="/footerResidentialProject" className='hover:underline'>Residential Projects</Link></li>
        <li><Link to="/footerCommercialProject" className='hover:underline'>Commercial Projects</Link></li>
        <li><Link to="/footerCorporateProject" className='hover:underline'>Corporate Projects</Link></li>
        <li><Link to="/footerTurnKeyProject" className='hover:underline'>TurnKey Interior Projects</Link></li>
      </ul>
    </div>
  </div>

  {/* Address / Contact / Social Row */}
  <div className="mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-sm">

    {/* Address */}
    <div className="flex items-start gap-2 max-w-xs">
      <MdLocationOn className="text-white w-5 h-5 mt-1 flex-shrink-0" />
      <a 
        href="https://www.google.com/maps/search/?api=1&query=5th+Floor,+Plot+No.138,+HIG,+6th+Phase,+above+Bank+of+India,+Kukatpally+Housing+Board+Colony,+Kukatpally,+Hyderabad,+Telangana+500072" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:underline"
      >
        5th Floor, Plot No.138, HIG, 6th Phase, above Bank of India bank, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072
      </a>
    </div>

    {/* Contact */}
    <div className='relative lg:left-[-165px]'>
      <h2 className="font-semibold flex items-center gap-2">
        <MdEmail /> Contact Us
      </h2>
      <p className="flex items-center gap-2 mt-1">
        <FiPhone /> 
        <a href="tel:+916309892801" className="hover:underline">+91 63098 92801</a>
      </p>
      <p>
        <a href="mailto:arunkoncepts@gmail.com" className="hover:underline">arunkoncepts@gmail.com</a>
      </p>
    </div>

    {/* Follow Us */}
    <div className='relative lg:right-[175px]'>
      <h2 className="font-semibold text-center">Follow Us</h2>
      <div className="flex gap-3 justify-center mt-4 text-xl text-black">
        <a href="https://www.instagram.com/ak_designkoncepts?igsh=a3I2Ym9vbWI1bGoz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80"><FaInstagram className="h-4 w-4 text-white" /></a>
        <a href="https://www.threads.net/@ak_designkoncepts" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="hover:opacity-80"><RiThreadsLine className="h-4 w-4 text-white" /></a>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7374365162801258496" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80"><FaLinkedinIn className="h-4 w-4 text-white" /></a>
        <a href="https://pin.it/4VhKObr0m" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:opacity-80"><FaPinterestP className="h-4 w-4 text-white" /></a>
        <a href="https://www.facebook.com/share/1VND5cUr6D/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80"><FaFacebookF className="h-4 w-4 text-white" /></a>
        <a href="https://x.com/AruhKoncepts?t=W3JwQLkpvg05ZnV4F_-vxw&s=09" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:opacity-80"><SiX className="h-4 w-4 text-white" /></a>
      </div>
    </div>
  </div>

  {/* Bottom Row */}
  <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
    <p>© 2025 Aruh Koncepts | All Rights Reserved</p>
    <p>
      Developed by {" "}
      <a href="https://www.zenithstudio.in/" target="_blank" rel="noopener noreferrer" className="text-[#C8966B] hover:underline cursor-pointer">
        Zenith Studio
      </a>
    </p>
  </div>
</footer>


      {/* /// for mobile  */}

      <footer className="bg-[#142241] md:hidden text-white px-6 md:px-16 pt-6 md:py-10">
        {/* Top Section */}
        <div className="w-full mx-auto flex flex-col gap-8">

          {/* Logo */}
          <div className="order-1">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-8" />
              <span className="bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47] bg-clip-text text-transparent font-bold">
                Aruh Koncepts
              </span>
            </h1>
        
          </div>


          <div className="order-2">
  <h2 className="font-semibold flex items-center gap-2">
    <MdLocationOn className="text-white w-5 h-5 mt-1 flex-shrink-0" />
    Address
  </h2>

  <a
    href="https://www.google.com/maps?q=5th+Floor,+Plot+No.138,+HIG,+6th+Phase,+above+Bank+of+India+bank,+Kukatpally+Housing+Board+Colony,+Kukatpally,+Hyderabad,+Telangana+500072"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-[#C8966B] gap-2 mt-1 hover:underline"
  >
    5th Floor, Plot No.138, HIG, 6th Phase, above Bank of India bank, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072
  </a>
</div>

          {/* Contact */}
<div className="order-3">
  <h2 className="font-semibold flex items-center gap-2">
    <MdEmail /> Contact Us
  </h2>
  

  <a href="tel:+916309892801" className="flex items-center text-[#FFFFFFA3] gap-2 mt-1 hover:underline">
    <FiPhone /> +91 63098 92801
  </a>
  
  <a href="mailto:arunkoncepts@gmail.com" className="text-[#FFFFFFA3] hover:underline">
    arunkoncepts@gmail.com
  </a>
</div>

          {/* Quick Links + Projects Side-by-Side on Mobile */}
          <div className="grid grid-cols-2 gap-6 md:hidden order-4">
        
            <div>
              <h2 className="font-semibold mb-2">Quick Links</h2>
              <ul className="space-y-1 text-sm ">
                <li><Link to="/footerhome" className=" text-[#FFFFFFA3] hover:underline">Home</Link></li>
                <li><Link to="/footerAbout" className=" text-[#FFFFFFA3] hover:underline">About Us</Link></li>
                <li><Link to="/#contact" className='text-[#FFFFFFA3] hover:underline'>Contact</Link></li>
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h2 className="font-semibold mb-2">Projects</h2>
              <ul className="space-y-1 text-sm">
                <li className='text-[#FFFFFFA3]'><Link to="/footerResidentialProject" className='hover:underline'>Residential Projects</Link></li>
                <li className='text-[#FFFFFFA3]'><Link to="/footerCommercialProject" className='hover:underline'>Commercial Projects</Link></li>
                <li className='text-[#FFFFFFA3]'><Link to="/footerCorporateProject" className='hover:underline'>Corporate Projects</Link></li>
                <li className='text-[#FFFFFFA3]'><Link to="/footerTurnKeyProject" className='hover:underline'>TurnKey Interior Projects</Link></li>
              </ul>
            </div>
          </div>

          {/* Services (Below Quick Links & Projects) */}
          <div className="order-5 md:hidden">
            <h2 className="font-semibold mb-2">Services</h2>
            <ul className="space-y-1 text-sm">
              <li><Link to="/footResidential" className="hover:underline text-[#FFFFFFA3]">Residential Interior Design</Link></li>
              <li><Link to="/footerCommercial" className="hover:underline text-[#FFFFFFA3]">Commercial Interior Design</Link></li>
              <li><Link to="/footerTurnkey" className="hover:underline text-[#FFFFFFA3]">TurnKey Interior Solutions</Link></li>
              <li><Link to="/footerVisualization" className="hover:underline text-[#FFFFFFA3]">3D Visualization & Conceptual Design</Link></li>
              <li><Link to="/footerRenovation" className="hover:underline text-[#FFFFFFA3]">Renovation & Remodeling</Link></li>
              <li><Link to="/footerFurniture" className="hover:underline text-[#FFFFFFA3]">Custom Furniture & Decor</Link></li>
              <li><Link to="/footerVastu" className="hover:underline text-[#FFFFFFA3]">Vastu Consultation</Link></li>
            </ul>
          </div>

          {/* Follow Us - Centered on Mobile */}
          <div className="flex flex-col items-center justify-center mt-6 order-6">
            <h2 className="font-semibold">Follow Us</h2>
            <div className="flex gap-2 md:gap-4 mt-2 text-xl">
              <a
    href="https://www.instagram.com/ak_designkoncepts?igsh=a3I2Ym9vbWI1bGoz"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="hover:opacity-80"
  >
    <FaInstagram className="h-4 w-4 text-white" />
  </a>

  <a
    href="https://www.threads.com/@ak_designkoncepts"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Threads"
    className="hover:opacity-80"
  >
    <RiThreadsLine className="h-4 w-4 text-white" />
  </a>

  <a
    href="https://www.linkedin.com/feed/update/urn:li:activity:7374365162801258496"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="hover:opacity-80"
  >
    <FaLinkedinIn className="h-4 w-4 text-white" />
  </a>

  <a
    href="https://pin.it/4VhKObr0m"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Pinterest"
    className="hover:opacity-80"
  >
    <FaPinterestP className="h-4 w-4 text-white" />
  </a>

  <a
    href="https://www.facebook.com/share/1VND5cUr6D/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="hover:opacity-80"
  >
    <FaFacebookF className="h-4 w-4 text-white" />
  </a>
    <a
    href="https://x.com/AruhKoncepts?t=W3JwQLkpvg05ZnV4F_-vxw&s=09"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
    className="hover:opacity-80"
  >
    <SiX className="h-4 w-4 text-white" />
  </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>© 2025 Aruh Koncepts | All Rights Reserved</p>
          <p>
  Developed by <a 
    href="https://www.zenithstudio.in/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-[#C8966B] hover:underline cursor-pointer"
  >
     Zenith Studio</a>
  </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
