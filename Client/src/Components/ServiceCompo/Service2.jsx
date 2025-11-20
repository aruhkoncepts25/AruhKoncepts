import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import '../../Style/OurService.css'
import service22 from '../../assets/OurService/service22.png'
import ind1 from '../../assets/insideService/include1.1.png'
import ind2 from '../../assets/insideService/include1.2.png'
import ind3 from '../../assets/insideService/include1.3.png'
import ind4 from '../../assets/insideService/include1.4.png'
import ind5 from '../../assets/insideService/include1.5.png'
import ind6 from '../../assets/insideService/include1.6.png'
import ind7 from '../../assets/insideService/include1.7.png'
import sofa from '../../assets/insideService/sofa.png';
import mobileSofa from "../../assets/insideService/mobilesofa.png";

import 'react-toastify/dist/ReactToastify.css';



const Service2 = () => {
 const navigate=useNavigate();
  const handleClick = () => {
    navigate("/", { state: { scrollToBooking: true } });
  };

  return (
    <>
    <section className="section1 w-full py-12 px-6 md:px-16 lg:px-28">
  <div className="w-[90%] mx-auto md:px-4">
    
    {/* Heading */}
    <div data-aos="fade-up">
      <p className="text-xl font-semibold text-[#C8966B]">Services</p>
      <h1 className="text-2xl md:text-3xl font-semibold mt-6">Commercial Interior Design</h1>
    </div>

    {/* Banner Image */}
    <div className="w-full h-[250px] md:h-[450px] overflow-hidden mt-6" data-aos="zoom-in">
      <img
        src={service22}
        loading="eager"
        alt="Commercial Interior"
        className="w-full h-full object-center object-cover"
      />
    </div>


    <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
      <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Service Overview</h2>
            <p className='mt-5 text-base text-gray-800'>Our commercial interior design service focuses on creating purposeful, high-performance spaces that enhance brand identity and support business growth. We design environments that are functional, visually compelling, and strategically planned, ensuring a seamless experience for employees, customers, and visitors. With a careful balance of creativity and practicality, we shape commercial spaces that leave a strong and lasting impression.</p>
          </div>

          <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Our Commercial Services Include</h2>
            <p className='mt-5 text-base text-gray-800'>We offer end-to-end solutions for offices, retail stores, hospitality spaces, and work environments. Our services include space planning, brand-aligned design concepts, furniture layout, material selection, lighting planning, and execution coordination. Every design is developed to improve workflow, maximize efficiency, and elevate the overall experience while staying aligned with your brand’s identity and goals.

            </p>
           
          </div>


           <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Why Choose Us</h2>
            <p className='mt-5 text-base text-gray-800'>We bring a thoughtful, research-driven approach to commercial interiors, ensuring every design decision serves a purpose. Our team focuses on clarity, efficiency, and long-term value, helping businesses create environments that feel professional, organized, and inspiring. With a strong commitment to quality and functionality, we deliver spaces that support your business operations while enhancing your brand presence.</p>
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
  

  <div id="service-text" className="absolute top-[180px] left-[250px] flex flex-col justify-start items-center text-black text-center">
    <h1 className="text-3xl text-center md:text-start md:text-5xl font-medium">
      Let’s talk about <br className="hidden md:block"/> how <br className="block md:hidden"/>we can help you
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

export default Service2
