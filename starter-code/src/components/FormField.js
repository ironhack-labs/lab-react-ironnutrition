import React from 'react';

const FormField = ({label, name, type, holder, value, onChange, autofocus}) => (
  <div className="field">
    {label ? <label className="label">{label}</label> : null}
    <div className="control">
      <input
        className="input"
        name={name}
        type={type}
        placeholder={holder}
        value={value}
        onChange={onChange}
        autoFocus={autofocus ? autofocus : null}
      />
    </div>
  </div>
);

export default FormField;