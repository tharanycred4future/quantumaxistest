import './Resources.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

const Resources = () => {
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
           <div className="toggle-btn"><FontAwesomeIcon icon={faBarsStaggered} /></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Resources
