import { Link } from 'react-router-dom'
import './GeneralTerms.css' 

const GeneralTerms = () => {
  return (
    <div className='general-terms-container'>
      <h2>General Terms</h2>
      <p className='general-terms-text'>Our Data Security is currently under development. We are working diligently to create a comprehensive policy that will ensure the protection of our systems, data, and users.</p>
      <hr />
      <h3>Contact Us</h3>
      <p className="general-terms-contact-text">If you have any questions or concerns about our information security practices, please don&apos;t hesitate to reach out:</p>
      <p className='general-terms-email'>Email:<span> outreach@americanacceleratus.com</span></p>

      <Link to='/'><button className='general-terms-btn'>Back To Home</button></Link>
    </div>
  )
}

export default GeneralTerms
