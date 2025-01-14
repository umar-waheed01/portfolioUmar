import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/profile_img.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="home">
      <div className="hero">
        <img
          src={profile_img}
          alt=""
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            objectFit: "conver",
          }}
        />

        <h1>
          <span>I'm Umar Waheed</span> Frontend Developer in Gujranwala Pakistan.
        </h1>
        <p>
          I am a passionate Front-End Web and Mobile App Developer. With expertise in creating
          applications for both Android and iOS.
        </p>
        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" href="#contact" offset={50}>
              Connect With Me
            </AnchorLink>
          </div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
