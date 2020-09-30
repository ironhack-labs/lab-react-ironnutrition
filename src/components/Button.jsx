import React from 'react';
import './FoodList.css'

const Button = ({ onClick, children, disabled }) => {
  return (
    <button 
      onClick={onClick} 
      className="button" 
      disabled={disabled}>{children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false
}

export default Button; 