import React, { useState } from "react";
import "./Quiz.css";

const questions = [
  {
    question: 
    "What comes next in the sequence? 2, 4, 8, 16, 32, ___",
    options: ["48", "50", "60", "64"],
    answer: "64",
  },
  {
    question:
      "Mary's father has 5 daughters: Nana, Nene, Nini, Nono. What is the name of the fifth daughter?",
    options: ["Nunu", "None", "Nina", "Mary"],
    answer: "Mary",
  },
  {
    question:
      "I am an odd number. Take away one letter, and I become even. What am I?",
    options: ["7", "9", "11", "13"],
    answer: "7",
  },
  {
    question:
      "A doctor gives you 3 pills and tells you to take one every half an hour. How long will it take to finish all the pills?",
    options: ["1 hour", "1.5 hours", "2 hours", "2.5 hours"],
    answer: "1 hour",
  },
  {
    question:
      "Two fathers and two sons go fishing. They catch 3 fish, and each person gets one fish. How is this possible?",
    options: [
      "They are 3 people (grandfather, father, and son)",
      "There are two families",
      "They are related twins",
      "They are 4 people fishing",
    ],
    answer: "They are 3 people (grandfather, father, and son)",
  },
  {
    question:
      "There are three boxes. One contains apples, one contains oranges, and one contains both. Each is labeled incorrectly. How can you label them correctly by picking only one fruit from one box?",
    options: [
      "Pick from the box labeled 'both'",
      "Pick from the box labeled 'apples'",
      "Pick from the box labeled 'oranges'",
      "Ask the storekeeper",
    ],
    answer: "Pick from the box labeled 'both'",
  },
  {
    question:
      "I have keys but no locks. I have space but no room. You can enter, but you can't go outside. What am I?",
    options: ["A keyboard", "A house", "A door", "An airplane"],
    answer: "A keyboard",
  },
  {
    question:
      "What has cities but no houses, forests but no trees, and rivers but no water?",
    options: ["A city plan", "A map", "A book", "A newspaper"],
    answer: "A map",
  },
  {
    question:
      "What is the smallest number you can subtract from another number to get 0?",
    options: ["1", "0", "-1", "None"],
    answer: "0",
  },
  {
    question:
      "A farmer is trying to cross a river with a fox, a chicken, and a bag of grain. He has a small boat that can only carry him and one other item at a time. If left alone, the fox will eat the chicken, and the chicken will eat the grain. How can the farmer get all three items across the river safely?",
    options: ["Take the fox first, then the chicken, and then the grain.",
       " Take the chicken first, return with the fox, then take the grain.",
        "Take the chicken first, return alone, take the grain across, return with the chicken, then take the fox, and finally return to get the chicken.", 
        " It is impossible to get all items across safely."],
    answer: "Take the chicken first, return alone, take the grain across, return with the chicken, then take the fox, and finally return to get the chicken.",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } 
    else {
      setShowResult(true);
    }
  };

  return (
    <div>
      {!showResult ? (
        <div>
          <h1>Logic Quiz</h1>
          <h3>
            Question {currentQuestion + 1} of {questions.length}
          </h3>
          <p style={{ fontSize: "18px", margin: "20px 0" }}>
            {questions[currentQuestion].question}
          </p>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              className="answerButton"
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="div">
          <h1>🎉 Quiz Completed! 🎉</h1>
          <p>
            Your Score: {score} / {questions.length}
          </p>
          <button
            onClick={() => {
              setScore(0);
              setCurrentQuestion(0);
              setShowResult(false);
            }}
            className="restartButton"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
