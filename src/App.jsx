import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json"
import { useState } from "react";


function App() {
const [foodList, setFoodList]= useState(foodsJson);

const [name, setName] = useState("")
const [image, setImage] = useState("")
const [calories, setCalories] = useState("")
const [servings, setServings] = useState("")


function deleteFoodObj(foodId){
  const newList = foodList.filter((foodObj) => {
    return foodObj.id !== foodId;
  })
  setFoodList(newList);
}

const handleSubmit = (e) => {
  e.preventDefault();
  
  const newFood = {
    name,
    image,
    calories,
    servings
  }

  const newFoodList = [newFood, ...foodList];
  setFoodList(newFoodList)

  setName("");
  setImage("");
  setCalories("");
  setServings("");

};






  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      
      <AddFoodForm
         addFood={handleSubmit}
         foodList={foodList}
         setListFood={setFoodList}
      />

      {foodList.map((foodElm, index) =>{
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
