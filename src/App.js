// src/App.js
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from "react";
import FoodBox from "./component/FoodBox";
import AddFoodForm from "./component/AddFoodForm";
import Search from './component/Search';



function App() {
  const [foodArray, setFoodsArray] = useState(foods);
  const [showFoodArray, setShowFoodArray] = useState(true);

  const addNewFood = (newFood) => {
    const updatedFood = [...foodArray, newFood];
    setFoodsArray(updatedFood);

  };
  const searchFoodArray = (event) => {
    const seachFoodArray = foodArray.filter(object => {
      object.name.toLowerCase().includes(event.toLowerCase())
    })
    console.log(seachFoodArray)
    setFoodsArray(seachFoodArray)
  }
  const toggleFoodArray = () => {
    setShowFoodArray(!showFoodArray)
  }
  const deleteFoodArray = (event) => {
    const seachFoodArray = foodArray.filter(object => object.name !== event
    )
    if (seachFoodArray.length === 0) {
      toggleFoodArray()
    }
    setFoodsArray(seachFoodArray)
  }
  return <div className="App">
    <AddFoodForm addFood={addNewFood} />
    <Search searchFood={searchFoodArray} />
    {showFoodArray ? foodArray.map(foodz => {
      return (<div>
        {/* <p> {foodz.name} </p>
        <img src={foodz.image} width='100'></img> */}
        <FoodBox food={foodz} deleteFood={deleteFoodArray} />
      </div>)
    }) : <div>Opps! There is no more content to Show</div>};
  </div>

}
export default App;