import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from "lucide-react";
// import mproject1 from "../assets/Project/Mproject-1.jpg";
import mproject1 from "../assets/Project/Mproject-1.webp";

import mproject2 from "../assets/Project/mproject2.jpg"
import mproject3 from "../assets/Project/mproject3.jpg"
import mproject4 from "../assets/Project/mproject4.jpg"


import project6 from '../assets/Project/project-6.png'
import { useNavigate } from "react-router-dom";

const MainProject = () => {
const navigate = useNavigate();

  const handleClick = () => {
    navigate("/#contact");
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const scrollRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Residencial Project",
      description: "The focus was on building a professional, collaborative environment that blended functionality with sophistication, supporting both productivity and employee well-being.",
      image: mproject1,
      link: "/Project"
    },
    {
      id: 2,
      title: "Commercial Project",
      description: "The vision was to deliver a complete turnkey solution — from design to execution — ensuring a stylish, practical, and move-in-ready space with ease and precision.",
      image: mproject2,
      link: "/Project2"
    },
    {
      id: 3,
      title: "Corporate Project",
      description: "The focus was on building a professional, collaborative environment that blended functionality with sophistication, supporting both productivity and employee well-being.",
      image: mproject3,
      link: "/Project3"
    },
    {
      id: 4,
      title: "TurnKey Project",
      description: "The vision was to deliver a complete turnkey solution — from design to execution — ensuring a stylish, practical, and move-in-ready space with ease and precision.",
      image: mproject4,
      link: "/Project4"
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
    <main className='overflow-hidden'>

   
    <section className="w-full py-12 bg-gray-50">
      <div className="w-[90%] mx-auto pt-10 md:py-10">
        <h1 className="text-xl font-semibold text-[#C9966B] mb-6">Projects</h1>
        <p className='text-base text-[#1A1A1A]'>For the past 10+ years, Aruh Koncepts has partnered with premium residential and commercial communities to create elegant and personalized interiors. Our portfolio proudly includes projects for My Home Avthar, Aparna Cyber Scape, Jayabheri, Ramky Kosmos, Ramky One, Aparna Zenith, and Mahaveer Communities, among others.</p>

        {/* Arrow Controls */}
        <div className="hidden md:flex justify-end mb-6 mt-7">
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-white rounded-full border cursor-pointer border-black shadow hover:bg-[#C9966B] hover:text-white hover:border-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-white rounded-full border cursor-pointer border-black shadow  hover:bg-[#C9966B] hover:text-white hover:border-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable Projects Container */}
        <div
          ref={scrollRef}
          className="flex flex-col mt-9 md:flex-row gap-6 md:gap-12 overflow-hidden"
        >
          {projects.map((project) => (
            <Link to={project.link}
              key={project.id}
              className="relative flex-shrink-0 w-full sm:w-[80%] md:w-[48%] lg:w-[32%] xl:w-[30%] max-w-full rounded-lg shadow-md hover:shadow-2xl transform transition duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[350px] sm:h-[280px] md:h-[300px] lg:h-[320px] xl:h-[340px] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full backdrop-blur-md p-4 bg-black/40">
                <h2 className="text-lg font-semibold text-white">{project.title}</h2>
                <p className="text-white text-sm">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className='mt-6 flex flex-col md:flex-row gap-4 md:gap-16 justify-start md:pl-6 items-center'>
          <h1 className='text-2xl md:text-3xl font-semibold'>Build Your Vision With Us</h1>
          <button
      onClick={handleClick}
      className="inline-flex items-center cursor-pointer px-6 py-2 rounded-2xl gap-6 border border-[#898787] mt-2 md:mt-6 mb-2 md:mb-6 text-xl font-medium text-gray-800 hover:text-[#C8966B] transition"
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
     </main>
  );
};

export default MainProject;
