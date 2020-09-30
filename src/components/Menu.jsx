import React from 'react'
import './FoodList.css'

const Menu = (props) => {
    const totalCalories = props.foods.reduce((acc, curr) => acc + curr.calories * curr.quantity, 0)
  
    return (
      <div className="Menu">

        <h2 className="subtitle">Today's foods</h2>
        
        <ul>
          {props.foods.map((food) => (
            <li className="mt-4">
              {food.quantity} {food.name} = {food.calories * food.quantity} cal
  
              <button
                className="button is-small is-danger ml-3"
                onClick={() => {
                  props.deleteFromMenu(food)
                }}
              >Delete</button>
            </li>
          ))}
        </ul>
  
        <strong>Total: {totalCalories} cal</strong>
      </div>
    );
  }
  
  export default Menu