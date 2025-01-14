import user_icon from "../../assets/user_icon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>I am a front end devloper with 2 year of experience.</p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} />
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>DESIGNED BY UMAR WAHEED</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
