import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../assets/brainlogo.png";
import Footer from "./Footer";
import "./Footer.css";
import Cards from "./Cards";
import "./Cards.css";

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
            <Link to="/Game" className="nav-link navbar-link">
              RockPaperScissors
            </Link>
          </li>
          <li>
            <Link className="nav-link navbar-link" to="/MemoryCards">
              Memory
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/Quiz" className="navbar-link">
              Quiz
            </Link>
          </li>
        </ul>
      </nav>

      <div className="herosection">
        <div className="brainbulb">
          <h1 className="heroh1">Brain Challenge</h1>
          <h2 className="heroh2">
            Challenge your mind and have fun with our collection of brain games
            and quizzes designed to keep your thinking sharp and your curiosity
            satisfied! We believe that learning and entertainment go hand in
            hand, which is why we offer a wide range of activities for everyone,
            from puzzle enthusiasts to trivia love.
          </h2>
        </div>

        <div className="brainworkout">
          <h1 className="heroh1">Brain Workout</h1>
          <h2 className="heroh2">
            Give your brain a workout and enjoy our engaging collection of
            challenging puzzles and quizzes designed to keep your mind active
            and sharp! We believe in combining fun and mental stimulation,
            offering a variety of activities for all thinkers, from logic
            problem solvers to memory game fans.
          </h2>
        </div>
      </div>
      <Cards />

      <Footer />
    </div>
  );
}

export default Home;
