import React from 'react';
import profilePhoto from '../assets/avatar.jpg';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="photo">
          <img src= {profilePhoto} alt="Juanda" />
        </div>
        <div className="intro">
          <h1>Hi, I'm Juanda</h1>
          <h3>Computer Science Student</h3>
          <p>
          An Information Systems student at Batam Institute of Technology with a keen interest in cloud computing 
          and a drive to stay updated with the latest technological development in the field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;