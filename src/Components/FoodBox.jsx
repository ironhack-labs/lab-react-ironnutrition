import React from 'react'

function FoodBox({oneFood, handelExpelled}) {
   
    
  return (
    <div>
    <div>
    <p> {oneFood.name} </p>
<img src={oneFood.image} width={80} />
<p>calories: {oneFood.calories}</p>
<p>servings: {oneFood.servings}</p>
<p>total calories: {oneFood.servings * oneFood.calories}</p>
<button onClick={()=>handelExpelled(oneFood.name)} type="submit">
Delete
</button> 

</div>

    </div>
  )
}

export default FoodBox