import "./App.css";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json"
import { useState } from "react";


function App() {
const [foodList, setFoodList]= useState(foodsJson)


function deleteFoodObj(foodId){
  const newList = foodList.filter((foodObj) => {
    return foodObj.id !== foodId;
  })
  setFoodList(newList);
}

// const copyFoodList = [...foodList]
// console.log(copyFoodList)

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      
      {foodList.map((foodElm, index) =>{
        // console.log(foodElm.id)
        // console.log(index)
        return (
          <FoodBox 
            key={foodElm.id}
            food={foodElm} 
            index={index} 
            deleteFood={deleteFoodObj}
            />
            ) 
      })}
     

    </div>
  );
}

export default App;
