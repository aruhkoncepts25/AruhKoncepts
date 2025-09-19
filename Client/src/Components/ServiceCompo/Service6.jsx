import React from 'react'
import '../../Style/OurService.css'
import service66 from "../../assets/OurService/service66.jpg"
import ind1 from "../../assets/insideService/include6.1.png"
import ind2 from "../../assets/insideService/include6.2.png"
import ind3 from "../../assets/insideService/include6.3.png"
import ind4 from "../../assets/insideService/include6.4.png"


const Service5 = () => {
  const itemsPerRow = 3;
  const items = [
    {
      icon: ind1,
      title: "Bespoke furniture",
      desc: "Bespoke furniture design and production",
    },
    {
      icon: ind2,
      title: "Decorative accents",
      desc: "Decorative accents like wall art, installations, and sculptures",
    },
    {
      icon: ind3,
      title: "Styling accessories",
      desc: "Styling accessories for shelves, tabletops, and entryways",
    },
    {
      icon: ind4,
      title: "Seamless design blend",
      desc: "Coordination of materials, textures, and themes",
    },
    
  ];
  const groupedItems = [];
for (let i = 0; i < items.length; i += itemsPerRow) {
  groupedItems.push(items.slice(i, i + itemsPerRow));
}


  return (
    <>
  <section className="section1 w-full py-12 px-6 md:px-16 lg:px-28">
  <div className='w-[90%] mx-auto md:px-4'>

    {/* Heading */}
    <div data-aos="fade-up">
      <p className="text-xl font-semibold text-[#C8966B]">Services</p>
      <h1 className="text-2xl md:text-3xl font-semibold mt-6">
        Custom Furniture & Decor
      </h1>
    </div>

    {/* Banner Image */}
    <div className="mt-6" data-aos="zoom-in" data-aos-delay="100">
      <img
        src={service66}
        alt="Custom Furniture & Decor"
        className="w-full h-[250px]  md:h-[450px] object-cover"
      />
    </div>

    {/* Description */}
    <p className="text-gray-600 mt-6 text-base leading-relaxed" data-aos="fade-up" data-aos-delay="200">
     At Aruh Koncepts, we design and craft bespoke furniture and décor pieces that perfectly complement your interiors. Every element is tailored to match your style, functionality needs, and space requirements. From statement furniture to subtle accents, our creations add character, elegance, and a personal touch to every project.
    </p>

    {/* What are included */}
    <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
      <h2 className="text-2xl font-semibold mb-4 md:mb-12">What are included</h2>

      {groupedItems.map((group, i) => (
        <React.Fragment key={i}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mb-9 md:gap-10 px-4 md:px-6 py-2"
            data-aos="fade-up"
            data-aos-delay={400 + i * 100}
          >
            {group.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 pr-2 md:pr-6 md:border-r md:border-[#464646] last:md:border-none"
                data-aos="zoom-in"
                data-aos-delay={500 + idx * 100}
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

          {/* Divider between groups – only on desktop */}
          {i !== groupedItems.length - 1 && (
            <hr className="hidden md:block border-t border-[#464646] my-6" />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
</section>

    </>
  )
}

export default Service5


