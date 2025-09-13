import React from 'react'
import '../../Style/OurService.css'
import service11 from "../../assets/OurService/service1.1.jpg"
import ind1 from '../../assets/insideService/include1.png'
import ind2 from '../../assets/insideService/include2.png'
import ind3 from '../../assets/insideService/include3.png'
import ind4 from '../../assets/insideService/include4.png'
import ind5 from '../../assets/insideService/include5.png'
import ind6 from '../../assets/insideService/include6.png'
import ind7 from '../../assets/insideService/include7.png'


const Service1 = () => {
  const itemsPerRow = 3;



  const items = [
    {
      icon: ind1,
      title: "Design",
      desc: "Design for living rooms, bedrooms, kitchens, and bathrooms",
    },
    {
      icon: ind2,
      title: "Kitchen",
      desc: "Modular kitchens and wardrobes tailored to your space",
    },
    {
      icon: ind3,
      title: "Space",
      desc: "Space planning for optimal layout and movement",
    },
    {
      icon: ind4,
      title: "Lighting",
      desc: "Lighting and electrical layout planning",
    },
    {
      icon: ind5,
      title: "Furniture",
      desc: "Custom furniture selection and design",
    },
    {
      icon: ind6,
      title: "Styling",
      desc: "Complete styling and décor implementation",
    },
    {
      icon: ind7,
      title: "Soft Furnishing",
      desc: "Selection of soft furnishings like curtains, rugs, cushions",
    },
  ];
  const groupedItems = [];
for (let i = 0; i < items.length; i += itemsPerRow) {
  groupedItems.push(items.slice(i, i + itemsPerRow));
}


  return (
    <>
      <section className="section1 w-full md:px-16 lg:px-28">
  <div className="w-[90%] mx-auto px-0 md:px-4">
    
    {/* Heading */}
    <div data-aos="fade-up">
      <p className="text-xl font-semibold text-[#C8966B]">Services</p>
      <h1 className="text-2xl md:text-3xl font-semibold mt-6">
        Residential Interior Design
      </h1>
    </div>

    {/* Banner Image */}
    <div className="mt-6" data-aos="zoom-in">
      <img
        src={service11}
        alt="Residential Interior"
        className="w-full h-[250px] md:h-[450px] object-cover"
      />
    </div>

    {/* Description */}
    <p
      className="text-gray-600 mt-6 text-base leading-relaxed"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      We design comfortable, stylish, and highly functional living spaces that
      reflect your personality and fit seamlessly into your lifestyle. Whether
      it’s a new home or a makeover, our goal is to create elegant environments
      that feel both timeless and personal.
    </p>

    {/* What are included */}
    <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
      <h2 className="text-2xl font-semibold mb-4 md:mb-12">What are included</h2>

      {groupedItems.map((group, i) => (
        <React.Fragment key={i}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mb-9 md:gap-10 px-6 py-2"
            data-aos="fade-up"
            data-aos-delay={100 * (i + 1)} // Slight delay per group
          >
            {group.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 pr-2 md:pr-6 md:border-r md:border-[#464646] last:md:border-none"
              >
                <div className="w-14 h-14 flex-shrink-0">
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

          {/* Full-width horizontal line */}
          {i !== groupedItems.length - 1 && (
            <hr className="md:block hidden border-t border-[#464646] my-6" />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
</section>

    </>
  )
}

export default Service1
