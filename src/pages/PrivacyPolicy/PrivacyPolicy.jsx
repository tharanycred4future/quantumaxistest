import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <div className='privacy-policy-container'>
      <h2>Privacy Policy</h2>
      <p className='privacy-policy-text'>Our Data Security is currently under development. We are working diligently to create a comprehensive policy that will ensure the protection of our systems, data, and users.</p>
      <hr />
      <h3>Contact Us</h3>
      <p className="privacy-policy-contact-text">If you have any questions or concerns about our information security practices, please don&apos;t hesitate to reach out:</p>
      <p className='privacy-policy-email'>Email:<span> outreach@americanacceleratus.com</span></p>

      <Link to='/'><button className='privacy-policy-btn'>Back To Home</button></Link>
      
    </div>
  )
}

export default PrivacyPolicy
