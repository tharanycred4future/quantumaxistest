import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h2>Privacy policy - Quantum axis</h2>
      <h4 >Last updated: 21st February, 2025</h4>
      <p className="privacy-policy-text">
        Quantum Axis (“we,” “us,” or “our”) operates the Quantum Axis website
        (the “Service”). This Privacy Policy explains how we collect, use, and
        share your personal information when you visit or interact with our
        website. By using our Service, you agree to the collection and use of
        information in accordance with this policy.
      </p>
      <ol>
        <li className="privacy-policy-list">
          Information We Collect
          <p>
            We collect various types of information to provide and improve our
            Service for you, including:
          </p>
          <p>
            - Personal Information: When you create an account, sign up for our
            newsletter, or contact us, we may collect personally identifiable
            information such as your name, email address, phone number, and
            postal address.
            <br />- Usage Data: We may collect information on how you access and
            use our Service, including your IP address, browser type, operating
            system, and pages visited.
            <br /> - Cookies and Tracking Technologies: We use cookies and
            similar tracking technologies to track activity on our Service and
            hold certain information. You can instruct your browser to refuse
            all cookies or to indicate when a cookie is being sent. However, if
            you do not accept cookies, you may not be able to use some portions
            of our Service.
          </p>
        </li>
        <li className="privacy-policy-list">
          How We Use Your Information
          <p>We use the collected information for various purposes:</p>
          <p>
            - To provide and maintain our Service
            <br></br>- To notify you about changes to our Service
            <br></br>- To allow you to participate in interactive features of
            our Service
            <br></br>- To provide customer support
            <br></br>- To gather analysis or valuable information so that we can
            improve our Service
            <br></br>- To monitor the usage of our Service
            <br></br>- To detect, prevent, and address technical issues
            <br></br>- To send you newsletters, marketing, or promotional
            materials and other information that may be of interest to you (if
            you have opted in to receive such communications)
          </p>
        </li>
        <li className="privacy-policy-list">
          <p>Sharing Your Information</p>
          <p>We do not sell or rent your personal information to third parties. However, we may share your information with:</p>
          <p>- Service Providers: We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, perform Service-related services, or assist us in analyzing how our Service is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            <br></br>- Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).
            </p>
        </li>
        <li className="privacy-policy-list">
          <p>Security of Your Information</p>
          <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>

        </li>

        <li className="privacy-policy-list">
          <p>Your Data Protection Rights</p>
          <p>You have the right to:</p>
          <p>- Access, update, or delete the information we have on you
          <br></br>- Object to or restrict the processing of your data
          <br></br>- Withdraw your consent at any time
        </p>
          <p>To exercise these rights, please contact us at outreach@americanacceleratus.com.</p>
        </li>
        <li className="privacy-policy-list">
        <p>Links to Other Sites</p>
        <p>Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.</p>

        </li>
        <li className="privacy-policy-list">
          <p>Children’s Privacy</p>
          <p>Our Service does not address anyone under the age of 13 (“Children”). We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, we take steps to remove that information from our servers.</p>
        </li>
        <li className="privacy-policy-list">
          <p>Changes to This Privacy Policy</p>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
        </li>
      </ol>
      
      <h3>Contact Us</h3>
      <p className="privacy-policy-contact-text">
        If you have any questions or concerns about our information security
        practices, please don&apos;t hesitate to reach out:
      </p>
      <p className="privacy-policy-email">
        Email:<span> outreach@americanacceleratus.com</span>
      </p>

      <Link to="/">
        <button className="privacy-policy-btn">Back To Home</button>
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
