import { assets } from '../../assets/assets'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <div className="about-us-header ">
        <div className="abt-us-hero">
          <h2>We Bring Market Insight, Knowledge, and Experience To Your Marketing Blueprint</h2>
          <p>As highly integrated business professionals, the leadership of TAA brings immense knowledge and professionalism to our dealings. Collectively, we can help you tackle all your marketing challenges with ease.<br />
          With us, you can expect much more marketing acumen beneath the surface as we help your business grow.</p>
        </div>
      
      </div>
      <div className='abt-us-mission'>
        <div className="abt-us-mission-text">
        <h3>Our Mission</h3>
        <p>The goal of The American Acceleratus is to provide top-tier marketing services at the most reasonable price on the market. We aim to give our clients access to the benefits of a Platinum Google partnership, an international marketing workforce, and continuous support regardless of size, industry, or marketing footprint.</p>
        <p>We are here for you and provide multiple tiers of service to aid you in whichever stage of growth your company is on its path to maturity. See what we are capable of when we work together!</p>
        </div>
        
        <img src={assets.missionImg} alt="" className="mission-img" />

      </div>

      <div className="core-values-section">
        <div className="core-values-title">
          <h3>Core Values</h3>
          <p>Our core values at TAA consist of the following:</p>

        </div>
        <div className="core-values">
          
        </div>
      </div>

     
    </div>
  )
}

export default AboutUs
