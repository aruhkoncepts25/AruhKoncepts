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
   <section className="project-section w-full py-12">
  <div className="w-[90%] mx-auto px-4 py-8">
    <h1 className="text-xl font-semibold text-[#C8966B]">Projects</h1>

    {/* Top Section */}
    <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
      {/* Left Content */}
      <div className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Residential Interior Solutions
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
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

        {/* Info Table */}
        <div className="space-y-2 mt-6 text-gray-700">
          <p className="flex justify-between border-b pb-1">
            <span className="font-semibold">Client</span> <span>:</span>
          </p>
          <p className="flex justify-between border-b pb-1">
            <span className="font-semibold">Service</span> <span>:</span>
          </p>
          <p className="flex justify-between border-b pb-1">
            <span className="font-semibold">Location</span> <span>:</span>
          </p>
          <p className="flex justify-between border-b pb-1">
            <span className="font-semibold">Size</span> <span>:</span>
          </p>
        </div>
      </div>

      {/* Right Image with Hover Effect */}
      <div className="w-full max-w-[500px] h-[500px] overflow-hidden shadow-lg rounded-xl mx-auto">
        <img
          src={project1}
          alt="Interior Design"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>

    {/* Bottom Text */}
    <div className="grid md:grid-cols-2 gap-16 mt-12 items-center">
      <p className="text-gray-700 leading-relaxed">
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
<section className="w-full py-12">
  <div className="w-[90%] mx-auto">
    {/* Image Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="md:col-span-1">
        <img
          src={project2}
          alt="Dining Area"
          className="w-full h-[520px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div className="md:col-span-1">
        <img
          src={project3}
          alt="Kitchen Bar"
          className="w-full h-[520px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Third & Fourth stacked */}
      <div className="md:col-span-2 flex flex-col gap-6">
        <img
          src={project4}
          alt="Modern Kitchen"
          className="w-full h-[250px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <img
          src={project5}
          alt="Living Room"
          className="w-full h-[250px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
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
      href="#"
      className="inline-flex items-center gap-4 mt-6 mb-6 text-3xl font-medium text-gray-800 hover:text-[#C8966B] transition"
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
