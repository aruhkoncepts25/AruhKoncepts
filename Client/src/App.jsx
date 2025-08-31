import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from './Components/ScrollToTop';

import { Routes, Route } from "react-router-dom";

// Components
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Project from "./Components/Project";
import MainProject from "./Components/MainProject";
import OurService from "./Components/OurService";
import Layout from "./Components/Layout";
import Service1 from "./Components/ServiceCompo/Service1";  // residential
import Service2 from "./Components/ServiceCompo/Service2"; // commercial
import Service3 from "./Components/ServiceCompo/Service3"; // turnkey
import Service4 from "./Components/ServiceCompo/Service4";  // visualization
import Service5 from "./Components/ServiceCompo/Service5";  // renovation
import Service6 from "./Components/ServiceCompo/Service6";  // furniture
import Service7 from "./Components/ServiceCompo/Service7";  // vastu

 // commercial


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="headNav" element={<Home/>}/>
          <Route path="aboutus" element={<AboutUs/>}/>
          <Route path="projectKnowMore" element={<MainProject/>}/>
          <Route path="about" element={<AboutUs />} />
          <Route path="mainproject" element={<MainProject />} />
          <Route path="ourservice" element={<OurService />} />
          <Route path="project" element={<Project />} />
          {/* //// */}
          <Route path="service/residential" element={<Service1 />} />
          <Route path="service/commercial" element={<Service2 />} />
          <Route path="service/turnkey" element={<Service3 />} />
          <Route path="service/visualization" element={<Service4 />} />
          <Route path="service/renovation" element={<Service5 />} />
          <Route path="service/furniture" element={<Service6 />} />
          <Route path="service/vastu" element={<Service7 />} />


        </Route>
      </Routes>
    </>
  );
}

export default App;
