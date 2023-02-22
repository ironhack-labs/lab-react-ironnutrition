// src/App.js
import './App.css';
import foodsDatas from "./foods.json";
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';

function App () {
  const [foods, setFoods]= useState(foodsDatas.slice(0))
  const [foodsData, setFoodsData]= useState(foodsDatas.slice(0))

  const updatedFood = (newFood) => {
    const updatedFoods = [...foods, newFood]
    const updateFoodsData = [...foodsData, newFood]
    
    setFoods(updatedFoods)
    setFoodsData(updateFoodsData)
  }

  const deleteFood = (name) => {
    const filteredFood = foods.filter(food => {
      return food.name !== name
    })
    const filteredFoodData = foodsData.filter(food => {
      return food.name !== name
    })

    setFoods(filteredFood)
    setFoodsData(filteredFoodData)
  }

  const filterFoods = (text) => {
    let filteredFoods
    if (text === "") {
      filteredFoods = foodsData
    } else {
      filteredFoods = foodsData.filter((food) => {
        return food.name.includes(text)
      })
    }

    setFoods(filteredFoods)
  }



  return( <div className="App">

  <Search filterFood={filterFoods}/>
  
  <AddFoodForm addFood={updatedFood}/>


  {foods.map((food, i)=>{
    return <FoodBox key={i} food={food} deleteFood={deleteFood}/>
    }
  )}   


  </div>
  )
}
export default App;