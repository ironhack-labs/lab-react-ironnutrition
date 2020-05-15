import React from 'react';
import './Input.css';
import 'bulma/css/bulma.css';

function Input({name,placeholder,type,value,onChange}) {
  return (
    <input class="input is-info" name={name} type={type?type:"text"} value={value ? value:''} placeholder={placeholder} onChange={onChange}/>
    );
}

export default Input;
