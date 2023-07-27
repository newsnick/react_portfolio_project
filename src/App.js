import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { IconContext } from 'react-icons'
import { FaHome, FaGraduationCap, FaGithub, FaLinkedin } from 'react-icons/fa'
import Education from './components/Education'

function App() {
  return (
    <Router>
      <>
        <div className="App">
          <Header />

          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-1 p-0 sidebar">
                <nav className="navbar navbar-expand-sm navbar-dark custom-navbar2">
                  <div className="container">
                    <Link className="navbar-brand m-1" to="/">
                      <IconContext.Provider
                        value={{ color: '#979faf', size: '30px' }}
                      >
                        <div>
                          <FaHome />
                        </div>
                      </IconContext.Provider>
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link" to="/about">
                            {' '}
                            <IconContext.Provider
                              value={{ color: '#979faf', size: '30px' }}
                            >
                              <div>
                                <FaGraduationCap />
                              </div>
                            </IconContext.Provider>
                          </Link>
                        </li>
                        <span className="divider">
                          <hr />
                        </span>
                        <li className="nav-item">
                          {/* <Link
                            className="nav-link"
                            to="https://github.com/newsnick"
                          >
                            <IconContext.Provider
                              value={{ color: '#979faf', size: '30px' }}
                            >
                              <div>
                                <FaGithub />
                              </div>
                            </IconContext.Provider>
                          </Link> */}
                          <a
                            className="nav-link"
                            href="https://github.com/newsnick"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconContext.Provider
                              value={{ color: '#979faf', size: '30px' }}
                            >
                              <div>
                                <FaGithub />
                              </div>
                            </IconContext.Provider>
                          </a>
                        </li>
                        <li className="nav-item">
                          {/* <Link
                            className="nav-link"
                            to="https://www.linkedin.com/in/antonio-lega-70202a137/"
                          >
                            {' '}
                            <IconContext.Provider
                              value={{ color: '#979faf', size: '30px' }}
                            >
                              <div>
                                <FaLinkedin />
                              </div>
                            </IconContext.Provider>
                          </Link> */}
                          <a
                            className="nav-link"
                            href="https://www.linkedin.com/in/antonio-lega-70202a137/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconContext.Provider
                              value={{ color: '#979faf', size: '30px' }}
                            >
                              <div>
                                <FaLinkedin />
                              </div>
                            </IconContext.Provider>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>

              <div className="col-sm-11 custom-column">
                <Routes>
                  <Route path="/" element={<Hero />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/education" element={<Education />} />
                </Routes>
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </>
    </Router>
  )
}

export default App
