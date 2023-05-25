import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from "react";
import foodsListJson from "./foods.json";
import FoodBox from "./Components/foodBox";
import AddFoodForm from "./Components/addFoodForm";

import './App.css';



function App() {

  let [foods,setFoods]= useState(foodsListJson)
  

  let addNewFood = (newFood) =>{
    let updatedFoods=[...foods,newFood];
    setFoods(updatedFoods);
}




  return (
    <div>
      <AddFoodForm addNewFood={addNewFood}/>
      
      {foods.map(food=>{
        return (
          
          <div>
          <FoodBox food={food}/>
          
          </div>)
      })}
      
    </div>
  );
}

export default App;
