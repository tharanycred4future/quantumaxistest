import { Link } from 'react-router-dom'
import './TermsOfService.css'	
const TermsOfService = () => {
  return (
    <div className='terms-of-service-container'>
      <h2>Terms of Service</h2>
      <p className='terms-of-service-text'>Our Terms of Service is currently under development. We are working diligently to create a comprehensive policy that will ensure the protection of our systems, data, and users.</p>
      <hr />
      <h3>Contact Us</h3>
      <p className="terms-of-service-contact-text">If you have any questions or concerns about our information security practices, please don&apos;t hesitate to reach out:</p>
      <p className='terms-of-service-email'>Email:<span> outreach@americanacceleratus.com</span></p>

      <Link to='/'><button className='terms-of-service-btn'>Back To Home</button></Link>
      
    </div>
  )
}

export default TermsOfService
