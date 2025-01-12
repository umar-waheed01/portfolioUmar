import profile_img from "../../assets/profile_img.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
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
          <span>I'm Umar Waheed</span>, frontend developer in gujranwala
        </h1>
        <p>I am a frontend developer from gujranwala, Pakistan with 1 year in experience</p>
        <div className="hero-action">
          <div className="hero-connect">Connect With Me</div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
