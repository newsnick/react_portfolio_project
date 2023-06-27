import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Projects from './projects.json'

const ProjectData = ({ projectId }) => {
  const ProjectsData = Projects

  const renderSelectedProject = () => {
    const project = ProjectsData.find((proj) => proj.id === projectId)

    if (project) {
      return (
        <ul key={project.id}>
          <li>project: {project.name}</li>
          <li>
            <img src={project.photo} alt="not found" width="400" height="300" />
          </li>
          <li>technology: {project.technology}</li>
          <li>responsibilities: {project.responsibilities}</li>

          <li>url: {project.url}</li>
        </ul>
      )
    }
    return null
  }

  return (
    <>
      {/* <h2 className="text-center">My Project</h2> */}
      <div>{renderSelectedProject()}</div>
    </>
  )
}

export default ProjectData
