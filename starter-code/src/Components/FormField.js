import React from "react";

const FormField = props => {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input onChange={props.onChange} 
        className="input" type={props.type} 
        name={props.name} 
        value={props.value} 
        placeholder={props.placeholder} />
      </div>
    </div>
  )
}

export default FormField;

