import React from 'react'
import foods from '../foods.json';
import FoodBox from './FoodBox'
import './Food.css'


const Foods = (props) => {
  
    return (
        <div className="Food">
            {foods.map((food, i) => {
                return <FoodBox key={i} name={food.name} calories={food.calories} image ={food.image}/>     
            })}
        </div>
    )
}

export default Foods
