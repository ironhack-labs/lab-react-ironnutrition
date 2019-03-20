import React from 'react';

const Item = props =>  {
    console.log("entra EN ITEM")

    let cal = props.quantity*props.calories
    return (
        <li>
            {props.quantity} - {props.name} = {cal}
            <button onClick={() => props.deleteFood(props.key)} className="button is-info">Delete</button>
        </li>
    )
}
    
export default Item;