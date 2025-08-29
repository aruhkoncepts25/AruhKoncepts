
import { ArrowRight } from "lucide-react";
import '../Style/OurService.css'
// Service Image
import service1 from "../assets/OurService/service-1.jpg"
import service2 from "../assets/OurService/service-2.jpg"
import service3 from "../assets/OurService/service-3.jpg"
import service4 from "../assets/OurService/service-4.jpg"
import service5 from "../assets/OurService/service-5.jpg"
import service6 from "../assets/OurService/service-6.jpg"
import service7 from "../assets/OurService/service-7.jpg"
// Icon Image 
import icon1 from "../assets/OurService/icon-1.png"
import icon2 from "../assets/OurService/icon-2.png"
import icon3 from "../assets/OurService/icon-3.png"
import icon4 from "../assets/OurService/icon-4.png"
import icon5 from "../assets/OurService/icon-5.png"
import icon6 from "../assets/OurService/icon-6.png"
import icon7 from "../assets/OurService/icon-7.png"
// vector icon
import vector from '../assets/OurService/Vector44.png'
import { useNavigate } from "react-router-dom";

const OurService = () => {
    const navigate = useNavigate()

    const handleViewServiceClick = (path) => {
        navigate(path);
    };
    const services = [
        {
            id: 1,
            title: "Residential Interior Design",
            description:
                "We design comfortable, stylish, and highly functional living spaces that reflect your personality and fit seamlessly into your lifestyle. Whether it’s a new home or a makeover, our goal is to create elegant environments that feel both timeless and personal.",
            image: service1,
            icon: icon1,
            link: "/service/residential",
        },
        {
            id: 2,
            title: "Commercial",
            description:
                "We create smart and visually engaging interiors for business spaces that support productivity, reinforce brand identity, and deliver a professional impression. Each design is tailored to the specific function and audience of the commercial setting.",
            image: service2,
            icon: icon2,
            link: "/service/commercial",
        },
        {
            id: 3,
            title: "TurnKey Interior  Solutions",
            description: "From concept to completion, we take complete responsibility for delivering ready-to-use interior spaces. Our turnkey service ensures stress-free experience through full-cycle project management and seamless execution.",
            image: service3,
            icon: icon3,
            link: "/service/turnkey"
        },
        {
            id: 4,
            title: "3D Visualization & Conceptual Design",
            description: "Before execution, we help you visualize your space with precision using 3D models and detailed concepts. This service allows you topreview your future interiors and make informed designdecisions.",
            image: service4,
            icon: icon4,
            link: "/service/visualization"
        },
        {
            id: 5,
            title: "Renovation & Remodeling",
            description: "We refresh and transform existing interiors by rethinking layouts, updating materials, and improving aesthetics. Whether it's a single room or a full property, we breathe new life into outdated spaces.",
            image: service5,
            icon: icon5,
            link: "/service/renovation"
        },
        {
            id: 6,
            title: "Custom Furniture & Decor",
            description: "We craft furniture and décor that is tailor-made to your space, preferences, and functionality. Our custom pieces enhance visual appeal and serve apractical purpose, all while staying true to the design vision.",
            image: service6,
            icon: icon6,
            link: "/service/furniture"
        },
        {
            id: 7,
            title: "Vastu Consultation",
            description: "We design with intent, aligning interiors with Vastu principles to enhance the energy flow, positivity, and balance in your space. Our approach blends traditional wisdom with contemporary aesthetics for well-being and harmony.",
            image: service7,
            icon: icon7,
            link: "/service/vastu"
        },
    ];
    return (
        <>
            <section className='service w-full py-12'>
                <div className="w-[90%] mx-auto flex flex-col gap-16">
                    <h1 className='text-xl font-semibold text-[#C8966B]'>Our Services</h1>
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`grid md:grid-cols-2 gap-8 p-6 rounded-xl shadow-md items-center transition-all duration-500 ease-in-out transform 
                            hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:bg-[#F1F2EB] ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Left Image */}
                            <div className="w-full">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-[500px] h-[400px] object-cover shadow-sm"
                                />
                            </div>

                            {/* Right Content */}
                            <div className="w-full h-[400px] p-6 flex flex-col justify-between">
                                <div>
                                    <div className="mb-4">
                                        <img src={service.icon} alt="icon" className="w-16 h-16" />
                                    </div>
                                    <h2 className="text-2xl font-semibold mb-3">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleViewServiceClick(service.link)}
                                    className="group inline-flex items-center gap-2 text-black hover:text-[#C8966B] font-medium hover:underline cursor-pointer"
                                >
                                    <span>View Service</span>
                                    <ArrowRight className="w-4 h-4 relative top-[1px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-rotate-[40deg]" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default OurService
