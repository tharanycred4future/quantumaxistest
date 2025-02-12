import'./Footer.css';
import {assets} from '../../assets/assets';
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
          </div>
          <div>
             <ul  className="footer-content-center">
              <li className='underline'><a>About Us</a></li>
              <li className='underline'><a>Our Team</a></li>
              <li className='underline'><a>Contact Us</a></li>
             </ul>
          </div>
          <div >
              <ul className="footer-content-right">
                <li className='underline'><a>General Terms</a></li>
                <li className='underline'><a>Data Security</a></li>
                <li className='underline'><a>Cookie Ploicy</a></li>
              </ul>
          </div>
          <ul className="social-icons">
              <h3>Connect with us:</h3>
            <div className="social-links">
                 
                <img onClick={() =>window.open('', '_blank')} src={assets.facebookIcon} alt="" className="social-link" />
                <img onClick={()=>window.open('','blank')}src={assets.instagram} alt="" className="social-link" />
                <img onClick={()=>window.open('', '_blank')} src={assets.whatsappIcon} alt="" className="social-link" />
            </div>
          </ul>
        </div>
          
         
          <div className="footer-bottom">
          <hr />
          <div className='footer-text'>
            <div className="footer-text-left">
                <a href='#'>© {year} Quantum-Axis All Rights Reserved</a>
            </div>
            <div className="footer-text-right">
              <a className='underline'  href='#'>Terms of Service </a>
              <div className='alignment'>
              <a className='underline ' href="#" >Privacy Policy</a>
              </div>
            </div>
            </div>
          </div>
    </div>
  </div>
  )
}

export default Footer

