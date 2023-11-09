import { useState } from 'react';
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox.jsx";
import AddFoodForm from './components/AddFoodForm.jsx';
import "./App.css";

function App() {

  const [foods, setFoods] = useState(foodsJson);

  const addFoodsItem = (addedFoodsItem) => {
    const newList = [addedFoodsItem, ...foods];
    setFoods(newList);
  }

  const deleteFoodsItem = (foodsId) => {
    const newList = foods.filter((element) => {
      return element.name !== foodsId
    });
    setFoods(newList);
  }

  return (
    <>
      <div className="App">
        <h1>LAB | React IronNutrition</h1>
      </div>
      
      <AddFoodForm callbackToAddFoodsItem={addFoodsItem} />

      <FoodBox foodsArr={foods} callbackToDelete={deleteFoodsItem} />
    </>
  );
}

export default App;