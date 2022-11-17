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
  const [statement, setStatement] = useState(true);
  const hideFood = () => {
    console.log(statement)
    setStatement(!statement)
  }

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
    
    <Button onClick = {hideFood} type="submit">Hide</Button>
    { statement && <AddFoodForm createFood={createFood}/>} 
    
    

    {showFoods.length === 0 && <p>OOPSS, There is no more content to show!</p>}  
      
    
    
  </div>;
}
export default App;




