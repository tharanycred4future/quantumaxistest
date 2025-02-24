import './CookiePolicy.css'
import { Link } from 'react-router-dom'

const CookiePolicy = () => {
  return (
    <div className="cookie-policy-container">
      <h2>Cookie Policy</h2>
      <h4>Last updated:20th February, 2025</h4>
      <p className='cookie-policy-text'>Quantum Axis (“we,” “us,” or “our”) uses cookies and similar tracking technologies on the [website name] website (the “Service”). This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.</p>
     <ol className="cookie-policy-content">
      <li className="cookie-policy-list">
      What Are Cookies?
      <p>Cookies are small pieces of data sent from a website and stored on a user&apos;s device by the web browser while the user is browsing. They are widely used to make websites work more efficiently and to provide information to the owners of the site.</p>
      </li>
      <li className="cookie-policy-list">
      . Types of Cookies We Use
      <p>We use the following types of cookies on our Service:</p>
      <p>- Essential Cookies: These cookies are necessary for the website to function properly. They enable you to navigate the site and use its features, such as accessing secure areas.<br/>
        - Performance Cookies: These cookies collect information about how you use our website, such as which pages you visit most often. This data helps us improve the website&apos;s performance and user experience.<br/>
        - Functionality Cookies: These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features.<br/>
        - Targeting Cookies: These cookies track your browsing habits to enable us to show you advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an ad and to measure the effectiveness of ad campaigns.

      </p>
      </li>
      <li className="cookie-policy-list">
      How We Use Cookies
      <p>We use cookies for various purposes:</p>
      <p>- To operate and maintain our Service.<br/>
      - To operate and maintain our Service.<br/>
          - To improve your browsing experience by remembering your preferences.<br/>
          - To analyze how our Service is used and to measure the effectiveness of our marketing campaigns.<br/>
          - To deliver personalized advertising based on your browsing behavior
      </p>
      </li>
      <li className="cookie-policy-list">
      Third-Party Cookies
      <p>In addition to our own cookies, we may also use third-party cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. These third-party cookies are placed by websites other than our own and are subject to the respective privacy policies of these third parties</p>
      </li>
      <li className="cookie-policy-list">
      Your Choices Regarding Cookies
      <p>You have several options to control or limit how cookies are used on our website:</p>
      <p>- Browser Settings: You can configure your web browser to refuse cookies, delete cookies, or notify you when a cookie is set. Please refer to your browser&apos;s help documentation for more information on how to manage cookies.<br/>
        - Opt-Out Tools: Some third-party services provide opt-out mechanisms for their cookies. You can learn more about these options by visiting the websites of those third parties.
      </p>
      <p>Please note that if you disable or refuse cookies, some parts of our Service may become inaccessible or may not function properly</p>
      </li>
      <li className="cookie-policy-list">
      Changes to This Cookie Policy
      <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.</p>
      </li>
     </ol>
      <h3>Contact Us</h3>
      <p className="cookie-policy-contact-text">If you have any questions or concerns about our information security practices, please don&apos;t hesitate to reach out:</p>
      <p className='cookie-policy-email'>Email:<span> outreach@americanacceleratus.com</span></p>

      <Link to='/'><button className='cookie-policy-btn'>Back To Home</button></Link>
    </div>
  )
}

export default CookiePolicy
