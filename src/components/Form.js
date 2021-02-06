import React from 'react';

function Form(props) {
  return (
    <div>
      {props.label}:
      <input
        class="input"
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        type={props.type}
      ></input>
    </div>
  );
}

export default Form;
