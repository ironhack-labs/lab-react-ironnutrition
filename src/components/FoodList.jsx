import React from 'react'

function FoodList({food}) {
  return (
    <div>
        <p>{food.name}</p>
        <img src={food.image} alt={food.name} />
    </div>
  )
}

export default FoodList