import './App.css';
import foodsJSON from "./foods.json";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import AddSearch from './components/AddSearch';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [foodsData, setFoodsData] = useState(foodsJSON)
  const [foods, setFoods] = useState(foodsJSON)

  const addNewFood = (newFood) => {
    const updatedFoodDataList = [...foods, newFood]
    const updatedFoodList = [...foods, newFood]

    setFoods(updatedFoodDataList)
    setFoods(updatedFoodList)
  }

  const filterFood = (str) => {
    let filteredFood

    if (str === "All") {
      filteredFood = foodsData
    } else {
      filteredFood = foodsData.filter(food => {
        return food.name[0].toLowerCase() === str.toLowerCase()
      })
    }

    setFoods(filteredFood)
  }

  const deleteFood = (id) => {
    const filteredFoodData = foodsData.filter(food => {
      console.log(food._id)
      return food._id !== id
    })
    
    
    const filteredFood = foods.filter(food => {
      return food._id !== id
    })

    setFoods(filteredFoodData)
    setFoods(filteredFood)
  }

  return (
    <div className="App">
     <h1>Foodlist</h1>
     <AddFoodForm addFood={addNewFood} />
     <AddSearch filterFood={filterFood}/>
     <Row gutter={256}>
      {foods.map(food => {
        return (
    <div className='foodlist'>
 <FoodBox food={food} key={uuidv4()} deleteFood={deleteFood}/>
  </div>)
      })}
      </Row>



{/* <p> {food.name} </p>
  <img src={food.image} width={0} /> */}

    </div>
  );
}

export default App;
