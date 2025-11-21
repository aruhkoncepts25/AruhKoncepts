import React, { useEffect, useRef } from "react";
import "../Style/Project.css";
import project1 from "../assets/Project/project-1.png";
import project2 from "../assets/Project/project-2.png";
import project3 from "../assets/Project/project-3.png";
import project4 from "../assets/Project/project-4.jpg";
import project5 from "../assets/Project/project-5.jpg";
import project6 from "../assets/Project/project-6.png";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const navigate = useNavigate();

  // Refs for sections to animate
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade + slide up for text content
      gsap.from(".fade-slide", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Image hover scale animation - done with CSS or GSAP hover
      imagesRef.current.forEach((img) => {
        gsap.set(img, { transformOrigin: "center center" });

        img.addEventListener("mouseenter", () => {
          gsap.to(img, { scale: 1.05, duration: 0.4, ease: "power3.out" });
        });
        img.addEventListener("mouseleave", () => {
          gsap.to(img, { scale: 1, duration: 0.4, ease: "power3.out" });
        });
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  const handleClick = () => {
    navigate("/#contact");
  };

  return (
    <>
      <section className="project-section w-full md:py-12" ref={sectionRef}>
        <div className="w-[90%] mx-auto py-4 md:px-4 md:py-8">
          <h1 className="text-xl font-semibold text-[#C8966B] fade-slide">Projects</h1>

          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start mt-4 md:mt-2 gap-18">
            {/* Left Content */}
            <div className="w-full md:w-2/3 mt-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-6 fade-slide">
              Residential Project
              </h2>
              <p className="hidden lg:block text-gray-700 leading-relaxed mb-4 fade-slide">
                The project began with a clear and thoughtful goal: to design a home that felt calm, welcoming, and functional for everyday living. The vision was not limited to just aesthetics but extended to creating a space that offered both comfort and meaning, reflecting the values, personality, and lifestyle of the family. The idea was to bring together relaxation and practicality in perfect harmony, ensuring that the home could serve as a peaceful retreat after long, busy days while still accommodating the various needs and routines of daily life.
              </p>
              <p className="lg:hidden text-gray-700 leading-relaxed mb-6 fade-slide">
               The project began with a clear and thoughtful goal: to design a home that felt calm, welcoming, and functional for everyday living. The vision was not limited to just aesthetics but extended to creating a space that offered both comfort and meaning, reflecting the values, personality, and lifestyle of the family. The idea was to bring together relaxation and practicality in perfect harmony, ensuring that the home could serve as a peaceful retreat after long, busy days while still accommodating the various needs and routines of daily life.
              </p>

              <div className="space-y-2 mt-2 md:mt-6 text-gray-700 fade-slide">
                {/* <p className="flex gap-9 pb-1">
                  <span className="font-semibold">Client</span> <span>:</span>
                </p>
                <p className="flex gap-6 pb-1">
                  <span className="font-semibold">Service</span> <span>:</span>
                </p> */}
                <p className="hidden md:block text-gray-700 leading-relaxed">
                  The family had recently relocated and were looking for a design that truly reflected their lifestyle and sensibilities. They wanted their new home to feel like an extension of their personality, balancing elegance with functionality.
                </p>
              </div>
            </div>

            {/* Right Image with Hover Effect */}
            <div
              className="w-full max-w-[500px] h-[350px] md:h-[500px] overflow-hidden shadow-lg mx-auto cursor-pointer"
              ref={(el) => (imagesRef.current[0] = el)}
            >
              <img
                src={project1}
                alt="Interior Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full pb-9 mt-5">
        <div className="w-[90%] mx-auto">
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {/* Desktop images */}
            <div
              className="hidden md:block md:col-span-1 cursor-pointer overflow-hidden shadow-md"
              ref={(el) => (imagesRef.current[1] = el)}
            >
              <img
                src={project2}
                alt="Dining Area"
                className="w-full h-[520px] object-cover"
              />
            </div>

            <div
              className="hidden md:block md:col-span-1 cursor-pointer overflow-hidden shadow-md"
              ref={(el) => (imagesRef.current[2] = el)}
            >
              <img
                src={project3}
                alt="Kitchen Bar"
                className="w-full h-[520px] object-cover"
              />
            </div>

            {/* Mobile images */}
            <div className="flex md:hidden gap-1 md:col-span-2">
              <div
                className="w-1/2 md:w-full h-[400px] cursor-pointer overflow-hidden shadow-md"
                ref={(el) => (imagesRef.current[3] = el)}
              >
                <img
                  src={project2}
                  alt="Dining Area"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="w-1/2 md:w-full h-[400px] cursor-pointer overflow-hidden shadow-md"
                ref={(el) => (imagesRef.current[4] = el)}
              >
                <img
                  src={project3}
                  alt="Kitchen Bar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Third & Fourth stacked */}
            <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
              <div
                className="overflow-hidden shadow-md cursor-pointer"
                ref={(el) => (imagesRef.current[5] = el)}
              >
                <img
                  src={project4}
                  alt="Modern Kitchen"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div
                className="overflow-hidden shadow-md cursor-pointer"
                ref={(el) => (imagesRef.current[6] = el)}
              >
                <img
                  src={project5}
                  alt="Living Room"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base fade-slide">
            Based on these insights, we developed a concept that highlighted softness, openness, and fluid connections between spaces. The design aimed to create a sense of warmth and continuity, ensuring that each room complemented the other while maintaining its own unique character.
          </p>

          {/* Connect Now Button */}
          <a
            onClick={handleClick}
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
  );
};

export default Project;
