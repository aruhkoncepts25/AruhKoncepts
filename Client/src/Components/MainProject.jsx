import React, { useRef } from 'react';
import {Link} from 'react-router-dom'
import { ChevronLeft, ChevronRight } from "lucide-react";
import mproject1 from "../assets/Project/Mproject-1.jpg"
import mproject2 from "../assets/Project/Mproject-2.jpg"
import mproject3 from "../assets/Project/Mproject-3.jpg"

import project6 from '../assets/Project/project-6.png'


const MainProject = () => {
  const scrollRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Residential Interior Solutions",
      description: "This comes from opportunities with a clear goal to create a home that feels calm.",
      image: mproject1,
       link: "/Project"
    },
    {
      id: 2,
      title: "Modern Living Spaces",
      description: "This comes from opportunities with a clear goal to create a home that feels calm.",
      image: mproject2,
    },
    {
      id: 3,
      title: "Corporate Office Design",
      description: "This comes from opportunities with a clear goal to create a home that feels calm.",
      image: mproject3,
    },
    {
      id: 4,
      title: "Luxury Villas",
      description: "This comes from opportunities with a clear goal to create a home that feels calm.",
      image: mproject1,
    },
    {
      id: 5,
      title: "Creative Studios",
      description: "This comes from opportunities with a clear goal to create a home that feels calm.",
      image: mproject2,
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth + 24; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="w-[90%] mx-auto py-10">
        <h1 className="text-xl font-semibold text-[#C9966B] mb-6">Projects</h1>

        {/* Arrow Controls */}
        <div className="flex justify-end mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-white rounded-full border border-black shadow hover:bg-gray-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-white rounded-full border border-black shadow hover:bg-gray-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable Projects Container */}
        <div
          ref={scrollRef}
          className="flex gap-12 overflow-hidden"
        >
     {projects.map((project) => (
  <Link to='/project'
    key={project.id}
    className="relative flex-shrink-0 w-full sm:w-[80%] md:w-[48%] lg:w-[32%] xl:w-[30%] max-w-full rounded-lg shadow-md hover:shadow-2xl transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 overflow-hidden"
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-[320px] xl:h-[340px] object-cover"
    />
    <div className="absolute bottom-0 left-0 w-full backdrop-blur-md p-4 bg-black/40">
      <h2 className="text-lg font-semibold text-white">{project.title}</h2>
      <p className="text-white text-sm">{project.description}</p>
    </div>
  </Link>
))}
        </div>

        <div className='mt-6 flex gap-16 justify-start pl-6 items-center'>
            <h1 className='text-3xl font-semibold'>Build Your Vision With Us</h1>
           <button
                 href="#"
                 className="inline-flex items-center px-6 py-2 rounded-2xl gap-6 border border-[#898787] mt-6 mb-6 text-xl font-medium text-gray-800 hover:text-[#C8966B] transition"
               >
                 Connect Now
                 <img
                   src={project6}
                   alt="arrow icon"
                   className="w-5 h-5 object-contain inline-block"
                 />
               </button>
        </div>
      </div>
    </section>
  );
};

export default MainProject;
