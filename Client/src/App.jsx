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

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <ScrollToTop /> {/* ✅ Scroll to top on route change */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="mainproject" element={<MainProject />} />
          <Route path="ourservice" element={<OurService />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
