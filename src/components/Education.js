import React from 'react'
import '../styles/Education.css'
import Footer from './Footer'

const Education = () => {
  return (
    <section id="education" className="eduSection">
      <h1 className="eduTitle">education</h1>
      <h2 className="eduSubtitle">My coding education background</h2>
      <ul className="eduList">
        <li className="liTitle">Tel-Ran International School of Technology</li>
        <li className="liText">Full-Stack Developer study course (English)</li>
        <li className="liText2">German state certificate</li>
        <li className="liYear">January 2023 - September 2023</li>
      </ul>

      <div className="footerEdu">
        <Footer />
      </div>
    </section>
  )
}

export default Education
