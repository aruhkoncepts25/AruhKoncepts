import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "../Style/AboutUs.css"
import about1 from '../assets/AboutUs/about-1.jpg';
import about2 from '../assets/AboutUs/about-2.jpg';
import about4 from "../assets/AboutUs/about4.jpg";  // bich ke liye Meet our founder wlala
import about3 from "../assets/AboutUs/about3.jpeg"; // meet our team
import about5 from "../assets/AboutUs/about5.webp";// meet our team
import about6 from "../assets/AboutUs/about6.png";// meet our team
import about7 from "../assets/AboutUs/about7.png";// meet our team
import about8 from "../assets/AboutUs/about8.png";// meet our team
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
      text: "At Aruh Koncepts, we simplify design with personalized, stylish, and lasting solutions blending creativity, collaboration, and quality craftsmanship.",
      icon: icon1,
    },
    {
      title: "Vision",
      text: "To be a trusted interior design name by creating functional, beautiful spaces that reflect our clients' lifestyles and elevate daily living.",
      icon: icon2,
    },
    {
      title: "Why Choose",
      text: "At Aruh Koncepts, we craft personalized interior solutions that balance style and function delivered with clear communication, smart planning, and a respect for your time and budget.",
      icon: icon3,
    },
  ];

  const team = [
    // { name: "Alexander", role: "Founder", image: about },
    { name: "Mr. Numaan Siddiqui ", role: "Project Lead ", image: about3 },
    { name: "Ms. Nirmala", role: "Creative Designer", image: about5 },
    { name: "Ms. Pravalika", role: "Creative Designer", image: about6 },
    { name: "Ms. Lavanya", role: "Creative Designer", image: about7 },
    { name: "Ms. Swathi", role: "Creative Designer", image: about8 },

  ];

  return (
    <>
      <main className="overflow-hidden">


        <section className="about-page" data-aos="fade-up">
          <div className="w-[90%] mx-auto py-9">
            <h1 className="text-xl font-semibold text-[#C8966B]">About Us</h1>
            <img
              src={about1}
              alt="About Us"
              className="w-full h-[250px] md:h-[500px] object-cover shadow-lg mt-8 transform transition-transform duration-500 hover:scale-105 cursor-pointer"
            />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-12">

              <div className="md:w-2/2">
                <h2 className="text-lg leading-relaxed text-gray-800">
                  <span className="italic font-medium">Aruh Koncept</span> Interiors is <span className="italic  font-medium">Hyderabad based Interior Trunkey contracting firm</span>. One of the <span className="italic  font-medium">Applauded & Trendsetters in Interior Contracting Industry</span>. Our unique way of <span className="italic  font-medium">'Giving Ideas to Quality Work'</span> has helped AK make <span  className="italic  font-medium">Quantifiable value delivery in Projects</span>.
We have <span className="italic  font-medium">trained carpenters, specialized skill set personals expertise and work style, site engineers</span>, and a <span className="italic  font-medium">managerial team</span> that forms the core of the firm. <span  className="italic  font-medium">Aruh Koncept is constantly evolving</span>. Having worked with the <span className="italic  font-medium">best of architects</span> over a period of time, we have built a <span className="italic  font-medium">reputation of delivering excellence in quality within the stipulated time</span>.
Our <span className="italic  font-medium">commitment to offer premium quality output</span> by focusing on <span className="italic  font-medium">creativity and Innovative ideas</span> is helping us to make a <span className="italic  font-medium">potential market for our firm</span>.
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

        {/* // Meet our Founder  */}
        <section className="bg-white" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-[90%]  mx-auto mt-12 px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl lg:text-4xl font-bold text-black mb-10 text-start"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              Meet Our Founder
            </h2>

            <div className="max-w-6xl mx-auto mt-20 md:mt-18">
              <div
                className="flex flex-col md:flex-row items-center md:items-center justify-center gap-y-10 md:gap-x-12 lg:gap-x-38"
              >
                {/* Image Section */}
                <div
                  className="relative w-52 h-72 sm:w-60 sm:h-96 md:w-68 md:h-[22rem]"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                >
                  {/* Gradient Background Shape */}
                  <div
                    className="absolute -top-10 -left-7 w-full h-full rounded-tl-[0%] rounded-tr-[30%] rounded-br-[0%] rounded-bl-[30%]"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(20, 34, 65, 1) 0%, rgba(51, 87, 167, 1) 100%)',
                    }}
                  ></div>

                  {/* Blue Outline + Image */}
                  <div
                    className="relative w-full h-full rounded-tl-[0%] rounded-tr-[30%] rounded-br-[0%] rounded-bl-[30%] p-[4px] overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, rgba(51, 87, 167, 1) 0%, rgba(20, 34, 65, 1) 100%)',
                    }}
                  >
                    <div
                      className="w-full h-full rounded-tl-[0%] rounded-tr-[30%] rounded-br-[0%] rounded-bl-[30%] overflow-hidden"
                      style={{
                        background: 'linear-gradient(180deg, rgba(51, 87, 167, 1) 0%, rgba(20, 34, 65, 1) 100%)',
                      }}
                    >
                      <img
                        src={about4}
                        alt="Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Founder Info */}
                <div
                  className="flex-1 text-start md:text-left px-2 sm:px-4 md:mt-10 lg:mt-0"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-duration="1000"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#000000] mb-3">
                    Mr. Mounish Kumar
                  </h3>
                  <p className="text-[#585858] font-medium mb-3 text-base sm:text-lg">
                    CEO & Founder
                  </p>
                  <p className="text-[#1A1A1A] leading-relaxed mt-4 text-sm sm:text-base max-w-3xl  md:mx-0">
                    Mounish Kumar, <span className="font-bold italic">Founder & Creative Head of Aruh Koncept</span>, is a Mechanical Engineer by qualification and an Interior Designer by passion. With a strong technical background, he combines <span className="font-medium italic">Interior engineering, precision, innovative thinking, and artistic vision</span> in every project. His journey into interiors began in <span className="font-medium italic">2015</span>, inspired by <span className="font-medium italic">Interior products design, space functionality, and the art of building environments that inspire</span>. What started as a passion soon grew into a purposeful career, leading to the creation of Aruh Koncept.
                  </p>

                  <p className="text-[#1A1A1A] leading-relaxed text-sm sm:text-base max-w-3xl  md:mx-0 mt-3">
                    Guided by a commitment to <span className="font-medium italic">ethical practices</span> and the values of working with <span className="font-medium italic">honesty, integrity, and transparency</span>, Mounish has built a reputation for trust and innovation. With a clear vision that <span className="font-medium italic">every space should reflect the personality, values, and purpose of its users</span>, he continues to deliver designs that balance creativity with responsibility, shaping spaces that inspire and endure.
                  </p>

                  <blockquote className="border-l-4 border-white italic text-black text-sm mt-6">
                    <p className="font-medium">
                      “Design is not only about how a space looks it is about how it works,
                      how it feels, and how ethically it is brought to life.”
                    </p>
                    <p className="text-right text-sm not-italic mt-1 relative lg:left-[-40px]">~ Mounish Kumar</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet our Team  */}

        <section className="w-full bg-white py-18" data-aos="fade-up" data-aos-duration="1000">
          <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl lg:text-4xl font-bold text-black text-start"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              Meet Our Team
            </h2>
            <p
              className="mt-6 text-gray-600 text-start mx-auto leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              At Aruh Koncepts, our team of designers, project managers, and skilled craftsmen work together to bring creativity and precision into every project. With a focus on innovation and detail, we deliver interiors that balance functionality with timeless style. Collaboration and expertise drive us to create spaces that truly inspire.
            </p>

            <div className="mt-10 flex justify-start">
           <div className="w-[90%] mx-auto flex flex-col gap-10">
  {/* First Row - 3 cards */}
  <div className="flex justify-center gap-16 flex-wrap">
    {team.slice(0, 3).map((member, index) => (
      <div
        key={index}
        className="w-64 rounded-b-xl overflow-hidden p-3"
        style={{
          background: 'linear-gradient(180deg, rgba(20,34,65,1) 0%, rgba(50,84,160,1) 100%)',
          borderRadius: '8rem 8rem 0rem 0rem',
        }}
        data-aos="zoom-in"
        data-aos-delay={400 + index * 150}
        data-aos-duration="800"
      >
        <div className="relative w-full h-80 rounded-t-[140px] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-t-[140px]"
          />
        </div>
        <div className="text-center py-4">
          <h3 className="text-white font-semibold text-lg">{member.name}</h3>
          <p className="text-white text-sm">{member.role}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Second Row - 2 cards centered */}
  <div className="flex justify-center gap-16 flex-wrap">
    {team.slice(3, 5).map((member, index) => (
      <div
        key={index}
        className="w-64 rounded-b-xl overflow-hidden p-3"
        style={{
          background: 'linear-gradient(180deg, rgba(20,34,65,1) 0%, rgba(50,84,160,1) 100%)',
          borderRadius: '8rem 8rem 0rem 0rem',
        }}
        data-aos="zoom-in"
        data-aos-delay={400 + (index + 3) * 150}
        data-aos-duration="800"
      >
        <div className="relative w-full h-80 rounded-t-[140px] overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-t-[140px]"
          />
        </div>
        <div className="text-center py-4">
          <h3 className="text-white font-semibold text-lg">{member.name}</h3>
          <p className="text-white text-sm">{member.role}</p>
        </div>
      </div>
    ))}
  </div>
</div>

            </div>
          </div>
        </section>


      </main>
    </>
  );
};

export default AboutUs;
