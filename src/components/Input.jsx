import React from 'react';

const Input = ({ name, onChange, value, error, placeHolder, type }) => {
  return (
    <div>
      <input name={name} onChange={onChange} value={value} placeholder={placeHolder} type={type}/>
      {error && <p>{error}</p>}
    </div>
  );
};

Input.defaultsProps = {
  type: "text"
}

export default Input;
