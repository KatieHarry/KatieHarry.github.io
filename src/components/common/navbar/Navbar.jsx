import React, { useState, useEffect } from 'react';
import { List, XLg  } from 'react-bootstrap-icons';
import { MyButton } from '../../common';
import Resume from './KatieHarry.pdf'

import './Navbar.css';

function Navbar (props) {

  const [open, setOpen] = useState(false);

  const toggleClass = () => {
    setOpen(!open);
    if(!open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  };

  const closeNavbar = () => {
    setOpen(false);
    document.body.style.overflow = 'unset';
  }

  useEffect(() => {
    window.addEventListener('resize', closeNavbar)
  }, [])

  return (
    <section className="navbar-wrap">
      <section className={`hamburger-wrap ${open && 'show-hamburger'}`}>
        <section className="hamburger-menu">
          <a href="#About" onClick={closeNavbar} className="navbar-item">About</a>
          <a href="#Contact" onClick={closeNavbar} className="navbar-item">Contact</a>
          <a href={ Resume } target="_blank" rel="noreferrer" className="navbar-button">
            <MyButton color="light" text="Resume" />
          </a>
        </section>
      </section>
      <section className="navbar-wrap">
        <section className="expanded">
          <a href="#About" className="navbar-item">About</a>
          <a href="#Contact" className="navbar-item">Contact</a>
          <a href={ Resume } target="_blank" rel="noreferrer" className="navbar-button">
            <MyButton color="light" text="Resume" />
          </a>
        </section>
        <section onClick={toggleClass} className={`hamburger-icon ${open && 'show-hamburger'}`}>
            <List className="icon-open" color="var(--pink)" size={40} />
            <XLg className="icon-close" color="var(--pink)" size={35} />
        </section>
      </section>
    </section>
  )

}

export default Navbar;
