import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Quiz from "./components/Quiz";
import MemoryCards from "./components/MemoryCards";
import Game from "./components/Game";
import Tictactoe from "./components/Tictactoe.jsx"


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Quiz" element={<Quiz />} />
            <Route path="/MemoryCards" element={<MemoryCards />} />
            <Route path="/Game" element={<Game />} />
            <Route path="/Tic-tac-toe" element={<Tictactoe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
