import React from 'react';
import Button from 'react-bootstrap/Button';

function MyButton (props) {

  const { color, text }  = props;

  const ButtonStyle = {
    textTransform: "uppercase",
    fontSize: "inherit",
    width: "100%",
  }

  return (
    <Button className="my-button" style={ ButtonStyle } variant={ color === "dark" ? "outline-primary" : "outline-secondary" }>
      { text }
    </Button>
  )

}

export default MyButton;
