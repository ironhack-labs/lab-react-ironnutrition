import React from 'react';

const Button = ({ children, onClick, disabled }) => {
  return (
    <button disabled={disabled} onClick={onClick} className="button">
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
