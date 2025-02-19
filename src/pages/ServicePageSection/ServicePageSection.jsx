import './ServicePageSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useState } from 'react'


const ServicePageSection = () => {
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
        <li><Link to='/' className='service-page-navbar-menu-link-sidebar ' onClick={()=>setShowLinks(false)}>Home</Link></li>
        <li><Link to='/about-us' className='service-page-navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>About Us</Link></li>
        <li><Link to='/services' className='service-page-navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>Services</Link></li>
        
        <li className='dropdown' >
          <Link to='/resources' className='service-page-navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>Resources</Link>
          <ul className="dropdown-menu">
            <li><Link to='/blogs' className='dropdown-link-sidebar exclude-blur'  onClick={()=>setShowLinks(false)}>Blogs</Link></li>
            <li><Link to='/success-stories' className='dropdown-link-sidebar exclude-blur' onClick={()=>setShowLinks(false)}>Success Stories</Link></li>
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
          <li>
            <details className='panel'>
              <summary>Web Development</summary>
              <p>A well-designed website enhances brand visibility, creates a strong first impression, and converts visitors into loyal customers.</p>
              <p>A website can be more than an information hub—it can serve as a customer engagement tool or a sales funnel for your business.</p>
  

            </details>
          </li>
          <li>
            <details className='panel'>
              <summary>Digital Advertising</summary>
              <p>Targeted ads effectively boost visibility, engagement, and sales, even for businesses with tight budgets.</p>
              <p>Advertise with us and see visible and long-term results.</p>
  

            </details>
          </li>
          <li>
            <details className='panel'>
              <summary>Social</summary>
              <p>An effective social media strategy helps attract new customers, engage them with valuable content, and build loyal followers</p>
              <p>With the right approach, social media simplifies customer relationship management and drives business growth</p>
  

            </details>
          </li>
          <li>
            <details className='panel'>
              <summary>Reputation Management</summary>
              <p>A good reputation builds credibility, but ignoring negative reviews can drive customers away.</p>
              <p>Manage reviews from one dashboard, request feedback, and turn negative reviews into opportunities for customer satisfaction and brand growth.</p>
  

            </details>
          </li>
          <li>
            <details className='panel'>
              <summary>Listing</summary>
              <p>Accurate business listings ensure your local customers can find and contact you easily online.</p>
              <p>Manage, claim, and monitor your listings with us.</p>
  

            </details>
          </li>
          <li>
            <details className='panel'>
              <summary>SEO</summary>
              <p>High search rankings are crucial for business success, as visibility increases the chances of attracting customers.</p>
              <p>Be ready to show up at every opportunity with our SEO solutions.</p>
  

            </details>
          </li>
          <li>
            <details className='panel'>
              <summary>Analytics</summary>
              <p>Analytics provides data-driven insights to measure, track, and optimize business performance</p>
              <p>Unlock the power of data to drive smarter decisions and accelerate growth with actionable insights</p>
  

            </details>
          </li>


         </ul>
         </div>


        </div>
      </div>
    
    </div>
  )
}

export default ServicePageSection
