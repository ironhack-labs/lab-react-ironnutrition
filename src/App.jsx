import React, { useState } from "react";
import "./App.css";
import FoodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";



function App() {

  const [foodsState, setFoodsState] = useState('');



  const deleteFood = (foodToDelete) => {
    const updatedFoods = foodsState.filter((food) => food !== foodToDelete);
    setFoodsState(updatedFoods);
  };



  return (
    <div className="App">
      <h1>Food List</h1>

      {FoodsJson.map((food) => (
        <FoodBox key={food.name} food={food} deleteFood={deleteFood}/>
      ))}
    </div>
  );
}

export default App;