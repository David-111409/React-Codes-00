import "./Background.css";
import video1 from "../../Assets/video1.mp4";
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";

function Background({ playVideo, heroCount }) {
  if (playVideo) {
    return (
      <div className="background">
        <video autoPlay loop muted className="fade-in">
          <source src={video1} type="video/mp4" />
        </video>
      </div>
    );
  } else if (heroCount === 0) {
    return (
      <div className="background fade-in">
        <img src={image1} alt="" />
      </div>
    );
  } else if (heroCount === 1) {
    return (
      <div className="background fade-in">
        <img src={image2} alt="" />
      </div>
    );
  } else if (heroCount === 2) {
    return (
      <div className="background fade-in">
        <img src={image3} alt="" />
      </div>
    );
  }
}

export default Background;
