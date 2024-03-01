// Your code here
import React from 'react'

export default function FoodBox({name, calories, image, servings, id, deleteFood}) {
  console.log(name);

  return (
    <div className="food-card">
        <p>{name}</p>

        <img src={image} alt={name}/>

        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>

        <p>
            <b>Total Calories: {calories * servings} </b> kcal
        </p>

        <button className="button" onClick={() => deleteFood(id)}>Delete</button>
   </div>
  )
}
