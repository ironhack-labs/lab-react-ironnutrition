// src/App.js
import './App.css';
//import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from 'react';
// src/App.js
import foodArray from "./foods.json";
import FoodBox from './components/foodBox';
import AddFoodFrom from './components/addFoodForm';
import Search from './components/search';


function App () {
  const [food, setFood] = useState(foodArray);
  
  const addNewFood = (newFood)=>{setFood([...food, newFood])};


  return(
    <div className="App">
      <Search food={food}/>
      <AddFoodFrom addNewFood={addNewFood}/>
      {food.map((food)=>{return <FoodBox food={food} />})}

    </div>
  )

 
  
}
export default App;
