import React from 'react';
import '../styles/About.css';
import laura from '../assets/laura.jpg';

function About() {
  return (
    <div className="about">
      <div className="aboutbody">
        <div className="image">
          <img id="laura" src={laura} alt="laura" />
        </div>
        <div className="container">
          <div className="aboutcontainer">
            <h1>About Me</h1>
            <p>
              Hello! My name is Laura and I am a Cyber Security Fraud Analyst
              studying full-stack development. With my experience in data
              analysis using tools such as SQL, Tableau, and Python, I have a
              strong foundation in interpreting and managing large datasets. My
              work as a Fraud Analyst has given me valuable experience in
              identifying fraudulent patterns and analyzing security risks. With
              my passion for technology and programming, I am excited to pursue
              a career in full-stack development where I can apply my expertise
              in data analysis to create innovative and secure solutions. I am
              eager to learn new programming languages and frameworks to expand
              my skills as a developer. I believe that my background in
              cybersecurity and data analysis will give me a unique perspective
              as a full-stack developer and enable me to create efficient and
              secure solutions for complex problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
