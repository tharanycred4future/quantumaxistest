import { useRef, useEffect,useState } from "react";
import { motion , useAnimation } from "framer-motion";
import './Slider.css';
import Popup from "../Popup/Popup";


const SliderWithPopup = () => {
  
  const [showForm, setShowForm] = useState(false);
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        } else {
          controls.start('hidden');
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);
  // Slider animation settings
  const sliderVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
  };

 





  return (
    <>
    <div ref={ref}>
      {/* Sliding Banner */}
      <motion.div
        className="slider slider-container "
        initial="hidden"
        animate={controls}
        variants={sliderVariants}
      >
        <h2>Start Your Marketing Journey with a FREE Audit of Your Digital Performance!</h2>
        <button  className="open-popup-btn"onClick={() => setShowForm(true)}>
          Free Snap Shot Report
        </button>
      </motion.div>

      {/* Popup Form */}
      {showForm && (
       
          <div>
            <Popup  setShowForm={setShowForm}/>
            




            
            
            
          </div>
        
      )}
    </div>
   
    </>
  );
};

export default SliderWithPopup;
