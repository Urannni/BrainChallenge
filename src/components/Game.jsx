import React, { useState, useEffect } from "react";
import "./Game.css"
import Score from "./Score.jsx";
import Hands from "./Hands.jsx";
import rockHandButton from "../assets/rock-human--button.png";
import paperHandButton from "../assets/paper-human-button.png";
import scissorsHandButton from "../assets/scissors-human-button.png";

function Game() {
  const [humanChoice, setHumanChoice] = useState(null);
  const [aiChoice, setAiChoice] = useState(null);
  const [humanScore, setHumanScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [result, setResult] = useState("");
  const [winText, setWinText] = useState("");
  const [showChoices, setShowChoices] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [shakeAnimation, setShakeAnimation] = useState(false);

  function getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  useEffect(() => {
    if (humanChoice !== null && aiChoice !== null) {
      setShakeAnimation(true);
      setShowChoices(false);
      setTimeout(() => {
        setShakeAnimation(false);
        determineWinner();
      }, 1500);
    }
  }, [aiChoice, humanChoice]);
          
  useEffect(() => {
    if (humanScore === 5 || aiScore === 5) {
      setShowChoices(true);
      setShowResult(true);
      setPlayAgain(true);
    }
  }, [humanScore, aiScore]);

  function determineWinner() {
    setTimeout(() => {
      if (humanChoice === aiChoice) {
        setWinText("It's A Tie!");
        setShowResult(true);
        return "tie";
      } else if (
        (humanChoice === "rock" && aiChoice === "scissors") ||
        (humanChoice === "paper" && aiChoice === "rock") ||
        (humanChoice === "scissors" && aiChoice === "paper")
      ) {
        setShowResult(true);
        setHumanScore(humanScore + 1);
        setWinText("You Win!");
        return "human";
      } else if (
        (aiChoice === "rock" && humanChoice === "scissors") ||
        (aiChoice === "paper" && humanChoice === "rock") ||
        (aiChoice === "scissors" && humanChoice === "paper")
      ) {
        setShowResult(true);
        setAiScore(aiScore + 1);
        setWinText("AI Wins!");
        return "ai";
      }
    }, 1000)
  }

  function choice(choice) {
    setHumanChoice(choice);
    setAiChoice(getRandomChoice());
  }

  function restart() {
    setHumanScore(0);
    setAiScore(0);
    setHumanChoice(null);
    setAiChoice(null);
    setShowResult(false);
    setShowChoices(true);
  }

  function nextRound() {
    setHumanChoice(null);
    setAiChoice(null);
    setShowChoices(true);
    setShowResult(false);
  }

  function playAgainFunc() {
    restart();
  }

  return (
    <div className="game">
      <Score aiScore={aiScore} humanScore={humanScore} />
      <Hands
        aiHand={shakeAnimation ? "rock" : aiChoice}
        humanHand={shakeAnimation ? "rock" : humanChoice}
        shake={shakeAnimation}
      />
      {showChoices && (
        <div className="buttons">
          <button className="button" onClick={() => choice("rock")}>
            <img src={rockHandButton} alt="" />
          </button>
          <button className="button" onClick={() => choice("paper")}>
            <img src={paperHandButton} alt="" />
          </button>
          <button className="button" onClick={() => choice("scissors")}>
            <img src={scissorsHandButton} alt="" />
          </button>
        </div>
      )}
      {showResult && (
        <div className="result">
          <div>
            {winText}
            <br />
            {"Your score: " + humanScore} <br /> {"AI score: " + aiScore}
          </div>
          <div className="result-buttons">
            <button onClick={() => restart()}>Restart</button>
            <button onClick={() => nextRound()}>Next Round</button>
            {playAgain && (
              <div>
                <button onClick={() => playAgainFunc()}>Play Again</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;