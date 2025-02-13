
import "./ContactUs.css"; // Import CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareWhatsapp, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBusinessTime } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><FontAwesomeIcon icon={faEnvelope} /> outreach@americanacceleratus.com</p>
        <ul> <FontAwesomeIcon icon={faBusinessTime} />Hours of Operation</ul>
            <li>M – F: 8:00 am – 5:00 pm CST</li>

        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faSquareWhatsapp} /></a>
          <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Company Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone Number" />
          </div>
          
          <textarea placeholder="Do you have any questions for us?" />
          
          <button type="submit">Send →</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
