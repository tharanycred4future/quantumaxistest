
import "./Popup.css"; 
import PropTypes from "prop-types"; // Import PropTypes
import { assets } from "../../assets/assets";

const Popup = ({setShowForm}) => {
  

  

  // Close when clicking outside the popup
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      setShowForm(false)
    }
  };

  return (
    <div>
      <div className="popup-overlay active" onClick={handleOverlayClick}>
          <div className="popup">
            <div className="popup-container">
              <div className="popup-title">
              <h2>Get Free Report</h2>
              <img className="close-popup-btn cross-icon" onClick={()=>setShowForm(false)} src={assets.crossIcon} alt="" />
              </div>
              <div  className='popup-inputs'>
              <input type="text" className="popup-input" placeholder="Your Name"/>
              <input type="email" className="popup-input" placeholder="Your email"/>
              <input type="text" className="popup-input" placeholder="Your Business Name"/>
              </div>
              <button className="popup-button">Submit</button>
            </div>
            
           
           
          </div>
        </div>
      
    </div>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired, // `isOpen` must be a boolean and required
  setIsOpen:PropTypes.bool.isRequired,
  setShowForm: PropTypes.func.isRequired,
};

export default Popup;
