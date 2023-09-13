import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import "./App.css";
import AddFoodForm from "./components/AddFoodForm";

function App() {

  const [foodToDisplay, setfoodToDisplay] = useState(foodsJson);

  const deleteFood = (foodid) => {
    const newList = foodToDisplay.filter((element) => {
        return foodid !== element.id
    })
    setfoodToDisplay(newList)
}

const addNewFood = (newFood) => {
  const newList = [newFood, ...foodToDisplay];
  setfoodToDisplay(newList);
}

  return (
     
    <div className="App">
      <AddFoodForm callBackToAddFood={addNewFood}/>
      <FoodBox foodDetails={foodToDisplay} callBackToDelete={deleteFood}/>
    </div>
  );
}

export default App;
