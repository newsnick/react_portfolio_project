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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 sidebar">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                  <Link className="navbar-brand" to="/">
                    Home
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
                          About Me
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/projects">
                          Projects
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/skills">
                          Skills
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>

            <div className="col-lg-9">
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
