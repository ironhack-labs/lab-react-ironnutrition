import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash as trash } from '@fortawesome/free-solid-svg-icons'

function TodayListElement(props) {
    const {name, quantity, calories} = props.food
    return (
        <div>
            <li key={name}>{quantity} {name} = {quantity*calories} cal <FontAwesomeIcon id={name} icon={trash} onClick={props.handleDeleteOnToday}/></li> 
        </div>
    )
}

export default TodayListElement
