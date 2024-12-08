import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Quiz from "./components/Quiz";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="/brainlogo.png" className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Quiz" element={<Quiz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
