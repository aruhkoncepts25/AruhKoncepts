import React, { useState } from 'react';
import '../../Style/OurService.css';
import service11 from "../../assets/OurService/service1.1.png";
import ind1 from '../../assets/insideService/include1.png';
import ind2 from '../../assets/insideService/include2.png';
import ind3 from '../../assets/insideService/include3.png';
import ind4 from '../../assets/insideService/include4.png';
import ind5 from '../../assets/insideService/include5.png';
import ind6 from '../../assets/insideService/include6.png';
import ind7 from '../../assets/insideService/include7.png';
import GImg from '../../assets/insideService/RgImg.png'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Api } from '../Api/Api';

const Service1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     await Api.createContact({
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       email: formData.email,
//       phone: formData.phone,
//       message: formData.message,
//       service: "Residential Interior Design"
//     });
//     toast.success("Message Submitted Successfully!");
//     setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
//   } catch (err) {
//     console.log(err); // for debugging
//     toast.error(err.response?.data?.err || "Something went wrong!");
//   }
// };


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await Api.createContact({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      service: "Residential Interior Design"
    });

    console.log("API Response:", response.data); // <-- check if email was sent
    toast.success("Message Submitted Successfully!");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  } catch (err) {
    console.error("API Error:", err.response?.data || err);
    toast.error(err.response?.data?.err || "Something went wrong!");
  }
};

  const itemsPerRow = 3;
  const items = [
    { icon: ind1, title: "Design", desc: "Design for living rooms, bedrooms, kitchens, and bathrooms" },
    { icon: ind2, title: "Kitchen", desc: "Modular kitchens and wardrobes tailored to your space" },
    { icon: ind3, title: "Space", desc: "Space planning for optimal layout and movement" },
    { icon: ind4, title: "Lighting", desc: "Lighting and electrical layout planning" },
    { icon: ind5, title: "Furniture", desc: "Custom furniture selection and design" },
    { icon: ind6, title: "Styling", desc: "Complete styling and décor implementation" },
    { icon: ind7, title: "Soft Furnishing", desc: "Selection of soft furnishings like curtains, rugs, cushions" },
  ];

  const groupedItems = [];
  for (let i = 0; i < items.length; i += itemsPerRow) groupedItems.push(items.slice(i, i + itemsPerRow));

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

          <p className="text-gray-600 mt-6 text-base leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            At Aruh Koncepts, we craft living spaces that are elegant, comfortable, and deeply personal...
          </p>

          <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-2xl font-semibold mb-4 md:mb-12">What are included</h2>
            {groupedItems.map((group, i) => (
              <React.Fragment key={i}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mb-9 md:gap-10 px-6 py-2" data-aos="fade-up" data-aos-delay={100 * (i + 1)}>
                  {group.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 pr-2 md:pr-6 md:border-r md:border-[#464646] last:md:border-none">
                      <div className="w-14 h-14 flex-shrink-0">
                        <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {i !== groupedItems.length - 1 && <hr className="md:block hidden border-t border-[#464646] my-6" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Always Visible Get a Quote Form */}
      <section className='w-full px-6 md:px-10 lg:px-15 xl:px-24 mt-2 md:mt-16'>
        <div className='bg-white md:bg-[#F4EFE9] pt-9'>

         <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative  px-4">
  
  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src={GImg}
      alt="Group of images"
      className="w-full max-w-[550px] object-contain"
    />
  </div>

  {/* Form Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <form
      className="w-full max-w-md p-6 flex flex-col gap-5 bg-white"
      onSubmit={handleSubmit}
    >
      {/* Name Fields */}
<div className="flex flex-col md:flex-col lg:flex-row gap-4">
  <input
    type="text"
    placeholder="First Name"
    value={formData.firstName}
    onChange={(e) =>
      setFormData({ ...formData, firstName: e.target.value })
    }
    className="flex-1 border-b border-gray-400 focus:border-black outline-none text-md h-8 leading-5 placeholder:text-gray-400 md:placeholder-black"
    required
  />
  <input
    type="text"
    placeholder="Last Name"
    value={formData.lastName}
    onChange={(e) =>
      setFormData({ ...formData, lastName: e.target.value })
    }
    className="flex-1 border-b border-gray-400 focus:border-black outline-none text-md h-8 leading-5 placeholder:text-gray-400 md:placeholder-black"
    required
  />
</div>


      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border-b border-gray-400 focus:border-black outline-none text-md h-6 md:h-8 leading-5 placeholder:text-gray-400 md:placeholder-black"
        required
      />

      {/* Phone */}
      <input
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="border-b border-gray-400 focus:border-black outline-none text-md h-6 md:h-8 leading-5 placeholder:text-gray-400 md:placeholder-black"
      />

      {/* Message */}
      <input
        type="text"
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="border-b border-gray-400 focus:border-black outline-none text-md h-6 md:h-8 leading-5 placeholder:text-gray-400 md:placeholder-black"
        required
      />

      {/* Submit */}
      <button
        type="submit"
        className="mt-4 bg-[#142241] text-white py-2 rounded hover:bg-gray-800 transition-all duration-300"
      >
        Submit
      </button>
    </form>
  </div>
</div>


        

          <ToastContainer position="bottom-right" autoClose={3000} />
          <h1 id='service-text' className='text-center text-[#142241] text-[210px] font-medium relative bottom-[-65px]'>Get a Quote</h1>
        </div>
      </section>
    </>
  );
};

export default Service1;
