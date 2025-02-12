import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './pages/AboutUs/AboutUs'
import Resources from './pages/Resources/Resources'
import ContactUs from './pages/ContactUs/ContactUs'
import Footer from "./components/Footer/Footer"

import ServicePageSection from './pages/ServicePageSection/ServicePageSection'


function App() {
  

  return (
      <>
      <div className='app'>
        <Navbar />
     
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path='/services' element={<ServicePageSection/>} />
          <Route path='/resources' element={<Resources/>} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>

        
      </div>
      
      <Footer />
      </>

    
  )
}

export default App
