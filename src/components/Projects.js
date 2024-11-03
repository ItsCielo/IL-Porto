import React from 'react';
import Econome from '../assets/Econome.jpg';
import Simeru from '../assets/Simeru.jpg';
import MLGC from '../assets/ML.jpg';

const projects = [
  {
    title: 'EconoME-API',
    description: 'Backend service designed to manage economic-related data',
    link: 'https://github.com/C241-PS364/EconoMe-API',
    image: Econome,
  },
  {
    title: 'SIMERU',
    description: 'Sistem Informasi Manajemen Perusahaan',
    link: 'https://github.com/chrystalio/SIMERU',
    image: Simeru,
  },
  {
    title: 'Studi Kasus MLGC',
    description: 'Membangun Aplikasi Machine Learning Dengan Google Cloud.',
    link: 'https://github.com/ItsCielo/MLGC',
    image: MLGC,
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a class="project-button" href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
