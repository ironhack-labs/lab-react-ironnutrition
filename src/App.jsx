import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";

function App() {

  const [foodList, setFoodList] = useState(foodsJson);

  function deleteFood(idParam) {
    const filteredFoods = foodList.filter((oneFood) => {
      return oneFood.id !== idParam;
    });

    setFoodList(filteredFoods);
  }

  function addFood(food){
    setFoodList([food, ...foodList])
 }


  return (
    <div className="App">

      <AddFoodForm addFood={addFood}></AddFoodForm>

      {foodList.map((food) => {
        return <FoodBox food={food} deleteFood={deleteFood} key={food.id} />;
      })}
    </div>
  );
}

export default App;
