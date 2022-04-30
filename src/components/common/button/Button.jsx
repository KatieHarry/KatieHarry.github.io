import React from 'react';
import Button from 'react-bootstrap/Button';
import './Button.css';

function MyButton (props) {

  const { color, text }  = props;

  return (
    <Button className="my-button" variant={ color === "dark" ? "outline-primary" : "outline-secondary" }>
      { text }
    </Button>
  )

}

export default MyButton;
