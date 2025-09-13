import React, { useEffect } from "react";
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
    { name: "Alexander", role: "Founder", image: about3 },
    { name: "Madona", role: "Co-Founder", image: about4 },
    // { name: "Madona", role: "Interior Designer", image: about5 },
    // { name: "Madona", role: "Interior Designer", image: about6 },
  ];

  return (
    <>
      <main className="overflow-hidden">


        <section className="about-page" data-aos="fade-up">
          <div className="w-[90%] mx-auto py-9">
            <h1 className="text-xl font-semibold text-[#C8966B]">About Us</h1>
            <img
              src={about1}
              alt=""
              className="w-full h-[250px] md:h-[500px] object-cover shadow-lg mt-8 transform transition-transform duration-500 hover:scale-105 cursor-pointer"
            />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-12">

              <div className="md:w-2/2">
                {/* <h2 className="text-lg md:text-2xl lg:text-3xl leading-relaxed text-gray-800">
                  <span className="font-bold">Aruhkoncepts</span> is a young dynamic place
                  where we make things happen, by keeping it simple. Well known for designing residential & office spaces in Hyderabad.
                </h2> */}
                <h2 className="text-lg leading-relaxed text-gray-800">
                  AK Interiors is Hyderabad based Interior trunke contracting firm. One of the applauded & trendsetters in Interior Contracting Industry. Our unique way of 'giving Ideas to quality work' has helped AK make quantifiable value delivery in Projects. We have trained carpenters, specialized skill set personals expertise and work style, to the site engineers that represent us and to the managerial team that forms the core of the firm-AK is constantly evolving. Also having worked with the best of architects over a period of time. We have built a reputation of delivering excellence in quality within the stipulated time. Our commitment to offer premium quality output by focusing on creativity and Innovative ideas, are helping us to make the potential market for our firm.
                </h2>
              </div>

              <div className="flex  justify-between md:justify-around lg:justify-between w-full  md:w-2/2 lg:w-1/2">
                <div className="w-40 h-40 rounded-full bg-[#F1F2EB] flex flex-col items-center justify-center shadow-lg px-2 text-center">
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



        <section className="bg-white">
          <div className="w-[90%] py-9 mx-auto flex flex-col-reverse lg:grid  lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8 w-full">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4"
                  data-aos="fade-right"
                  data-aos-delay={i * 200}
                >
                   <div className="w-16 h-16 md:w-18 md:h-18  rounded-full flex items-center justify-center flex-shrink-0">
            <img
              src={item.icon}
              alt={`${item.title} icon`}
              className="w-full h-full object-contain"
            />
          </div>
                  <div>
                    <h3 className=" text-lg lg:text-2xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 mt-1 text-sm md:text-lg leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center w-full" data-aos="fade-left">
              <img
                src={about2}
                alt="model"
                className="rounded-lg shadow-md w-full h-[250px] sm:h-[350px] md:h-[400px] md:w-[85%] object-cover transform transition-transform duration-500 hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
        </section>

   {/* Meet our Team  */}

        <section className="w-full bg-white py-18">
  <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl lg:text-4xl font-bold text-black text-start">
      Meet Our Team
    </h2>
    <p className="mt-6 text-gray-600 text-start mx-auto leading-relaxed">
   The founders of Aruh Koncepts bring together a shared passion for design, planning, and visual storytelling. With creativity, precision, and vision, they shape every project into a space that reflects both functionality and personality, turning ideas into environments that truly feel like home.
    </p>



<div className="mt-10 flex justify-center">
 {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"> */}
 <div className="grid grid-cols-1  md:grid-cols-2  gap-14">

      {team.map((member, idx) => (
        <div
          key={idx}
          className="relative bg-white p-2 border border-[#C0B0B0] shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay={idx * 150}
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-100 object-cover  "
          />
  
             <div className=" bg-white/90 backdrop-blur-md text-black px-4 py-2 rounded-lg">
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
</div>
   
  </div>
</section>


      </main>
    </>
  );
};

export default AboutUs;
