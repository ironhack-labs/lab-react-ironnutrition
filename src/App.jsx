import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {

  const [foodList,setFoodList] = useState(foodsJson)
  
  const deleteItem = (id) => {
    const newArr = foodList.filter(ele=>ele.id!==id)
    setFoodList(newArr)
  }

  const listItems = foodList.map((food)=>{
    return(
      <FoodBox food={food} handleDelete={deleteItem}/>
    )
  })
  


  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <AddFoodForm food = {foodList} setFood = {setFoodList}/>
      <div className="cardDisplay">{listItems}</div>
    </div>
  );
}

export default App;
