import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import ScrollToTop from './Components/ScrollToTop';
import ScrollToHash from "./Components/ScrollToHash";
import PopupForm from "./Components/PopupForm";


// ✅ Lazy load components
const Home = lazy(() => import("./Components/Home"));
const AboutUs = lazy(() => import("./Components/AboutUs"));

const Project = lazy(() => import("./Components/Project"));


const MainProject = lazy(() => import("./Components/MainProject"));
const OurService = lazy(() => import("./Components/OurService"));
const Layout = lazy(() => import("./Components/Layout"));
const Service1 = lazy(() => import("./Components/ServiceCompo/Service1"));  // residential
const Service2 = lazy(() => import("./Components/ServiceCompo/Service2")); // commercial
const Service3 = lazy(() => import("./Components/ServiceCompo/Service3")); // turnkey
const Service4 = lazy(() => import("./Components/ServiceCompo/Service4"));  // visualization
const Service5 = lazy(() => import("./Components/ServiceCompo/Service5"));  // renovation
const Service6 = lazy(() => import("./Components/ServiceCompo/Service6"));  // furniture
const Service7 = lazy(() => import("./Components/ServiceCompo/Service7"));  // vastu

// project
const Project2 =lazy(()=>import("./Components/ProjectCompo/Project2"));
const Project3 =lazy(()=>import("./Components/ProjectCompo/Project3"));
const Project4 =lazy(()=>import("./Components/ProjectCompo/Project4"));



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <ScrollToTop />
      <ScrollToHash />

      {/* ✅ Suspense wrapper for lazy-loaded routes */}
      <Suspense fallback={
    <div className="flex items-center justify-center h-screen w-screen bg-[#142241]">
      <p className="text-white text-xl md:text-3xl font-semibold animate-pulse">
        Loading...
      </p>
    </div>
  }>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/#home" element={<Home />} /> */}

            <Route path="headNav" element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="projectKnowMore" element={<MainProject />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="mainproject" element={<MainProject />} />
            <Route path="ourservice" element={<OurService />} />
            {/* inside project  */}
            <Route path="project" element={<Project />} />
            <Route path="project2" element={<Project2 />} />
            <Route path="project3" element={<Project3 />} />
            <Route path="project4" element={<Project4 />} />


            {/* Services */}
            <Route path="service/residential" element={<Service1 />} />
            <Route path="service/commercial" element={<Service2 />} />
            <Route path="service/turnkey" element={<Service3 />} />
            <Route path="service/visualization" element={<Service4 />} />
            <Route path="service/renovation" element={<Service5 />} />
            <Route path="service/furniture" element={<Service6 />} />
            <Route path="service/vastu" element={<Service7 />} />

            {/* Featured Project Home Hero Section */}
            <Route path="featuredProject" element={<Project />} />
            <Route path="featuredProject2" element={<Project2 />} />
            <Route path="residential" element={<Service1/>}/>
            <Route path="renovation" element={<Service5/>}/>
            <Route path="vastu" element={<Service7/>}/>




            {/* Footer Links */}
            <Route path="footerhome" element={<Home />} />
            <Route path="footerservice" element={<OurService />} />
            <Route path="footerAbout" element={<AboutUs/>}/>
            {/* // Service  */}
            <Route path="footResidential" element={<Service1 />} />
            <Route path="footerCommercial" element={<Service2 />} />
            <Route path="footerTurnkey" element={<Service3 />} />
            <Route path="footerVisualization" element={<Service4 />} />
            <Route path="footerRenovation" element={<Service5 />} />
            <Route path="footerFurniture" element={<Service6 />} />
            <Route path="footerVastu" element={<Service7 />} />
            {/* Project  */}
            {/* project 1 */}
            <Route path="footerResidentialProject" element={<Project/>}/>
            
            {/* project 2 & so on     */}
            <Route path="footerCommercialProject" element={<Project2/>}/>
            <Route path="footerCorporateProject" element={<Project3/>}/>
            <Route path="footerTurnKeyProject" element={<Project4/>}/>
         



           </Route>
        </Routes>
      </Suspense>
        <PopupForm />
    </>
  );
}

export default App;
