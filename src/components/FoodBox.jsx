import React from 'react'

function FoodBox(props) {

function totalCalories(oneFood){
    const totalCalories = oneFood.calories * oneFood.servings
    return totalCalories
}

  return (
    
    <div >
   {props.food.map((oneFood)=>{
    return(
        <div key={oneFood.id} className='box'>

<p>{oneFood.name}</p>
<img src={oneFood.image} style={{width: `200px`}} />

<p>Calories: {oneFood.calories}</p>
<p>Servings {oneFood.servings}</p>

<p>
  <b>Total Calories: {totalCalories(oneFood)}</b> kcal
</p>

<button onClick={()=>props.deleteFood(oneFood.id)} className='deleteButton'>Delete</button>


        </div>
    )
   })}
      



    </div>
  )
}

export default FoodBox
