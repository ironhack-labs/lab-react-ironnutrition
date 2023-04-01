import React, { useState } from 'react'
import FoodBox from '../FoodBox/FoodBox'
import { Row } from 'antd'
import AddFoodForm from '../AddFoodForm/AddFoodForm'

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
      <AddFoodForm onFoodCreated={handleFoodCreated} />
      <Row>{foods
        .filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
        .map(food => (<FoodBox food={food} key={food.name} onDeleteFood={() => handleDeleteFood(food)} />))}</Row>
    </div>
  )
}

export default FoodList