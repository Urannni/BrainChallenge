import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const goToQuiz = () => {
    navigate("/Quiz");
  };

  return (
    <div className="App-header">
      <nav>
        <div className="links">
          <button onClick={goToQuiz}>Quiz</button>
        </div>
      </nav>
    </div>
  );
}

export default Home;
