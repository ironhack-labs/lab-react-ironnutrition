import foods from "./foods.json";
import React, { useState } from 'react'
import FoodBox from './components/FoodBox'


function App () {
  const [foodList, setFoodList] = useState(foods);
    return foodList.map((foods) => (
      <div>
<p> {foods.name} </p>
<img className="foods-image" src={foods.image}/>
</div>
    ))}
<FoodBox foods={{
      name: foods.name,
      calories: foods.calories,
      image: foods.image,
      servings: foods.servings
}} />
export default App;