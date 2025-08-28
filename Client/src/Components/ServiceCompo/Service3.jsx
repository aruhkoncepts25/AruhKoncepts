import React from "react";
import service33 from "../../assets/OurService/service33.jpg";
import ind1 from "../../assets/insideService/include3.1.png";
import ind2 from "../../assets/insideService/include3.2.png";
import ind3 from "../../assets/insideService/include3.3.png";
import ind4 from "../../assets/insideService/include3.4.png";
import ind5 from "../../assets/insideService/include3.5.png";

const Service3 = () => {
  const itemsPerRow = 3;

  const items = [
    {
      icon: ind1,
      title: "Concept design",
      desc: "Concept design, material sourcing, and procurement",
    },
    {
      icon: ind2,
      title: "Quality control",
      desc: "End-to-end on-site execution and quality control",
    },
    {
      icon: ind3,
      title: "Civil & Interior works",
      desc: "Carpentry, plumbing, civil work, electrical, and painting",
    },
    {
      icon: ind4,
      title: "Ceiling & lighting",
      desc: "False ceiling and lighting installation",
    },
    {
      icon: ind5,
      title: "Timely handover",
      desc: "Timely handover with one-point coordination throughout the project",
    },
  ];

  const groupedItems = [];
  for (let i = 0; i < items.length; i += itemsPerRow) {
    groupedItems.push(items.slice(i, i + itemsPerRow));
  }
  return (
    <>
      <section className="section1 w-full py-12 px-6 md:px-16 lg:px-28">
        <div className="w-[90%] px-4 mx-auto">
          {/* Heading  */}
          <div>
            <p className="text-xl font-semibold text-[#C8966B]">Services</p>
            <h1 className="text-2xl md:text-3xl font-semibold mt-6">
              TurnKey Interior Solutions
            </h1>
          </div>

          {/* banner image  */}
          <div className="mt-6">
            <img
              src={service33}
              alt="TurnKey Interior Solutions"
              className="w-full h-[450px] object-cover"
            />
          </div>

          {/* Description  */}
          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            From concept to completion, we take complete responsibility for
            delivering ready-to-use interior spaces. Our turnkey service ensures
            stress-free experience through full-cycle project management and
            seamless execution.
          </p>

          {/* What Are Included  */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-12">What are included</h2>
{groupedItems.map((group, i) => (
      <React.Fragment key={i}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-2">
          {group.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 border-r border-[#464646] pr-6 last:border-none"
            >
              <div className="text-gray-700">{typeof item.icon === "string" ? (
    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
  ) : (
    item.icon
  )}</div>
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width horizontal line */}
        {i !== groupedItems.length - 1 && (
          <hr className="border-t border-[#464646] my-6" />
        )}
      </React.Fragment>
    ))}
     
          </div>
        </div>
      </section>
    </>
  );
};

export default Service3;
