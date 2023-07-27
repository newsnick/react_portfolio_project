// import React, { useState } from 'react'
// import '../styles/Projects.css'

// import ProjectData from './ProjectData'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'

// const Projects = () => {
//   const [showModal, setShowModal] = useState(false)
//   const [selectedProject, setSelectedProject] = useState(null)

//   const handleOpenModal = (projectId) => {
//     setSelectedProject(projectId)
//     setShowModal(true)
//   }

//   const handleCloseModal = () => {
//     setShowModal(false)
//   }

//   const renderProjectData = () => {
//     if (selectedProject) {
//       return <ProjectData projectId={selectedProject} />
//     }
//     return null
//   }

//   return (
//     <section className="projects">
//       <div className="container2">
//         <h3 className="projects-title">
//           Some of the projects I've worked on so far
//         </h3>
//         <ul>
//           <li className="list2">
//             <p>
//               <a href="#" onClick={() => handleOpenModal(1)}>
//                 react.hydra
//               </a>
//             </p>
//             <ul>
//               <li className="list2">A mobile optimized landing page</li>
//               <li className="list2">React.js, Node.js, Sass</li>
//             </ul>
//           </li>
//         </ul>
//         <ul>
//           <li className="list2">
//             <p>
//               <a href="#" onClick={() => handleOpenModal(2)}>
//                 react.thebox
//               </a>
//             </p>
//             <ul>
//               <li className="list2">A landing page for fetching API data</li>
//               <li className="list2">React.js, Node.js, Sass</li>
//             </ul>
//           </li>
//         </ul>
//         <ul>
//           <li className="list2">
//             <p>
//               <a href="#" onClick={() => handleOpenModal(3)}>
//                 html.ai
//               </a>
//             </p>
//             <ul>
//               <li className="list2">A pixel perfect landing page</li>
//               <li className="list2">HTML, CSS</li>
//             </ul>
//           </li>
//         </ul>
//       </div>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header
//           style={{
//             backgroundColor: '#21252b',
//             fontFamily: 'Ubuntu Mono, Roboto Mono, monospace',
//           }}
//           closeButton
//         >
//           <Modal.Title style={{ color: '#42a5f5' }}>
//             Project Details
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body style={{ backgroundColor: '#282c34' }}>
//           {renderProjectData()}
//         </Modal.Body>
//         <Modal.Footer style={{ backgroundColor: '#21252b' }}>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </section>
//   )
// }

// export default Projects
import React, { useState } from 'react'
import '../styles/Projects.css'
import Footer from './Footer'
import ProjectData from './ProjectData'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Projects = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpenModal = (projectId) => {
    setSelectedProject(projectId)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const renderProjectData = () => {
    if (selectedProject) {
      return <ProjectData projectId={selectedProject} />
    }
    return null
  }

  return (
    <section className="projects">
      <div className="container2">
        <h3 className="projects-title">
          Some of the projects I've worked on so far
        </h3>
        <ul>
          <li className="list2">
            <p>
              <a href="#" onClick={() => handleOpenModal(1)}>
                react.hydra
              </a>
            </p>
            <ul>
              <li className="list2">A mobile optimized landing page</li>
              <li className="list2">React.js, Node.js, Sass</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li className="list2">
            <p>
              <a href="#" onClick={() => handleOpenModal(2)}>
                react.thebox
              </a>
            </p>
            <ul>
              <li className="list2">A landing page for fetching API data</li>
              <li className="list2">React.js, Node.js, Sass</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li className="list2">
            <p>
              <a href="#" onClick={() => handleOpenModal(3)}>
                html.ai
              </a>
            </p>
            <ul>
              <li className="list2">A pixel perfect landing page</li>
              <li className="list2">HTML, CSS</li>
            </ul>
          </li>
        </ul>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header
          style={{
            backgroundColor: '#21252b',
            fontFamily: 'Ubuntu Mono, Roboto Mono, monospace',
          }}
          closeButton
        >
          <Modal.Title style={{ color: '#42a5f5' }}>
            Project Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#282c34' }}>
          {renderProjectData()}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#21252b' }}>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>{' '}
      <div className="footerP">
        <Footer />
      </div>
    </section>
  )
}

export default Projects
