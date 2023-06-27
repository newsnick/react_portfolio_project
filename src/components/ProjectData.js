// // //Data driven component using data collection
// import React from 'react'

// const Projects = [
//   {
//     id: 1,
//     name: 'Hydra',
//     technology: 'Node.js, React.js, Sass',
//     responsibilities:
//       'team collaboration, responsive and interactive UI, API and UI design integration, clean code, testing and debugging, ',
//     photo: './images/assets/hydra.svg',
//     url: 'visit project on github',
//   },
//   {
//     id: 2,
//     name: 'TheBox',
//     technology: 'Node.js, React.js, Sass',

//     responsibilities:
//       'team collaboration, responsive and interactive UI, API and UI design integration, clean code, testing and debugging, ',
//     photo: './images/assets/thebox.svg',
//     url: 'visit project on github',
//   },
//   {
//     id: 3,
//     name: 'AI',
//     technology: 'HTML, CSS',
//     responsibilities:
//       'team collaboration, responsive and interactive UI, UI design integration, clean code, testing and debugging, ',

//     photo: './images/assets/ai.svg',
//     url: 'visit project on github',
//   },
// ]

// class Project extends React.Component {
//   ProjectsData = Projects
//   render() {
//     return (
//       <div>
//         {this.ProjectsData.map((project) => {
//           return (
//             <div className="container mt-3" key={project.id}>
//               <div className="row">
//                 <div className="col h5 bg-primary text-white">{project.id}</div>
//                 <div className="col h5 bg-primary text-white">
//                   project: {project.name}
//                 </div>
//                 <div className="col h5 bg-primary text-white">
//                   technology: {project.technology}
//                 </div>
//                 <div className="col h5 bg-primary text-white">
//                   responsibilities: {project.responsibilities}
//                 </div>
//                 <div className="col h5 bg-primary text-white">
//                   <img
//                     src={project.photo}
//                     alt="image not found"
//                     width="100"
//                     height="100"
//                   />
//                 </div>
//                 <div className="col h5 bg-primary text-white">
//                   url: {project.url}
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// }

// class ProjectData extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2 className="text-center">My Project</h2>
//         <Project />
//       </div>
//     )
//   }
// }

// export default ProjectData
// // const root = ReactDOM.createRoot(document.getElementById('root'))
// // root.render(<MainComponent />)
// //Data driven component using data collection
import React from 'react'
import hydra from './hydra.JPG'

const Projects = [
  {
    id: 1,
    name: 'Hydra',
    technology: 'Node.js, React.js, Sass',
    responsibilities:
      'team collaboration, responsive and interactive UI, API and UI design integration, clean code, testing and debugging, ',
    photo: { hydra },
    url: 'visit project on github',
  },
  {
    id: 2,
    name: 'TheBox',
    technology: 'Node.js, React.js, Sass',

    responsibilities:
      'team collaboration, responsive and interactive UI, API and UI design integration, clean code, testing and debugging, ',
    photo: '../../assets/images/thebox.JPG',
    url: 'visit project on github',
  },
  {
    id: 3,
    name: 'AI',
    technology: 'HTML, CSS',
    responsibilities:
      'team collaboration, responsive and interactive UI, UI design integration, clean code, testing and debugging, ',

    photo: '/assets/images/ai.svg',
    url: 'visit project on github',
  },
]

class Project extends React.Component {
  ProjectsData = Projects
  render() {
    return (
      <div>
        {this.ProjectsData.map((project) => {
          return (
            <ul>
              <li key={project.id}></li>
              <li>project: {project.name}</li>
              <li> technology: {project.technology}</li>
              <li> responsibilities: {project.responsibilities}</li>
              <li>
                {' '}
                <img
                  src={project.photo}
                  alt="not found"
                  width="100"
                  height="100"
                />
              </li>
              url: {project.url}
            </ul>
          )
        })}
      </div>
    )
  }
}

class ProjectData extends React.Component {
  render() {
    return (
      <div>
        <h2 className="text-center">My Project</h2>
        <Project />
      </div>
    )
  }
}

export default ProjectData
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<MainComponent />)
