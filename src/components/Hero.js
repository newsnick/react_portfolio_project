import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Showcasing my skills and projects</p>
        <a href="#projects" className="hero-button">
          View Projects
        </a>
      </div>
    </section>
  )
}

export default Hero
