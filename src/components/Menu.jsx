import React from 'react'

const Menu = (props) => {
  console.log(props);
    const totalCalories = props.foods.reduce((acc,el) => acc + (el.calories * el.quantity),0)

    return (
        <div className="Menu">
        <h2 class="subtitle">Today's foods</h2>
          <ul>
          {
            props.foods.map((e) => {
                return (
                    <li>{e.quantity} {e.name} = {e.calories} cal</li>
                )
            })
          }
          </ul>
          <strong>Total: {totalCalories} cal</strong>
        </div>
    )
}

export default Menu