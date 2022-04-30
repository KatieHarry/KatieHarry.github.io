import React from 'react';
import './About.css';
import myself from '../../images/me.jpg';

function About () {

  return (
    <section id="About" className="about">
      <section className="about-text-wrap">
        <section className="hello">
          Hello!
        </section>
        <section className="name">
          I'm Katie Harry
        </section>
        <section className="bio">
          I specialize in full stack development and have experience working with C#, ASP.NET MVC, SQL, JavaScript, HTML/CSS, and React!
          I graduated with a degree in Computer Engineering from the University of Cincinnati in 2021 and currently work as a software engineer at FIS.
        </section>
      </section>
      <section className="me-wrap">
        <section className="me">
          <img src={ myself }/>
        </section>
      </section>
    </section>
  )

}

export default About;
