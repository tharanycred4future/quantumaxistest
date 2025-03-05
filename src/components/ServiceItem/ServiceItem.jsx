

import './ServiceItem.css'
import PropTypes from 'prop-types';

const ServiceItem = ({name,text,image,description}) => {
  return (
    <div className="service-item">
     
      <div className="card">
              {/*Service Item Front  */}
              <div  className="service-item-img-container front" >
                <img src={image} alt="service Item Icon" className="service-item-img" />
                <p className="front-text">{name}</p>
              </div>
              
               {/*Service Item back on hovering  */}
              <div className="service-item-des back">
        
                  <h3 className="service-item-title">{name}</h3>
                  <p className="service-item-text">{text}</p>
                  <p className="service-item-description">{description}</p>
              </div>
        </div>
        
    </div>
  )
}

ServiceItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServiceItem;


