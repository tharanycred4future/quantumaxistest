
import "./ContactUs.css"; // Import CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareWhatsapp, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBusinessTime } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  return (
    <>
    <div className="contact-form-container">

    
    <div className="contact-us-appear">
      <h1>Contact Us</h1>
      <p>Get in touch with us to learn more about our services and how we can help you.</p>
    </div>
    <div className="contact-container">
      
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p><FontAwesomeIcon icon={faEnvelope} /> outreach@americanacceleratus.com</p>
        <ul> <FontAwesomeIcon className="hours" icon={faBusinessTime} /><strong>Hours of Operation</strong></ul>
            <li className="hours-text">M – F: 8:00 am – 5:00 pm CST</li>

        <div className="contact-form-social-icons">
          <a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faSquareWhatsapp} /></a>
          <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
        </div>
      </div>
      <div className="contact-form">
        
        <form>
          <div className="form-group">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Company Name" />
          </div>
         
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
          
          
          <textarea placeholder="Do you have any questions for us?" />
          
          <button type="submit">Send →</button>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default ContactForm;
