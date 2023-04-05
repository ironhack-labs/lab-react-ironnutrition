import foods from "./foods.json";
import React, { useState } from 'react'
import FoodBox from './components/FoodBox'


function App () {
  const [foodList, setFoodList] = useState(foods);
  const addFood = (newFood) => {
    setFoodsArr((prevFoodsArr))
  }
    return foodList.map((foodsDetails) => (
      <div>
<p> {foodsDetails.name} </p>
<img className="foods-image" src={foodsDetails.image}/>
</div>
    ))}
<FoodBox foods={{
      name: foods.name,
      calories: foods.calories,
      image: foods.image,
      servings: foods.servings
}} />
export default App;