import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Quiz from "./components/Quiz";
import ChooseDifficulty from "./components/ChooseDifficulty";
import MemoryCardsEasy from "./components/MemoryCardsEasy";
import MemoryCardsMedium from "./components/MemoryCardsMedium";
import MemoryCardsHard from "./components/MemoryCardsHard"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Quiz" element={<Quiz />} />
            <Route path="/Memory cards" element={<ChooseDifficulty />} />
            <Route path="/MemoryCardsEasy" element={<MemoryCardsEasy/>} />
            <Route path="/MemoryCardsMedium" element={<MemoryCardsMedium/>} />
            <Route path="/MemoryCardsHard" element={<MemoryCardsHard/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;