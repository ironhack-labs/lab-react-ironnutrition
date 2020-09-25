import React from "react";

export default function Input({ name, value, onChange, type}) {
  return (
    <div className="field">
      <div className="control">
        <input className="input is-primary" name={name} type={type} value={value} onChange={onChange} placeholder={name}/>
      </div>
    </div>
  );
}