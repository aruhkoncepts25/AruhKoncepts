import React from 'react'
import '../../Style/OurService.css'
import service44 from '../../assets/OurService/service44.jpg'
import ind1 from '../../assets/insideService/include4.1.png'
import ind2 from '../../assets/insideService/include4.2.png'
import ind3 from '../../assets/insideService/include4.3.png'
import ind4 from '../../assets/insideService/include4.4.png'



const Service4 = () => {
  const itemsPerRow = 3;



  const items = [
    {
      icon: ind1,
      title: "Mood boards",
      desc: "Mood boards with design inspirations and styles",
    },
    {
      icon: ind2,
      title: "3D visualization",
      desc: "3D visualizations and walkthrough animations",
    },
    {
      icon: ind3,
      title: "Sample materials",
      desc: "Sample materials and surface finish options",
    },
    {
      icon: ind4,
      title: "Lighting Suggestions",
      desc: "Personalized color palette development and lighting suggestions",
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
        3D Visualization & Conceptual Design
      </h1>
    </div>

    {/* Banner Image */}
    <div className="mt-6" data-aos="zoom-in" data-aos-delay="100">
      <img
        src={service44}
        alt="3D Visualization & Conceptual Design"
        className="w-full h-[250px]  md:h-[450px] object-cover"
      />
    </div>

    {/* Description */}
    <p className="text-gray-600 mt-6 text-base leading-relaxed" data-aos="fade-up" data-aos-delay="200">
      We create smart and visually engaging interiors for business spaces that support productivity, reinforce brand identity, and deliver a professional impression. Each design is tailored to the specific function and audience of the commercial setting.
    </p>

    {/* What are included */}
    <div className="mt-10" data-aos="fade-up" data-aos-delay="300">
      <h2 className="text-2xl font-semibold mb-4 md:mb-12">What are included</h2>

      {groupedItems.map((group, i) => (
        <React.Fragment key={i}>
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 mb-9 md:gap-10 px-6 py-2"
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

          {/* Divider only between rows (desktop only) */}
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

export default Service4

