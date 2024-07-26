import { useState } from "react";
import "./App.css";
import foodsJson from './foods.json'
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";


function App() {

  const [foodList, setFoodList] = useState(foodsJson);

  function deleteFood(id){
    let newList = foodList.filter((food)=>{return food.id !== id})
    setFoodList(newList)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm foodList={foodList} setFoodList={setFoodList}></AddFoodForm>
      <div className="food-container">
        {foodList.map((food) => {
          return <FoodBox key={food.id} food={food} deleteFood={()=>{deleteFood(food.id)}}></FoodBox>
        })}
      </div>
    </div>
  );
}

export default App;
