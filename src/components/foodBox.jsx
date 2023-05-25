import React from 'react'

function FoodBox(props) {
    const{food} = props;
  return (
    <div>
        <h3>{food.name}</h3>
        <div>
            <img src={food.image} width={100}/>
            <p>Calories: {food.calories}</p>
            <p>Servings: <span style={{fontWeight: 'bold'}}>{food.servings}</span></p>
            <p><span style={{fontWeight: 'bold'}}>Total Calories: {food.calories}</span> kcal</p>
            <button>Delete</button>
        </div>
    </div>
  )
}

export default FoodBox;