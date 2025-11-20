import { ArrowRight } from "lucide-react";
import sofa from '../../assets/insideService/sofa.png';
import service33 from "../../assets/OurService/service33.png";
import ind1 from "../../assets/insideService/include3.1.png";
import ind2 from "../../assets/insideService/include3.2.png";
import ind3 from "../../assets/insideService/include3.3.png";
import ind4 from "../../assets/insideService/include3.4.png";
import ind5 from "../../assets/insideService/include3.5.png";
import GImg from "../../assets/insideService/TgImg.png";
import { useNavigate } from "react-router-dom";
import mobileSofa from "../../assets/insideService/mobilesofa.png";


import "react-toastify/dist/ReactToastify.css";

const Service3 = () => {
 const navigate=useNavigate();
  const handleClick = () => {
    navigate("/", { state: { scrollToBooking: true } });
  };


  return (
    <>
      <section className="section1 w-full py-18 md:py-16 px-6 md:px-16 lg:px-28">
        <div className="w-[90%] md:px-4 mx-auto">
          <div data-aos="fade-up">
            <p className="text-xl font-semibold text-[#C8966B]">Services</p>
            <h1 className="text-2xl md:text-3xl font-semibold mt-6">TurnKey Interior Solutions</h1>
          </div>

          <div className="mt-6" data-aos="zoom-in">
            <img src={service33} alt="TurnKey Interior Solutions" className="w-full h-[250px] md:h-[450px] object-cover" />
          </div>

          <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Service Overview</h2>
              <p className='mt-5 text-base text-gray-800'>Our turnkey interior solutions provide a complete, hassle-free experience where we manage every stage of the project from concept to handover. With streamlined coordination and expert execution, we ensure your space is delivered exactly as envisioned — fully finished, refined, and ready for use. This approach gives clients complete peace of mind and a smooth design journey.</p>
            </div>

            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Our TurnKey Interior  Solutions Services Include</h2>
              <p className='mt-5 text-base text-gray-800'>We manage every stage of the interior design journey with complete care and clarity. From initial planning and detailed design development to material sourcing, project coordination, and civil work supervision — we ensure that everything moves smoothly. Our team also handles on-site execution, furniture customization and installation, and the final finishing touches that bring the space together. With our precise project management and commitment to quality, clients can simply relax while we transform their vision into a fully finished, beautifully executed reality.

              </p>

            </div>


            <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
              <h2 className='text-2xl md:text-3xl font-semibold mt-6 '>Why Choose Us</h2>
              <p className='mt-5 text-base text-gray-800'>Our turnkey model is designed to bring clarity, consistency, and complete convenience to your entire project. With one dedicated team managing every stage—from planning and sourcing to execution and handover—you avoid delays, miscommunication, and the hassle of dealing with multiple vendors. Our attention to detail and commitment to high standards ensure that every corner is thoughtfully crafted and perfectly finished. We deliver polished, fully executed interiors that reflect your vision, giving you a stress-free and seamless experience from start to end.</p>
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
  );
};

export default Service3;
