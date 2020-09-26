import React from 'react'

const Menu = (props) => {
  const totalCalories = props.foods.reduce((acc, el) => acc + el.calories * el.quantity, 0)

  return (
    <div className="Menu">
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {props.foods.map((food) => (
          <li>
            {food.quantity} {food.name} = {food.calories * food.quantity} cal
          
            <button
              className="button is-small is-danger"
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
