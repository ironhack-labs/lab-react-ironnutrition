import React, { useState } from 'react'
import FoodBox from '../FoodBox/FoodBox'
import { Row } from 'antd'
import AddFoodForm from '../AddFoodForm/AddFoodForm'

function Foodlist({ foodsData }) {

  const [foods, setFoods] = useState(foodsData);

  const addFood = (food) => setFoods([food, ...foods]);

  return (
    <div className="container">
      <h1>Food List</h1>
      <AddFoodForm addFood={addFood} />
      <Row>
        {foods.map(food => <FoodBox food={food} key={food.name} />)}
      </Row>
    </div>
  )
}

export default Foodlist