import "./App.css";
import foodsJSON from "./foods.json"
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { useState } from 'react';

function App() {
  const [foods, setFoods] = useState(foodsJSON);

  const deleteFood = (id) => {
    setFoods(currentFoods => currentFoods.filter(food => food.id !== id));
  }

  const addNewFood = (newFood) => {
    setFoods([...foods, newFood]);
};


  return (
    <div className="App">
      <h3>Add Food Entry</h3>
      <AddFoodForm addNewFood={addNewFood} />

      <h1>Food List</h1>
      
      {foods.map((food, index)=>{
        return(<FoodBox key={food.id} food={food} deleteFood={deleteFood}/>)
      })}
      
    </div>
  );
}

export default App;
