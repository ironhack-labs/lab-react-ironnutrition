import React from 'react'
import 'bulma/css/bulma.css';

export default function TodaysFoods(props) {
    return (
        <div>
            <li>{props.item.quantity} {props.item.name} {props.item.calories* props.item.quantity} cal.</li>
        </div>
    )
}
