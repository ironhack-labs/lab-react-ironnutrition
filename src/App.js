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
  const [showForm, setShowForm] = useState(true)


  const toggleShowForm = () => {
     setShowForm(!showForm)
  }

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
        return food.name.toLowerCase().includes(str.toLowerCase())
      })
    }

    setFoods(filteredFood)
  }

  const deleteFood = (name) => {
    const filteredFoodData = foodsData.filter(food => {
      return food.name !== name
    })
    
    
    const filteredFood = foods.filter(food => {
      return food.name !== name
    })

    setFoods(filteredFoodData)
    setFoods(filteredFood)
  }

  return (
    <div className="App">
     <h1>Foodlist</h1>
     
     {showForm && <AddFoodForm addFood={addNewFood} />}
     <button onClick={toggleShowForm} >{showForm ? 'Hide Form' : 'Add New Food'}</button>

     <AddSearch filterFood={filterFood}/>
     <Row gutter={256}>
      {foods.map(food => {
        return (
    <div className='foodlist' key={uuidv4()}>
 <FoodBox food={food} deleteFood={deleteFood}/>
  </div>)
      })}
      </Row>



{/* <p> {food.name} </p>
  <img src={food.image} width={0} /> */}

    </div>
  );
}

export default App;
