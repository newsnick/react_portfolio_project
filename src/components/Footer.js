import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio App. All rights
          reserved.
        </p>
        <div className="social-icons">
          <a href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="/">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
