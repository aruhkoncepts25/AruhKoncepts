
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Style/AboutUs.css"

import about1 from '../assets/AboutUs/about-1.jpg';
import about2 from '../assets/AboutUs/about-2.jpg';
import about3 from "../assets/AboutUs/about-3.png";
import about4 from "../assets/AboutUs/about-4.png";
import about5 from "../assets/AboutUs/about-5.png";
import about6 from "../assets/AboutUs/about-6.png";
import icon1 from "../assets/AboutUs/icon1.png";
import icon2 from "../assets/AboutUs/icon2.png";
import icon3 from "../assets/AboutUs/icon3.png";

const AboutUs = () => {

  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" }); 
    }, []);

  const items = [
    {
      title: "Mission",
      text: "At Aruh Koncepts, we simplify design with personalized, stylish, and lasting solutions—blending creativity, collaboration, and quality craftsmanship.",
      icon: icon1,
    },
    {
      title: "Vision",
      text: "To be a trusted interior design name by creating functional, beautiful spaces that reflect our clients' lifestyles and elevate daily living.",
      icon: icon2,
    },
    {
      title: "Why Choose",
      text: "At Aruh Koncepts, we craft personalized interior solutions that balance style and function—delivered with clear communication, smart planning, and a respect for your time and budget.",
      icon: icon3,
    },
  ];

  const team = [
    { name: "Alexander", role: "Interior Designer", image: about3 },
    { name: "Madona", role: "Interior Designer", image: about4 },
    { name: "Madona", role: "Interior Designer", image: about5 },
    { name: "Madona", role: "Interior Designer", image: about6 },
  ];

  return (
    <>
      <section className="about-page" data-aos="fade-up">
        <div className="w-[90%] mx-auto py-9">
          <h1 className="text-xl font-semibold text-[#C8966B]">About Us</h1>
          <img
            src={about1}
            alt=""
            className="w-full h-[500px] object-cover shadow-lg mt-8 transform transition-transform duration-500 hover:scale-105 cursor-pointer"
          />

          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-12">
            <div className="md:w-1/2">
              <h2 className="text-lg md:text-3xl leading-relaxed text-gray-800">
                <span className="font-bold">Aruhkoncepts</span> is a young dynamic place <br />
                where we make things happen, by keeping it simple. Well known for designing residential & office spaces in Hyd.
              </h2>
            </div>

            <div className="flex justify-between w-full md:w-1/2">
              <div className="w-40 h-40 rounded-full bg-[#F1F2EB] relative left-[160px] flex flex-col items-center justify-center shadow-lg px-2 text-center">
                <h3 className="text-5xl text-[#142241] font-bold">10</h3>
                <p className="text-xs mt-1 text-[#1A1A1A]">
                  Years of <br /> Experience
                </p>
              </div>

              <div className="w-40 h-40 rounded-full bg-[#F1F2EB] flex flex-col items-center justify-center shadow-lg px-2 text-center">
                <h3 className="text-5xl text-[#142241] font-bold">99%</h3>
                <p className="text-xs mt-1 text-[#1A1A1A]">
                  Trusted for quality, <br /> creativity and precision
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-6">
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4"
                data-aos="fade-right"
                data-aos-delay={i * 200}
              >
                <div className="w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0">
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-700 mt-1 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center" data-aos="fade-left">
            <img
              src={about2}
              alt="model"
              className="rounded-lg shadow-md w-full h-[400px] md:w-[85%] object-cover transform transition-transform duration-500 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12">
        <div className="w-[90%] mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            A passionate collective of designers, planners, and visual thinkers, the Aruh Koncepts team brings creativity, precision, and personality to every project. Together, we turn ideas into spaces that feel just like home.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4 mb-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-100 object-cover rounded-lg transform transition-transform duration-500 hover:scale-105 cursor-pointer"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white text-black px-4 py-2 rounded-lg">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
