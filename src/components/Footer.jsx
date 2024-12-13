import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="links">
        <p>MemoryGame</p>
        <ul className="footer-links">
          <li>
            <Link to="/Game" className="nav-link navbar-link">Rock Paper Scissors</Link>
          </li>
          <li className="nav-link">
            <Link to="/Quiz" className="navbar-link">
              Logic Quiz
            </Link>
          </li>
        </ul>
        <h5>BrainChallenge, 2024</h5>
      </div>
    </footer>
  );
}

export default Footer;
