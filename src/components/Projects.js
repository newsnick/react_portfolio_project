import React from 'react'
import '../styles/Projects.css'
import project1 from '../assets/images/project1.jpg'
import project2 from '../assets/images/project2.jpg'
import project3 from '../assets/images/project3.jpg'

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={project1} alt="Project 1" className="project-image" />
            <h3 className="project-name">Project 1</h3>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="/" className="project-link">
              Learn More
            </a>
          </div>
          <div className="project-card">
            <img src={project2} alt="Project 2" className="project-image" />
            <h3 className="project-name">Project 2</h3>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="/" className="project-link">
              Learn More
            </a>
          </div>
          <div className="project-card">
            <img src={project3} alt="Project 3" className="project-image" />
            <h3 className="project-name">Project 3</h3>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a href="/" className="project-link">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
