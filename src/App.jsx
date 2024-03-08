import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import foodsJson from "./foods.json";

function App() {

  const addNewFood = (foodItem) => {
    setFoodList([...foodList, foodItem])
  }

  const deleteFoodItem = (id) => {
    const newArray = [...foodList] 
    newArray.forEach((food) => {
      if (food.id == id) {
        const foodIndex = newArray.indexOf(food)
        newArray.splice(foodIndex, 1)
      }
    } )
    setFoodList(newArray)
  }

  const [foodList, setFoodList] = useState(foodsJson)
  return (
    
    <div className="App">
    <AddFoodForm addNewFood={addNewFood}/>
    {foodList.map((food) => (<FoodBox deleteFoodItem={deleteFoodItem} key={food.id} food={food}/>)
    )}
    </div>
  );
}

export default App;
