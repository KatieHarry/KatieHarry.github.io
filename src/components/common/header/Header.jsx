import React, { useState, useEffect } from 'react';
import { Navbar, Logo } from '../../common';

import './Header.css';

function Header() {

  const Header = {
    paddingTop: "20px",
    paddingBottom: "20px",
    display: "flex",
    flex: "1",
    width: "100%",
    height: "110px",
    background: "var(--navy)",
    position: "fixed",
    zIndex: "300",
  }

  const HeaderLogoWrap = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "30px",
    zIndex: "200",
  }

  const HeaderLogo = {
    color: "inherit",
    textDecoration: "inherit",
    fontFamily: "RobotoRegular",
    fontSize: "25px",
    padding: "20px",
  }

  const HeaderNavbar = {
    display: "flex",
    flex: "1",
    flexDirection: "column",
  }

  const HeaderNavigation = {
    display: "flex",
    flex: "1",
    flexDirection: "row",
    justifyContent: "flex-end",
    color: "white",
  }

  const [showTop, setShowTop] = useState(true);
  const [showLow, setShowLow] = useState(false);

  var prevScroll = 0;

  const controlNavbar = () => {
    if(window.scrollY === 0) {
      setShowTop(true);
      setShowLow(false);
    }
    else if (window.scrollY < prevScroll) {
      prevScroll = window.scrollY;
      setShowTop(false);
      setShowLow(true);
    }
    else if(window.scrollY > 100) {
      prevScroll = window.scrollY;
      setShowTop(false);
      setShowLow(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }
  }, [])

  return (
    <section style={Header} className={ `nav ${ showTop && 'navShowTop' } ${ showLow && 'navShowLow'}` }>
      <section style={HeaderLogoWrap}>
        <a href="/" style={HeaderLogo}>
          <Logo color="light"/>
        </a>
      </section>
      <section style={HeaderNavbar}>
        <section style={HeaderNavigation}>
          <Navbar />
        </section>
      </section>
    </section>
  )

}

export default Header;
