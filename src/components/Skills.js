import React from "react";
import Nav from "./Nav";
import {
  FaCloud,
  FaFileExcel,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaFire,
  FaNodeJs,
  FaGit,
  FaAws,
} from "react-icons/fa";
import "./Skills.css";

const skillsData = {
  "Programming Languages": [
    { id: 1, icon: <FaPython />, name: "Java" },
    { id: 2, icon: <FaHtml5 />, name: "Python" }, // Assuming you use a similar icon for Java
  ],
  "Web Development": [
    { id: 3, icon: <FaHtml5 />, name: "HTML5" },
    { id: 4, icon: <FaCss3 />, name: "CSS3" },
    { id: 5, icon: <FaReact />, name: "JavaScript" }, // Assuming you use React icon for JavaScript
    { id: 6, icon: <FaNodeJs />, name: "Node.js" },
    { id: 7, icon: <FaReact />, name: "Express.js" }, // Assuming you use React icon for Express.js
  ],
  Databases: [
    { id: 8, icon: <FaDatabase />, name: "MySQL" },
    { id: 9, icon: <FaFire />, name: "Firebase" },
    { id: 10, icon: <FaDatabase />, name: "MongoDB" },
  ],
  "Cloud Data Warehouses": [
    { id: 11, icon: <FaCloud />, name: "Snowflake" },
    { id: 12, icon: <FaCloud />, name: "Redshift" },
  ],
  Tools: [
    { id: 13, icon: <FaAws />, name: "AWS" },
    { id: 14, icon: <FaGit />, name: "Git" },
  ],
};

function Skills() {
  return (
    <div className="skills-container">
      <Nav />
      {Object.keys(skillsData).map((category) => (
        <div key={category} className="skills-category">
          <h3>{category}</h3>
          <div className="skills-list">
            {skillsData[category].map((skill) => (
              <div key={skill.id} className="skill-item">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
