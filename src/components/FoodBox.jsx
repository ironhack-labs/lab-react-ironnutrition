import React from 'react'

function FoodBox({ food, handleDelete }) {

  return (
    <div className='border border-yellow-500 w-72 h-96 rounded-xl'>
      <div className='border-b border-yellow-500 w-72 h-20 flex items-center px-10'> {food.name}</div>
      <div className='w-72 h-72  flex flex-col px-10 justify-center'>
        <div className="bg-white h-1/4 w-32 rounded-xl">
          <img className='h-full w-full object-cover rounded-xl' src={food.image} alt={food.name} />
        </div>
        <p className='my-2'>Calories: {food.calories}</p>
        <p className='my-2'>Servings: {food.servings}</p>
        <p className='my-2 font-bold'>Total calories: {food.calories} kcal</p>
        <button
          onClick={() => handleDelete(food)}
          className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden tracking-tighter text-white bg-gray-800 rounded-lg group"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-yellow-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Delete</span>
        </button>
      </div>
    </div>
  )
}

export default FoodBox