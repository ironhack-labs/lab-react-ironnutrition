import { Card, Row, Col, Divider, Input, Button } from "antd";
import './App.css';
import foods from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";






function App () {

  const [foodList, setFoodList] = useState(foods)
  const foodListCopy = [...foodList]

  const addFood = (newFood) => {
    setFoodList( (prevFoodList) => {
      const newList = [newFood, ...prevFoodList];
      return newList;
    });
  }


return(
  <div className="App">
<AddFoodForm callbackToAdd={addFood}/>
{foodListCopy.map((foodListObj) =>{
  return (
    <>
    <FoodBox foodDetails ={foodListObj}/>
    </>
)
})} 

 


{/* <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} /> */}

  </div>
)
}

export default App;
