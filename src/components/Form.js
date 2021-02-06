import React from 'react';

function Form(props) {
  return (
    <div>
      <input
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        type={props.type}
      ></input>
    </div>
  );
}

export default Form;
