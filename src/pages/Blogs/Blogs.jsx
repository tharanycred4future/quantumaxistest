
import { assets } from "../../assets/assets";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="coming-soon-container">
      <img src={assets.blogImg} alt="Coming Soon" />
      <h1>Blog Updates Are on Their Way!</h1>
      <p>We&apos;re working on bringing you amazing content. Stay tuned!</p>
    </div>
  );
};

export default Blogs;
