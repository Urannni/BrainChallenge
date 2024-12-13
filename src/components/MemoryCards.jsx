import React, { useState, useEffect } from "react";
import "./MemoryCards.css";
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";
import image5 from "../assets/image-5.png";
import image6 from "../assets/image-6.png";
import image7 from "../assets/image-7.png";
import image8 from "../assets/image-8.png";
import image9 from "../assets/image-9.png";
import cover from "../assets/cover.png";
import { Link } from "react-router-dom";
import logo from "../assets/brainlogo.png";

const cardImages = [
  { src: image1 },
  { src: image2 },
  { src: image3 },
  { src: image4 },
  { src: image5 },
  { src: image6 },
  { src: image7 },
  { src: image8 },
  { src: image9 },
];

function MemoryCards() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [pairsFound, setPairsFound] = useState(0);

  // Shuffle and reset cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
        flipped: false,
        matched: false,
      }));

    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
    setPairsFound(0);
  };

  // Handle card click
  const handleCardClick = (id) => {
    if (disabled) return;

    const clickedCard = cards.find((card) => card.id === id);

    if (clickedCard.flipped || clickedCard.matched) return; // Don't flip if already flipped or matched

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, flipped: true } : card
      )
    );

    if (!choiceOne) {
      setChoiceOne(clickedCard);
    } else if (!choiceTwo) {
      setChoiceTwo(clickedCard);
    }
  };

  // Check for a match
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true); // Disable clicking during the match check
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        setPairsFound((prev) => prev + 1);
      } else {
        // Flip back unmatched cards after a delay
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === choiceOne.id || card.id === choiceTwo.id
                ? { ...card, flipped: false }
                : card
            )
          );
        }, 1000);
      }
      setTurns((prevTurns) => prevTurns + 1); // Increase turns after each pair is clicked
      resetTurn();
    }
  }, [choiceOne, choiceTwo]);

  // Reset choices and increment turn counter
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  // Start a new game when component mounts
  useEffect(() => {
    shuffleCards();
  }, []);

  // Win message
  const winMessage = pairsFound === cards.length / 2 && (
    <h2>You won in {turns} turns!</h2>
  );

  return (
    <div className="Appads">
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
            <Link className="nav-link navbar-link">Rock Paper Scissors Shoot!</Link>
          </li>
          <li className="nav-link">
            <Link to="/Quiz" className="navbar-link">
              Logic Quiz
            </Link>
          </li>
        </ul>
      </nav>
      <div className="div">
      <h1>Memory Cards</h1>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns: {turns}</p>
      {winMessage}

      <div className="card-grid">
        {cards.map((card) => (
          <div
            className="card"
            key={card.id}
            onClick={() => handleCardClick(card.id)}
          >
            <div className={`card-inner ${card.flipped ? "flipped" : ""}`}>
              <div className="front">
                <img src={card.src} alt="card front" />
              </div>
              <div className="back">
                <img src={cover} alt="card back" />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
<div className="space"></div>
    </div>
  );
}

export default MemoryCards;
