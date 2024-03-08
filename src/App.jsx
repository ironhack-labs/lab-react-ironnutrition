import { useState } from "react";
import foodsJson from "./foods.json";
import "./App.css";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  function DeleteItem(id) {
    const newFoods = foods.filter((element) => element.id !== id);

    setFoods(newFoods);

    console.log(
      `Deleting item with ${id} which is a ${
        foods.find((element) => element.id === id).name
      }`
    );
    console.log(
      `To delete, a new array is filtered to only contain items with different id from deleted item  \n\n\n`
    );
    console.log("The new array is this \n");
    console.log(
      `${setTimeout(() => {
        newFoods.forEach((element) => console.log(element));
      }, "1000")}`
    );
  }

  function AddFood(food) {
    food.id = uuidv4();

    console.log(`Adding ${food.name} with a new id ${food.id}`);

    const newFoods = [...foods, food];
    setFoods(newFoods);
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {foods.map((element) => (
        <FoodBox key={element.id} food={element} DeleteItem={DeleteItem} />
      ))}
      <AddFoodForm AddFood={AddFood} />
    </div>
  );
}

export default App;
