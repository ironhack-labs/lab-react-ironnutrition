import React from 'react'

function FoodBox({ food }) {

  return (

    <div className='border border-yellow-500 w-72 h-96 rounded-xl'>
      <div className='border-b border-yellow-500 w-72 h-20 flex items-center px-4'> {food.name}</div>
      <div className='w-72 h-72 flex flex-col'>
        <img className='w-24' src={food.image} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>Total calories: {food.calories}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-24">
          Delete
        </button>
      </div>
    </div>

  )
}

export default FoodBox