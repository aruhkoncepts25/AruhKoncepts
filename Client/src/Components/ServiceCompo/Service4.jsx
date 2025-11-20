import React from 'react'
import {useState} from 'react';  
import { ArrowRight } from "lucide-react";
import sofa from '../../assets/insideService/sofa.png';
import '../../Style/OurService.css'
import service44 from '../../assets/OurService/service44.jpg'
import ind1 from '../../assets/insideService/include4.1.png'
import ind2 from '../../assets/insideService/include4.2.png'
import ind3 from '../../assets/insideService/include4.3.png'
import ind4 from '../../assets/insideService/include4.4.png'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Api } from '../Api/Api';
import mobileSofa from "../../assets/insideService/mobilesofa.png";
import { useNavigate } from "react-router-dom";
const Service4 = () => {

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
        3D Visualization & Conceptual Design
      </h1>
    </div>

    {/* Banner Image */}
    <div className="mt-6" data-aos="zoom-in" data-aos-delay="100">
      <img
        src={service44}
        alt="3D Visualization & Conceptual Design"
        className="w-full h-[250px]  md:h-[450px] object-cover"
      />
    </div>




     <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Service Overview</h2>
              <p className='mt-5 text-base text-gray-800'>Our 3D visualization and conceptual design service allows clients to experience their space long before the execution stage, offering complete clarity and confidence in every decision. With highly realistic renders, curated concepts, and detailed visual storytelling, we bring ideas to life in a way that is easy to understand and refine. This process not only helps you visualize layouts, materials, and ambiance, but also ensures smarter planning, fewer revisions, and a design direction that feels clear and connected to your vision.</p>
            </div>

            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Our 3D Visualization & Conceptual Design
Services Include</h2>
              <p className='mt-5 text-base text-gray-800'>We craft detailed 3D renders, mood boards, conceptual layouts, color palettes, and material previews to give clients a complete visual understanding of their future space. These curated visuals make it easy to explore multiple design directions, compare options, and clearly understand how each element fits within the overall layout. By previewing materials, textures, and aesthetics beforehand, clients can refine their vision with confidence. This thorough visual process ensures every choice aligns with expectations, reduces uncertainties, and leads to a smoother, more accurate execution on-site.

              </p>

            </div>


            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Why Choose Us</h2>
              <p className='mt-5 text-base text-gray-800'>With strong visualization expertise and a deeply design-focused approach, we help clients clearly understand how their space will look, feel, and function before work begins. Our thoughtfully crafted visuals enable confident decision-making, streamline the design workflow, and enhance accuracy during execution. By turning abstract ideas into clear, tangible representations, we bridge the gap between imagination and reality—ensuring the final outcome remains true to the original vision in every detail.</p>
            </div>
          </div>




  </div>




       <div className="mt-16 w-full relative" data-aos="fade-up" data-aos-delay="200">
          <img src={sofa} alt="" className="w-full hidden md:block h-auto object-cover" />
 {/* Mobile Image */}
  <img 
    src={mobileSofa} 
    alt="" 
    className="w-full h-auto object-cover block md:hidden" 
  />

          <div id='service-text' className="absolute top-[180px] left-[250px] flex flex-col justify-start items-center text-black text-center">
            <h1 className="text-3xl text-center md:text-start md:text-5xl font-medium">
              Let’s talk about <br className='hidden md:block'/> how  <br className='block md:hidden'/>we can help you
            </h1>

            <button onClick={handleClick} className="group mt-6 px-6 py-3 bg-[#C8966B] hover:cursor-pointer md:self-start text-[#142241] rounded-lg font-semibold flex items-center gap-1">
              contact us
              <ArrowRight className="w-4 h-4 relative top-[1px]  -rotate-45" />
            </button>

          </div>
        </div>
</section>
    </>
  )
}

export default Service4

