import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function Todays(props) {

    function multiply(num1, num2){
        return num1 * num2;
    }

    return (
        <li>
        {props.quantity} {props.name} = {multiply(props.quantity, props.calories)} cal
        <button className="trash-btn" onClick={props.clickToDelete}><FaTrashAlt /></button>
        </li>
    )
};

export default Todays;