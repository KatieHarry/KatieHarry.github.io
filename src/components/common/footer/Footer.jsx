import React from 'react';
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Contact } from '../../common';

import './Footer.css';

function Footer () {
  const Footer = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  }

  const FooterSocial = {
    position: "fixed",
    bottom: "0",
    left: "0",
    flexDirection: "column",
  }

  const FooterContact = {
    color: "var(--lightest-slate)",
  }

  const FooterEmail = {
    position: "fixed",
    bottom: "0",
    right: "20px",
    width: "40px",
  }

  return (
    <section style={ Footer }>
      <section style={ FooterSocial } className="footer-social">
        <a href="https://github.com/KatieHarry" target="_blank" rel="noreferrer"><Github className="icon" size={30} /></a>
        <a href="https://www.linkedin.com/in/katie-harry/" target="_blank" rel="noreferrer"><Linkedin className="icon" size={30} /></a>
        <span className="footer-line"></span>
      </section>
      <section style={ FooterContact } className="footer-contact">
        <hr />
        <span className="contact-text">Contact me!</span>
        <Contact />
      </section>
      <section style={ FooterEmail } className="footer-email-wrap">
        <section className="footer-email">
          <a href="mailto:kathryn.e.harry@gmail.com">kathryn.e.harry@gmail.com</a>
          <span className="footer-line"></span>
        </section>
      </section>
    </section>
  )

}

export default Footer;
