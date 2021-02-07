import React from 'react';

function FormTextInput(props) {
  return (
    <div class="field">
      <label class="label">{props.label}</label>
      <div class="control">
        <input
          class="input"
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </div>
  );
}

export default FormTextInput;
