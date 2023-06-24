import React from 'react'
import '../styles/About.css'

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I am a passionate developer with expertise in web development. I love
          to build beautiful and functional websites using the latest
          technologies.
        </p>
        <p className="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <a href="#contact" className="about-button btn btn-primary">
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default About
