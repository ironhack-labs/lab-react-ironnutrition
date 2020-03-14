import React from 'react'
import './TodaysFoods.css'

const TodaysFoods = ({id, name, cal, quantity, removeIngredient}) => {
    return <li> {quantity} {name} = {cal} cal <span onClick={removeIngredient}  id={id} ><i className='fas fa-trash-alt'></i></span></li>
}

export default TodaysFoods
