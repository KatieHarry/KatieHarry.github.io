import React, { useState, useEffect } from 'react';
import { Navbar, Logo } from '../../common';

import './Header.css';

function Header() {

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
    else if(window.scrollY > 80) {
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
    <section className={ `header-wrap nav ${ showTop && 'navShowTop' } ${ showLow && 'navShowLow'}` }>
      <section className="header-logo-wrap">
        <a href="#About" className="header-logo">
          <Logo color="light"/>
        </a>
      </section>
      <section className="header-navbar-wrap">
        <section className="header-navbar">
          <Navbar />
        </section>
      </section>
    </section>
  )

}

export default Header;
