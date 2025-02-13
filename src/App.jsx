import { Routes,Route,  useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './pages/AboutUs/AboutUs'
import Resources from './pages/Resources/Resources'
import ContactUs from './pages/ContactUs/ContactUs'
import Footer from "./components/Footer/Footer"
import ServicePageSection from './pages/ServicePageSection/ServicePageSection'
import GeneralTerms from './pages/GeneralTerms/GeneralTerms'
import DataSecurity from './pages/DataSecurity/DataSecurity'
import CookiePolicy from './pages/CookiePolicy/CookiePolicy'
import TermsOfService from './pages/TermsOfService/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import AltNavbar from './components/AltNavbar/AltNavbar'


function App() {
  const location = useLocation(); // Get the current route

  // Pages that should use the alternate navbar
  const useAltNavbar = ["/about-us", "/services"].includes(location.pathname);

  // Pages that should **not** have a footer
  const hideFooterPages = ["/resources", "/contact-us"];
  const showFooter = !hideFooterPages.includes(location.pathname);

  

  return (
      <>
      <div className='app'>
        {/* Render different Navbar based on the page */}
        {useAltNavbar ? <AltNavbar /> : <Navbar />}
     
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path='/services' element={<ServicePageSection/>} />
          <Route path='/resources' element={<Resources/>} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/general-terms' element={<GeneralTerms />} />
          <Route path='/data-security' element={<DataSecurity />} />
          <Route path='/cookie-policy' element={<CookiePolicy />} />
          <Route path='/data-security' element={<DataSecurity />} />
          <Route path='/terms-of-service' element={<TermsOfService />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        </Routes>

        
      </div>
      
       {/* Show footer only on allowed pages */}
       {showFooter && <Footer />}
      </>

    
  )
}

export default App
