import React from 'react'
import '../styles/Skills.css'

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          <div className="skill">
            <i className="fas fa-code"></i>
            <h3>Programming</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vehicula nibh ut velit placerat, id ullamcorper elit
              tristique. Sed ac venenatis nulla.
            </p>
          </div>

          <div className="skill">
            <i className="fas fa-laptop"></i>
            <h3>Web Development</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vehicula nibh ut velit placerat, id ullamcorper elit
              tristique. Sed ac venenatis nulla.
            </p>
          </div>

          <div className="skill">
            <i className="fas fa-database"></i>
            <h3>Database Management</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vehicula nibh ut velit placerat, id ullamcorper elit
              tristique. Sed ac venenatis nulla.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
