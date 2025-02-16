
import { assets } from "../../assets/assets";
import "./SuccessStories.css";

const SuccessStories = () => {
  return (
    <div className="coming-soon-container">
      <img src={assets.successStoriesImg} alt="Coming Soon" />
      <h1>Updates Are on Their Way!</h1>
      <p>We&apos;re working on bringing you amazing content. Stay tuned!</p>
    </div>
  );
};

export default SuccessStories;
