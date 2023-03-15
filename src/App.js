import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import uuid from 'uuid';
import foodList from "./foods.json";
import './App.css';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import SearchBar from "./components/SearchBar";

function App() {

  const [foods, setFoods] = useState(foodList)
  const [originalFoods, setOriginalFoods] = useState(foodList)

  function getFood (newFood){
    const updatedFoods = ([...foods, newFood])
    setFoods(updatedFoods);
  }

  function handleSearch (text){
    if(text === ''){
      setFoods(originalFoods)
    }
    else {
      const filteredFoods = foods.filter((food)=> food.name.toLowerCase().includes(text.toLowerCase()));
      setFoods(filteredFoods)
    }
  }

  function deleteButton (name){
    const deletedFood = foods.filter((food)=> {
     return food.name !== name
    })
    setFoods(deletedFood)
  }

  return (
    <div className="App">
    
    <SearchBar onSearch = {handleSearch} foods = {foods}/>
    {foods.map((food) => {
      let props = {
        name: food.name,
        calories: food.calories,
        image: food.image,
        servings: food.servings
      }
      return <FoodBox key={food.image} foods = {props} deleteButton = {deleteButton}/>
    })}
      
      <AddFoodForm getFood = {getFood}/>
    </div>
  );
}

export default App