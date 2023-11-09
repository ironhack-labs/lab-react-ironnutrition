import "./App.css";
import { useState } from 'react'
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {

const [foods, setFoods] = useState(foodsJson)

const addFoodItem = (addedFoodItem) => {
  const newList = [addedFoodItem, ...foods];
  setFoods(newList);
}

const deleteFood = (foodName) => {
  const newList = foods.filter((foodDetail)=>{
    return foodDetail.name !== foodName
  })
  setFoods(newList);
}


  return (
    <div className="App">
  
  <AddFoodForm callbackToAddFoods ={addFoodItem}/>
      
 <FoodBox foodsArray = {foods}
 
 callbackToDelete = {deleteFood}
 />
    </div>
  );
}

export default App;
