import React, { useState } from 'react'
import FoodBox from '../FoodBox/FoodBox'
import { Row } from 'antd'

function FoodList({ allFoods, search }) {
  const [foods, setFoods] = useState(allFoods)
  const handleFoodCreated = (name, image, calories, servings) => {
    setFoods(prev => [
      ...prev,
      {
        name, image, calories, servings
      }]
    );
  }

  const handleDeleteFood = (food) => {
    setFoods(prev => prev.filter(f => f !== food))
  }

  return (
    <div className='mt-3'>
      <h1 className='fw-bold' >Food List</h1>
      <Row>{foods
        .filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
        .map(food => (<FoodBox food={food} key={food.name} onDeleteFood={() => handleDeleteFood(food)} />))}
      </Row>
      {foods.length === 0 && (<>
        <p className='App fw-bold'>{foods.length === 0 ? "Opps! There is no more content to show" : ""}</p>
        <img src="https://cdn-icons-png.flaticon.com/512/43/43533.png" alt="emptySet" style={{ width: 250}} />
      </>)}
    </div>
  )
}

export default FoodList