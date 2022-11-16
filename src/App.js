// src/App.js
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import NewFood from './components/NewFood';
import React, { useState } from "react"
import Search from './components/Search';

// import { FoodBox } from 'antd';

function App() {

  const [foodsData, setFoods] = useState(foods)

  const foodDataHandler = (foodData) => {
    console.log(foodData)
    setFoods((prevState) => {
      return [...prevState, foodData]
    })

  }

  const searchHandler = (searchData) => {
    console.log(searchData)
    const newArray = foods.filter((foddie) => {
      console.log(foddie.name)
      return foddie.name.includes(searchData)
    })
    console.log(newArray)
    setFoods(newArray)
  }

  const deleteHandler = (foodName) => {
    const newArray = foodsData.filter((food) => {
      return food.name !== foodName
    })
    setFoods(newArray)
  }

  return <div className="App">
    <h1>Add Food</h1>
    <NewFood onFoodData={foodDataHandler} ></NewFood>
    <Search onSearch={searchHandler}></Search>
    <h1>Food List</h1>
    {foodsData.map((food) => {
      return (
        <FoodBox food={food} onDelete={deleteHandler} />

      )
    })}
  </div>
}
export default App;
