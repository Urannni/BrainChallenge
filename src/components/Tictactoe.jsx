import React, { useState, useEffect } from "react";
import Board from "./Board";
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./Tictactoe.css";


function Tictactoe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winningCells, setWinningCells] = useState([]);
  const [gameStatus, setGameStatus] = useState("");
  const [bgColor, setBgColor] = useState("rgb(255, 255, 255)"); // Default background color

  // Update game status and background color based on the current state
  useEffect(() => {
    const result = calculateWinner(squares);
    if (result) {
      setGameStatus(`Winner: ${result.winner}`);
      setWinningCells(result.line);
    } else if (squares.every((square) => square !== null)) {
      setGameStatus("Draw");
    } else {
      setGameStatus(`Next player: ${isXNext ? "X" : "O"}`);
    }

    // Update background color based on current player's turn (X or O)
    setBgColor(isXNext ? "rgb(255, 99, 71)" : "rgb(173, 216, 230)");
  }, [squares, isXNext]);

  useEffect(() => {
    // Apply background color to the entire body
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]); // This hook runs when bgColor changes

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
    setWinningCells([]);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return null;
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinningCells([]);
    setGameStatus("");
    setBgColor("rgb(255, 255, 255)"); // Reset background to white
  }

  return (
    <div className="div">
      <Navbar />
      <div className="game">
        <div className="status">
          {gameStatus || `Next player: ${isXNext ? "X" : "O"}`}
        </div>
        <Board
          squares={squares}
          onClick={handleClick}
          winningCells={winningCells}
        />
        <button className="reset-button" onClick={handleReset}>
          Reset Game
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Tictactoe;
