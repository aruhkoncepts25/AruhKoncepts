import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Home.css";
import { FaBuffer } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import about from "../assets/about1.png";
import about1 from "../assets/about2.jpg";
import calender from "../assets/calender.png";
import blueprint from "../assets/blueprint.png";
import location from "../assets/location.png";
import service2 from "../assets/service2.png";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import project1 from "../assets/projrctt1.jpg";
import project2 from "../assets/project2.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdPhone } from "react-icons/md";
import hero from "../assets/hero.jpg";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();

  const scrollRef = useRef(null); // testinomialss
  const [isPaused, setIsPaused] = useState(false); // testinomials
  const speed = 1; // scroll speed
  const animationRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null); // FAQ
  const [activeIndex, setActiveIndex] = useState(0); // for service
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  //  for contact
  const contactHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/contactRoute/insert",
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }
      );
      if (response.status === 201) {
        toast.success("Message Submitted Successfully", {
          position: "bottom-right",
          style: {
            backgroundColor: "Green",
            borderLeft: "4px solid #142241", // Tailwind green-500 hex
            color: "white",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          },
        });

        // Optional: Reset the form
        setFormData({
          name: "",
          email: "",
          service: "",
          message: "",
        });
      }
    } catch (err) {
      console.log("Not Fetch In Frontend Error");
    }
  };

  //

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // animation speed
  //     once: true, // ek hi baar chale
  //     easing: "ease-in-out",
  //   });
  // }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // reset
        } else {
          scrollContainer.scrollLeft += speed;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationRef.current);
  }, [isPaused]);

  /// For Process Step ////
  const steps = [
    {
      title: "Consultation",
      description: "Your Vision, Our Understanding",
      step: "Step 1",
    },
    {
      title: "Concept",
      description: "Ideas That Inspire",
      step: "Step 2",
    },
    {
      title: "Design",
      description: "Plans with Purpose",
      step: "Step 3",
    },
    {
      title: "Execution",
      description: "Flawless Implementation",
      step: "Step 4",
    },
    {
      title: "Handover",
      description: "Our Dream, Delivered",
      step: "Step 5",
    },
  ];

  //////////////////////////////////////////////////////////////////////////////

  // FAQ
  const faqs = [
    {
      question: "Do you offer both interior and exterior design services?",
      answer:
        "Yes, we provide both interior and exterior design services to cater to your complete project needs.",
    },
    {
      question: "How involved will I be in the design process?",
      answer:
        "We encourage client involvement throughout the process to ensure the design reflects your style and needs.",
    },
    {
      question: "Is there a minimum project size or budget?",
      answer:
        "We handle projects of varying sizes and budgets. Contact us to discuss your specific requirements.",
    },
    {
      question: "Do you work with specific contractors or builders?",
      answer:
        "Yes, we collaborate with trusted contractors and builders to ensure high-quality results.",
    },
    {
      question: "What’s the typical project timeline?",
      answer:
        "Timelines vary based on project scope, but most projects are completed within the agreed schedule.",
    },
    {
      question: "How do I get started with a project?",
      answer:
        "Simply contact us to schedule a consultation, and we’ll guide you through the process.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////

  // for testinomial
  const testimonials = [
    {
      name: "John Wick",
      role: "Renovation client",
      text: (
        <>
          Aruh Koncepts made our <br /> renovation easy and delivered <br />{" "}
          beautiful, lasting results
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3", // Replace with actual image URL
    },
    {
      name: "John Wick",
      role: "Renovation client",
      text: (
        <>
          Aruh Koncepts made our <br /> renovation easy and delivered <br />{" "}
          beautiful, lasting results
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "John Wick",
      role: "Renovation client",
      text: (
        <>
          Aruh Koncepts made our <br /> renovation easy and delivered <br />{" "}
          beautiful, lasting results
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "John Wick",
      role: "Renovation client",
      text: (
        <>
          Aruh Koncepts made our <br /> renovation easy and delivered <br />{" "}
          beautiful, lasting results
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "John Wick",
      role: "Renovation client",
      text: (
        <>
          Aruh Koncepts made our <br /> renovation easy and delivered <br />{" "}
          beautiful, lasting results
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "John Wick",
      role: "Renovation client",
      text: (
        <>
          Aruh Koncepts made our <br /> renovation easy and delivered <br />{" "}
          beautiful, lasting results
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "John Wick",
      role: "Renovation client",
      text: (
        <>
          Aruh Koncepts made our <br /> renovation easy and delivered <br />{" "}
          beautiful, lasting results
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "John Wick",
      role: "Renovation client",
      text: (
        <>
          Aruh Koncepts made our <br /> renovation easy and delivered <br />{" "}
          beautiful, lasting results
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "John Wick",
      role: "Renovation client",
      text: (
        <>
          Aruh Koncepts made our <br /> renovation easy and delivered <br />{" "}
          beautiful, lasting results
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "John Wick",
      role: "Renovation client",
      text: (
        <>
          Aruh Koncepts made our <br /> renovation easy and delivered <br />{" "}
          beautiful, lasting results
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "John Wick",
      role: "Renovation client",
      text: (
        <>
          Aruh Koncepts made our <br /> renovation easy and delivered <br />{" "}
          beautiful, lasting results
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "John Wick",
      role: "Renovation client",
      text: (
        <>
          Aruh Koncepts made our <br /> renovation easy and delivered <br />{" "}
          beautiful, lasting results
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "John Wick",
      role: "Renovation client",
      text: (
        <>
          Aruh Koncepts made our <br /> renovation easy and delivered <br />{" "}
          beautiful, lasting results
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  ////////////////////////////////////////////////////////////////////////////////////////////////

  // for Service
  const services = [
    {
      title: "Residential",
      description: (
        <>
          Creating warm, personalized spaces that reflect your <br />
          lifestyle – from cozy apartments to spacious <br /> villas.
        </>
      ),
      image: service2,
    },
    {
      title: "Commercial",
      description:
        "Functional and aesthetic designs tailored for offices, retail, and business spaces.",
      image:
        "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2022-1664872805-f0ijv/mbr-1664872893-qeyQW/br-1666881566-g8ezJ.jpg",
    },
    {
      title: "Turnkey Interior Solutions",
      description:
        "End-to-end solutions for designing, building, and delivering your dream space.",
      image:
        "https://chiedesign.in/wp-content/uploads/2022/05/Luxury-Interior-Design-Living-Room.jpg",
    },
    {
      title: "3D Visualization & Conceptual Design",
      description:
        "High-quality 3D renders to help you visualize the space before execution.",
      image:
        "https://images.livspace-cdn.com/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2022-1664872805-f0ijv/mbr-1664872893-qeyQW/mb-op11-1-1-1666273596-52elL.jpg",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Transform your space with our innovative renovation and remodeling services.",
      image:
        "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/bedroom/a-modern-and-chic-bedroom-design-with-an-l-shaped-wardrobe/chic-bedroom.jpg",
    },
    {
      title: "Custom Furniture & Decor",
      description:
        "Unique, handcrafted furniture and décor tailored to your style.",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.-1eeWEBBVvLa0R6tQrmNPgHaFu?w=622&h=481&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: "Vastu Consultation",
      description:
        "Enhance harmony and positive energy in your space through Vastu principles.",
      image:
        "https://cf.ltkcdn.net/interiordesign/images/orig/226437-2117x1416-turquoise-and-tan-living-room.jpg",
    },
  ];
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  const stats = [
    {
      icon: <img src={calender} alt="Experience" className="w-10 h-10" />,
      number: "10+",
      label: "Years of Experience",
    },
    {
      icon: <img src={blueprint} alt="projects" className="w-10 h-10" />,
      number: "700+",
      label: "Projects",
    },
    {
      icon: <img src={location} alt="projects" className="w-10 h-10" />,
      number: "5+",
      label: "Cities Served",
    },
  ];

  ///////////////////////////////////////////////////////////////////////
  return (
    <>
      <main className="overflow-hidden">
        {/* Home Section */}
 <section className="home-section relative mx-auto scale-z-100 text-white min-h-screen flex items-center">
  {/* Background Image */}
  <div className="absolute inset-0 flex justify-center items-center pt-4">
    <div
      className="w-[97%] h-[650px] overflow-hidden"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <img
        src={hero}
        alt="Interior Design"
        className="w-full h-full rounded-xl object-cover"
      />
    </div>
  </div>

  {/* Main Content Grid */}
  <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
    
    {/* Text Section */}
    <div
      className="flex flex-col justify-center space-y-6"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Designing Spaces <br /> That Reflect Your Soul
      </h1>
      <p className="text-gray-200 text-lg md:text-xl">
        Simplicity, elegance, and function crafted uniquely for you.
      </p>
     <button
  className="w-fit px-7 py-2 backdrop-blur-lg bg-white/10 text-white border border-white/20 rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/20 hover:shadow-xl"
>
  Explore Our Work
</button>
    </div>

    {/* Featured Projects */}
    <div
      className="flex flex-col justify-center space-y-6 items-start md:items-end"
      data-aos="fade-left"
      data-aos-delay="300"
    >
      <h2 className="text-xl font-semibold mb-9">Featured Projects</h2>

      <div className="space-y-8">
        {/* Project 1 */}
        <div
          className="bg-white/0 backdrop-blur-md border border-white flex flex-col justify-center rounded-xl px-4 pt-8 pb-4 hover:bg-white/20 h-[130px] transition-all duration-300 ease-in-out w-[130px]"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img
            src={hero1}
            alt="Cozy Urban Apartment"
            className="w-20 h-20 object-cover relative top-[-35px] left-[-30px] border-2 border-white rounded-lg shadow-md"
          />
          <p className="text-[#EBCFAC] text-sm mt-[-20px]">
            Cozy Urban <br /> Apartment
          </p>
        </div>

        {/* Project 2 */}
        <div
          className="bg-white/0 backdrop-blur-md border flex flex-col justify-center border-white rounded-xl px-4 pt-8 pb-4 hover:bg-white/20 transition-all duration-300 ease-in-out h-[130px] w-[130px]"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <img
            src={hero2}
            alt="Luxury Penthouse"
            className="w-20 h-20 object-cover relative top-[-35px] left-[-30px] border-2 border-white rounded-lg shadow-md"
          />
          <p className="text-[#EBCFAC] text-sm mt-[-20px]">
            Luxury Penthouse
          </p>
        </div>

        {/* Link */}
        <a
          href="#"
          className="inline-block text-sm relative left-[73px] text-gray-300 hover:text-white transition"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Know More →
        </a>
      </div>
    </div>
  </div>
</section>


        {/* About Section */}
        <section className="about-section ">
          <div className="w-[90%] mx-auto">
        {/* Heading */}
        <h1 className="text-xl font-bold text-[#C9966B]" data-aos="fade-down">
          About
        </h1>

        <div className="mt-20 flex flex-col lg:flex-row lg:justify-between gap-10 items-end">
          {/* Left Text */}
          <div className="lg:w-1/2 self-end" data-aos="fade-right">
            <h1 className="text-4xl font-bold text-white leading-snug mt-6">
              Aruh Koncepts — <br />
              <span className="text-gray-400">Crafting timeless </span>
              <span className="text-gray-400">
                spaces with <br />
                simplicity.
              </span>
            </h1>

            <div
              className="text-white leading-snug mt-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p>
                Since our beginning, we've helped homes and offices in Hyderabad
                come <br /> alive through thoughtful layouts, warm materials, and
                effortless design
              </p>
            </div>
          </div>

          {/* Right 4-Box Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-[45%]">
            {/* Box 1 */}
            <div
              className="flex flex-col items-start justify-center border border-white/20 p-6 rounded-lg bg-white/10 backdrop-blur-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="w-12 h-12 rounded-full bg-[#C8966B] mb-4 flex items-center justify-center">
                <FaBuffer size={30} className="text-white" />
              </div>
              <h1 className="text-2xl font-semibold text-white">Why We Build</h1>
              <p className="text-gray-400 md:text-xl">
                Our mission is to create spaces that feel as good as they look.
              </p>
            </div>

            {/* Box 2 - Image with Hover Zoom */}
            <div
              className="flex items-center justify-center rounded-lg bg-[#1c2a3a] overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                src={about}
                alt="About"
                className="w-full h-58 object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg hover:cursor-pointer"
              />
            </div>

            {/* Box 3 - Image with Hover Zoom */}
            <div
              className="flex flex-col items-start justify-center rounded-lg bg-[#1c2a3a] overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <img
                src={about1}
                alt="About"
                className="w-full h-58 object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg hover:cursor-pointer"
              />
            </div>

            {/* Box 4 */}
            <div
              className="flex flex-col items-start justify-center border border-white/20 p-6 rounded-lg bg-white/10 backdrop-blur-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="800"
            >
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#C8966B]">
                <FaCity size={30} className="text-white " />
              </div>
              <h1 className="text-2xl font-semibold text-white">
                Built On Craft <br /> And Care
              </h1>
              <p className="text-gray-400 md:text-lg">
                We value craftsmanship and timeless results.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#142241] py-28">
          <div
            className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center border py-8 border-white/20 p-6 rounded-full bg-white/10 backdrop-blur-lg text-white"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-center flex-1 text-left border-r-4 border-[#FFFFFFA3] last:border-none px-6 gap-4 min-h-[120px]"
              >
                {/* Icon */}
                <div className="flex-shrink-0">{stat.icon}</div>

                {/* Text */}
                <div>
                  <h2 className="text-3xl font-bold">{stat.number}</h2>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        </section>

        {/* ////// Niche wala section */}
      <section className="service-section">
  <div className="w-[90%] mx-auto">
    <h1 className="text-xl font-bold text-[#C9966B]" data-aos="fade-up">
      Services
    </h1>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-30 px-4 mt-20">
      
      {/* Left Side - Service List */}
      <div data-aos="fade-right">
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li
              key={index}
              className={`flex justify-between items-center text-3xl p-2 border-b cursor-pointer transition-colors duration-300 ${
                index === activeIndex
                  ? "text-[#1A1A1A] font-semibold"
                  : "text-[#A6A6A6]"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {service.title}

              {/* Arrow inside circle */}
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${
                  index === activeIndex
                    ? "bg-[#C8966B] text-white"
                    : "border border-[#A6A6A6] text-[#A6A6A6]"
                }`}
              >
                <FaArrowRight className="text-sm" />
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Service Content */}
      <div
        className="flex flex-col items-start"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <img
          src={services[activeIndex].image}
          alt={services[activeIndex].title}
          className="rounded-tl-lg rounded-br-lg shadow-md w-[550px] object-cover h-[350px] transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
        />
        <p className="mt-4 text-[#1A1A1A]">
          {services[activeIndex].description}
        </p>
        <div className="w-full max-w-[550px] flex justify-end">
          <button
            onClick={() => navigate("/ourservice")}
            className="mt-6 px-6 py-2 bg-[#C9966B] text-gray-800 rounded-full hover:bg-pink-300 transition"
          >
            Know more →
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* /// Process Section */}
        <section className="process-section">
          <div className="w-[90%] mx-auto">
            <h1
              className="text-xl font-semibold text-[#C9966B]"
              data-aos="fade-down"
            >
              Process
            </h1>


            <div
              className="relative mt-14"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* horizontal line center me */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#C9966B] -translate-y-1/2 animate-grow-line" ></div>

              {/* Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 text-center relative z-10">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center relative"
                  >
                    {/* Title + Desc upar */}
                    <h2 className="text-white font-semibold mb-2">
                      {step.title}
                    </h2>
                    <p className="text-white text-sm mb-4">
                      {step.description}
                    </p>

                    {/* Circle bilkul line ke bich me */}
                    <div className="absolute top-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-[#FFF6DA] border-4 border-[#79553899] rounded-full"></div>
                    </div>

                    {/* Step niche */}
                    <p className="text-gray-300 relative bottom-[30px] mt-16">
                      {step.step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* //// Project Section  */}
       <section className="project-section">
  <div className="w-[90%] mx-auto">
    <h1
      className="text-xl font-bold text-[#C9966B]"
      data-aos="fade-down"
    >
      Projects
    </h1>

    {/* starting div  1st row */}
    <div className="flex flex-col md:flex-row w-full md:gap-6 mt-16 ">
      {/* first box  */}
      <div
        className="w-full md:w-1/2 bg-[#F1E9E1] p-6 sm:p-8 rounded-2xl"
        data-aos="fade-right"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Designing Spaces, <br />
          Crafting Dreams
        </h1>
        <p className="text-gray-800 mb-6 mt-8 sm:mt-12 text-base sm:text-lg">
          From modern minimalism to classic elegance — <br />
          explore how we transform every corner into a story.
        </p>
        <div className="mt-10 sm:mt-14">
          <a
            onClick={() => navigate("/mainproject")}
            className="bg-black text-white rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* second box */}
      <div
        className="w-full md:w-1/2 bg-gray-200 flex items-center justify-center relative overflow-hidden rounded-2xl"
        data-aos="fade-left"
      >
        <img
          src={project1}
          alt=""
          className="w-full h-[400px] object-cover rounded-2xl shadow transform transition-transform duration-500 ease-in-out hover:scale-110"
        />

        {/* White caption box */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[93%] bg-white p-4 rounded-xl shadow-lg">
          <h1 className="text-lg font-bold text-black text-start">
            Willow House
          </h1>
          <p className="text-sm text-[#000000A3] text-start">
            Soft, Serene interiors designed for relaxed family living
          </p>
        </div>
      </div>
    </div>

    {/* 2nd row */}
    <div className="flex flex-col md:flex-row w-full md:gap-6 mt-6 ">
      {/* 1st box */}
      <div
        className="w-full md:w-2/5 bg-gray-200 flex items-center justify-center rounded-2xl overflow-hidden"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src={project2}
          alt=""
          className="object-cover w-full h-[327px] rounded-2xl transform transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* 2nd box */}
      <div
        className="w-full md:w-2/5 bg-gray-200 flex items-center justify-center rounded-2xl overflow-hidden"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img
          src={project2}
          alt=""
          className="object-cover w-full h-[327px] rounded-2xl transform transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* 3rd box (smaller) */}
      <div
        className="w-full md:w-1/5 rounded-2xl p-6 bg-[#142241]"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <h1 className="text-2xl text-[#BC956A] font-bold">
          Let's Design <br /> Together
        </h1>

        <p className="mt-6 text-base text-[#FFFFFF]">
          Reach out to turn <br />
          your ideas into <br />
          elegant, functional <br />
          spaces. We'd love to <br />
          hear from you
        </p>

        <div className="mt-8 sm:mt-8 flex justify-center text-center">
          <button
            href=""
            className="bg-white w-full hover:bg-[#C9966B] hover:text-white text-black rounded-full px-4 sm:px-4 py-1 sm:py-2 text-sm sm:text-base"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* //// FAQ  */}
        <section className="faqs-section">
          <div className="w-[90%] mx-auto">
            <h1
              className="text-xl font-bold text-[#C9966B] mb-18"
              data-aos="fade-up"
            >
              FAQ
            </h1>

            {/* 2 column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column */}
              <div className="space-y-4" data-aos="fade-right">
                {faqs.slice(0, 3).map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className={`rounded-lg shadow-sm transition-colors duration-300 ${isOpen ? "bg-[#FFFAF5]" : "bg-[#F1E9E1]"
                        }`}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center p-4 text-left"
                      >
                        <span className="font-medium">{faq.question}</span>
                        <span className="text-lg">{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && (
                        <div className="p-4  text-gray-800">{faq.answer}</div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right column */}
              <div className="space-y-4" data-aos="fade-left">
                {faqs.slice(3, 6).map((faq, index) => {
                  const actualIndex = index + 3;
                  const isOpen = openIndex === actualIndex;
                  return (
                    <div
                      key={actualIndex}
                      className={`rounded-lg shadow-sm transition-colors duration-300 ${isOpen ? "bg-[#FFFAF5]" : "bg-[#F1E9E1]"
                        }`}
                    >
                      <button
                        onClick={() => toggleFAQ(actualIndex)}
                        className="w-full flex justify-between items-center p-4 text-left"
                      >
                        <span className="font-medium">{faq.question}</span>
                        <span className="text-lg">{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && (
                        <div className="p-4  text-gray-800">{faq.answer}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testinomials  */}
        <section className="testinomials-section py-10 bg-white">
          <div className="w-[90%] mx-auto">
            <div
              ref={scrollRef}
              className="flex overflow-hidden whitespace-nowrap gap-6"
              onMouseEnter={() => setIsPaused(true)} // ✅ hover → pause
              onMouseLeave={() => setIsPaused(false)} // ✅ leave → resume
            >
              {[...testimonials, ...testimonials].map((t, index) => (
                <div
                  key={index}
                  className="bg-[#F8F8F8] p-6 rounded-lg shadow-md border border-gray-200 min-w-[280px] max-w-[300px]"
                >
                  <FaQuoteLeft className="text-2xl text-blue-900 mb-4" />

                  <div className="flex text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6">"{t.text}"</p>

                  <div className="flex items-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* contact  */}
      <section className="contact-section md:pt-28">
  <div className="w-[90%] mx-auto">
    {/* Heading */}
    <h1
      className="text-xl font-bold text-[#C9966B] mb-3"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      Contact Us
    </h1>

    <div className="w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 mt-32 gap-12">
      {/* Left Section */}
      <div
        className="space-y-6 relative bottom-[-172px]"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <p className="text-gray-300 max-w-2xl">
          We’d love to hear from you. Please fill out this form and we’ll reply soon.
        </p>

        {/* Email */}
        <div className="flex items-start gap-3">
          <MdEmail className="text-white text-2xl mt-1" />
          <div className="pl-[2px] ">
            <h3 className="font-semibold text-lg text-white"> Email</h3>
            <div className="relative right-9 mt-2">
              <p className="text-gray-300 text-sm">
                Contact us by email, and we will <br />
                respond shortly.
              </p>
              <a
                href="mailto:aruhkoncepts@gmail.com"
                className="text-[#C8966B] hover:underline"
              >
                aruhkoncepts@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <MdPhone className="text-white text-2xl" />
          <div className="pl-[2px]">
            <h3 className="font-semibold text-white text-lg"> Phone</h3>
            <div className="relative right-9 mt-2">
              <p className="text-gray-300 text-sm">
                Call us on weekdays from 9 AM to 5 PM
              </p>
              <a
                href="tel:+916309892801"
                className="text-[#C8966B] hover:underline"
              >
                +91 63098 92801
              </a>
            </div>
          </div>
        </div>

        <h1
          className="text-8xl font-bold text-white mt-8"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          Let’s Talk!
        </h1>
      </div>

      {/* Right Section - Form */}
      <div
        className="bg-white text-black rounded-4xl relative bottom-[90px] shadow-xl p-8"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h3 className="text-xl font-semibold mb-6">Write us a message</h3>
        <form
          className="space-y-6 flex flex-col items-center"
          onSubmit={contactHandle}
        >
          {/* Name */}
          <div className="w-[90%]">
            <label htmlFor="name" className="block mb-1 font-medium">
              Name*
            </label>
            <input
              type="text"
              placeholder="Enter name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 bg-[#F0E7D8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8966B]"
              required
            />
          </div>

          {/* Email */}
          <div className="w-[90%]">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email*
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 bg-[#F0E7D8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8966B]"
              required
            />
          </div>

          {/* Services */}
          <div className="w-[90%]">
            <label htmlFor="service" className="block mb-1 font-medium">
              Service*
            </label>
            <select
              className="w-full p-3 bg-[#F0E7D8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8966B]"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              required
            >
              <option value="">Select the Service</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="turnkey">
                Turnkey Interior Solutionsg
              </option>
              <option value="3Dvisualization">
                3D Visualization & Conceptual Design
              </option>
              <option value="renovation">
                Renovation & Remodeling
              </option>
              <option value="furniture">
                Custom Furniture & Decor
              </option>
              <option value="vastu">Vastu Consultation</option>
            </select>
          </div>

          {/* Message */}
          <div className="w-[90%]">
            <label htmlFor="message" className="block mb-1 font-medium">
              Message*
            </label>
            <textarea
              placeholder="Enter your message"
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 bg-[#F0E7D8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8966B]"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <div className="flex w-[90%] justify-start">
            <button
              type="submit"
              className="bg-[#C8966B] text-black py-3 px-18 rounded-full font-semibold hover:bg-[#a87752] transition"
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  </div>
</section>

      </main>
      {/* /// Footer */}
    </>
  );
};

export default Home;
