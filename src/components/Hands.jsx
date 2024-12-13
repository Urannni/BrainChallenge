import React from "react";
import aiPaper from "../assets/ai-paper.png";
import aiRock from "../assets/ai-rock.png";
import aiScissors from "../assets/ai-scissors.png";
import humanPaper from "../assets/human-paper.png";
import humanRock from "../assets/human-rock.png";
import humanScissors from "../assets/human-scissors.png";

function Hands(props) {
  // Assign default values to aiHand and humanHand to avoid null or undefined issues
  const aiHand = props.aiHand || "rock";
  const humanHand = props.humanHand || "rock";

  const aiHandClass = props.shake ? "ai-hand shake-ai" : "ai-hand";
  const humanHandClass = props.shake ? "human-hand shake-human" : "human-hand";

  // Helper function to get the corresponding image based on hand choice
  const getHandImage = (hand, images) => {
    return hand === "rock"
      ? images.rock
      : hand === "paper"
      ? images.paper
      : images.scissors;
  };

  return (
    <div className="hands">
      <img
        className={aiHandClass}
        src={getHandImage(aiHand, {
          rock: aiRock,
          paper: aiPaper,
          scissors: aiScissors,
        })}
        alt={`AI chose ${aiHand}`}
      />
      <img
        className={`${humanHandClass} flipped`}
        src={getHandImage(humanHand, {
          rock: humanRock,
          paper: humanPaper,
          scissors: humanScissors,
        })}
        alt={`Human chose ${humanHand}`}
      />
    </div>
  );
}

export default Hands;
