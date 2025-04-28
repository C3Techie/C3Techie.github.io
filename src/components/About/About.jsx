import React from 'react';
import "./About.css";
import Header from "./../Header/Header.jsx";
import Footer from "./../Footer/Footer.jsx";
import aboutVector from "./../../assets/about_vector.png";
import aboutAnime from "./../../assets/about_anime.gif";

function About() {
  return (
    <div className='section-container'>
      <Header
        heading="About Me"
        subHeading="Backend Developer"
      />
      <div className='about-main'>
        <div className='about-main-left'>
          <h3 className='about-sub-heading'>Developer</h3>
          <p className='about-sub-heading-details'>
            I’m a <strong>Backend Developer</strong> focused on building high-performance and scalable applications. I specialize in creating APIs, working with databases, and ensuring efficient server-side architecture. My goal is to create software solutions that solve real-world problems and enhance user experiences.
          </p>
          
          <h3 className='about-sub-heading'>Skills & Technologies</h3>
          <p className='about-sub-heading-details'>
            I specialize in backend development with a strong focus on <strong>Node.js</strong> and <strong>Express</strong>, where I build scalable and secure APIs.
          </p>
          <p className='about-sub-heading-details'>
            I also have expertise in <strong>Python</strong>, particularly with <strong>FastAPI</strong>, which I use to build high-performance web applications.
          </p>
          <p className='about-sub-heading-details'>
            My experience extends to <strong>MySQL</strong> for database management, where I design robust schemas and optimize queries for efficiency.
          </p>
          <p className='about-sub-heading-details'>
            Additionally, I leverage <strong>Sequelize</strong> as an ORM to streamline database interactions.
          </p>
          <p className='about-sub-heading-details'>
            On the frontend, I am proficient in <strong>React</strong>, where I create dynamic, user-friendly interfaces. I also work with <strong>JavaScript</strong> and <strong>TypeScript</strong> to ensure type safety and scalability in large applications.
          </p>
          <p className='about-sub-heading-details'>
            My expertise encompasses full-stack development, from building RESTful APIs and handling authentication and authorization, to optimizing performance and ensuring the overall security and scalability of applications.
          </p>
        </div>
        <div className='about-main-right'>
          <img
            src={aboutAnime}
            alt="about-anime"
            className="about-anime"
            loading="lazy"
          />
        </div>
      </div>
      <Footer
        phrase="Check out my "
        link="projects!"
        toAddress="/projects"
      />
      <div className='vector-frame'>
        <img
          src={aboutVector}
          alt="about"
          className='about-vector'
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default About;
