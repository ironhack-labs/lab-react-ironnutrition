import React from 'react';
import './Button.css';

function Button({method,children,className}) {
  return (
      <button className={className} type='button' onClick={method}>{children}</button>
  );
}

export default Button;
