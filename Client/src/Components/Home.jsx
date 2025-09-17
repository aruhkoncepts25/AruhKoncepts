
import { Api } from "./Api/Api";
import { LazyLoadImage } from "react-lazy-load-image-component";  // LCP Means Big Imahe jo front pe rehti hai
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Style/Home.css";
import { FaBuffer } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import about from "../assets/about1.png";
import about1 from "../assets/about2.jpg";
import calender from "../assets/calender.png";
import blueprint from "../assets/blueprint.png";
import location1 from "../assets/location.png";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { MdPhone } from "react-icons/md";
import hero from "../assets/hero.webp";
import hero11 from "../assets/hero1.1.webp";
import hero12 from "../assets/hero1.2.webp";
import hero13 from "../assets/hero1.3.webp";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/Project/mproject2.jpg";
import mproject3 from "../assets/Project/Mproject-3(2).webp";
import { useLocation } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Service Section Image
import hService1 from "../assets/hService1.jpg"
import hService2 from "../assets/hService2.webp"
import hService3 from "../assets/hService3.jpg"
import hService4 from "../assets/hService4.jpg"
import hService5 from "../assets/hService5.jpg"
import hService6 from "../assets/hService6.jpg"
import hService7 from "../assets/hService7.jpg"



// process animation 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//

const Home = () => {


  const navigate = useNavigate();
  const location = useLocation(); // for contact
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
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
  const contactValidationForm = () => {
    if (formData.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters long");
      return false;
    }
    // email 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    // service
    if (!formData.service) {
      toast.error("Please select a service");
      return false;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters long");
      return false;
    }

    return true;
  }
  const contactHandle = async (e) => {
    e.preventDefault();
    if (!contactValidationForm()) return; // ❌ Invalid hua toh aage nahi jaayega
    try {
      const response = await Api.createContact(
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
      mobileDescription: "Your Vision, \nOur Understanding",
      desktopDescription: "Your Vision, Our Understanding",
      step: "Step 1",
    },
    {
      title: "Concept",
      mobileDescription: "Ideas That Inspire",
      desktopDescription: "Ideas That Inspire",
      step: "Step 2",
    },
    {
      title: "Design",
      mobileDescription: "Plans with Purpose",
      desktopDescription: "Plans with Purpose",
      step: "Step 3",
    },
    {
      title: "Execution",
      mobileDescription: "Flawless Implementation",
      desktopDescription: "Flawless Implementation",
      step: "Step 4",
    },
    {
      title: "Handover",
      mobileDescription: "Our Dream, \nDelivered",
      desktopDescription: "Our Dream, Delivered",
      step: "Step 5",
    },
  ];

  const containerRef = useRef(null);
  const desktopBulbsRef = useRef([]);
  const mobileBulbsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ function for animating bulbs
      const animateBulbs = (bulbs) => {
        gsap.set(bulbs, {
          backgroundColor: "#1f2937",
          boxShadow: "0 0 0px rgba(0,0,0,0)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center",
            end: "+=" + steps.length * 100,
            scrub: true,
            pin: true,
            markers: false,
          },
        });

        bulbs.forEach((bulb) => {
          tl.to(bulb, {
            backgroundColor: "#fde68a",
            boxShadow: "0 0 30px 12px rgba(253, 224, 71, 0.8)",
            duration: 1,
            ease: "power2.inOut",
          });
        });
      };

      // ✅ check screen width
      if (window.innerWidth >= 768 && desktopBulbsRef.current.length > 0) {
        // Desktop
        animateBulbs(desktopBulbsRef.current);
      } else if (window.innerWidth < 768 && mobileBulbsRef.current.length > 0) {
        // Mobile
        animateBulbs(mobileBulbsRef.current);
      }
    }, containerRef);

    return () => ctx.revert();
  }, [steps.length]);



  //////////////////////////////////////////////////////////////////////////////

// HOME section automatic slider 

