import './ServicePageSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'


const ServicePageSection = () => {
  return (
    <div className='service-page-section'>
      <div className='service-page-section-container'>
        <div className='service-page-section-header'>
        <nav>
       <div>
       <img className="abt-us-logo" src={assets.logoBgRemoved
        
       } alt=""  />
       </div>
    <ul className="alt-navbar-links">
    
      <li className="alt-navbar-link  underline"><Link  to='/'>Home</Link></li>
      <li className="alt-navbar-link underline"><Link to='/about-us'>About Us</Link></li>
      <li className="alt-navbar-link underline"><Link to='/services'>Services</Link></li>

      <li className='dropdown' >
      <li className="alt-navbar-link underline"><Link to='/resources'>Resources</Link></li>
      <ul className="dropdown-menu">
            <li><Link to='/blogs' className='dropdown-link' >Blogs</Link></li>
            <li><Link to='/success-stories' className='dropdown-link'>Success Stories</Link></li>
      </ul>
      </li>
      <li className="alt-navbar-link underline"><Link to='/contact-us'>Contact Us</Link></li>
    </ul>
    <div className="toggle-btn"><FontAwesomeIcon icon={faBarsStaggered} /></div>

    </nav>
        <div className='service-page-section-content'>
           <h5>We Strategize Your Marketing Blueprint For Accelerated Growth and Impact</h5>
           <p>Don’t settle for marketing solutions that do not satisfy your expectations. Discover your band growth blueprint with The American Acceleratus and drive sustainable growth from your marketing efforts.</p>
        </div>
        </div>
        <div className="service-page-section-services">
         
        </div>
      </div>
    
    </div>
  )
}

export default ServicePageSection
