import React from "react";
import Square from "./Square";

function Board({ squares, onClick, winningCells }) {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
          isWinner={winningCells.includes(index)}
        />
      ))}
    </div>
  );
}

export default Board;
