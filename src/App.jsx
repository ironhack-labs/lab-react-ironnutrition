import { useState } from "react";
import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {

  const [originalFoods, setOriginalFoods] = useState(foods);

  const deleteFood = (foodName) => {
    const newList = originalFoods.filter((element) => {
      return element.name !== foodName;
    });
    setOriginalFoods(newList);
  }

  const addFood = (newFood) => {
    const newList = [newFood, ...originalFoods];
    setOriginalFoods(newList);
  }

  return (
    <>
      <AddFoodForm callbackToAdd={addFood} />

      <header>
        <h1>Food list</h1>
      </header>
      
      {originalFoods.map((foodObj, index) => (
        <div key={foodObj.name}>
          <FoodBox food={foodObj} callbackToDelete={deleteFood} />
        </div>
      ))}
    </>

  );
}

export default App;