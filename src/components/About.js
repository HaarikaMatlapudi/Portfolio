import React from "react";
import Nav from "./Nav";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
} from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <Nav />
      <div className="about-content">
        <div className="about-text">
          <h3>About</h3>
          <p>
            To be associated with an organization which gives scope to obtain a
            challenging role where all my technical skills and responsibilities
            will be utilized. This will allow me to significantly contribute to
            your mission as well as develop my career. Focused and enthusiastic
            developer with a keen interest in software development and
            artificial intelligence. By comprehensive exposure to the underlying
            concepts and applying them vividly to various projects, my love for
            these domains came into being.
          </p>
          <ul className="about-details">
            <li>
              <FaBirthdayCake /> Birthday: 13 August 2004
            </li>
            <li>
              <FaPhone /> Phone: 7207142171
            </li>
            <li>
              <FaMapMarkerAlt /> City:Bhimavaram, India
            </li>
            <li>
              <FaEnvelope /> Email: haarikamatlapudi@gmail.com
            </li>
          </ul>
        </div>
        <div className="about-interests">
          <h3>Interests</h3>
          <div className="interests-grid">
            <div className="interest-item">Web Development</div>
            <div className="interest-item">Data Structures</div>
            <div className="interest-item">Databases</div>
            <div className="interest-item">Cloud</div>
            <div className="interest-item">Java</div>
            <div className="interest-item">Cloud Datawarehouses</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
