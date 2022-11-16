import React from 'react'



function FoodBox({food}) {
    const {name, calories, image, servings} = food;

    const totalCalories = calories * servings;

  return (
    <div className='border'>
        <div>
            <h2>{name}</h2>
        </div>
        <div>
            <div>
                <img className='small-image' src={image} alt="image of food" />
            </div>
            <div>
                <p>Calories: {calories}</p>
                <p>Servings: <span className='text-bold'>{servings}</span></p>
                <p><span className='text-bold'>Total Calories: {totalCalories}</span> kcal</p>
                <button>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default FoodBox