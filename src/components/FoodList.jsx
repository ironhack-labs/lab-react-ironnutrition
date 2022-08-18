import React from 'react'

import FoodBox from './FoodBox';

function FoodList(props) {
  return (
    
    <div>
        {props.foods.map(food => {
        return(
            <div>
             <FoodBox food={food} />
        </div>
        
       

            )
    })}
    </div>
  )
}

export default FoodList