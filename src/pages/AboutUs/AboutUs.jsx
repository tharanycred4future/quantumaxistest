import { assets } from '../../assets/assets'
import './AboutUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const AboutUs = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
        <>
    <div className='about-us-container'>
      <div className="about-us-header ">
      <div className='abt-us-navbar' >
       <div >
       <Link to='/'><img className="abt-us-logo" src={assets.logoBgRemoved} alt=""  /></Link>
       </div >
       <div>
         <ul  className="alt-navbar-links">
    
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
    </div>

    <div className="toggle-btn" onClick={()=>setShowLinks(!showLinks)}><FontAwesomeIcon icon={faBarsStaggered} /></div>
    <ul className="sidebar-menu" style={{display:showLinks?"flex":"none"}}>
        <li><Link to='/' className='navbar-menu-link-sidebar ' onClick={()=>setShowLinks(false)}>Home</Link></li>
        <li><Link to='/about-us' className='navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>About Us</Link></li>
        <li><Link to='/services' className='navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>Services</Link></li>
        
        <li className='dropdown' >
          <Link to='/resources' className='navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>Resources</Link>
          <ul className="dropdown-menu">
            <li><Link to='/blogs' className='dropdown-link-sidebar exclude-blur'  onClick={()=>setShowLinks(false)}>Blogs</Link></li>
            <li><Link to='/success-stories' className='dropdown-link-sidebar exclude-blur' onClick={()=>setShowLinks(false)}>Success Stories</Link></li>
          </ul>
        </li>
       
        <li><Link to='/contact-us' className='navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>Contact Us</Link></li>
        </ul>

    </div>
    
        <div className="abt-us-hero">
          <h2>We Bring Market Insight, Knowledge, and Experience To Your Marketing Blueprint</h2>
          <p>As highly integrated business professionals, the leadership of QA brings immense knowledge and professionalism to our dealings. Collectively, we can help you tackle all your marketing challenges with ease.<br />
          With us, you can expect much more marketing acumen beneath the surface as we help your business grow.</p>
        </div>
      
      </div>
      <div className='abt-us-mission'>
        <div className="abt-us-mission-text">
        <h3>Our Mission</h3>
        <p>The goal of  Quantum Axis is to provide top-tier marketing services at the most reasonable price on the market. We aim to give our clients access to the benefits of a Platinum Google partnership, an international marketing workforce, and continuous support regardless of size, industry, or marketing footprint.</p>
        <p>We are here for you and provide multiple tiers of service to aid you in whichever stage of growth your company is on its path to maturity. See what we are capable of when we work together!</p>
        </div> 
        <img src={assets.missionImg} alt="" className="mission-img" />

      </div>

      <div className="core-values-section">
        <div className="core-values-title">
          <h3>Core Values</h3>
          <p>Our core values at QA consist of the following:</p>

        </div>
        <div className="core-values">
          <div className="core-values-cover">
          <div  className="core-value">
          <i className="fa-solid fa-award"></i>
            <h5>Transparency</h5>
            <p>It is important to us to be upfront about the services we provide and their realistic outcomes for your business. It is not in any stakeholder’s best interest to be sold on a product or service that is not right for their business at that time.</p>
          </div>
          <div className="core-value">
          
 

           <i className="fa-solid fa-seedling"></i>
           <h5>Frugality</h5>
           <p>Marketing costs are inevitable, but every dollar should be spent efficiently to minimize waste. Regardless of revenue, reducing costs while maintaining quality is always a priority.</p>
          </div>
          <div className="core-value">
          <i className="fa-solid fa-recycle"></i>
            <h5>Longevity</h5>
            <p>We believe that the mission of QA revolves around helping small businesses grow, which is why we progressively introduce certain tools and services as our relationship begins to develop and trust is established.</p>
          </div>
          <div className="core-value">
          <i className="fa-solid fa-scroll"></i>
            <h5>Altruism</h5>
            <p>As a marketing company, we understand that the content we produce will reach wide audiences. It is our core belief that anything we release will not be detrimental to any stakeholders or potential content viewers.</p>
          </div>
         
          <div className="core-value">
          <i className="fa-solid fa-hand-holding-hand"></i>
            <h5>Inclusion</h5>
            <p>In a modern, technologically connected world, there is no room for exclusion based on race, class, education level, etc. We stand by these beliefs and hire accordingly.</p>
          </div>

          </div>
          
        </div>
      </div>

     
    </div>
    </>
  )
}

export default AboutUs
