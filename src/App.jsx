import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from './components/AddFoodForm'
import { useState } from "react";


function App() {
  const [food, setFood] = useState(foodsJson)

  function deleteItem(id){
    const filteredFood = food.filter((oneFood)=>{
      return oneFood.id!==id
    })
    setFood(filteredFood)
    
  }

  return (
    <div className="App">
      <h1 id="title">LAB | React IronNutrition</h1>
      <AddFoodForm food={food} setFood={setFood}></AddFoodForm>
      {food.map((oneFood)=>{
       return <FoodBox key={oneFood.id} food={oneFood} deleteItem={deleteItem}/>

      })}
    </div>
  );
}

export default App;
