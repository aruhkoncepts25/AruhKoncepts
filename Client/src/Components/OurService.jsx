
import { ArrowRight } from "lucide-react";
import '../Style/OurService.css'
// Service Image
import service1 from "../assets/OurService/service-1.png"
import service2 from "../assets/OurService/service-2.png"
import service3 from "../assets/OurService/service-3.png"
import service4 from "../assets/OurService/service-4.jpg"
import service5 from "../assets/OurService/service-5.jpg"
import service6 from "../assets/OurService/service-6.png"
import service7 from "../assets/OurService/service-7.jpg"
// Icon Image 
import Icon1 from '../assets/OurService/icon1.svg?react';
import Icon2 from '../assets/OurService/icon2.svg?react';
import Icon3 from '../assets/OurService/icon3.svg?react';
import Icon4 from '../assets/OurService/icon4.svg?react';
import Icon5 from '../assets/OurService/icon5.svg?react';
import Icon6 from '../assets/OurService/icon6.svg?react';
import Icon7 from '../assets/OurService/icon7.svg?react';

// hover icon image 
import hIcon1 from '../assets/OurService/hIcon1.svg?react';
import hIcon2 from '../assets/OurService/hIcon2.svg?react';
import hIcon3 from '../assets/OurService/hIcon3.svg?react';
import hIcon4 from '../assets/OurService/hIcon4.svg?react';
import hIcon5 from '../assets/OurService/hIcon5.svg?react';
import hIcon6 from '../assets/OurService/hIcon6.svg?react';
import hIcon7 from '../assets/OurService/hIcon7.svg?react';




// vector icon
import vector from '../assets/OurService/Vector44.png'
import { useNavigate } from "react-router-dom";

const OurService = () => {
    const navigate = useNavigate()

    const handleViewServiceClick = (path) => {
        navigate(path);
    };
    const services = [
        {
            id: 1,
            title: "Residential Interior Design",
            description:
                "We design comfortable, stylish, and highly functional living spaces that reflect your personality and fit seamlessly into your lifestyle. Whether it’s a new home or a makeover, our goal is to create elegant environments that feel both timeless and personal.",
            image: service1,
            icon: Icon1,
            hoverIcon: hIcon1,
            link: "/service/residential",
        },
        {
            id: 2,
            title: "Commercial Interior Design",
            description:
                "We create smart and visually engaging interiors for business spaces that support productivity, reinforce brand identity, and deliver a professional impression. Each design is tailored to the specific function and audience of the commercial setting.",
            image: service2,
            icon: Icon2,
            hoverIcon: hIcon2,
            link: "/service/commercial",
        },
        {
            id: 3,
            title: "TurnKey Interior  Solutions",
            description: "From concept to completion, we take complete responsibility for delivering ready-to-use interior spaces. Our turnkey service ensures stress-free experience through full-cycle project management and seamless execution.",
            image: service3,
            icon: Icon3,
            hoverIcon: hIcon3,
            link: "/service/turnkey"
        },
        {
            id: 4,
            title: "3D Visualization & Conceptual Design",
            description: "Before execution, we help you visualize your space with precision using 3D models and detailed concepts. This service allows you topreview your future interiors and make informed designdecisions.",
            image: service4,
            icon: Icon4,
            hoverIcon: hIcon4,
            link: "/service/visualization"
        },
        {
            id: 5,
            title: "Renovation & Remodeling",
            description: "We refresh and transform existing interiors by rethinking layouts, updating materials, and improving aesthetics. Whether it's a single room or a full property, we breathe new life into outdated spaces.",
            image: service5,
            icon: Icon5,
            hoverIcon: hIcon5,
            link: "/service/renovation"
        },
        {
            id: 6,
            title: "Custom Furniture & Decor",
            description: "We craft furniture and décor that is tailor-made to your space, preferences, and functionality. Our custom pieces enhance visual appeal and serve apractical purpose, all while staying true to the design vision.",
            image: service6,
            icon: Icon6,
            hoverIcon: hIcon6,
            link: "/service/furniture"
        },
        {
            id: 7,
            title: "Vastu Consultation",
            description: "We design with intent, aligning interiors with Vastu principles to enhance the energy flow, positivity, and balance in your space. Our approach blends traditional wisdom with contemporary aesthetics for well-being and harmony.",
            image: service7,
            icon: Icon7,
            hoverIcon: hIcon7,
            link: "/service/vastu"
        },
    ];
    return (
        <>
            <section className="service w-full py-6 md:py-12">
  <div className="w-[80%] mx-auto flex flex-col gap-6 md:gap-16">
    <h1 className="text-xl font-semibold text-[#C8966B]">Our Services</h1>

    {/* Grid for 2 cards per row */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {services.map((service) => (
    <div
      key={service.id}
      className="relative group shadow-md overflow-hidden rounded-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75"
        />

        {/* Overlay Button on Hover */}
        <div className="absolute bottom-2 left-0 w-full px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Overlay behind button */}
          {/* <div className="absolute inset-0 bg-black/30 rounded-lg pointer-events-none"></div> */}

          {/* Button */}
          <button
            onClick={() => handleViewServiceClick(service.link)}
            className="relative w-full flex justify-between items-center border-b-2 border-white text-white font-medium text-lg pb-1"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 -rotate-45" />
          </button>
        </div>
      </div>

      {/* Description below image */}
      <div className="p-4 bg-white">
        <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  ))}
</div>


  </div>
</section>

        </>
    )
}

export default OurService
