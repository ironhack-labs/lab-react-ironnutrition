import React, { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { Row, Divider } from "antd";
import Search from "./components/Search";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleDeleteFood = (id) => {
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  const handleAddFood = (newFood) => {
    setFoods([...foods, newFood]);
  };

  const foodList = foods.map((food, index) => (
    <FoodBox key={index} food={food} onDelete={() => handleDeleteFood(food.id)} />
  ));

  const handleOnSearch = (name) => {
    const searchingList = [...foods].filter(food => food.name.toLowerCase().includes(name.toLowerCase()))
    
    if(name) setFoods(searchingList)
    else setFoods(foodsJson)

  }

  return (
    <div className="App">
      <AddFoodForm onAddFood={handleAddFood} />
      <Divider>Food List</Divider>
      <Search style={{marginBottom: "20px"}} onSearch={handleOnSearch}/>
      <div className="row" style={{ width: "100%", justifyContent: "center" }}>

        {foodList.length > 0 ? foodList : <h1>Oops! There is no more content to show.</h1>}

      </div>
    </div>
  );
}

export default App;
