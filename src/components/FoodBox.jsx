import React from 'react'

function FoodBox(props) {

    const {food, clickToDelete} = props;
    const totalKcal = food.servings * food.calories;

    return(
        <div>
            <p>{food.name}</p>

            <img src={food.image} width={200} height={200}/>

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
                <b>Total Calories: {totalKcal} </b> kcal
            </p>

            <button onClick={()=>clickToDelete(food.id)}>Delete</button>
        </div>
  )
}

export default FoodBox;