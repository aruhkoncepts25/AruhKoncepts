import React, { useState } from "react";
import {Api} from "../Api/Api"; // ✅ default import
import service33 from "../../assets/OurService/service33.png";
import ind1 from "../../assets/insideService/include3.1.png";
import ind2 from "../../assets/insideService/include3.2.png";
import ind3 from "../../assets/insideService/include3.3.png";
import ind4 from "../../assets/insideService/include3.4.png";
import ind5 from "../../assets/insideService/include3.5.png";
import GImg from "../../assets/insideService/TgImg.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Service3 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await Api.createContact({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      service: "Residential Interior Design"
    });
    toast.success("Message Submitted Successfully!");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  } catch (err) {
    console.log(err); // for debugging
    toast.error(err.response?.data?.err || "Something went wrong!");
  }
};

  const items = [
    { icon: ind1, title: "Concept design", desc: "Concept design, material sourcing, and procurement" },
    { icon: ind2, title: "Quality control", desc: "End-to-end on-site execution and quality control" },
    { icon: ind3, title: "Civil & Interior works", desc: "Carpentry, plumbing, civil work, electrical, and painting" },
    { icon: ind4, title: "Ceiling & lighting", desc: "False ceiling and lighting installation" },
    { icon: ind5, title: "Timely handover", desc: "Timely handover with one-point coordination throughout the project" },
  ];

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) groupedItems.push(items.slice(i, i + 3));

  return (
    <>
      <section className="section1 w-full py-18 md:py-12 px-6 md:px-16 lg:px-28">
        <div className="w-[90%] md:px-4 mx-auto">
          <div data-aos="fade-up">
            <p className="text-xl font-semibold text-[#C8966B]">Services</p>
            <h1 className="text-2xl md:text-3xl font-semibold mt-6">TurnKey Interior Solutions</h1>
          </div>

          <div className="mt-6" data-aos="zoom-in">
            <img src={service33} alt="TurnKey Interior Solutions" className="w-full h-[250px] md:h-[450px] object-cover" />
          </div>

          <p className="mt-6 text-gray-600 text-base leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            At Aruh Koncepts, we provide end-to-end turnkey interior solutions that cover every stage of your project—from
            design and planning to execution and final delivery. With a single point of responsibility, we ensure seamless
            coordination, timely completion, and uncompromised quality.
          </p>

          <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-2xl font-semibold mb-4 md:mb-12">What are included</h2>
            {groupedItems.map((group, i) => (
              <React.Fragment key={i}>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mb-9 md:gap-10 px-6 py-2"
                  data-aos="fade-up"
                  data-aos-delay={100 * (i + 3)}
                >
                  {group.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 pr-2 md:pr-6 md:border-r md:border-[#464646] last:md:border-none"
                      data-aos="zoom-in"
                      data-aos-delay={150 + idx * 100}
                    >
                      <div className="w-14 h-14 flex-shrink-0 text-gray-700">
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

      <section className="w-full px-6 md:px-10 lg:px-15 xl:px-24 mt-2 md:mt-16">
        <div className="bg-white md:bg-[#F4EFE9] pt-9">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative px-4">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={GImg} alt="Group" className="w-full max-w-[550px] object-contain" />
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <form onSubmit={handleSubmit} className="w-full max-w-md p-6 flex flex-col gap-5 bg-white">
                <div className="flex flex-col md:flex-col lg:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="flex-1 border-b border-gray-400 focus:border-black outline-none text-md h-8"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="flex-1 border-b border-gray-400 focus:border-black outline-none text-md h-8"
                    required
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-b border-gray-400 focus:border-black outline-none text-md h-8"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-b border-gray-400 focus:border-black outline-none text-md h-8"
                />

                <input
                  type="text"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-b border-gray-400 focus:border-black outline-none text-md h-8"
                  required
                />

                <button type="submit" className="mt-4 bg-[#142241] text-white py-2 rounded hover:bg-gray-800 transition-all">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <ToastContainer position="bottom-right" autoClose={3000} />
          <h1 id="service-text" className="text-center text-[#142241] text-[210px] font-medium relative bottom-[-65px]">
            Get a Quote
          </h1>
        </div>
      </section>
    </>
  );
};

export default Service3;
