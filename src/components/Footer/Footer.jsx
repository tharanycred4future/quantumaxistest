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
            <div className="social-links">
                <img onClick={()=>window.open('https://www.instagram.com/','blank')}src={assets.instagram} alt="" className="social-link" />
                <img onClick={() =>window.open('https://www.linkedin.com/', '_blank')} src={assets.linkedin} alt="" className="social-link" />
                <img onClick={()=>window.open('https://x.com/?logout=1738668653595&mx=2', '_blank')} src={assets.twitter} alt="" className="social-link" />
            </div>
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
        </div>
          
         
          <div className="footer-bottom">
          <hr />
          <div className='footer-text'>
            <div className="footer-text-left ">
                <a href='#'>© {year} Quantum-Axis All Rights Reserved</a>
            </div>
            <div className="footer-text-right">
              <a className='underline' href='#'>Terms of Service </a>
              <a className='underline' href="#">    Privacy Policy</a>
            </div>
            </div>
          </div>
    </div>
  </div>
  )
}

export default Footer

