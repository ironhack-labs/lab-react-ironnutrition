import React, {useState} from 'react'
import './App.css';
import foodsJSON from "./foods.json";
import FoodBox from './components/FoodBox';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {

 const [ allFoods, setAllFoods ] = useState(foodsJSON)
 const [ allSearchFood, setAllSearchFood ] = useState(foodsJSON)


 const createFood = (food) => {
  const newFood = [food, ...allFoods]
  setAllFoods(newFood)
 }

 const searchFood = (query) => {
  const filteredFoods = allSearchFood.filter((food) =>
  food.name.toLowerCase().includes(query.toLowerCase())
  );
  setAllFoods(filteredFoods);
};

const deleteFood = (foodId) => {
  const filteredFoods = allSearchFood.filter((manyFood) => {
    return manyFood.name !== foodId;
  });
  setAllSearchFood(filteredFoods)


  return (
    <div className="App">
      <div>
        <Search searchFood={searchFood}/>
        <AddFoodForm createFood={createFood}/>
      

      {allFoods.map((dish,index)=> {
        return ( 
            <FoodBox
            key={index}
            food={{
            name: dish.name,
            calories: dish.calories,
            image: dish.image, 
            servings: dish.servings

          }} deleteFood={deleteFood}/> 

        )})}



      </div>
    </div>
  );
}
}
export default App;
