import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from "react";
import './App.css';
import Search from "./components/Search"

import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm"

function App() {
  const [foodArray, setFoodArray] = useState(foods)

  return (
    <div className="App">
      <Search />

     <AddFoodForm foodsArray={foodArray} setFoodArray={setFoodArray}/>
    <div>
      {foodArray.map((food) => { 
        
        return ( 
          <div> <FoodBox name={food.name} calories={food.calories}  image={food.image} servings={food.servings}/> 
          </div>
        )
      }
    )}      
    </div>
    </div>
  );
}

export default App;
