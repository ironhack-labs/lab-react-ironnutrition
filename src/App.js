import { useState } from "react";
import './App.css';
import foods from './foods.json';
import FoodBox from "./components/FoodBox";
import { Card, Col, Button } from 'antd';
import AddFoodForm from "./components/AddFoodForm";
import Searchbar from "./components/Searchbar";

function App() {
  const[displayItems, setDisplayItems] = useState(foods);
  const[showFoods, setShowFoods] = useState(foods);

  const deletedFood = (name) => {
    const filteredFood = displayItems.filter((food) => food.name !== name);
    setDisplayItems(filteredFood);
    setShowFoods(filteredFood);
  }
  
  const createFood = (food) => {
    const newFoodsArr = [food, ...displayItems]
    setDisplayItems(newFoodsArr);
    setShowFoods(newFoodsArr);
  }

  const filterFoods = (searchQuery) => {
    let filteredFood = displayItems.filter((food) => 
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setShowFoods(filteredFood);
    /* setDisplayItems(filteredFood); */
  }

  return <div className="App">
    <Searchbar filterFoods={filterFoods}/>
     {showFoods.map((item) => {
      return (
        <FoodBox food = {item} deletedFood = {deletedFood}/>
        
        
       )
    })} 
    
    
    <AddFoodForm createFood={createFood}/>
    

    
    
  </div>;
}
export default App;




