import React, { useState } from 'react'
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJson)
 {/* const foodItem = {
    name: "Orange",
    calories: 85,
    image: "https://i.imgur.com/abKGOcv.jpg",
    servings: 1
  };*/}

 //Iteration 4(Delete)
  const deleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  //Iteration 5(Add Food Form)
  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
     {/* <FoodBox food={foodItem} />*/}

      <h1>Food List</h1>

      <AddFoodForm onAddFood={handleAddFood} />

      {foods.map((food) => (
        <FoodBox key={food.id} food={food} clickToDelete={deleteFood} />
      ))}
    </div>
  );
}

export default App;
