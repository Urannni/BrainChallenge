import React, { useState } from 'react';

const cardImages = [
  {"src": "../assets/image-1.png"},
  {"src": "../assets/image-2.png"},
  {"src": "../assets/image-3.png"}
]
function MemoryCardsEasy() {
  const [cards, setCards] = useState([])
  const [tries, setTries] = useState(0)

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))

    setCards(shuffleCards)
    setTries(0)
  }
   return ( 
  <div>
    <h1>Memory cards</h1>
    <h3>Difficulty: Easy</h3>

    <button onClick={shuffleCards}>New Game</button>
    
    <div className="cards">
{cards.map(card => (
  <div className="card" key={card.id}>
    <div>
    <img className='card-front' src={card.src} alt="front-card" />
    <img className='card-back' src="../assets/card-cover.png" alt="cover-card" />
    </div>
  </div>
))}
    </div>
  </div>
  );
}

export default MemoryCardsEasy;