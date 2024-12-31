import React from "react";
import { Link } from "react-router-dom";
import "../components/Footer.css";
import fbIcon from "../assets/fb.png";
import twitterIcon from "../assets/x.png";
import ytIcon from "../assets/yt.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <ul className="footer-links">
          <li>
            <Link to="/MemoryCards" className="footer-link">
              Memory Game
            </Link>
          </li>
          <li>
            <Link to="/Game" className="footer-link">
              Rock Paper Scissors Shoot!
            </Link>
          </li>
          <li>
            <Link to="/Quiz" className="footer-link">
              Logic Quiz
            </Link>
          </li>
        </ul>
        <div className="footer-icons">
          <img src={fbIcon} alt="Facebook" className="icon iconfb" />
          <img src={twitterIcon} alt="Twitter" className="icon icontw" />
          <img src={ytIcon} alt="YouTube" className="icon iconyt" />
        </div>
        <h5 className="footer-text">
          © 2024 Brain Challenge. All Rights Reserved. Empowering minds through
          innovation and knowledge. Connect with us:
          <p className="footer-email">Brainchallenge@company.com</p>
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
