import React from 'react'
import '../../Style/OurService.css'
import service55 from "../../assets/OurService/service55.jpg"
import ind1 from "../../assets/insideService/include5.1.png"
import ind2 from "../../assets/insideService/include5.2.png"
import ind3 from "../../assets/insideService/include5.3.png"
import ind4 from "../../assets/insideService/include5.4.png"



const Service5 = () => {
  const itemsPerRow = 3;



  const items = [
    {
      icon: ind1,
      title: "Residencial & Commercial",
      desc: "Residential and commercial space renovations",
    },
    {
      icon: ind2,
      title: "Reconfiguration",
      desc: "Structural reconfiguration for improved functionality",
    },
    {
      icon: ind3,
      title: "Upgrades",
      desc: "Material upgrades and design refinements",
    },
    {
      icon: ind4,
      title: "Modern finishes",
      desc: "Integration of modern finishes and layouts",
    },
    
  ];
  const groupedItems = [];
for (let i = 0; i < items.length; i += itemsPerRow) {
  groupedItems.push(items.slice(i, i + itemsPerRow));
}


  return (
    <>
      <section className="section1 w-full py-12 px-6 md:px-16 lg:px-28">
        <div className='w-[90%] mx-auto px-4'>

        
      {/* Heading */}
      <div>
        <p className="text-xl font-semibold text-[#C8966B]">Services</p>
        <h1 className="text-2xl md:text-3xl font-semibold mt-6">
         Renovation & Remodeling
        </h1>
      </div>

      {/* Banner Image */}
      <div className="mt-6">
        <img
          src={service55}
          alt="3D Visualization & Conceptual Design"
          className="w-full h-[450px] object-cover"
        />
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-6 text-base leading-relaxed">
        We refresh and transform existing interiors by rethinking layouts, updating materials, and
improving aesthetics. Whether it's a single room or a full property, we breathe new life into
outdated spaces.
      </p>

      {/* What are included */}
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
  )
}

export default Service5


