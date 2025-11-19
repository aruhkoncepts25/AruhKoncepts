import { ArrowRight } from "lucide-react";
import sofa from '../../assets/insideService/sofa.png';
import '../../Style/OurService.css'
import { useState } from 'react'
import service66 from "../../assets/OurService/service66.png"
import ind1 from "../../assets/insideService/include6.1.png"
import ind2 from "../../assets/insideService/include6.2.png"
import ind3 from "../../assets/insideService/include6.3.png"
import ind4 from "../../assets/insideService/include6.4.png"
import { toast } from 'react-toastify';
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
        Custom Furniture & Decor
      </h1>
    </div>

    {/* Banner Image */}
    <div className="mt-6" data-aos="zoom-in" data-aos-delay="100">
      <img
        src={service66}
        alt="Custom Furniture & Decor"
        className="w-full h-[250px]  md:h-[450px] object-cover"
      />
    </div>

   <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Service Overview</h2>
              <p className='mt-5 text-base text-gray-800'>Our custom furniture and décor service empowers clients to personalize their spaces with unique, thoughtfully crafted pieces that align perfectly with the overall interior concept. We design furniture and decorative elements that elevate style, enhance comfort, and improve functionality. Every piece is tailored to the space, ensuring a cohesive look that feels both distinctive and deeply connected to the client’s lifestyle and design preferences.</p>
            </div>

            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Our Custom Furniture & Decor Solutions Services Include</h2>
              <p className='mt-5 text-base text-gray-800'>We design and craft bespoke furniture, modular units, smart storage solutions, curated décor pieces, soft furnishings, and theme-aligned accessories. Each element is tailor-made to blend seamlessly into the space while enhancing its overall aesthetic and functionality. Our custom creations add character, balance, and harmony, ensuring every project feels cohesive, personalized, and beautifully executed.
              </p>

            </div>


            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Why Choose Us</h2>
              <p className='mt-5 text-base text-gray-800'>We combine refined design sensibility with skilled craftsmanship to create furniture and décor pieces that genuinely feel one-of-a-kind. Every item is thoughtfully designed, meticulously detailed, and crafted with a focus on lasting quality and personalization. This commitment ensures each piece contributes to both the usability and the visual harmony of the space. With a fully tailored approach, we help clients achieve interiors that are cohesive, stylish, and deeply personal—reflecting their taste in every detail.</p>
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


