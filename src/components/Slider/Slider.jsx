import { useRef, useEffect,useState } from "react";
import { motion , useAnimation } from "framer-motion";
import './Slider.css';

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

  // Popup animation settings
  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
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
        <button className="cta-button" onClick={() => setShowForm(true)}>
          Free Snap Shot Report
        </button>
      </motion.div>

      {/* Popup Form */}
      {showForm && (
        <motion.div className="popup-overlay" initial="hidden" animate="visible" exit="hidden" variants={popupVariants}>
          <div className="popup">
            <h3>Get Your Free Report</h3>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <button className="submit-button">Submit</button>
            <button className="close-button" onClick={() => setShowForm(false)}>Close</button>
          </div>
        </motion.div>
      )}
    </div>
   
    </>
  );
};

export default SliderWithPopup;
