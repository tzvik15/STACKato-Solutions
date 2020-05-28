import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="headNav">
      <h1 id="title">Daniel Nester,</h1>
      <h1 id="subtitle">STACKato Solutions</h1>
      <nav className="navigation">
        <Link to="/">About</Link>
        <span> |</span>
        <Link to="/contact">Contact</Link>
        <span> |</span>
        <Link to="/portfolio">Portfolio</Link>
        <span> |</span>
        <Link to="/Theory">Music Theory Games</Link>
      </nav>
    </header>
  );
}

export default Navbar;
