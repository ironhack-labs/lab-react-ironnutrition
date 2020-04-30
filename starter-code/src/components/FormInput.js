import React from 'react';

const FormInput = ({name, type, handleChange }) => {
    return (
        <div>
            <label name={name}>{name}</label>
            <input onChange={handleChange} name={name} type={type} />
        </div>
    )
};

export default FormInput;