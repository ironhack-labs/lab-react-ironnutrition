import React from 'react';

function Todays(props) {

    function multiply(num1, num2){
        return num1 * num2;
    }

    return (
        <li>{props.quantity} {props.name} = {multiply(props.quantity, props.calories)} cal</li>
    )
};

export default Todays;