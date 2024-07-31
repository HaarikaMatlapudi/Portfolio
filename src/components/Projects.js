import React from "react";
import Nav from "./Nav";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Telegram Chatbot",
      image: "https://umnico-cdn.com/production/landing/en-article26.png",
      description: "Working on Chatbots",
    },
    {
      title: "Weather Website",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZecMggX5KTy0-zpTYxJIvstegV9-3HgiEw&s",
      description: "Weather Application",
    },
    {
      title: "College Management System",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQyOTBDD4fnljqMZSVEYcjh8Hu1GaQ-5cO7w&s",
      description: "Faculty and Student Managment System",
    },
    {
      title: "Table Reservation System",
      image:
        "https://media.istockphoto.com/id/1257218130/es/vector/reserva-virtual-de-restaurante.jpg?s=612x612&w=0&k=20&c=bWnssQ0DrBfpE0yznT_buU_j3nkpnWjX7BYmdEaWrKo=",
      description: "Table Booking system in Resturants",
    },
  ];

  return (
    <div className="projects-container" id="projects">
      <Nav />
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
