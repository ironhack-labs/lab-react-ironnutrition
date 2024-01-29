import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBoox";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";
function App() {
  const [foods, setFoods] = useState(foodsJson);


  const DeleteFood = (Id) => {
    const deleteFoods = foods.filter((food) => food.id !== Id);
    setFoods(deleteFoods);
  };

  const AddNewFood = (newFood) => {
    setFoods([...foods, { ...newFood, id: foods.length + 1 }]);
  }

  return (
    <div className="App row">
      <h1>LAB | React IronNutrition</h1>

      <AddFoodForm AddFood={AddNewFood} />

      <div className="row">
        <h2>FOOD LIST</h2>
        {foods.map((food, id) => (
          <FoodBox className="col-3" key={id} food={food} onDelete={DeleteFood} />
        ))}
      </div>

    </div>
  );
}

export default App;
