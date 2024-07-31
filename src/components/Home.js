import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Haarika Matlapudi</h1>
      <p>
        I'm <span className="color">Student</span>
      </p>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/resume">Resume</Link>
      </nav>
      <div className="social-icons">
        <Link to="https://github.com/HaarikaMatlapudi">
          <FaGithub />
        </Link>

        <Link to="www.linkedin.com/in/matlapudi-haarika">
          <FaLinkedin />
        </Link>

        <Link to="https://google.com">
          <FaGoogle />
        </Link>
      </div>
    </div>
  );
}

export default Home;
