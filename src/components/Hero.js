/* import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section className="hero bg-primary text-light">
      <div className="container">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Showcasing my skills and projects</p>
        <a href="#projects" className="hero-button btn btn-light">
          View Projects
        </a>
      </div>
    </section>
  )
}

export default Hero
 */

import React from 'react'
import '../styles/Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero  ">
      <div className="container">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Showcasing my skills and projects</p>

        {/* <a href="#projects" className="hero-button btn btn-dark">
          View Projects
        </a> */}
        <Link to="/projects" className="hero-button btn btn-dark">
          View Projects
        </Link>
      </div>
    </section>
  )
}

export default Hero
