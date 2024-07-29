import "./App.css";
import foodsJson from "./foods.json";
import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { Row, Divider } from "antd";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const addFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };
  const deleteFood = (name) => {
    const updatedFoods = foods.filter((food) => food.name !== name);
    setFoods(updatedFoods);
    };
   
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <Divider></Divider>
      <AddFoodForm onAddFood={addFood} />
      <Divider>Food List</Divider>
      <div className="food-list">
      <Row className='food-list' style={{ width: "50%", justifyContent: "center" }}>
      {foods.map((food, index) => {
          return <FoodBox key={index} food={food} onDelete={deleteFood} />;
        })}
        </Row>
        </div>
    </div>
  );
}

export default App;
