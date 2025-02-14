import { Link } from 'react-router-dom'
import './DataSecurity.css' 

const DataSecurity = () => {
  return (
    <div className='data-security-container'>
      <h2>Data Security</h2>
      <p className='data-security-text'>Our Data Security is currently under development. We are working diligently to create a comprehensive policy that will ensure the protection of our systems, data, and users.</p>
      <hr />
      <h3>Contact Us</h3>
      <p className="data-security-contact-text">If you have any questions or concerns about our information security practices, please don&apos;t hesitate to reach out:</p>
      <p className='data-security-email'>Email:<span> outreach@americanacceleratus.com</span></p>

      <Link to='/'><button className='data-security-btn'>Back To Home</button></Link>
    </div>
  )
}

export default DataSecurity
