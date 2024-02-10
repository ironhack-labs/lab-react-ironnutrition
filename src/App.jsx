import { useState } from "react";
import "./App.css";
import food from "./foods.json"
import Foodbox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm"



function App() {
  const [foodList, setFoodList] = useState(food);

  const handleNewFood = (newFood) => {
    const newFoodList = [newFood, ...foodList]
    setFoodList(newFoodList);
  }


  const deleteFood = (foodId) => {
    //Eliminar el food con ese id del foodList
    const newList = foodList.filter((food) => {
      return food.id !== foodId;
    });
    setFoodList(newList);
  }


  return (

    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm newFoodItem={handleNewFood} />
      <Foodbox foodList={foodList} deleteFood={deleteFood} />
    </div>

  );
}

export default App;
