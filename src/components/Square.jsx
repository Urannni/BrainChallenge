import React from "react";

function Square({ value, onClick, isWinner }) {
  const squareClass = isWinner ? "square winner" : "square";
  const squareStyle = {
    color: value === "X" ? "red" : value === "O" ? "blue" : "",
    fontWeight: "bold",
    fontSize: "3rem",
  };

  return (
    <button className={squareClass} onClick={onClick} style={squareStyle}>
      {value}
    </button>
  );
}

export default Square;
