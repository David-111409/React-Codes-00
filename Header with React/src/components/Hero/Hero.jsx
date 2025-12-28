import "./Hero.css";
import arrow_btn from "../../Assets/arrow_btn.png";
import play_icon from "../../Assets/play_icon.png";
import pause_icon from "../../Assets/pause_icon.png";
function Hero({
  playState,
  setPlayState,
  heroData,
  heroCount,
  stopNavigation,
  nav,
  setHeroCount,
}) {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData[heroCount].text1}</p>
        <h1>{heroData[heroCount].text2}</h1>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li className={"dot" + (heroCount === 0 ? " active" : "")}></li>
          <li className={"dot" + (heroCount === 1 ? " active" : "")}></li>
          <li className={"dot" + (heroCount === 2 ? " active" : "")}></li>
          <button
            className="next"
            onClick={() => {
            //   handleNav(true);
              if(nav){
                setHeroCount((prev) => (prev === 2 ? 0 : prev + 1));
              }
            }}
          >
            Next
          </button>
          <button onClick={stopNavigation} className="stop-nav">
            {!nav ? "Stop Navigation" : "Start Navigation"}
          </button>
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlayState(!playState)}
            src={playState ? pause_icon : play_icon}
            alt=""
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
