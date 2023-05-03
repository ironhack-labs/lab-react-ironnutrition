import './App.css';
// import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from "react";
import foods from "./foods.json";
import FoodBox from './components/Foodbox';

const foodsList = [...foods]

function App() {
  //Save the imported foods from the JSON file in a state variable
  const [foods, setFoods] = useState(foodsList);
  return (
    <div className="foods">
      <div>
        <span></span>
        {foods.map((food) => {
          return <div key={foods._id}>
            <FoodBox food />
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
