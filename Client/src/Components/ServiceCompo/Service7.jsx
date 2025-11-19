import { ArrowRight } from "lucide-react";
import sofa from '../../assets/insideService/sofa.png';

import '../../Style/OurService.css'
import service66 from "../../assets/OurService/service77.jpg"
import ind1 from "../../assets/insideService/include7.1.png"
import ind2 from "../../assets/insideService/include7.2.png"
import ind3 from "../../assets/insideService/include7.3.png"
import ind4 from "../../assets/insideService/include7.4.png"
import ind5 from "../../assets/insideService/include7.5.png"

import 'react-toastify/dist/ReactToastify.css';
import { Api } from '../Api/Api';
import { useNavigate } from "react-router-dom";


const Service7 = () => {
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
        Vastu Consultation
      </h1>
    </div>

    {/* Banner Image */}
    <div className="mt-6" data-aos="zoom-in" data-aos-delay="100">
      <img
        src={service66}
        alt="Vastu Consultation"
        className="w-full h-[250px] md:h-[450px] object-cover"
      />
    </div>

<div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Service Overview</h2>
              <p className='mt-5 text-base text-gray-800'>Our Vastu consultation service thoughtfully blends traditional Vastu principles with contemporary design to create spaces that feel balanced, harmonious, and energetically positive. We guide clients in aligning their interiors with Vastu recommendations while ensuring the overall aesthetics, comfort, and functionality remain completely intact. This balanced approach helps create environments that support well-being and feel naturally aligned with the client’s lifestyle and vision.</p>
            </div>

            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Our Vastu Consultation  Solutions Services Include</h2>
              <p className='mt-5 text-base text-gray-800'>We carefully analyze spatial layouts, recommend ideal directional placements, suggest color and décor alignments, and provide design-friendly Vastu solutions that blend effortlessly with modern interiors. Our approach adapts ancient principles to contemporary lifestyles, making them practical, easy to implement, and suitable for any home or commercial environment. By integrating Vastu in a subtle and thoughtful way, we help create spaces that feel balanced, supportive, and naturally harmonious.
              </p>

            </div>


            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Why Choose Us</h2>
              <p className='mt-5 text-base text-gray-800'>We offer practical, design-conscious Vastu guidance that enhances the overall feel, flow, and balance of your environment. By blending intuitive spatial planning with aesthetic awareness, we ensure every recommendation supports both positive energy and visual harmony. Our balanced approach creates spaces that feel centered, peaceful, and naturally aligned—without disrupting modern design preferences or functional needs.</p>
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

export default Service7


