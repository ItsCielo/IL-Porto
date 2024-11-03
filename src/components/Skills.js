import React from 'react';

const skills = [
  { name: 'Web Development', description: 'Intermediate' },
  { name: 'Cloud Computing', description: 'Advanced' },
  { name: 'Google Cloud Platform', description: 'Advanced' },
  { name: 'UI Design', description: 'Intermediate' },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skill-cards">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
