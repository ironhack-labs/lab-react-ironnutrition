import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";


function App() {

const [foods, setFoods] = useState(foodsJson)

function deleteFood(id){

  let updatedFoodItems = foods.filter(food =>food.id!==id)
  setFoods(updatedFoodItems)

}

  return (
    <div className="App">
      <AddFoodForm food={foods} setFoods = {setFoods}></AddFoodForm>
     <FoodBox foods={foods} deleteFood ={deleteFood}/>
     
    </div>
  );
}

export default App;
