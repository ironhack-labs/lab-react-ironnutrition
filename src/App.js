import React from 'react';

import './App.css';
import { useState } from "react";
import 'bulma/css/bulma.css';
import foodsArr from './foods.json'
import FoodBox from './components/Foodbox'
import AddFood from './components/AddFood'
import SearchFood from './components/SearchFood';

function App() {
const [foodDetails, setFoodDetails] = useState(foodsArr);
const [foods, setFoods] = useState(foodsArr);
  
  
  const addNewFood = (newFood) => {
    newFood.id = newFood.name;
    newFood.inList = false;
    const updatedFoods = [...foodDetails, newFood];

    setFoods(updatedFoods);
    setFoodDetails(updatedFoods);
  }  

  const filteredFoods = searchedFood => {
    const filterFoods = foodDetails.filter(foodElement => {
      return foodElement.name.toLowerCase().includes(searchedFood.toLowerCase());
    });

    setFoods(filterFoods)
  }
  return (

   <div className="Foods">
<AddFood addFood={addNewFood}/>
<SearchFood handleSearch={filteredFoods} />
{foods.map((food)=><FoodBox name={food.name} calories={food.calories} image={food.image} key={food.id} id={food.id}/>)}
</div>

  );
}

export default App;
