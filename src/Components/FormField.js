import React from "react";

function FormField(props){

       const [state, setState] = props.state;  

    function handleChange(e){
        setState({...state,[e.target.name]:e.target.value});
    }

    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
                <input className="input" type={props.type} placeholder={props.placeholder} onChange={handleChange} value={state[props.name]} name={props.name}
                />
            </div>
        </div>
    )
}
export default FormField;