import React from 'react'
import {useState} from 'react';
import { ArrowRight } from "lucide-react";
import sofa from '../../assets/insideService/sofa.png';
import '../../Style/OurService.css'
import service55 from "../../assets/OurService/service55.jpg"
import ind1 from "../../assets/insideService/include5.1.png"
import ind2 from "../../assets/insideService/include5.2.png"
import ind3 from "../../assets/insideService/include5.3.png"
import ind4 from "../../assets/insideService/include5.4.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Api } from '../Api/Api';
import { useNavigate } from "react-router-dom";
const Service5 = () => {

 const navigate=useNavigate();
  const handleClick = () => {
    navigate("/", { state: { scrollToBooking: true } });
  };

  return (
    <>
    <section className="section1 w-full py-12 px-6 md:px-16 lg:px-28">
  <div className='w-[90%] mx-auto md:px-4'>

    {/* Heading */}
    <div data-aos="fade-up">
      <p className="text-xl font-semibold text-[#C8966B]">Services</p>
      <h1 className="text-2xl md:text-3xl font-semibold mt-6">
        Renovation & Remodeling
      </h1>
    </div>

    {/* Banner Image */}
    <div className="mt-6" data-aos="zoom-in" data-aos-delay="100">
      <img
        src={service55}
        alt="Renovation & Remodeling"
        className="w-full h-[250px]  md:h-[450px] object-cover"
      />
    </div>


     <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Service Overview</h2>
              <p className='mt-5 text-base text-gray-800'>Our renovation and remodeling service breathes new life into existing spaces by integrating modern design, enhanced functionality, and refreshed aesthetics. Whether it’s a single room upgrade or a complete home transformation, we begin with a thorough evaluation of the current layout, structure, and usability. This allows us to introduce meaningful improvements that elevate comfort, optimize space, and bring a renewed sense of style. We focus on thoughtful enhancements that make your environment feel updated, cohesive, and perfectly aligned with your lifestyle.</p>
            </div>

            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Our Renovation & Remodeling  Solutions Services Include</h2>
              <p className='mt-5 text-base text-gray-800'>We provide comprehensive renovation solutions including layout redesign, structural modifications, material upgrades, lighting and color refreshes, custom carpentry, and décor enhancements. Our team approaches each space with precision and sensitivity, ensuring older interiors are reimagined thoughtfully while preserving their original charm where it adds value. Every upgrade is planned to enhance flow, functionality, and aesthetics. The result is a space that feels smoother to live in, more efficient in use, and significantly more visually appealing.

              </p>

            </div>


            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Why Choose Us</h2>
              <p className='mt-5 text-base text-gray-800'>We combine creativity, technical knowledge, and a strong understanding of space transformation to deliver renovations that truly elevate the way you live. Our approach is highly detail-oriented, ensuring that every enhancement—big or small—adds meaningful value and improves everyday usability. With clear communication, organized planning, and a well-structured execution process, we make the remodeling experience smooth, efficient, and genuinely rewarding from start to finish.</p>
            </div>
          </div>



  </div>


   <div className="mt-16 w-full relative" data-aos="fade-up" data-aos-delay="200">
          <img src={sofa} alt="" className="w-full h-auto object-cover" />

          <div className="absolute top-[180px] left-[250px] flex flex-col justify-start items-center text-black text-center">
            <h1 className="text-3xl md:text-5xl font-medium">
              Let’s talk about <br /> how can help you
            </h1>

            <button onClick={handleClick} className="group mt-6 px-6 py-3 bg-[#C8966B] hover:cursor-pointer self-start text-[#142241] rounded-lg font-semibold flex items-center gap-1">
              contact us
              <ArrowRight className="w-4 h-4 relative top-[1px]  -rotate-45" />
            </button>

          </div>
        </div>
</section>

  
    </>
  )
}

export default Service5


