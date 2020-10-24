import React from 'react'
import 'bulma/css/bulma.css';

export default function TodaysFoods(props) {
    return (
        <div>
            <li>{props.item.quantity} {props.item.name}(s) : {props.item.calories* props.item.quantity} calories</li>
        </div>
    )
}
