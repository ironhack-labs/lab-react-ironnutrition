import React from 'react';

const Button = (props) => <button onClick={props.onCLick} className={props.className} >{props.name}</button>

export default Button;
