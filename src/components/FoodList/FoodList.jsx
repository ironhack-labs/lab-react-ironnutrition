import React from 'react'

function FoodList({ foods }) {
  return (
    <div className='mt-3'>
      <h1 className='fw-bold' >Food List</h1>
      {/* {foods.map(food => (<Food food={food} key={food.name} />))} */}
    </div>
  )
}

export default FoodList