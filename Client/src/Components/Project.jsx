import React from 'react'
import "../Style/Project.css"
import project1 from "../assets/Project/project-1.jpg"
import project2 from '../assets/Project/project-2.jpg'
import project3 from '../assets/Project/project-3.jpg'
import project4 from '../assets/Project/project-4.jpg'
import project5 from '../assets/Project/project-5.jpg'
import project6 from '../assets/Project/project-6.png'




import { ExternalLink } from "lucide-react"; // for the small arrow icon

const Project = () => {
  return (
    <>
   <section className="project-section w-full md:py-12">
  <div className="w-[90%] mx-auto px-2 py-4 md:px-4 md:py-8">
    <h1 className="text-xl font-semibold text-[#C8966B]">Projects</h1>

    {/* Top Section */}
    <div className="grid md:grid-cols-2 gap-10 items-center mt-4 md:mt-12">
      {/* Left Content */}
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-6">
          Residential Interior Solutions
        </h2>
        <p className="hidden lg:block text-gray-700 leading-relaxed mb-4">
          The Morris family approached us with a clear goal: to create a <br /> 
          home that felt calm, welcoming, and functional for their everyday <br /> 
          lives. They had recently relocated and wanted their new space to <br /> 
          reflect their lifestyle and design sensibilities. During our initial <br />
          consultation, we discussed their needs in detail, from storage <br />
          requirements to color preferences. It was important that the <br />
          interiors felt timeless and relaxed, without sacrificing practicality. <br /> 
          We developed a concept that emphasized softness, openness, <br /> 
          and a strong connection between the rooms.
        </p>
          <p className="lg:hidden text-gray-700 leading-relaxed mb-6">
          The Morris family approached us with a clear goal: to create a 
          home that felt calm, welcoming, and functional for their everyday  
          lives. They had recently relocated and wanted their new space to 
          reflect their lifestyle and design sensibilities. During our initial 
          consultation, we discussed their needs in detail, from storage
          requirements to color preferences. It was important that the
          interiors felt timeless and relaxed, without sacrificing practicality. 
          We developed a concept that emphasized softness, openness,
          and a strong connection between the rooms.
        </p>


        {/* Info Table */}
        <div className="space-y-2 mt-2 md:mt-6 text-gray-700">
          <p className="flex  gap-9 pb-1">
            <span className="font-semibold">Client</span> <span>:</span>
          </p>
          <p className="flex gap-6 pb-1">
            <span className="font-semibold">Service</span> <span>:</span>
          </p>
          <p className="flex  gap-3 pb-1">
            <span className="font-semibold">Location</span> <span>:</span>
          </p>
          <p className="flex gap-11 pb-1">
            <span className="font-semibold">Size</span> <span>:</span>
          </p>
        </div>
      </div>

{/* text ---  Mobile */}
    <div className="md:hidden grid md:grid-cols-2 gap-16  items-center">
      <p className="text-gray-700 leading-relaxed">
        The Morris family approached us with a clear goal: to create a home
        that felt calm, welcoming, and functional for their everyday lives.
        They had recently relocated and wanted their new space to reflect
        their lifestyle and design sensibilities.
      </p>
    </div>
      {/* Right Image with Hover Effect */}
      <div className="w-full h-[350px] max-w-[500px] md:h-[500px] overflow-hidden shadow-lg mx-auto">
        <img
          src={project1}
          alt="Interior Design"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>

    {/* Bottom Text both desktop */}
    <div className="grid md:grid-cols-2 gap-16 mt-6 md:mt-12 items-center">
      <p className="hidden md:block text-gray-700 leading-relaxed">
        The Morris family approached us with a clear goal: to create a home
        that felt calm, welcoming, and functional for their everyday lives.
        They had recently relocated and wanted their new space to reflect
        their lifestyle and design sensibilities.
      </p>

      <p className="text-gray-700 leading-relaxed">
        During our initial consultation, we discussed their needs in detail,
        from storage requirements to color preferences. It was important that
        the interiors felt timeless and relaxed, without sacrificing
        practicality.
      </p>
    </div>
  </div>
</section>

{/* Gallery Section */}
<section className="w-full pb-9">
  <div className="w-[90%] mx-auto">
    {/* Image Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4  gap-4 md:gap-6 mb-8">
      {/* Desktop code  */}
      
      <div className="hidden md:block md:col-span-1">
        <img
          src={project2}
          alt="Dining Area"
          className="w-full h-[520px] object-cover shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div className="hidden md:block md:col-span-1">
        <img
          src={project3}
          alt="Kitchen Bar"
          className="w-full h-[520px] object-cover shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Mobile code  */}
       <div className="flex md:hidden gap-1 md:col-span-2">
    <img
      src={project2}
      alt="Dining Area"
      className="w-1/2 md:w-full h-[400px] object-cover shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
    />
    <img
      src={project3}
      alt="Kitchen Bar"
      className="w-1/2 md:w-full h-[400px]  object-cover shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
    />
  </div>
{/* //// */}


      {/* Third & Fourth stacked */}
      <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
        <img
          src={project4}
          alt="Modern Kitchen"
          className="w-full h-[250px] object-cover shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <img
          src={project5}
          alt="Living Room"
          className="w-full h-[250px] object-cover shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>

    {/* Text Section */}
    <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
      The Morris family approached us with a clear goal: to create a home
      that felt calm, welcoming, and functional for their everyday lives.
      They had recently relocated and wanted their new space to reflect
      their lifestyle and design sensibilities.
    </p>

    {/* Connect Now Button */}
    <a
      href="/#contact"
      className="inline-flex items-center cursor-pointer gap-4 mt-1 mb-1 md:mt-6 md:mb-6 text-3xl font-medium text-gray-800 hover:text-[#C8966B] transition"
    >
      Connect Now
      <img
        src={project6}
        alt="arrow icon"
        className="w-10 h-10 object-contain inline-block"
      />
    </a>
  </div>
</section>

    </>
  )
}

export default Project
