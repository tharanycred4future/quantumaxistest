import './Header.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import SliderWithPopup from '../Slider/Slider'
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className='header '>
     
     <section>
      <div className="title">
        <i className="fas fa-angle-double-left"></i> <h4>Accelerate Your Business Growth</h4><i className="fas fa-angle-double-right"></i>
       
       
        </div>
        <p className='hero-text'>We just don’t sell you our marketing solutions; we help you utilize these solutions to increase your sales beyond what you were doing before joining us. </p>
        
        <motion.button 
        className='hero-button'
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}>
        Connect With us
        </motion.button>
    
     </section>

     

      {/* Absolutely positioned Slider */}
      <div className="slider-wrapper">
        <SliderWithPopup />
      </div>

     
    </div>
  );
}

export default Header

