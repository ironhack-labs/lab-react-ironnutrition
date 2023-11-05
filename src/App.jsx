/* eslint-disable no-unused-vars */
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import AddFood from "./components/AddFoodForm";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import SearchBar from "./components/searchBar";

function App() {
  const [food, setFood] = useState(foodsJson)
  const deleteFood = foodId => {
    const filteredFood  = food.filter(elem=>{
      return elem.id !== foodId 
    })
    setFood(filteredFood)
  }

  const addNewFood = newFood =>{
    const newListFood = [newFood, ...food]
    setFood(newListFood)
  }

  const filterFood = searchFood =>{
    const filteredFood = searchFood !== "" ? food.filter(foodx=>foodx.name.toLocaleLowerCase().includes(searchFood.toLocaleLowerCase())) : foodsJson
    setFood(filteredFood)
  }

  return (
    <div className="App">
      <Divider id="heading">Food List</Divider>
      <AddFood addfood={addNewFood}/>
      <SearchBar id="search-bar" foody={food} filter={filterFood}/>
      <Row style={{ gap:"90px", width: "100%", justifyContent: "center" }}>
        {<FoodBox food={food} delete={deleteFood}/>}
      </Row>
    </div>
  );
}

export default App;