const backgroundImages=[
hero,hero11,hero12,hero13
]
 const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const imgRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(backgroundImages[0]);
 // Auto-change background index
 useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentBgIndex + 1) % backgroundImages.length;
      const img = new Image();
      img.src = backgroundImages[nextIndex];

      // Once image is loaded, switch and animate
      img.onload = () => {
        setCurrentBgIndex(nextIndex);
        setImageSrc(backgroundImages[nextIndex]);
      };
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [currentBgIndex]);

  // Animate on imageSrc change
  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
  imgRef.current,
  {
    opacity: 0,
    scale: 1.02,
    filter: "blur(4px)",
  },
  {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    duration: 1.6,
    ease: "expo.out",
  }
);

    }
  }, [imageSrc]);
////////////////////////////
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
      name: "Mr. Hari Prasad",
      role: "Jayabheri Trendset",
      text: (
        <>
          “The dedication and passion of <br />Aruh Koncepts shine through in <br />every detail  our space now feels <br />inspiring and truly our own.”
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Mrs. Pavan Surekha",
      role: "Ramky Harmony",
      text: (
        <>
          “Aruh Koncepts turned our house <br />into a home with interiors that feel <br />both modern and timeless. Their <br /> attention to detail was truly <br /> impressive.”
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },

    {
      name: "Mrs. Swathi",
      role: "Ramky harmony",
      text: (
        <>
          “From start to finish, the process <br /> was seamless. The designs were <br />thoughtful, practical, and tailored to <br />our needs.”
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3", // Replace with actual image URL
    },
    {
      name: "Mrs. Ramanjanelyulu",
      role: "Individual Villa",
      text: (
        <>
          “The creativity and precision of <br /> Aruh Koncepts exceeded our <br /> expectations. Every corner of our <br />space feels carefully designed.”
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Mrs. Vijaya",
      role: "Independent Villa",
      text: (
        <>
          “They listened closely to our ideas <br />and transformed them into a space <br /> that is beautiful, functional, and <br />uniquely ours.”
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },

    {
      name: "Mrs. Prashanth",
      role: "Ramky Kosmos",
      text: (
        <>
          “Aruh Koncepts delivered exactly <br /> what we were looking for  warm, <br /> inviting interiors that still look <br /> stylish and professional.”
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3", // Replace with actual image URL
    },
    {
      name: "Mrs. Swathi",
      role: "Aparna Cyber Scape",
      text: (
        <>
          “What we loved most was their <br /> collaborative approach. They kept <br />us involved at every stage and <br />made the whole experience stress- <br />free.”
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Mrs. Madhavi Venkateshwar",
      role: "Marina Skies",
      text: (
        <>
          “Aruh Koncepts reimagined our <br /> space with elegance and <br /> practicality. It’s a design we’ll <br /> cherish for years to come.”
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3",
    },

    {
      name: "Mrs. Shirisha Prashant",
      role: "Independent House",
      text: (
        <>
          “Their designs not only enhanced <br />the look of our home but also <br /> improved how we use the space <br /> every day. Truly transformative <br />work.”
        </>
      ),
      image:
        "https://tse1.mm.bing.net/th/id/OIP.y992YJbARnndaTJ_41Os8AHaHZ?w=719&h=718&rs=1&pid=ImgDetMain&o=7&rm=3", // Replace with actual image URL
    },
    {
      name: "Mr. Raman",
      role: "My Home Avatar",
      text: (
        <>
          “Aruh Koncepts blended creativity <br />with functionality, giving us interiors <br />that feel both sophisticated and <br />comfortable for everyday living.”
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
          Creating warm, personalized spaces that reflect your
         
          lifestyle – from cozy apartments to spacious
        
          villas.
        </>
      ),
      image: hService1,
    },

    {
      title: "Commercial",
      description:(
       <>
       Designing smart, impactful business spaces that boost productivity, reflect <br /> brand identity, and leave a lasting professional impression.
       </>
      ),
      image: hService2,
    },
    {
      title: "Turnkey Interior Solutions",
      description:
       (<>
       Delivering end-to-end turnkey solutions — from concept to completion — ensuring seamless design, execution, and handover of spaces tailored to your vision.
       </>),
      image: hService3,
    },
    {
      title: "3D Visualization & Conceptual Design",
      description:
        (
          <>
          Bringing ideas to life with realistic 3D visuals and thoughtful concepts — <br />helping you see and shape your dream space before it’s built.
          </>
        ),
      image: hService4,
    },
    {
      title: "Renovation & Remodeling",
      description:
       (
        <>
        Transforming existing spaces with fresh ideas and smart design — <br />from modern upgrades to complete makeovers that blend style, comfort,<br /> and functionality.
        </>
       ),
      image: hService5,
    },
    {
      title: "Custom Furniture & Decor",
      description:
       (
        <>
        Crafting unique, functional pieces that bring character and comfort to your <br /> home — designed to suit every style, space, and story.
        </>
       ),
      image: hService6,
    },
    {
      title: "Vastu Consultation",
      description:
        (
          <>
          Harmonizing your home with positive energy — guided by Vastu principles <br />for balance, well-being, and prosperity.
          </>
        ),
      image: hService7,
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
      icon: <img src={location1} alt="projects" className="w-10 h-10" />,
      number: "5+",
      label: "Cities Served",
    },
  ];
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (el) {
        let targetValue = parseInt(el.dataset.value, 10);

        let obj = { val: 0 }; // dummy object for animation
        gsap.to(obj, {
          val: targetValue,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play reset play reset", // 👈 repeat hoga
          },
          onUpdate: () => {
            el.innerText = Math.floor(obj.val) + "+";
          },
        });

      }
    });
  }, []);


  ///////////////////////////////////////////////////////////////////////
  return (
    <>
      <main className="overflow-hidden">
        {/* Home Section */}

        <section id="home" className="home-section relative mx-auto text-white min-h-[400px] md:min-h-screen scale-z-100 flex flex-col justify-start sm:justify-center">
          {/* desktop  */}

          {/* Background Image */}
          <div className="hidden w-full relative sm:absolute inset-0 md:flex justify-center items-center px-2 pt-4 z-0">
            <div
              className="relative w-[97%] h-[300px] sm:w-[97%] sm:h-[650px] overflow-hidden rounded-xl shadow-xl mx-auto"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
               ref={imgRef}
                 src={imageSrc}
                alt="Interior Design"
                className="w-full h-full object-cover"
                loading="eager" // preload for LCP
                fetchpriority="high" // ✅ Helps browser prioritize this image
              />
              <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="container mx-auto relative z-10 hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 pt-[-20px] sm:pt-0">
            {/* Text Section */}
            <div
              className="flex flex-col justify-center space-y-6"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Designing Spaces <br /> That Reflect Your Soul
              </h1>
              <p className="hidden md:block text-gray-200 text-lg md:text-xl">
                Simplicity, elegance, and function crafted uniquely for you.
              </p>
              <button
                onClick={() => navigate("/aboutus")}
                className="w-fit px-7 py-2 backdrop-blur-lg bg-white/10 cursor-pointer text-white border border-white/20 rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/20 hover:shadow-xl"
              >
                Explore
              </button>
            </div>
            {/* Featured Projects */}
            <div
              className="hidden md:flex flex-col justify-center space-y-6 items-start md:items-end"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h2 className="text-xl font-semibold mb-9">Featured Projects</h2>

              <div className="space-y-8">
                {/* Project 1 */}

                <Link
                  to="/featuredProject"
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
                    Residencial Project
                  </p>
                </Link>

                {/* Project 2 */}
                <Link
                to="/featuredProject2"
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
                    Commercial Project
                  </p>
                </Link>

                {/* Link */}
                <button
                  onClick={() => navigate("/projectKnowMore")}
                  className="inline-block text-sm cursor-pointer text-gray-300 hover:text-white transition"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  Know More →
                </button>
              </div>
            </div>
          </div>
          {/* //// */}


          {/* /// Mobile Home Section */}
      <div className="w-full relative mx-auto md:hidden px-4 py-2" data-aos="fade-up" data-aos-duration="1000">
  {/* Image + overlay wrapper */}
  <div className="relative rounded-2xl overflow-hidden h-[320px]" data-aos="zoom-in" data-aos-delay="300">
    <img
      ref={imgRef}
      src={imageSrc}
      alt="Interior Design"
      className="w-full h-full object-cover"
      loading="eager"
      fetchpriority="high"
    />
    {/* Overlay only on image */}
    <div className="absolute inset-0 bg-black opacity-40 pointer-events-none" />
  </div>

  {/* Content over the image, aligned to bottom */}
  <div className="absolute bottom-6 left-0 right-0 z-10 px-6" data-aos="fade-left" data-aos-delay="500">
    <div className="flex flex-col items-start gap-1 text-start space-y-4">
      <h1 className="text-2xl font-semibold text-white leading-snug">
        Designing Spaces That <br /> Reflect Your Soul
      </h1>
      <button
        onClick={() => navigate("/aboutus")}
        className="px-7 py-2 backdrop-blur-lg bg-white/10 cursor-pointer text-white border border-white/20 rounded-2xl shadow-md"
      >
        Explore
      </button>
    </div>
  </div>
</div>




        </section>



        {/* About Section */}
        <section className="about-section ">
          <div className="w-[90%] mx-auto">
            {/* Heading */}
            <h1
              className="text-xl font-bold text-[#C9966B]"
              data-aos="fade-down"
            >
              About
            </h1>

            <div className="mt-2 sm:mt-6 md:mt-4 lg:mt-20 flex flex-col lg:flex-row ...">
              {/* Left Text */}
              <div className="lg:w-1/2 self-end" data-aos="fade-right">
                {/* <h1 className="md:text-4xl sm:text-4xl font-bold text-white leading-snug mt-6"> */}
                <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug mt-6">
                  Aruh Koncepts — <br />
                  <span className="text-gray-400 font-medium md:font-bold">
                    Crafting timeless{" "}
                  </span>
                  <span className="text-gray-400 font-medium md:font-bold">
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
                    Since our beginning, we've helped homes and offices in Hyderabad come alive through thoughtful layouts, warm materials, and effortless design.
                  </p>
                </div>
              </div>

              {/* Right 4-Box Grid */}
              <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 gap-6 lg:w-[45%]">
                {/* Box 1 */}
                <div
                  className="flex flex-col items-start h-[300px] sm:h-auto justify-between md:justify-center border border-white/20 p-6 rounded-3xl sm:rounded-lg bg-white/10 backdrop-blur-lg shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="w-16 h-16 sm:w-12 sm:h-12 rounded-full bg-[#C8966B] mb-4 flex items-center justify-center">
                    <FaBuffer size={30} className="text-white" />
                  </div>
                  <div className="relative top-[-30px] sm:relative sm:top-0">
                    <h1 className="text-2xl font-semibold text-white ">
                      Why We Build
                    </h1>
                    <p className="text-gray-400 md:text-xl mt-4 sm:mt-0">
                      Our mission is to create spaces that feel as good as they
                      look.
                    </p>
                  </div>
                </div>

                {/* Box 2 - Image with Hover Zoom */}
                <div
                  className="flex items-center justify-center rounded-3xl sm:rounded-lg bg-[#1c2a3a] overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <LazyLoadImage
                    src={about}
                    alt="About"

                    className="w-full sm:h-58 h-68 object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg hover:cursor-pointer"
                  />
                </div>

                {/* Box 3 - Image with Hover Zoom */}
                <div
                  className="flex flex-col items-start justify-center rounded-3xl sm:rounded-lg bg-[#1c2a3a] order-2 sm:order-1 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <LazyLoadImage
                    src={about1}

                    alt="About"
                    className="w-full sm:h-58 h-68 object-cover rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg hover:cursor-pointer"
                  />
                </div>

                {/* Box 4 */}
                <div
                  className="flex flex-col items-start h-[300px] sm:h-auto justify-between md:justify-center border border-white/20 p-6 order-1 sm:order-2  rounded-3xl sm:rounded-lg bg-white/10 backdrop-blur-lg shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >
                  <div className="mb-4 sm:w-12 sm:h-12 w-16 h-16 flex items-center justify-center rounded-full bg-[#C8966B]">
                    <FaCity size={30} className="text-white " />
                  </div>
                  <div className="relative top-[-30px] sm:relative sm:top-0">
                    <h1 className="text-2xl font-semibold text-white">
                      Built On Craft <br /> And Care
                    </h1>
                    <p className="text-gray-400 md:text-lg ">
                      We value craftsmanship and timeless results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#142241] mt-5 md:mt-24">

              <div
                className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-stretch border border-white/20 sm:p-2 md:p-6 rounded-2xl md:rounded-full bg-white/10 backdrop-blur-lg text-white"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`
              flex flex-row items-center md:justify-center flex-1 text-left 
              px-6 md:px-4 mx-9 md:mx-0 gap-4 min-h-[120px]
              border-white/80
              ${index !== stats.length - 1 ? "border-b-4 md:border-b-0 md:border-r-4" : ""}
            `}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">{stat.icon}</div>

                    {/* Text */}
                    <div>
                      <h2
                        ref={(el) => (refs.current[index] = el)}
                        data-value={stat.number}
                        className="text-3xl font-bold"
                      >
                        0+
                      </h2>
                      <p className="text-gray-300">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ////// Service section */}
        <section className="service-section">
          <div className="w-[90%] mx-auto">
            <h1 className="text-xl font-bold text-[#C9966B]" data-aos="fade-up">
              Services
            </h1>

            {/* Grid Layout for Desktop */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-30 mt-6 md:mt-20">
              {/* Left Side Desktop - Service List */}
              <div data-aos="fade-right">
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li className="space-y-2" key={index}>
                      <div
                        className={`flex justify-between items-center text-xl md:text-3xl p-2 lg:border-b cursor-pointer transition-colors duration-300 ${index === activeIndex
                          ? "text-[#1A1A1A] font-semibold"
                          : "text-[#A6A6A6]"
                          }
                `}
                        onClick={() =>
                          setActiveIndex(index === activeIndex ? null : index)
                        }
                      >
                        {service.title}

                        {/* Arrow icon */}
                        <span
                          className={`
                    flex items-center justify-center w-8 h-8 rounded-full 
                    transition-transform duration-300
                    ${index === activeIndex
                              ? "bg-[#C8966B] text-white "
                              : "border-none lg:border lg:border-[#A6A6A6] text-[#A6A6A6]"
                            }
                  `}
                        >
                          {/* Arrow Right for Large Screens */}
                          <FaArrowRight className="text-sm hidden lg:block" />

                          {/* Arrow Down for Mobile */}
                          <FaArrowDown className="text-sm block lg:hidden" />
                        </span>
                      </div>

                      {/* Mobile Only - Show content below title when active */}
                      {index === activeIndex && (
                        <div
                          className="lg:hidden mt-2 mb-8 pl-2 transition-all duration-300"
                          data-aos="fade-up"
                        >
                          <LazyLoadImage
                            src={service.image}
                            alt={service.title}

                            className="rounded-tl-lg rounded-br-lg shadow-md w-full object-cover h-[200px] 
                            transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
                          />
                          <p className="mt-4 text-[#1A1A1A]">
                            {service.description}
                          </p>
                          <div className="w-full flex justify-end">
                            <button
                              onClick={() => navigate("/ourservice")}
                              className=" mt-1 lg:mt-6 lg:px-6 lg:py-2 px-4 py-1 text-xs bg-[#C9966B] text-gray-800 rounded-full 
                                hover:bg-[#142241] hover:text-white transition"
                            >
                              Know more →
                            </button>
                          </div>
                          <div className="border-b mt-6 lg:hidden" />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Side Desktop - Service Content */}
              <div
                className="hidden lg:flex flex-col items-start"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  loading="eager" // Preload main image for faster LCP
                  className="rounded-tl-lg rounded-br-lg shadow-md w-[550px] object-cover h-[350px] transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
                />
                <p className="mt-4 text-[#1A1A1A]">
                  {services[activeIndex].description}
                </p>
                <div className="w-full max-w-[550px] flex justify-end">
                  <button
                    onClick={() => navigate("/ourservice")}
                    className="mt-6 px-6 py-2 bg-[#C9966B] text-gray-800 rounded-full hover:bg-[#142241] hover:text-white transition"
                  >
                    Know more →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /// Process Section */}
        <section className="process-section" ref={containerRef}>
          <div className="w-[90%] mx-auto ">
            <h1
              className="text-xl font-semibold text-[#C9966B]"
              data-aos="fade-down"
            >
              Process
            </h1>

            {/* for desktop and tablet  */}
            <div
              className="hidden md:block relative mt-14"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* horizontal line center me */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#C9966B] -translate-y-1/2 animate-grow-line"></div>

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
                      {step.desktopDescription}
                    </p>

                    {/* Circle bilkul line ke bich me */}
                    <div className="absolute top-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-[#FFF6DA] border-4 border-[#79553899] rounded-full" ref={(el) => (desktopBulbsRef.current[index] = el)}></div>
                    </div>

                    {/* Step niche */}
                    <p className="text-gray-300 relative bottom-[30px] mt-16">
                      {step.step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* // For Mobile  */}
            <div
              className="block md:hidden relative mt-14"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#C9966B] sm:hidden z-0"></div>

              <div className="flex flex-col gap-12 sm:grid sm:grid-cols-5 text-left relative z-10">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex sm:flex-col items-start sm:items-center mb-6"
                  >

                    <p className="text-gray-300 text-sm w-16 text-right relative left-[45px] sm:order-3 sm:mt-4 sm:text-center">
                      {step.step}
                    </p>


                    <div className="absolute left-1/2 transform -translate-x-1/2 sm:static sm:translate-x-0">
                      <div className="w-6 h-6 bg-[#FFF6DA] border-4 border-[#79553899] rounded-full z-10" ref={(el) => (mobileBulbsRef.current[index] = el)}></div>
                    </div>


                    <div className="pl-9 sm:pl-0 sm:mt-4 sm:text-end absolute left-1/2  text-white">
                      <h2 className="font-semibold mb-1">{step.title}</h2>
                      <div className="text-sm text-white block sm:hidden">
                        {step.mobileDescription.split("\n").map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>




          </div>
        </section>


        {/* //// Project Section  */}
        <section className="project-section bg-white">
          <div className="w-[90%] mx-auto mt-6 md:mt-0">
            <h1
              className="text-xl font-bold text-[#C9966B]"
              data-aos="fade-down"
            >
              Projects
            </h1>

            {/* 1st row */}
            <div className="flex flex-col lg:flex-row w-full lg:gap-6 mt-6 lg:mt-16">
              {/* Left Box */}
              <div
                className="w-full lg:w-1/2 bg-[#F1E9E1] p-6 sm:p-8 rounded-2xl"
                data-aos="fade-right"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold lg:mb-4 leading-snug">
                  Designing Spaces, <br />
                  Crafting Dreams
                </h1>
                <p className="text-gray-800 mb-6 mt-6 sm:mt-10 text-base sm:text-lg">
                  From modern minimalism to classic elegance —{" "}
                  <br className="hidden lg:inline" />
                  explore how we transform every corner into a story.
                </p>
                <div className="mt-8 sm:mt-12">
                  <button
                    onClick={() => navigate("/mainproject")}
                    className="hover:bg-[#BC956A] text-white bg-[#142241] cursor-pointer rounded-full px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                  >
                    View Projects
                  </button>
                </div>
              </div>

              {/* Right Box */}
              <div
                className="w-full lg:w-1/2 bg-gray-200 flex items-center justify-center relative overflow-hidden rounded-2xl mt-6 lg:mt-0"
                data-aos="fade-left"
              >
                <img
                  src={project1}
                  alt="Project"
                  className="w-full h-[300px] sm:h-[400px] object-cover rounded-2xl shadow transform transition-transform duration-500 ease-in-out hover:scale-110"
                />

                {/* Caption Box */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[93%] bg-white p-4 rounded-xl shadow-lg">
                  <h1 className="text-lg font-bold text-black text-start">
                    Residencial Interior
                  </h1>
                  <p className="text-sm text-[#000000A3] text-start">
                    Soft, Serene interiors designed for relaxed family living
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd row */}
            <div className="flex flex-col lg:flex-row w-full lg:gap-6 mt-6">
              {/* First Image Box */}
              <div
                className="w-full lg:w-2/5 bg-gray-200 flex items-center justify-center rounded-2xl overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src={mproject3}
                  alt="Project"
                  loading="lazy"               // Lazy load non-LCP images
                  fetchpriority="high"         // LCP image ke liye high priority

                  className="object-cover w-full h-[250px] sm:h-[327px] rounded-2xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              {/* Second Image Box */}
              <div
                className="w-full lg:w-2/5 bg-gray-200 flex items-center justify-center rounded-2xl overflow-hidden mt-6 lg:mt-0"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src={project2}
                  alt="Project"
                  loading="lazy"               // Lazy load non-LCP images
                  fetchpriority="high"         // LCP image ke liye high priority

                  className="object-cover w-full h-[250px] sm:h-[327px] rounded-2xl transform transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              {/* Contact CTA Box */}
              <div
                className="w-full lg:w-1/5 rounded-2xl p-6 bg-[#142241] mt-6 lg:mt-0"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h1 className="text-2xl text-[#BC956A] font-bold">
                  Let's Design{" "}
                  <span className="hidden lg:inline">
                    <br />
                  </span>
                  <span className="inline lg:hidden"> </span>
                  Together
                </h1>

                <p className="mt-6 text-base text-white">
                  Reach out to turn{" "}
                  <span className="hidden lg:inline">
                    <br />
                  </span>
                  <span className="inline lg:hidden"> </span>
                  your ideas into{" "}
                  <span className="hidden lg:inline">
                    <br />
                  </span>
                  <span className="inline lg:hidden"> </span>
                  elegant, functional{" "}
                  <span className="hidden lg:inline">
                    <br />
                  </span>
                  <span className="inline lg:hidden"> </span>
                  spaces. We'd love to{" "}
                  <span className="hidden lg:inline">
                    <br />
                  </span>
                  <span className="inline lg:hidden"> </span>
                  hear from you
                </p>

                <div className="mt-8 flex justify-center text-center">
                  <a
                    href="#contact"
                    className="bg-white w-full text-center hover:bg-[#C9966B] hover:text-white text-black rounded-full px-4 py-2 text-sm sm:text-base"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* //// FAQ  */}
        <section className="faqs-section">
          <div className="w-[90%] mx-auto mt-8 md:mt-0">
            <h1
              className="text-xl font-bold text-[#C9966B] mb-6 md:mb-18"
              data-aos="fade-up"
            >
              FAQs
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
                        <div className="p-4 text-gray-800">{faq.answer}</div>
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
        <section className="testinomials-section py-10  bg-white">
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
                    {/* <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full mr-4"
                    /> */}
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
        <section id="contact" className="contact-section md:pt-28  ">
          <div className="w-[90%] mx-auto">
            {/* Heading */}
            <h1
              className="text-xl font-bold text-[#C9966B] mb-3"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Contact Us
            </h1>

            <div className="w-[100%] mx-auto grid grid-cols-1 md:grid-cols-2 mt-2 lg:mt-32 gap-4 md:gap-5 lg:gap-12">
              {/* Left Section */}
              <div
                className="space-y-6 lg:mt-[170px]"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <p className="text-gray-300 max-w-2xl">
                  We’d love to hear from you. Please fill out this form and
                  we’ll reply soon.
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
                        className="text-[#C8966B] hover:underline cursor-pointer"
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
                        className="text-[#C8966B] hover:underline cursor-pointer"
                      >
                        +91 63098 92801
                      </a>
                    </div>
                  </div>
                </div>

                <h1
                  className="text-4xl lg:text-8xl font-medium lg:font-bold text-white mt-8"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                >
                  Let’s Talk!
                </h1>
              </div>

              {/* Right Section - Form */}
              <div
                className="bg-white text-black rounded-4xl relative lg:bottom-[90px] shadow-xl p-6 lg:p-8"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <h3 className="text-xl font-semibold mb-2 lg:mb-6">
                  Write us a message
                </h3>
                <form
                  className="space-y-2 lg:space-y-6 flex flex-col items-center"
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
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
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
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full p-3 bg-[#F0E7D8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8966B]"
                      required
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <div className="flex w-[90%] justify-start">
                    <button
                      type="submit"
                      className="bg-[#C8966B] cursor-pointer text-black py-2 px-12 lg:py-3 lg:px-18 rounded-full font-semibold hover:text-white hover:bg-[#142241] transition"
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
