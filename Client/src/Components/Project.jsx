import "../Style/Project.css"
import project1 from "../assets/Project/Mproject-1.webp"
import project2 from '../assets/Project/project-2.webp'
import project3 from '../assets/Project/project-3.webp'
import project4 from '../assets/Project/project-4.webp'
import project5 from '../assets/Project/project-5.jpg'
import project6 from '../assets/Project/project-6.png'

import { useNavigate } from "react-router-dom"

const Project = () => {
  const navigate =useNavigate();
  const handleClick=()=>{
    navigate("/#contact")
  }
  return (
    <>
   <section className="project-section w-full md:py-12">
  <div className="w-[90%] mx-auto px-2 py-4 md:px-4 md:py-8">
    <h1 className="text-xl font-semibold text-[#C8966B]" data-aos="fade-up">Projects</h1>

    {/* Top Section */}
    <div className="grid md:grid-cols-2 gap-10 items-center mt-4 md:mt-2">
      {/* Left Content */}
      <div className="w-full mt-6" data-aos="fade-right">
        <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-6">
          Residential Interior Solutions
        </h2>
        <p className="hidden lg:block text-gray-700 leading-relaxed mb-4">
     The project began with a clear and thoughtful goal: to design a home that felt calm, welcoming, and functional for everyday living. The vision was not limited to just aesthetics but extended to creating a space that offered both comfort and meaning, reflecting the values, personality, and lifestyle of the family. The idea was to bring together relaxation and practicality in perfect harmony, ensuring that the home could serve as a peaceful retreat after long, busy days while still accommodating the various needs and routines of daily life. Every corner was to be planned with intention—whether it was a cozy space to unwind, a functional area to stay productive, or open layouts that encouraged connection and togetherness. The emphasis was on achieving balance: a design that exuded warmth and serenity while remaining durable and versatile enough to support the evolving needs of modern living.
        </p>
          <p className="lg:hidden text-gray-700 leading-relaxed mb-6">
         The project began with a clear and focused goal: to design a commercial space that felt professional, welcoming, and highly functional for daily business operations. The vision was to create an environment that not only supported efficiency and productivity but also reflected the company’s values, culture, and brand identity in every detail. The workplace was intended to balance functionality with aesthetics, offering employees a space that motivates and inspires them while also projecting a strong and lasting impression on clients, partners, and visitors. More than just a physical office, the idea was to craft a space that seamlessly integrates work needs with comfort, ensuring that every element—from layout and lighting to materials and finishes—contributes to a cohesive and forward-thinking design.
        </p>


        {/* Info Table */}
        <div className="space-y-2 mt-2 md:mt-6 text-gray-700">
          <p className="flex  gap-9 pb-1">
            <span className="font-semibold">Client</span> <span>:</span>
          </p>
          <p className="flex gap-6 pb-1">
            <span className="font-semibold">Service</span> <span>:</span>
          </p>
             <p className="hidden md:block text-gray-700 leading-relaxed">
      The family had recently relocated and were looking for a design that truly reflected their lifestyle and sensibilities. They wanted their new home to feel like an extension of their personality, balancing elegance with functionality.
      </p>
          {/* <p className="flex  gap-3 pb-1">
            <span className="font-semibold">Location</span> <span>:</span>
          </p>
          <p className="flex gap-11 pb-1">
            <span className="font-semibold">Size</span> <span>:</span>
          </p> */}
        </div>
      </div>

{/* text ---  Mobile */}
    <div className="md:hidden grid md:grid-cols-2 gap-16  items-center" data-aos="fade-up">
      <p className="text-gray-700 leading-relaxed">
        The family had recently relocated and were looking for a design that truly reflected their lifestyle and sensibilities. They wanted their new home to feel like an extension of their personality, balancing elegance with functionality.
      </p>
    </div>
      {/* Right Image with Hover Effect */}
      <div className="w-full h-[350px] max-w-[500px] md:h-[500px] overflow-hidden shadow-lg mx-auto"  data-aos="fade-left">
        <img
          src={project1}
          alt="Interior Design"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>

    {/* Bottom Text both desktop */}
    {/* <div className="grid md:grid-cols-2 gap-16 mt-6 md:mt-12 items-center">
      <p className="hidden md:block text-gray-700 leading-relaxed">
      The family had recently relocated and were looking for a design that truly reflected their lifestyle and sensibilities. They wanted their new home to feel like an extension of their personality, balancing elegance with functionality.
      </p>

      <p className="text-gray-700 leading-relaxed">
     During our initial consultation, we explored their requirements in detail. From storage solutions to color preferences, every aspect was carefully considered. They emphasized that the interiors should remain timeless and relaxed, while still meeting the practical needs of a busy household.
      </p>
    </div> */}
  </div>
</section>

{/* Gallery Section */}
<section className="w-full pb-9">
  <div className="w-[90%] mx-auto">
    {/* Image Grid */}
    <div className="grid grid-cols-1 md:grid-cols-4  gap-4 md:gap-6 mb-8">
      {/* Desktop code  */}
      
      <div className="hidden md:block md:col-span-1" data-aos="zoom-in">
        <img
          src={project2}
          alt="Dining Area"
          className="w-full h-[520px] object-cover shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div className="hidden md:block md:col-span-1"  data-aos="zoom-in" data-aos-delay="200">
        <img
          src={project3}
          alt="Kitchen Bar"
          className="w-full h-[520px] object-cover shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Mobile code  */}
       <div className="flex md:hidden gap-1 md:col-span-2" data-aos="fade-up">
    <img
      src={project2}
      alt="Dining Area"
      className="w-1/2 md:w-full h-[400px] object-cover shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
    />
    <img
      src={project3}
      alt="Kitchen Bar"
      className="w-1/2 md:w-full h-[400px]  object-cover shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
    />
  </div>
{/* //// */}


      {/* Third & Fourth stacked */}
      <div className="md:col-span-2 flex flex-col gap-4 md:gap-6">
        <img
          src={project4}
          alt="Modern Kitchen"
           data-aos="zoom-in-up"
          className="w-full h-[250px] object-cover shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <img
          src={project5}
          alt="Living Room"
          data-aos="zoom-in-up"
                data-aos-delay="200"
          className="w-full h-[250px] object-cover shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>

    {/* Text Section */}
    <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base" data-aos="fade-up">
     Based on these insights, we developed a concept that highlighted softness, openness, and fluid connections between spaces. The design aimed to create a sense of warmth and continuity, ensuring that each room complemented the other while maintaining its own unique character.
    </p>

    {/* Connect Now Button */}
    <a
      onClick={handleClick} data-aos="fade-up"
            data-aos-delay="200"
      className="inline-flex items-center cursor-pointer gap-4 mt-1 mb-1 md:mt-6 md:mb-6 text-3xl font-medium text-gray-800 hover:text-[#C8966B] transition"
    >
      Connect Now
      <img
        src={project6}
        alt="arrow icon"
        className="w-10 h-10 object-contain inline-block"
      />
    </a>
  </div>
</section>

    </>
  )
}

export default Project
