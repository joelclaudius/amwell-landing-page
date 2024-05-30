import React from "react";
import PropTypes from "prop-types";

const Button = ({ border, onClick, children }) => {
  // Determine the class based on whether border is true or false
  const buttonClass = border ? "button-with-border" : "button-without-border";

  return (
    <button className={`button ${buttonClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  border: PropTypes.bool, // Whether the button should have a border
  onClick: PropTypes.func, // Function to handle button click
  children: PropTypes.node, // Content of the button
};

Button.defaultProps = {
  border: false, // Default border is false
  onClick: () => {}, // Default onClick handler does nothing
};

export default Button;
