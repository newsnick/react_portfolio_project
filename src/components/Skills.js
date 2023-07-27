import React from 'react'
import '../styles/Skills.css'
import Footer from './Footer'

const Skills = () => {
  return (
    <section id="skills" className="skillsSection">
      <h1 className="skillsTitle">Skills</h1>
      <h2 className="skillSubtitle">Technical Skills</h2>
      <ul className="skillList">
        <li>Frontend Development</li>
        <li>Backend Development</li>
        <li>Database Management</li>
        <li>RESTful APIs</li>
        <li>Version Control</li>
        <li>Testing and Debugging</li>
        <li>Security</li>
        <li>Web Performance Settings</li>
        <li>Responsive Web Designs</li>
        <li>Package Managers</li>
        <li>Software Development Methodologies</li>
      </ul>
      <h2 className="skillSubtitle">Programming languages / tech stacks</h2>
      <ul className="skillList">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React.js</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>PHP</li>
      </ul>
      <h2 className="skillSubtitle">Products</h2>
      <ul className="skillList">
        <li>Figma</li>
        <li>Git</li>
        <li>Postman</li>
        <li>Jira</li>
        <li>Swagger/OpenAPI</li>
        <li>Docker</li>
      </ul>
      <h2 className="skillSubtitle">Preferences</h2>
      <ul className="skillList">
        <li>Ubuntu 22.04 as OS</li>
        <li>React as preferred JavaScript framework</li>{' '}
        <li>npm as package manager</li>
        <li>VS Code as code editor</li>
        <li>SASS as CSS preprocessor</li>
        <li>Node.js for backend development</li>
        <li>Jest as testing framework of choice</li>
      </ul>
      <h2 className="skillSubtitle">Special interests</h2>
      <ul className="skillList">
        <li>DevOps</li>
        <li>UI/UX Design</li>
        <li>Mobile App Development</li>
      </ul>
      <div className="footerSkills">
        <Footer />
      </div>
    </section>
  )
}

export default Skills
