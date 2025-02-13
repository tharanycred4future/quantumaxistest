import './Navbar.css';  
import  { useState } from 'react';
import logo from '../../assets/logo1.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    
    <div className='navbar'>
      <img src={logo} alt="" className="logo" />
      

      <ul className="navbar-menu">
        <li><Link to='/' className='navbar-menu-link  underline'>Home</Link></li>
        <li><Link to='/about-us' className='navbar-menu-link underline'>About Us</Link></li>
        <li><Link to='/services' className='navbar-menu-link underline'>Services</Link></li>
        
        <li className='dropdown' >
          <Link to='/resources' className='navbar-menu-link underline'>Resources</Link>
          <ul className="dropdown-menu">
            <li><Link to='/blogs' className='dropdown-link' >Blogs</Link></li>
            <li><Link to='/success-stories' className='dropdown-link'>Success Stories</Link></li>
          </ul>
        </li>
       
        <li><Link to='/contact-us' className='navbar-menu-link underline'>Contact Us</Link></li>

      </ul>

      {/*Hamburger menu */}
      <FontAwesomeIcon icon={faBarsStaggered}  className="menu " onClick={()=>setShowLinks(!showLinks)} />
      

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




    
  )
}

export default Navbar;

