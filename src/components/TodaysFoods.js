import React from 'react';

function TodaysFoods(props) {

    function multiply(num1, num2){
        return num1 * num2;
    }

    return (
        <li>{props.quantity} {props.name} = {multiply(props.quantity, props.calories)} cal</li> //{item.quantity * item.calories}
    )
};

export default TodaysFoods;