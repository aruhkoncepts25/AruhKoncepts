import React from 'react'
import '../../Style/OurService.css'
import service22 from '../../assets/OurService/service22.jpg'
import ind1 from '../../assets/insideService/include1.1.png'
import ind2 from '../../assets/insideService/include1.2.png'
import ind3 from '../../assets/insideService/include1.3.png'
import ind4 from '../../assets/insideService/include1.4.png'
import ind5 from '../../assets/insideService/include1.5.png'
import ind6 from '../../assets/insideService/include1.6.png'
import ind7 from '../../assets/insideService/include1.7.png'


const Service2 = () => {
  const itemsPerRow = 3;
  const items = [
    {
      icon: ind1,
      title: "Office",
      desc: "Office layout and workstation design",
    },
    {
      icon: ind2,
      title: "Showroom",
      desc: "Retail and showroom interiors for impactful customer experiences",
    },
    {
      icon: ind3,
      title: "Hospitality",
      desc: "Hospitality interiors including cafes, restaurants, and hotels",
    },
    {
      icon: ind4,
      title: "Reception",
      desc: "Reception, lobby, and waiting area designs",
    },
    {
      icon: ind5,
      title: "Conference",
      desc: "Executive cabins and conference room planning",
    },
    {
      icon: ind6,
      title: "Design",
      desc: "Brand-aligned visual themes and design elements",
    },
    {
      icon: ind7,
      title: "Furniture planning",
      desc: "Acoustic treatment and ergonomic furniture planning",
    },
  ];
  const groupedItems = [];
for (let i = 0; i < items.length; i += itemsPerRow) {
  groupedItems.push(items.slice(i, i + itemsPerRow));
}


  return (
    <>
    <section className="section1 w-full py-12 px-6 md:px-16 lg:px-28">
  <div className="w-[90%] mx-auto md:px-4">
    
    {/* Heading */}
    <div data-aos="fade-up">
      <p className="text-xl font-semibold text-[#C8966B]">Services</p>
      <h1 className="text-2xl md:text-3xl font-semibold mt-6">Commercial</h1>
    </div>

    {/* Banner Image */}
    <div className="w-full h-[250px] md:h-[450px] overflow-hidden mt-6" data-aos="zoom-in">
      <img
        src={service22}
        loading="eager"
        alt="Commercial Interior"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Description */}
    <p
      className="text-gray-600 mt-6 text-base leading-relaxed"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      We create smart and visually engaging interiors for business spaces that support productivity,
      reinforce brand identity, and deliver a professional impression. Each design is tailored to
      the specific function and audience of the commercial setting.
    </p>

    {/* What are included */}
    <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
      <h2 className="text-2xl font-semibold mb-4 md:mb-12">What are included</h2>

      {groupedItems.map((group, i) => (
        <React.Fragment key={i}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mb-9 md:gap-10 px-6 py-2"
            data-aos="fade-up"
            data-aos-delay={100 * (i + 2)} // Stagger groups
          >
            {group.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 pr-2 md:pr-6 md:border-r md:border-[#464646] last:md:border-none"
              >
                <div
                  className="w-14 h-14 flex-shrink-0"
                  data-aos="zoom-in"
                  data-aos-delay={150 + idx * 100}
                >
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

          {/* Horizontal line (desktop only) */}
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

export default Service2
