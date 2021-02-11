import React from 'react';

const Button = ({ txt, handleClick }) => {
  return <button onClick={handleClick}>{txt}</button>;
};

export default Button;
