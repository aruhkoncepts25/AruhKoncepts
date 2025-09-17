import React, { useEffect, useRef } from "react";
import "../../Style/Project.css";
import project1 from "../../assets/Project/MoreProject/tProject1.jpg";
import project2 from "../../assets/Project/MoreProject/tProject2.jpg";
import project3 from "../../assets/Project/MoreProject/tProject3.jpg";
import project4 from "../../assets/Project/MoreProject/tProject4.jpg";
import project5 from "../../assets/Project/MoreProject/tProject5.jpg";
// connect now icon
import project6 from "../../assets/Project/project-6.png";

import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project4 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/#contact");
  };

  // Refs
  const containerRef = useRef(null);
  const textRefs = useRef([]);
  const imageRefs = useRef([]);

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
      // Text animations: fade + slide up
      textRefs.current.forEach((el, i) => {
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
          delay: i * 0.15, // stagger effect
        });
      });

      // Images animate & hover
      imageRefs.current.forEach((img) => {
        // Scroll reveal
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

        // Hover scale
        const onEnter = () => gsap.to(img, { scale: 1.05, duration: 0.4, ease: "power3.out" });
        const onLeave = () => gsap.to(img, { scale: 1, duration: 0.4, ease: "power3.out" });

        img.addEventListener("mouseenter", onEnter);
        img.addEventListener("mouseleave", onLeave);

        // Clean up these listeners on unmount
        // (we’ll remove below in cleanup)
      });

    }, containerRef);

    return () => {
      // cleanup gsap context and scrollTriggers
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
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
          <div className="flex flex-col md:flex-row justify-between items-start mt-4 md:mt-9 gap-18">
            {/* Left Content */}
            <div className="w-full md:w-1/2">
              <h2
                className="text-2xl md:text-3xl font-bold mb-1 md:mb-6"
                ref={addToTextRefs}
              >
                TurnKey Interior
              </h2>
              <p
                className="hidden lg:block text-gray-700 leading-relaxed mb-4"
                ref={addToTextRefs}
              >
                A client approached us with a desire for a comprehensive turnkey interior solution that would transform their new property into a ready-to-move-in space. Their vision was clear: they wanted a hassle-free process where everything—from design planning and material selection to execution and final finishing—would be seamlessly handled under one roof. The goal was to create an interior that not only met functional needs but also reflected their personal style and aspirations. By entrusting the project entirely to us, they sought peace of mind, knowing that every detail would be managed with precision, efficiency, and creativity.
              </p>
              <p
                className="lg:hidden text-gray-700 leading-relaxed mb-6"
                ref={addToTextRefs}
              >
                A client approached us with a desire for a comprehensive turnkey interior solution that would transform their new property into a ready-to-move-in space. Their vision was clear: they wanted a hassle-free process where everything—from design planning and material selection to execution and final finishing—would be seamlessly handled under one roof. The goal was to create an interior that not only met functional needs but also reflected their personal style and aspirations. By entrusting the project entirely to us, they sought peace of mind, knowing that every detail would be managed with precision, efficiency, and creativity.
              </p>

              <div className="space-y-2 mt-2 md:mt-6 text-gray-700" ref={addToTextRefs}>
                <p className="flex gap-9 pb-1">
                  <span className="font-semibold">Client</span> <span>:</span>
                </p>
                <p className="flex gap-6 pb-1">
                  <span className="font-semibold">Service</span> <span>:</span>
                </p>
                <p className="hidden md:block text-gray-700 leading-relaxed" ref={addToTextRefs}>
                  The client emphasized their preference for modern aesthetics blended with comfort. They wanted their home to carry a timeless appeal while ensuring practicality in everyday use.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="w-full h-[350px] max-w-[500px] md:h-[500px] overflow-hidden shadow-lg mx-auto cursor-pointer"
              ref={addToImageRefs}
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
                alt="Gallery 2"
                className="w-full h-[520px] object-cover"
              />
            </div>

            <div
              className="hidden md:block md:col-span-1 cursor-pointer overflow-hidden shadow-md"
              ref={addToImageRefs}
            >
              <img
                src={project3}
                alt="Gallery 3"
                className="w-full h-[520px] object-cover"
              />
            </div>

            {/* Mobile images */}
            <div className="flex md:hidden gap-1">
              <div
                className="w-1/2 h-[400px] cursor-pointer overflow-hidden shadow-md"
                ref={addToImageRefs}
              >
                <img
                  src={project2}
                  alt="Gallery 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="w-1/2 h-[400px] cursor-pointer overflow-hidden shadow-md"
                ref={addToImageRefs}
              >
                <img
                  src={project3}
                  alt="Gallery 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stacked images */}
            <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
              <div
                className="overflow-hidden shadow-md cursor-pointer"
                ref={addToImageRefs}
              >
                <img
                  src={project4}
                  alt="Gallery 4"
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div
                className="overflow-hidden shadow-md cursor-pointer"
                ref={addToImageRefs}
              >
                <img
                  src={project5}
                  alt="Gallery 5"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </div>

          <p
            className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base"
            ref={addToTextRefs}
          >
            Based on these insights, we crafted a turnkey solution that covered every stage of the project. The final outcome was a fully realized space—delivered on time and ready to move in—that reflected their personality while ensuring long-lasting comfort and ease.
          </p>

          <a
            onClick={handleClick}
            className="inline-flex items-center cursor-pointer gap-4 mt-1 mb-1 md:mt-6 md:mb-6 text-3xl font-medium text-gray-800 hover:text-[#C8966B] transition"
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

export default Project4;
