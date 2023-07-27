import React from 'react'
import { BiLogoJavascript, BiSlider } from 'react-icons/bi'
import { FaSass } from 'react-icons/fa'
import { GiGreekTemple } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <nav className="header-navigation">
          <ul className="header-menu">
            {' '}
            <li className="header-menu-item">
              <Link className="icons" to="/skills">
                <IconContext.Provider
                  value={{ color: '#ffca28', size: '25px' }}
                >
                  <div>
                    <BiLogoJavascript />
                  </div>
                </IconContext.Provider>
                Skills.js
              </Link>
            </li>
            <li className="header-menu-item">
              <Link className="icons" to="/education">
                <IconContext.Provider
                  value={{ color: '#3f99e2', size: '25px' }}
                >
                  <div>
                    <GiGreekTemple />
                  </div>
                </IconContext.Provider>
                .educationrc
              </Link>
            </li>
            <li className="header-menu-item">
              <Link className="icons" to="/projects">
                <IconContext.Provider
                  value={{ color: '#98c379', size: '25px' }}
                >
                  <div>
                    <BiSlider />
                  </div>
                </IconContext.Provider>
                Projects.config
              </Link>
            </li>
            <li className="header-menu-item">
              <Link className="icons" to="/contact">
                <IconContext.Provider
                  value={{ color: '#e03e76', size: '25px' }}
                >
                  <div>
                    <FaSass />
                  </div>
                </IconContext.Provider>
                certificates.sass
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
