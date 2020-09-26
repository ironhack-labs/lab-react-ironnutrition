import React from "react";

export default function InputLabelHorizontal({ name, type, value, onChange }) {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label" htmlFor={name}>{name}</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input className="input" name={name} type={type}  value={value} onChange={onChange} />
          </p>
        </div>
      </div>
    </div>
  );
}