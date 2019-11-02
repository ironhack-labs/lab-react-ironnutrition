import React from 'react';

const Button = ({ onClickFunc, children }) => {
  return (
    <button onClick={onClickFunc} className="button is-info" >
      {children}
    </button>
  );
}

export default Button;
