import React, { useState } from 'react';
import '../../Style/OurService.css';
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import service11 from "../../assets/OurService/service1.1.png";
import ind1 from '../../assets/insideService/include1.png';
import ind2 from '../../assets/insideService/include2.png';
import ind3 from '../../assets/insideService/include3.png';
import ind4 from '../../assets/insideService/include4.png';
import ind5 from '../../assets/insideService/include5.png';
import ind6 from '../../assets/insideService/include6.png';
import ind7 from '../../assets/insideService/include7.png';
import sofa from "../../assets/insideService/sofa.png";
import mobileSofa from "../../assets/insideService/mobilesofa.png";


import 'react-toastify/dist/ReactToastify.css';


const Service1 = () => {
  const navigate=useNavigate();
  const handleClick = () => {
    navigate("/", { state: { scrollToBooking: true } });
  };


  return (
    <>
      {/* Services Section */}
      <section className="section1 w-full md:px-16 lg:px-28">
        <div className="w-[90%] mx-auto px-0 md:px-4">

          <div data-aos="fade-up">
            <p className="text-xl font-semibold text-[#C8966B]">Services</p>
            <h1 className="text-2xl md:text-3xl font-semibold mt-6">Residential Interior Design</h1>
          </div>

          <div className="mt-6" data-aos="zoom-in">
            <img src={service11} alt="Residential Interior" className="w-full h-[250px] md:h-[450px] object-cover" />
          </div>

          <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Service Overview</h2>
            <p className='mt-5 text-base text-gray-800'>With a focus on thoughtful planning, creative design, and seamless execution, our residential interior design service transforms houses into meaningful homes. We work closely with clients to understand their lifestyle, vision, and personal style, bringing spaces to life with comfort, elegance, and functionality. Every project is approached with care and precision, ensuring interiors that not only look beautiful but also support everyday living effortlessly.</p>
          </div>

          <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Our Residential Design Services Include</h2>
            <p className='mt-5 text-base text-gray-800'>Our residential interior services cover a holistic approach to home design, guiding every step from concept to completion. We provide tailored solutions that reflect the individuality of each client and the unique character of every space.

            </p>
            <p className='mt-5 text-base text-gray-800'>We offer complete spatial planning, material and color selection, lighting design, furniture layout, and décor styling. Whether you're designing a new home or refreshing an existing one, we ensure each area feels cohesive, practical, and aesthetically balanced. With a blend of creativity and technical expertise, our team delivers environments that are warm, inviting, and truly reflective of your personality.</p>

          </div>


           <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Why Choose Us for Your Home</h2>
            <p className='mt-5 text-base text-gray-800'>Choosing us means partnering with a team that listens deeply, understands your needs, and translates your ideas into a home that feels truly yours. Our commitment to quality, transparency, and thoughtful design ensures a smooth and enjoyable process from start to finish. What sets us apart is our attention to detail, personalized approach, and dedication to creating spaces that bring comfort, harmony, and lasting value to your everyday life.</p>
          </div>

        </div>

<div className="mt-16 w-full relative" data-aos="fade-up" data-aos-delay="200">
<img 
    src={sofa} 
    alt="" 
    className="w-full h-auto object-cover hidden md:block" 
  />

  {/* Mobile Image */}
  <img 
    src={mobileSofa} 
    alt="" 
    className="w-full h-auto object-cover block md:hidden" 
  />

  <div id='service-text' className="absolute top-[180px] left-[250px] flex flex-col justify-start items-center text-black text-center">
    <h1 className="text-3xl text-center md:text-start md:text-5xl font-medium">
      Let’s talk about <br className='hidden md:block'/> how  <br className='block md:hidden'/> we can help you
    </h1>

   <button className="group mt-6 px-6 py-3 bg-[#C8966B] hover:cursor-pointer md:self-start text-[#142241] rounded-lg font-semibold flex items-center gap-1" onClick={handleClick}>
  contact us  
  <ArrowRight className="w-4 h-4 relative top-[1px]  -rotate-45" />
</button>

  </div>
</div>


      </section> 


    </>
  );
};

export default Service1;
