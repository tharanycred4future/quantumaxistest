import {motion, useAnimation } from    'framer-motion'
import './GetInTouchButton.css'
import { useRef, useEffect } from "react";
import { Link } from 'react-router-dom';

const GetInTouchButton = () => {
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
const buttonVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3 } },
};

return(
       <>
        <Link to='/contact-us'><div ref={ref}>
    
         <motion.button 
        className="get-in-touch-button"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        initial="hidden"
        animate={controls}
        variants={buttonVariants}>
        Get in touch with us
        </motion.button>
        </div></Link>
    </>
  )
}

export default GetInTouchButton
