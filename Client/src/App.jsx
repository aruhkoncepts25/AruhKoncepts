import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Project from "./Components/Project";
import OurService from "./Components/OurService";
import {Routes,Route} from 'react-router-dom'
import Layout  from "./Components/Layout";
function App() {


  return (
    <>
   <Routes>
      {/* Layout as parent */}
      <Route path="/" element={<Layout />}>
        {/* Child routes inside <Outlet /> */}
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="project" element={<Project />} />
        <Route path="ourservice" element={<OurService />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
