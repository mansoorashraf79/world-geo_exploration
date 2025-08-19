import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // optional for styling

const Header = () => {
  return (
    <header>
      <div className="logo">World Geo Exploration</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About/Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/gallery">Field Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
