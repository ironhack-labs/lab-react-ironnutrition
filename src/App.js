import React, { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foodArr from './foods.json';
import 'bulma/css/bulma.css';
import AddFood from './components/AddFood';
import Search from './components/Search';



function App() {
  const [food, setFood] = useState(foodArr);
  
  // const [showForm, setShowForm] = useState();

  const addFood = (newFood) => {
    setFood((prevFood) => {
      const copy =[newFood, ...prevFood]
      return copy
    });
  }

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <button >Add new Food</button>  

      <AddFood callBackAddFood={addFood} />
      <Search food={food} setFood={setFood}/>
      <FoodBox foodList={food} />

    </div>
  );
}

export default App;
