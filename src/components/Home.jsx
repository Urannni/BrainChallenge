import React from "react";
import { Link } from "react-router-dom"; 
import "../App.css";
import logo from "../assets/brainlogo.png"; 

function Home() {
  return (
    <div className="App-header">
      {/* Navbar with logo */}
      <nav className="navbar">
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="Brain Logo" className="navbar-logo spin" />
        </Link>
        <div className="start-quiz">
          <Link to="/Quiz" className="navbar-link">
            Quiz
          </Link>
        </div>
      </nav>

      <div className="content">
        <div className="logo-container">
          <Link to="/" className="logo-img">
            <img src={logo} alt="Brain Logo" className="center-logo spin" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
