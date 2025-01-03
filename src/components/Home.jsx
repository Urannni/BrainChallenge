import React from "react";
import "../App.css";
import Footer from "./Footer";
import "./Footer.css";
import Cards from "./Cards";
import "./Cards.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="App-header">
      <Navbar />

      <div className="herosection">
        <div className="brainbulb">
          <h1 className="heroh1">Brain Challenge</h1>
          <h2 className="heroh2">
            Challenge your mind and enjoy our exciting collection of brain games
            and quizzes! Designed to keep your mind sharp, we combine fun and
            mental stimulation with activities for all, from puzzle enthusiasts
            to trivia lovers.
          </h2>
        </div>

        <div className="brainworkout">
          <h1 className="heroh1">Brain Workout</h1>
          <h2 className="heroh2">
            Give your brain a workout and enjoy our wide collection of puzzles
            and quizzes! Designed to keep you sharp and curious, we offer fun
            and stimulating activities for all, from logic problem solvers to
            memory game fans.
          </h2>
        </div>
      </div>
      <Cards />

      <Footer />
    </div>
  );
}

export default Home;
