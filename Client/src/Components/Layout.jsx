import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import {Outlet} from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar/>
     <Outlet/>  
     {/* /// wherechild route is inseerrt */}
      <Footer/>
    </>
  )
}

export default Layout
