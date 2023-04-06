import React from 'react'

function FoodBox({ food }) {

  return (
    <div className='border border-yellow-500 w-72 h-96 rounded-xl'>
      <div className='border-b border-yellow-500 w-72 h-20 flex items-center px-10'> {food.name}</div>
      <div className='w-72 h-72  flex flex-col px-10 justify-center'>
        <img className='w-24 py-2' src={food.image} alt={food.name} />
        <p className='my-2'>Calories: {food.calories}</p>
        <p className='my-2'>Servings: {food.servings}</p>
        <p className='my-2 font-bold'>Total calories: {food.calories} kcal</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-24 mt-2">
          Delete
        </button>
      </div>
    </div>
  )
}

export default FoodBox