import'./Footer.css';
import {assets} from '../../assets/assets';
import { Link } from 'react-router-dom';
const Footer = () => {
  var year = new Date().getFullYear();
  console.log(assets.logo);
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-content-left">
            <div className='footer-content-left-in'>
            <img src={assets.logo} alt="" className="footer-logo" />
            
            </div>
            <div className="social-icons">
            <ul >
              <p>Connect with us:</p>
            <div className="social-links">
                <img onClick={() =>window.open('', '_blank')} src={assets.facebookIcon} alt="" className="social-link" />
                <img onClick={()=>window.open('','blank')}src={assets.instagram} alt="" className="social-link" />
                <img onClick={()=>window.open('', '_blank')} src={assets.whatsappIcon} alt="" className="social-link" />
            </div>
          </ul>
          </div>
          </div>
          <div className="footer-content-center">
          <ul >
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/our-team">Our Team</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
          </div>
          <div className="footer-content-right" >
              <ul >
              <li><Link to="/general-terms">General Terms</Link></li>
              <li><Link to="/data-security">Data Security</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              </ul>
          </div>
          
        </div>
          
         
          <div className="footer-bottom">
          <hr />
          <div className='footer-text'>
            <div className="footer-text-left">
                <a href='#'>© {year} Quantum-Axis All Rights Reserved</a>
            </div>
            <div className="footer-text-right">
             <Link  to="/terms-of-service"><p>Terms of Service</p></Link>
             
             <Link to="/privacy-policy"><p>Privacy Policy</p></Link>         
             
            </div>
            </div>
          </div>
    </div>
  </div>
  )
}

export default Footer

