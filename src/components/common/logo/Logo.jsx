import React from 'react';

import './Logo.css';

function Logo (props) {

  const { color }  = props;

  return (
    <span data-letters="K" className={ color === 'dark' ? "logo-dark" : color === 'light' ? "logo-light" : "" }></span>
  )

}

export default Logo;
