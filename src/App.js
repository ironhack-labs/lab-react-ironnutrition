// src/App.js
import './App.css';
import foodData from './foods.json';
import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from './components/Search';
import { Row } from 'antd'

function App() {

  const [foodsList, setFoodList] = useState(foods);
  
  const addNewFood = food => {
    const foodCopy = [food, ...foodsList,]
    setFoodList(foodCopy)
  }

  const searchFoods = str => {

    let searchResult = foodData.filter(food => {
      return food.name.toLowerCase().startsWith(str.toLowerCase())
    })
    setFoodList(searchResult)
  }

  const deleteFood = name => {
    const toDeleteFood = foodList.filter(food => {
      return food.name !== name
    })
  }

  return (
     <div className="App">
      <h2>Food List</h2>
        <div>
        <Row>
          <AddFoodForm addNewFood={addNewFood}/>
        </Row>
        <Search searchFoods={searchFoods} />
        <h1>Food List</h1>
        <Row>
          { foodList.map((item, index) => {
            return (
              <FoodBox food={ {
                name: item.name,
                calories: item.calories,
                image: item.image,
                servings: item.servings
              }} />
            )
            })}
        </Row>
        </div>
     </div>
  )
}

export default App;
