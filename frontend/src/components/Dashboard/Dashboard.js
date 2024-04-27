import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'; // Import the Navbar component
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  const [projects, setProjects] = useState([]);

  // Function to add a new project
  const addProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  // Function to delete a project
  const deleteProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  return (
    <div>
      <Navbar isLoggedIn={true} /> {/* Pass isLoggedIn prop */}
      <div className="dashboard-container">
        <div className="dashboard-content">
          <h2>Dashboard</h2>
          <button onClick={() => addProject({ name: "New Project", description: "" })}>Add a Project</button>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <button onClick={() => deleteProject(index)}>Delete</button>
                  {/* Add a button or link to edit the project */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
