import foods from "./foods.json";
import {useState} from "react";
import AddNewFood from "./components/AddFoodForm";
import FoodList from "./components/FoodList";


import "./App.css";


function App() {

  const [foodsToDisplay, setFoodsToDisplay] = useState(foods)

  const deleteFood = (foodName) => {
    const newList = foodsToDisplay.filter ((element) => {
      return element.name !== foodName;
    });
    setFoodsToDisplay(newList);
  }

  const addNewFood = (newFood) => {
    const newList = [newFood, ...foodsToDisplay]
    setFoodsToDisplay(newList)
  }


  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      
      <AddNewFood callbackToAddFood={addNewFood} />

      <FoodList foods={foodsToDisplay} callbackToDelete={deleteFood}/>
    </div>
  );
}

export default App;
