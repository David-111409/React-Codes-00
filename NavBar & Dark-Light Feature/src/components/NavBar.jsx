import { useContext } from "react";
import "./NavBar.css";
import logo_light from "../assets/logo-black.png";
import logo_dark from "../assets/logo-white.png";
import search_light from "../assets/search-w.png";
import search_dark from "../assets/search-b.png";
import toggle_light from "../assets/night.png";
import toggle_dark from "../assets/day.png";
import { darkContext } from "../App";
function NavBar() {
  const { dark, handleDark } = useContext(darkContext);
  return (
    <div className={"navbar" + (dark ? " dark" : "")}>
      <a href="">
        {" "}
        <img src={dark ? logo_dark : logo_light} alt="" className="logo" />
      </a>
      <ul className={dark ? "dark" : ""}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className={dark ? "search-box dark" : "search-box"}>
        <input type="text" placeholder="Search" />
        <a href="">
          <img
            src={dark ? search_dark : search_light}
            alt=""
            className="search-icon"
          />
        </a>
      </div>

      <button onClick={() => handleDark()}>
        <img
          src={dark ? toggle_dark : toggle_light}
          alt="toggle-icon"
          className="toggle-icon"
        />
      </button>
    </div>
  );
}

export default NavBar;
