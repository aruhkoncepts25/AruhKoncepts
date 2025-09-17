import "../../Style/Project.css"
import project1 from "../../assets/Project/MoreProject/tProject1.jpg"
import project2 from "../../assets/Project/MoreProject/tProject2.jpg"
import project3 from "../../assets/Project/MoreProject/tProject3.jpg"
import project4 from "../../assets/Project/MoreProject/tProject4.jpg"
import project5 from "../../assets/Project/MoreProject/tProject5.jpg"
  // connect now ka icon 
import project6 from "../../assets/Project/project-6.png"

import { useNavigate } from "react-router-dom"

const Project4 = () => {
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
          TurnKey Interior
        </h2>
        <p className="hidden lg:block text-gray-700 leading-relaxed mb-4">
 A client approached us with a desire for a comprehensive turnkey interior solution that would transform their new property into a ready-to-move-in space. Their vision was clear: they wanted a hassle-free process where everything—from design planning and material selection to execution and final finishing—would be seamlessly handled under one roof. The goal was to create an interior that not only met functional needs but also reflected their personal style and aspirations. By entrusting the project entirely to us, they sought peace of mind, knowing that every detail would be managed with precision, efficiency, and creativity. 
        </p>
          <p className="lg:hidden text-gray-700 leading-relaxed mb-6">
   A client approached us with a desire for a comprehensive turnkey interior solution that would transform their new property into a ready-to-move-in space. Their vision was clear: they wanted a hassle-free process where everything—from design planning and material selection to execution and final finishing—would be seamlessly handled under one roof. The goal was to create an interior that not only met functional needs but also reflected their personal style and aspirations. By entrusting the project entirely to us, they sought peace of mind, knowing that every detail would be managed with precision, efficiency, and creativity. 
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
The client emphasized their preference for modern aesthetics blended with comfort. They wanted their home to carry a timeless appeal while ensuring practicality in everyday use.
      </p>
         
        </div>
      </div>

{/* text ---  Mobile */}
    <div className="md:hidden grid md:grid-cols-2 gap-16  items-center" data-aos="fade-up">
      <p className="text-gray-700 leading-relaxed">
The client emphasized their preference for modern aesthetics blended with comfort. They wanted their home to carry a timeless appeal while ensuring practicality in everyday use.
      </p>
    </div>
      {/* Right Image with Hover Effect */}
      <div className="w-full h-[350px] max-w-[500px] md:h-[500px] overflow-hidden shadow-lg mx-auto" data-aos="fade-left">
        <img
          src={project1}
          alt="Interior Design"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </div>
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

      <div className="hidden md:block md:col-span-1" data-aos="zoom-in" data-aos-delay="200">
        <img
          src={project3}
          alt="Kitchen Bar"
          className="w-full h-[520px] object-cover shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>

      {/* Mobile code  */}
       <div className="flex md:hidden gap-1 md:col-span-2"  data-aos="fade-up">
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
Based on these insights, we crafted a turnkey solution that covered every stage of the project. The final outcome was a fully realized space—delivered on time and ready to move in—that reflected their personality while ensuring long-lasting comfort and ease.
    </p>

    {/* Connect Now Button */}
    <a
      onClick={handleClick}
      data-aos="fade-up"
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

export default Project4
