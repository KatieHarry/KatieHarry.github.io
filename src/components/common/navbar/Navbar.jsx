import React, { useState, useEffect } from 'react';
import { List  } from 'react-bootstrap-icons';
import { MyButton } from '../../common';
import Resume from './KatieHarry.pdf'

import './Navbar.css';

function Navbar (props) {

  const Wrap = {
    display: "flex",
    justifyContent: "end",
    alignItems: "flex-start",
  }

  const NavbarWrap = {
    display: "flex",
    flexDirection: "row",
    float: "right",
    paddingTop: "40px",
    marginTop: "-115px",
    zIndex: "200",
    width: "100vw",
  }

  const NavbarExpanded = {
    marginRight: "70px",
    marginTop: "7px",
  }

  const NavbarHamburger = {
    zIndex: "100",
    width: "100vw",
    height: "100vh",
    backdropFilter: "blur(5px)",
    position: "fixed",
    top: "15px",
    justifyContent: "end",
    fontSize: "20px",
  }

  const NavbarHamburgerIcon = {

  }

  const NavbarHamburgerMenu = {
    width: "min(75vw, 500px)",
    backgroundColor: "var(--navy)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "-10px 0px 100px 0px var(--navy-shadow)",
  }

  const NavbarItem = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "inherit",
    textTransform: "uppercase",
    outline: "none",
  }

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
    <section style={ Wrap }>
      <section style={ NavbarHamburger } className={`hamburger-wrap ${open && 'show-hamburger'}`}>
        <section style={ NavbarHamburgerMenu } className="hamburger-menu">
          <a href="#About" onClick={closeNavbar} style={ NavbarItem } className="navbar-item">About</a>
          <a href="#Contact" onClick={closeNavbar} style={ NavbarItem } className="navbar-item">Contact</a>
          <a href={ Resume } target="_blank" rel="noreferrer" style={ NavbarItem } className="navbar-button">
            <MyButton color="light" text="Resume" />
          </a>
        </section>
      </section>
      <section style={ NavbarWrap } className="navbar-wrap">
        <section style={ NavbarExpanded } className="expanded">
          <a href="#About" style={ NavbarItem } className="navbar-item">About</a>
          <a href="#Contact" style={ NavbarItem } className="navbar-item">Contact</a>
          <a href={ Resume } target="_blank" rel="noreferrer" style={ NavbarItem } className="navbar-button">
            <MyButton color="light" text="Resume" />
          </a>
        </section>
        <section onClick={toggleClass} style={ NavbarHamburgerIcon } className={`hamburger-icon ${open && 'show-hamburger'}`}>

            <List className="icon" color="var(--pink)" size={50} />
        </section>
      </section>
    </section>
  )

}

export default Navbar;
