import React from 'react'

function Food({ food }) {
  return (
    <div className='m-5'>
      <h1>{food.name}</h1>
      <img src={food.image} alt="foodPicture" style={{ width: 300 }} />
    </div>
  )
}

export default Food