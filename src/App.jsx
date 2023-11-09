import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {

  // Iteration 1:
  const [food, setFood] = useState(foodsJson)

  // Iteration 4:
  const deleteFoodItem = (foodId) => {
    const newList = food.filter((foodDetails) => {
      return foodDetails.id !== foodId;
    });
    setFood(newList);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      {/* Iteration 5: */}
      <AddFoodForm />

      {/* Iteration 2 and 3: */}
      {food.map(function(foodItem, index){
        return <FoodBox
                  key={index}
                  foodDetails={foodItem}
                  delete={deleteFoodItem}
                  
        />
      })}
    </div>
  );
}

export default App;
