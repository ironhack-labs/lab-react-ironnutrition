import React from 'react';

const Input = ({ name, onChange, value, error, placeholder, type }) => {
  return (
    <div className="Input">
      <input
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
