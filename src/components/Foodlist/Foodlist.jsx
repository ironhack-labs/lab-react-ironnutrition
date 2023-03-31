import React, { useState } from 'react'
import FoodBox from '../FoodBox/FoodBox'
import { Row } from 'antd'
import AddFoodForm from '../AddFoodForm/AddFoodForm'

function Foodlist({ foodsData, search }) {

  const [foods, setFoods] = useState(foodsData);

  const addFood = (food) => setFoods([food, ...foods]);

  // TO DO: add a unique id key to every food in the foods JSON to prevent from deleting foods with the same name
  // For the time being, let's just trust the user won't add a food that already exists ;)

  const handleOnDelete = (name) => { 
    setFoods((prev) => prev.filter(food => food.name !== name))
  }

  return (
    <div className="container">
      <h1>Food List</h1>
      <AddFoodForm addFood={addFood} />
      <Row>
        {!foods.length ? <h1 className='m-3'>Oops! There is no more content to show.</h1> : foods
         .filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
          .map(food => <FoodBox food={food} onDelete={() => handleOnDelete(food.name)} key={food.name} />)
        }
      </Row>
    </div>
  )
}

export default Foodlist