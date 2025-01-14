import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import "./Contact.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    Email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      ...formData,
      access_key: "d4ebf8a2-4538-4980-8c6d-c28231ed174b",
    };

    const json = JSON.stringify(payload);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      setFormData({
        name: "",
        Email: "",
        message: "",
      });
    }
  };

  return (
    <div className="contact">
      <div className="contact-title" id="contact">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, So feel free to send me a message about
            anything that you want me work on. You can contact anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} />
              <p>m.umarwaheed123@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} />
              <p>+92 3216454307</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} />
              <p>Gujranwala, Pakistan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="Email">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
          />
          <label htmlFor="message">Write Your Message here</label>
          <textarea
            name="message"
            rows="3"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
