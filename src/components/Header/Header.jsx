import './Header.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import  { motion } from 'framer-motion'
import SliderWithPopup from '../Slider/Slider'

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
 
  return (
    <>
      <div className="header-section-container">
        <div className="header-section-header">
          <div className="home-header-nav-bar">
          <div >
              <Link to='/'><img className="home-logo" src={assets.logoBgRemoved} alt=""  /></Link>
          </div >
                <div>
                    <ul  className="home-navbar-links">
    
                      <li className="home-navbar-link  underline-home"><Link  to='/'>Home</Link></li>
                      <li className="home-navbar-link underline-home"><Link to='/about-us'>About Us</Link></li>
                      <li className="home-navbar-link underline-home"><Link to='/services'>Services</Link></li>

                      <li className='dropdown' >
                          <div className="home-navbar-link underline-home"><Link to='/resources'>Resources</Link></div>
                          <ul className="dropdown-menu">
                            <li><Link to='/blogs' className='dropdown-link' >Blogs</Link></li>
                            <li><Link to='/success-stories' className='dropdown-link'>Success Stories</Link></li>
                          </ul>
                      </li>
                      <li className="home-navbar-link underline-home"><Link to='/contact-us'>Contact Us</Link></li>
                    </ul>
                </div>



                {/*toggle menu*/}
                <div className="toggle-btn" onClick={()=>setShowLinks(!showLinks)}><FontAwesomeIcon  icon={faBarsStaggered} /></div>
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
                  <div className="home-header-hero">
                    <h2>Accelerate Your Business Growth</h2>
                    <p>We just don’t sell you our marketing solutions; we help you utilize these solutions to increase your sales beyond what you were doing before joining us.</p>
                    <Link to='contact-us'><motion.button 
                            className='hero-button'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}>
                            Connect With us
                    </motion.button></Link>
                  </div>
      
              </div>
    
        
        </div>

        <div className="slider-wrapper">
          <SliderWithPopup />
        </div>
      
        </>
   
  );
}

export default Header










{/**/}