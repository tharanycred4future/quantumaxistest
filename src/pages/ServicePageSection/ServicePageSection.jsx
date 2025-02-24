import './ServicePageSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { assets,  } from '../../assets/assets'
import { useState, useContext } from 'react'
import ServicePageItem from '../../components/ServicePageItem/ServicePageItem'
import { StoreContext } from '../../components/context/StoreContext'


const ServicePageSection = () => {
  const {servicesOnPage} = useContext(StoreContext)
  const [showLinks,setShowLinks] = useState(false)
  return (
    <div className='service-page-section'>
      <div className='service-page-section-container'>
        <div className='service-page-section-header'>
         <div className="service-page-navbar">
       <div>
       <Link to='/'><img className="service-page-logo" src={assets.logoBgRemoved} alt=""  /></Link>
       </div>
    <ul className="service-navbar-links">
    
      <li className="service-navbar-link  underline"><Link  to='/'>Home</Link></li>
      <li className="service-navbar-link underline"><Link to='/about-us'>About Us</Link></li>
      <li className="service-navbar-link underline"><Link to='/services'>Services</Link></li>

      <li className='dropdown' >
      <li className="service-navbar-link underline"><Link to='/resources'>Resources</Link></li>
      <ul className="dropdown-menu">
            <li><Link to='/blogs' className='dropdown-link' >Blogs</Link></li>
            <li><Link to='/success-stories' className='dropdown-link'>Success Stories</Link></li>
      </ul>
      </li>
      <li className="service-navbar-link underline"><Link to='/contact-us'>Contact Us</Link></li>
    </ul>
    <div className="service-page-toggle-btn" onClick={()=>setShowLinks(!showLinks)}><FontAwesomeIcon icon={faBarsStaggered} /></div>
    <ul className="service-page-sidebar-menu" style={{display:showLinks?"flex":"none"}}>
        <li><Link to='/' className='service-page-navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>Home</Link></li>
        <li><Link to='/about-us' className='service-page-navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>About Us</Link></li>
        <li><Link to='/services' className='service-page-navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>Services</Link></li>
        
        <li className='dropdown' >
          <Link to='/resources' className='service-page-navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>Resources</Link>
          <ul className="dropdown-menu">
            <li><Link to='/blogs' className='dropdown-link-sidebar exclude-blur'  onClick={()=>setShowLinks(false)}>Blogs</Link></li>
            <li><Link to='/about-us' className='dropdown-link-sidebar exclude-blur' onClick={()=>setShowLinks(false)}>Success Stories</Link></li>
          </ul>
        </li>
       
        <li><Link to='/contact-us' className='service-page-navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>Contact Us</Link></li>
        </ul>
       
    </div>
           {/*services list */}
        <div className='service-page-section-content'>
           <h5>We Strategize Your Marketing Blueprint For Accelerated Growth and Impact</h5>
           <p>Don’t settle for marketing solutions that do not satisfy your expectations. Discover your band growth blueprint with The Quantum Axis and drive sustainable growth from your marketing efforts.</p>
        </div>
        </div>
        <div className='services-timeline' >
         <h1> Our Services</h1>
         <div className="service-page-section-services">
         <ul className="services-list-time-line" >
         {servicesOnPage.map((service, index) => (
            <li key={index}>
              <ServicePageItem title={service.title} content={service.content} />
            </li>
          ))}
         </ul>
         </div>


        </div>
      </div>
    
    </div>
  )
}

export default ServicePageSection
