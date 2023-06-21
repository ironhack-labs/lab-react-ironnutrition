// src/App.js
import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

import './App.css';
import foods from "./foods.json";
import FoodBox from "./component/FoodBox";



function App() {

  const [foodToDisplay, setFoodToDisplay] = useState(foods);



  return (

    <div className="App">

      {foodToDisplay.map((foodObj) => {
        return (<FoodBox food={ {
            name: foodObj.name,
            calories: foodObj.calories,
            image: foodObj.image,
            servings: foodObj.servings
          }} />
        )
      })}

    </div>
  );

}


export default App;