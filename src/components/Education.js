// Education.js
import React from "react";
import Nav from "./Nav";
import "./Education.css";

function Education() {
  return (
    <div className="education-container" id="education">
      <Nav />
      <h2>Education</h2>
      <div className="education-card">
        <img
          src="https://vishnu.edu.in/images/Vishnu_Logo.png"
          alt="Vishnu Universal Learning Logo"
        />
        <div className="education-details">
          <h3>Vishnu in Information Technology</h3>
          <p>September 2020 - Present</p>
          <p>CGPA: 8.75</p>
          <p>Percentage: 87%</p>
          <p>Bhimavaram, India</p>
        </div>
      </div>
      <div className="education-card">
        <img
          src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/b0ec704a3bd57a66d2ce0c98e1d35e1a"
          alt="Narayana Junior College Logo"
        />
        <div className="education-details">
          <h3>Narayana Junior College</h3>
          <p>Intermediate in M.P.C Stream</p>
          <p>June 2019 - March 2021</p>
          <p>CGPA: 8.54</p>
          <p>Percentage: 85%</p>
          <p>Vijayawada, India</p>
        </div>
      </div>
      <div className="education-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsLUMgfs6KDP5FJDUoX7GMuyEqnAu_hvG1Q&s"
          alt="Viswabharati English Medium High School Logo"
        />
        <div className="education-details">
          <h3>Viswabharati English Medium High School</h3>
          <p>SSC</p>
          <p>March 2019</p>
          <p>CGPA: 9.8</p>
          <p>Percentage: 93.1%</p>
          <p>Gudiwada, India</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
