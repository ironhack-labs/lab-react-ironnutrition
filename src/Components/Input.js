import React from 'react';

const Input = (props) => {
  const { label, value, onChange, type, placeholder } = props;
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">{label}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input
              className="input"
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Input;