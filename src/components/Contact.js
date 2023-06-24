import React from 'react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-container">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>example@example.com</p>
          </div>

          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <h3>Phone</h3>
            <p>+1234567890</p>
          </div>

          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Location</h3>
            <p>City, Country</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
