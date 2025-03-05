import {  useState} from "react";
import PropTypes from "prop-types";
import './ServicePageItem.css'
       {/*This code works on Service Page*/}
const ServicePageItem = ({ title, content }) => {

    
    const [expanded, setExpanded] = useState(false);
  
    return (
      <details className="panel">
        <summary>{title}</summary>
        <p>
          {expanded ? content : content.slice(0, 100)} {/* Show first 100 characters */}
          {content.length > 100 && (
            <span onClick={() => setExpanded(!expanded)} className="see-more">
              {expanded ? " See Less" : " ...See More"}
            </span>
          )}
        </p>
      </details>
    );
  };
// ✅ Add PropTypes validation
ServicePageItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  };
  
  export default ServicePageItem