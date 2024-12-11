import React from "react";
import { Link } from "react-router-dom";

function ChooseDifficulty() {
  return (
    <div className="ChooseDifficulty">
      <Link className="difficulty" to="/MemoryCardsEasy">Easy</Link>
      <Link className="difficulty" to="/MemoryCardsMedium">Medium</Link>
      <Link className="difficulty" to="/MemoryCardsHard">Hard</Link>
    </div>
  );
}

export default ChooseDifficulty;