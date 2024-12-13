import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../assets/brainlogo.png";
import brainlightbulb from "../assets/brain-light-bulb.jpg";
import Footer from "./Footer";
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
            <Link to="/Game" className="nav-link navbar-link">RockPaperScissors</Link>
          </li>
          <li>
            <Link className="nav-link navbar-link" to="/MemoryCards">Memory</Link>
          </li>
          <li className="nav-link">
              <Link to="/Quiz" className="navbar-link">Quiz</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <div className="herosection">
        <h2 className="heroh2">Challenge your mind and have fun with our collection of 
          brain games and quizzes designed to keep your thinking sharp
          and your curiosity satisfied! We believe that learning and 
          entertainment go hand in hand, which is why we offer a wide 
          range of activities for everyone, from puzzle enthusiasts to trivia love.</h2> 
          <img src={brainlightbulb} alt="Brain light bulb" className="brainbulb"/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
