import React from   'react'

const FormField = (props) => (
    <div>
        <label>
            {props.label}
            <input type="text" placeholder={props.name} name={props.name}/>
        </label>
    </div>
);

export default FormField;