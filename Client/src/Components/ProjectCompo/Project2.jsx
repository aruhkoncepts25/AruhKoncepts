import React, { useEffect, useRef } from "react";
import "../../Style/Project.css";
import project1 from "../../assets/Project/MoreProject/Cproject1.webp";
import project2 from "../../assets/Project/MoreProject/Cproject2.webp";
import project3 from "../../assets/Project/MoreProject/Cproject3.webp";
import project4 from "../../assets/Project/MoreProject/Cproject4.jpg";
import project5 from "../../assets/Project/MoreProject/Cproject5.jpg";
import project6 from "../../assets/Project/project-6.png";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project2 = () => {
  const navigate = useNavigate();

  // Refs for animated elements
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);
  const textRefs = useRef([]);

  const handleClick = () => {
    navigate("/#contact");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate headings and paragraphs - fade and slide up
      gsap.from(textRefs.current, {
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

      // Animate images fade in and scale on scroll
      imagesRef.current.forEach((img) => {
        gsap.fromTo(
          img,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Hover scale animation
        img.addEventListener("mouseenter", () => {
          gsap.to(img, { scale: 1.05, duration: 0.4, ease: "power3.out" });
        });
        img.addEventListener("mouseleave", () => {
          gsap.to(img, { scale: 1, duration: 0.4, ease: "power3.out" });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="project-section w-full md:py-12" ref={sectionRef}>
        <div className="w-[90%] mx-auto px-2 py-4 md:px-4 md:py-8">
          <h1
            className="text-xl font-semibold text-[#C8966B]"
            ref={(el) => textRefs.current.push(el)}
          >
            Projects
          </h1>

          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mt-4 md:mt-2 gap-18">
            {/* Left Content */}
            <div
              className="w-full md:w-2/2 mt-6"
              ref={(el) => textRefs.current.push(el)}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-6">
                Commercial
              </h2>
              <p
                className="hidden lg:block text-gray-700 leading-relaxed mb-4"
                ref={(el) => textRefs.current.push(el)}
              >
                The project began with a clear and thoughtful goal: to design a
                home that felt calm, welcoming, and functional for everyday
                living. The vision was not limited to just aesthetics but
                extended to creating a space that offered both comfort and
                meaning, reflecting the values, personality, and lifestyle of
                the family. The idea was to bring together relaxation and
                practicality in perfect harmony, ensuring that the home could
                serve as a peaceful retreat after long, busy days while still
                accommodating the various needs and routines of daily life.
                Every corner was to be planned with intention—whether it was a
                cozy space to unwind, a functional area to stay productive, or
                open layouts that encouraged connection and togetherness. The
                emphasis was on achieving balance: a design that exuded warmth
                and serenity while remaining durable and versatile enough to
                support the evolving needs of modern living.
              </p>
              <p
                className="lg:hidden text-gray-700 leading-relaxed mb-6"
                ref={(el) => textRefs.current.push(el)}
              >
                The project began with a clear and focused goal: to design a
                commercial space that felt professional, welcoming, and highly
                functional for daily business operations. The vision was to
                create an environment that not only supported efficiency and
                productivity but also reflected the company’s values, culture,
                and brand identity in every detail. The workplace was intended
                to balance functionality with aesthetics, offering employees a
                space that motivates and inspires them while also projecting a
                strong and lasting impression on clients, partners, and
                visitors. More than just a physical office, the idea was to
                craft a space that seamlessly integrates work needs with
                comfort, ensuring that every element—from layout and lighting to
                materials and finishes—contributes to a cohesive and
                forward-thinking design.
              </p>

              {/* Info Table */}
              <div className="space-y-2 mt-2 md:mt-6 text-gray-700">
                <p className="flex gap-9 pb-1" ref={(el) => textRefs.current.push(el)}>
                  <span className="font-semibold">Client</span> <span>:</span>
                </p>
                <p className="flex gap-6 pb-1" ref={(el) => textRefs.current.push(el)}>
                  <span className="font-semibold">Service</span> <span>:</span>
                </p>
                <p className="text-gray-700 leading-relaxed" ref={(el) => textRefs.current.push(el)}>
                  The business had recently expanded and required a space that
                  truly mirrored its professional ethos. The leadership team
                  wanted interiors that projected confidence and modernity,
                  while maintaining functionality and comfort for staff and
                  stakeholders.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="w-full h-[350px] max-w-[500px] md:h-[500px] overflow-hidden shadow-lg mx-auto cursor-pointer"
              ref={(el) => imagesRef.current.push(el)}
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
              ref={(el) => imagesRef.current.push(el)}
            >
              <img
                src={project2}
                alt="Dining Area"
                className="w-full h-[520px] object-cover"
              />
            </div>

            <div
              className="hidden md:block md:col-span-1 cursor-pointer overflow-hidden shadow-md"
              ref={(el) => imagesRef.current.push(el)}
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
                ref={(el) => imagesRef.current.push(el)}
              >
                <img
                  src={project2}
                  alt="Dining Area"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="w-1/2 md:w-full h-[400px] cursor-pointer overflow-hidden shadow-md"
                ref={(el) => imagesRef.current.push(el)}
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
              <img
                src={project4}
                alt="Modern Kitchen"
                className="w-full h-[250px] object-cover shadow-md cursor-pointer"
                ref={(el) => imagesRef.current.push(el)}
              />
              <img
                src={project5}
                alt="Living Room"
                className="w-full h-[250px] object-cover shadow-md cursor-pointer"
                ref={(el) => imagesRef.current.push(el)}
              />
            </div>
          </div>

          {/* Text Section */}
          <p
            className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base"
            ref={(el) => textRefs.current.push(el)}
          >
            Based on these insights, we developed a concept that emphasized
            openness, flexibility, and seamless connectivity between different
            work zones. The design fostered collaboration while ensuring
            privacy where needed, ultimately creating a space that balanced
            brand presence, employee well-being, and operational efficiency.
          </p>

          {/* Connect Now Button */}
          <a
            onClick={handleClick}
            className="inline-flex items-center cursor-pointer gap-4 mt-1 mb-1 md:mt-6 md:mb-6 text-3xl font-medium text-gray-800 hover:text-[#C8966B] transition"
            ref={(el) => textRefs.current.push(el)}
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

export default Project2;
