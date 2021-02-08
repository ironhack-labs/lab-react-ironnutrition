import React from 'react';


const myFoodItem = props => {  

  return (
    <li className='mt-2'>
        <button className='button is-danger is-small mr-3' onClick={() => props.deleteMyFood(props.name)}> - </button>
        {props.quantity} {props.name} = {props.quantity*props.calories} cal 
    </li>
  )
}

export default myFoodItem



