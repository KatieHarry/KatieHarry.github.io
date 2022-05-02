import React from 'react';
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Contact } from '../../common';

import './Footer.css';

function Footer () {

  return (
    <section className="footer-wrap">
      <section className="footer-contact">
        <hr />
        <span className="contact-text">Contact me!</span>
        <span className="footer-email">
          <a href="mailto:kathryn.e.harry@gmail.com">kathryn.e.harry@gmail.com</a>
          <span className="footer-line"></span>
        </span>
        <span className="footer-social">
          <a href="https://github.com/KatieHarry" target="_blank" rel="noreferrer"><Github className="icon" size={30} /></a>
          <a href="https://www.linkedin.com/in/katie-harry/" target="_blank" rel="noreferrer"><Linkedin className="icon" size={30} /></a>
          <span className="footer-line"></span>
        </span>
        <Contact />
      </section>
    </section>
  )

}

export default Footer;
