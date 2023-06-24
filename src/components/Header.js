/* import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">My Portfolio</h1>
        <nav className="header-navigation">
          <ul className="header-menu">
            <li className="header-menu-item">
              <a href="#about">About</a>
            </li>
            <li className="header-menu-item">
              <a href="#projects">Projects</a>
            </li>
            <li className="header-menu-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
 */

import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">My Portfolio App</h1>
        <nav className="header-navigation">
          <ul className="header-menu">
            <li className="header-menu-item">
              <a href="/">Home</a>
            </li>
            <li className="header-menu-item">
              <a href="/about">About Me</a>
            </li>
            <li className="header-menu-item">
              <a href="/projects">Projects</a>
            </li>
            <li className="header-menu-item">
              <a href="/skills">Skills</a>
            </li>
            <li className="header-menu-item">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
