import "./About.css";
import profile_img from "../../assets/profile_img.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img
            src={profile_img}
            alt=""
            style={{
              width: "250px",
              height: "250px",
            }}
          />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'am a front-end developer with over a decade of professional expertise in the field
            </p>
            <p>My passion for front development is not only </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>React Native</p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>Next js</p>
              <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />

        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
