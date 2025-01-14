import "./Mywork.css";
import mywork_data from "../../assets/mywork_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img src={work.w_img} key={index} />;
        })}
      </div>

      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} />
      </div>
    </div>
  );
};

export default Mywork;
