import React, { useEffect, useRef } from "react";
import "../../Style/Project.css";
import project1 from "../../assets/Project/MoreProject/CoProject1.png";
import project2 from "../../assets/Project/MoreProject/CoProject2.jpg";
import project3 from "../../assets/Project/MoreProject/CoProject3.jpg";
import project4 from "../../assets/Project/MoreProject/CoProject4.jpg";
import project5 from "../../assets/Project/MoreProject/CoProject5.jpg";
// connect now ka icon 
import project6 from "../../assets/Project/project-6.png";

import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project3 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/#contact");
  };

  // Refs
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

  // Helper to add to refs arrays
  const addToTextRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  const addToImageRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text elements: fade + slide up
      textRefs.current.forEach((el, index) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        });
      });

      // Animate images on scroll + hover
      imageRefs.current.forEach((img) => {
        // Scroll reveal for images
        gsap.from(img, {
          opacity: 0,
          scale: 0.95,
          y: 20,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Hover scale effect
        img.addEventListener("mouseenter", () => {
          gsap.to(img, { scale: 1.05, duration: 0.4, ease: "power3.out" });
        });
        img.addEventListener("mouseleave", () => {
          gsap.to(img, { scale: 1, duration: 0.4, ease: "power3.out" });
        });
      });
    }, containerRef);

    return () => {
      // Clean up GSAP animations / ScrollTriggers
      ctx.revert();
      // Also kill scrollTriggers (optional but safer)
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <>
      <section className="project-section w-full md:py-12" ref={containerRef}>
        <div className="w-[90%] mx-auto px-2 py-4 md:px-4 md:py-8">
          {/* Title */}
          <h1 
            className="text-xl font-semibold text-[#C8966B]" 
            ref={addToTextRefs}
          >
            Projects
          </h1>

          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start mt-4 md:mt-2 gap-18">
            {/* Left Content */}
            <div className="w-full md:w-2/2 mt-6">
              <h2 
                className="text-2xl md:text-3xl font-bold mb-1 md:mb-6"
                ref={addToTextRefs}
              >
                Corporate Project
              </h2>

              <p 
                className="hidden lg:block text-gray-700 leading-relaxed mb-4"
                ref={addToTextRefs}
              >
                A corporate client approached us with a well-defined yet ambitious vision: to create an office environment that seamlessly blended professionalism, comfort, and functionality. Their goal was not only to establish a space that could accommodate their growing team but also to design a workplace that embodied the company’s ethos, values, and forward-looking culture. They envisioned an office that would inspire productivity while remaining warm and welcoming, striking the right balance between individual focus and collaborative engagement.
              </p>

              <p 
                className="lg:hidden text-gray-700 leading-relaxed mb-6"
                ref={addToTextRefs}
              >
                A corporate client approached us with a well-defined yet ambitious vision: to create an office environment that seamlessly blended professionalism, comfort, and functionality. Their goal was not only to establish a space that could accommodate their growing team but also to design a workplace that embodied the company’s ethos, values, and forward-looking culture. They envisioned an office that would inspire productivity while remaining warm and welcoming, striking the right balance between individual focus and collaborative engagement.
              </p>

              <div className="space-y-2 mt-2 md:mt-6 text-gray-700">
                {/* <p className="flex gap-9 pb-1" ref={addToTextRefs}>
                  <span className="font-semibold">Client</span> <span>:</span>
                </p>
                <p className="flex gap-6 pb-1" ref={addToTextRefs}>
                  <span className="font-semibold">Service</span> <span>:</span>
                </p> */}
                <p className="hidden md:block text-gray-700 leading-relaxed" ref={addToTextRefs}>
                  The organization had recently expanded and was seeking a design that matched their evolving aspirations. They wanted their workspace to showcase modern aesthetics, paired with layouts that could adapt to the dynamic demands of their business.
                </p>
              </div>
            </div>

            {/* Mobile-specific text (if needed) */}
            <div className="md:hidden grid gap-16 items-center mt-6">
              <p className="text-gray-700 leading-relaxed" ref={addToTextRefs}>
                The organization had recently expanded and was seeking a design that matched their evolving aspirations. They wanted their workspace to showcase modern aesthetics, paired with layouts that could adapt to the dynamic demands of their business.
              </p>
            </div>

            {/* Right Image with hover & scroll */}
            <div 
              className="w-full h-[350px] max-w-[500px] md:h-[500px] overflow-hidden shadow-lg mx-auto cursor-pointer" 
              ref={addToImageRefs}
            >
              <img
                src={project1}
                alt="Corporate Project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full pb-9">
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {/* Desktop images */}
            <div 
              className="hidden md:block md:col-span-1 cursor-pointer overflow-hidden shadow-md" 
              ref={addToImageRefs}
            >
              <img
                src={project2}
                alt="Project Corporate 2"
                className="w-full h-[520px] object-cover"
              />
            </div>

            <div 
              className="hidden md:block md:col-span-1 cursor-pointer overflow-hidden shadow-md" 
              ref={addToImageRefs}
            >
              <img
                src={project3}
                alt="Project Corporate 3"
                className="w-full h-[520px] object-cover"
              />
            </div>

            {/* Mobile images */}
            <div className="flex md:hidden gap-1">
              <div className="w-1/2 h-[400px] cursor-pointer overflow-hidden shadow-md" ref={addToImageRefs}>
                <img
                  src={project2}
                  alt="Project Corporate 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 h-[400px] cursor-pointer overflow-hidden shadow-md" ref={addToImageRefs}>
                <img
                  src={project3}
                  alt="Project Corporate 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stacked images */}
            <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
              <div className="overflow-hidden shadow-md cursor-pointer" ref={addToImageRefs}>
                <img
                  src={project4}
                  alt="Project Corporate 4"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="overflow-hidden shadow-md cursor-pointer" ref={addToImageRefs}>
                <img
                  src={project5}
                  alt="Project Corporate 5"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </div>

          <p 
            className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base" 
            ref={addToTextRefs}
          >
            Guided by these insights, we designed a concept focused on transparency, adaptability, and smooth integration between different work areas. The outcome was a refined and efficient office space that encouraged teamwork, enhanced productivity, and clearly embodied the company’s vision.
          </p>

          <a 
            onClick={handleClick} 
            className="inline-flex items-center cursor-pointer gap-4 mt-1 mb-1 md:mt-6 md:mb-6 text-2xl font-medium text-gray-800 hover:text-[#C8966B] transition"
            ref={addToTextRefs}
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

export default Project3;
