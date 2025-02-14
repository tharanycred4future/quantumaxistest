import './CookiePolicy.css'
import { Link } from 'react-router-dom'

const CookiePolicy = () => {
  return (
    <div className="cookie-policy-container">
      <h2>Cookie Policy</h2>
      <p className='cookie-policy-text'>Our Cookie Policy is currently under development. We are working diligently to create a comprehensive policy that will ensure the protection of our systems, data, and users.</p>
      <hr />
      <h3>Contact Us</h3>
      <p className="cookie-policy-contact-text">If you have any questions or concerns about our information security practices, please don&apos;t hesitate to reach out:</p>
      <p className='cookie-policy-email'>Email:<span> outreach@americanacceleratus.com</span></p>

      <Link to='/'><button className='cookie-policy-btn'>Back To Home</button></Link>
    </div>
  )
}

export default CookiePolicy
