import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../assets/brainlogo.png";
import ChooseDifficulty from "./ChooseDifficulty";

function Home() {
  return (
    <div className="App-header">
      {/* Navbar with clickable logo */}
      <nav className="navbar">
        <ul className="navbar-links">
          <li className="navbar-logo">
            <Link to="/" className="navbar-logo-link">
              <img
                src={logo}
                alt="Brain Logo"
                className="navbar-logo-img spin"
              />
            </Link>
          </li>
          <li>
            <Link className="nav-link navbar-link" to={<ChooseDifficulty/>}>MemoryCards</Link>
          </li>
          <li>
            <Link className="nav-link navbar-link">Sigma</Link>
          </li>
          <li className="nav-link">
              <Link to="/Quiz" className="navbar-link">
                Quiz
              </Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <div className="logo-container">
            <img src={logo} alt="Brain Logo" className="center-logo spin" />    
        </div>
      </div>
    </div>
  );
}

export default Home;
