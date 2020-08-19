import React from 'react'
// I tried adding this using material design icons but Bulma's documentation wasn't quite clear on hwo to implement this. So I ended up using an icon of Bulma
import { mdiTrashCan } from '@mdi/js'

function CalorieItem(props){
    let itemTotal = props.food.quantity*props.food.calories

    return (
        <li className="list-item">
            <p>{props.food.quantity} {props.food.name} = {itemTotal} cal</p>
            &emsp;<button onClick={() => props.onDelete(props.id, itemTotal)} className="button delete  is-link"></button>
        </li>
    )
}

export default CalorieItem;