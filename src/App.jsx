import "./App.css";
//import foodsJson from "./foods.json";
//import FoodBox from "./components/FoodBox";
//import AddFoodForm from "./components/AddFoodForm";
import React from "react";
//npm install  uuid
//import { v4 as uuidv4 } from "uuid";
import FoodList from "./components/FoodList";

function App() {
  //const foodArray = [...foodsJson];
  //console.log(foodArray)

  // const [foods, setFoods] = React.useState(foodsJson);
  // const deleteFood = (id) => {
  //   const filteredFood = foods.filter((food) => food.id !== id);
  //   setFoods(filteredFood);
  // };

  // const generateUniqueId = () => {
  //   return uuidv4();
  // };

  // const addFood = (newFood) => {
  //   setFoods((prevFoods) => [...prevFoods, { ...newFood, id: generateUniqueId() }]);
  // };

  return (
    <div className="App">
      <FoodList  />
    </div>
  );
}

export default App;
