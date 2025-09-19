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
  <div className="w-[90%] md:px-4 mx-auto">

    {/* Heading */}
    <div data-aos="fade-up">
      <p className="text-xl font-semibold text-[#C8966B]">Services</p>
      <h1 className="text-2xl md:text-3xl font-semibold mt-6">
        TurnKey Interior Solutions
      </h1>
    </div>

    {/* Banner Image */}
    <div className="mt-6" data-aos="zoom-in">
      <img
        src={service33}
        alt="TurnKey Interior Solutions"
        className="w-full h-[250px] md:h-[450px] object-cover"
      />
    </div>

    {/* Description */}
    <p className="mt-6 text-gray-600 text-base leading-relaxed" data-aos="fade-up" data-aos-delay="100">
      At Aruh Koncepts, we provide end-to-end turnkey interior solutions that cover every stage of your project—from design and planning to execution and final delivery. With a single point of responsibility, we ensure seamless coordination, timely completion, and uncompromised quality. Our holistic approach allows clients to enjoy a stress-free experience while we transform ideas into fully finished spaces that are ready to live in or work from.
    </p>

    {/* What Are Included */}
    <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
      <h2 className="text-2xl font-semibold mb-4 md:mb-12">What are included</h2>

      {groupedItems.map((group, i) => (
        <React.Fragment key={i}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mb-9 md:gap-10 px-6 py-2"
            data-aos="fade-up"
            data-aos-delay={100 * (i + 3)} // stagger delay for groups
          >
            {group.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 pr-2 md:pr-6 md:border-r md:border-[#464646] last:md:border-none"
                data-aos="zoom-in"
                data-aos-delay={150 + idx * 100} // stagger delay for items
              >
                <div className="w-14 h-14 flex-shrink-0 text-gray-700">
                  {typeof item.icon === "string" ? (
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    item.icon
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider only between groups, and only on desktop */}
          {i !== groupedItems.length - 1 && (
            <hr className="md:block hidden border-t border-[#464646] my-6" />
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
