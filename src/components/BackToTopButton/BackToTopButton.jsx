import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./BackToTopButton.css";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const footerOffset = footer ? footer.offsetTop : document.body.scrollHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (scrollPosition >= footerOffset - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
