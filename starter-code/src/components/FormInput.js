import React from 'react';

const FormInput = ({name, type, handleChange }) => {
    return (
        <div class="input-container">
            <label  for={name}>{name}</label>
            <input id={name} onChange={handleChange} name={name} type={type} />
        </div>
    )
};

export default FormInput;