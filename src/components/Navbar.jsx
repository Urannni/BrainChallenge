import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../assets/brainlogo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="App-header">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            <img src={logo} alt="Brain Logo" className="navbar-logo-img" />
          </Link>
        </div>
        <button onClick={toggleMenu} className="menu-toggle-btn">
          <FontAwesomeIcon icon={faBars} className={isOpen ? 'rotate-icon' : ''} />
        </button>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link to="/Game" className="nav-link navbar-link">
              RockPaperScissors
            </Link>
          </li>
          <li>
            <Link className="nav-link navbar-link" to="/MemoryCards">
              Memory
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/Quiz" className="navbar-link">
              Quiz
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;