import React from 'react';

const Button = (props) => {
  console.log(props.onCLick)
return <button className={props.className} >{props.name}</button>
} 

export default Button;
