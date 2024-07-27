import React from 'react'


function FoodBox(props) {
  return (
    <div className='grid-container'>
        {props.foods.map((food)=>(
            <div key ={food.id} className='grid-item'>
            <h2>{food.name}</h2>
            <img src={food.image} alt={food.name} className='image-style'/>
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
            <b>Total Calories: {food.servings * food.calories}</b> kcal
            </p>
            <button className='button-style' onClick={()=>props.deleteFood(food.id)} >Delete</button>
            </div>
        ))}
    </div>
  )
}

export default FoodBox