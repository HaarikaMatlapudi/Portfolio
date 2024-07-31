import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav-container">
      <h1>Haarika Matlapudi</h1>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/resume">Resume</Link>
      </nav>
    </div>
  );
}

export default Nav;
