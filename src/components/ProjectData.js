// import React from 'react'
// import '../styles/ProjectData.css'
// import Projects from './projects.json'
// import { FaGithub } from 'react-icons/fa'

// const ProjectData = ({ projectId }) => {
//   const ProjectsData = Projects

//   const renderSelectedProject = () => {
//     let project = null

//     switch (projectId) {
//       case 1:
//         project = ProjectsData.find((proj) => proj.id === 1)
//         break
//       case 2:
//         project = ProjectsData.find((proj) => proj.id === 2)
//         break
//       case 3:
//         project = ProjectsData.find((proj) => proj.id === 3)
//         break
//       default:
//         break
//     }

//     if (project) {
//       const responsibilitiesMarkup = `<p>responsibilities: <br> ${project.responsibilities}</p>` // Wrap responsibilities in a paragraph tag

//       return (
//         <ul key={project.id}>
//           <li className="projectLst">project: {project.name}</li>
//           <li className="projectLst projectPhoto">
//             <img src={project.photo} alt="not found" width="400" height="300" />
//           </li>
//           <li className="projectLst">technology: {project.technology}</li>
//           <li
//             className="projectLst"
//             dangerouslySetInnerHTML={{ __html: responsibilitiesMarkup }}
//           />
//           <li className="projectLst">
//             <a href={project.url}>
//               <FaGithub /> visit project
//             </a>
//           </li>
//         </ul>
//       )
//     }

//     return null
//   }

//   return (
//     <>
//       {/* <h2 className="text-center">My Project</h2> */}
//       <div className="projectContainer">{renderSelectedProject()}</div>
//     </>
//   )
// }

// export default ProjectData

import React from 'react'
import '../styles/ProjectData.css'
import Projects from './projects.json'
import { FaGithub } from 'react-icons/fa'

const ProjectData = ({ projectId }) => {
  const ProjectsData = Projects

  const renderSelectedProject = () => {
    let project = null

    switch (projectId) {
      case 1:
        project = ProjectsData.find((proj) => proj.id === 1)
        break
      case 2:
        project = ProjectsData.find((proj) => proj.id === 2)
        break
      case 3:
        project = ProjectsData.find((proj) => proj.id === 3)
        break
      default:
        break
    }

    if (project) {
      const responsibilitiesMarkup = `<p>responsibilities: <br> ${project.responsibilities}</p>` // Wrap responsibilities in a paragraph tag

      return (
        <ul key={project.id}>
          <li className="projectLst">project: {project.name}</li>
          <li className="projectLst">
            <div className="projectPhoto">
              <img src={project.photo} alt="not found" />
              <div className="overlay">
                <a href={project.url} target="blank" className="projectLink">
                  <FaGithub className="githubIcon" />
                  Visit Project
                </a>
              </div>
            </div>
          </li>
          <li className="projectLst">technology: {project.technology}</li>
          <li
            className="projectLst"
            dangerouslySetInnerHTML={{ __html: responsibilitiesMarkup }}
          />
        </ul>
      )
    }

    return null
  }

  return (
    <>
      {/* <h2 className="text-center">My Project</h2> */}
      <div className="projectContainer">{renderSelectedProject()}</div>
    </>
  )
}

export default ProjectData
