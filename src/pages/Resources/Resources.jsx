import './Resources.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Resources = () => {
  const [showLinks,setShowLinks] = useState(false)
  return (
    <div className='resources-page'>
      <div className="resources-page-container">
        <div className="resorces-page-header">
          <div className="resources-page-nav-bar">
          <div>
            <Link to='/'><img className="resources-page-logo" src={assets.logoBgRemoved} alt=""  /></Link>
          </div>
           <ul className="resources-nav-bar-links">
           <li className="resources-navbar-link  underline"><Link  to='/'>Home</Link></li>
      <li className="resources-navbar-link underline"><Link to='/about-us'>About Us</Link></li>
      <li className="resources-navbar-link underline"><Link to='/services'>Services</Link></li>

      <li className='dropdown' >
      <li className="resources-navbar-link underline"><Link to='/resources'>Resources</Link></li>
      <ul className="dropdown-menu">
            <li><Link to='/blogs' className='dropdown-link' >Blogs</Link></li>
            <li><Link to='/success-stories' className='dropdown-link'>Success Stories</Link></li>
      </ul>
      </li>
      <li className="resources-navbar-link underline"><Link to='/contact-us'>Contact Us</Link></li>
      
           </ul>
           <div className="resources-toggle-btn" onClick={()=>setShowLinks(!showLinks)} ><FontAwesomeIcon icon={faBarsStaggered} /></div>
           <ul className="resources-sidebar-menu" style={{display:showLinks?"flex":"none"}}>
                        <li><Link to='/' className='resources-navbar-menu-link-sidebar ' onClick={()=>setShowLinks(false)}>Home</Link></li>
                        <li><Link to='/about-us' className='resources-navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>About Us</Link></li>
                        <li><Link to='/services' className='resources-navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>Services</Link></li>
        
                        <li className='dropdown' >
                          <Link to='/resources' className='resources-navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>Resources</Link>
                          <ul className="dropdown-menu">
                              <li><Link to='/blogs' className='dropdown-link-sidebar '  onClick={()=>setShowLinks(false)}>Blogs</Link></li>
                              <li><Link to='/success-stories' className='dropdown-link-sidebar ' onClick={()=>setShowLinks(false)}>Success Stories</Link></li>
                          </ul>
                        </li>
       
                        <li><Link to='/contact-us' className='resources-navbar-menu-link-sidebar' onClick={()=>setShowLinks(false)}>Contact Us</Link></li>
                    </ul>
                     
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Resources
