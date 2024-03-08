import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";

function App() {

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
    {foodList.map((food) => (<FoodBox deleteFoodItem={deleteFoodItem} key={food.id} food={food}/>)
    )}
    </div>
  );
}

export default App;
