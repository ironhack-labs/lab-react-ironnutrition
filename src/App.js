import logo from './logo.svg';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';

function App() {

const [food, setFood] = useState(foods)
const [foodData, setFoodData] = useState(foods)
const [showForm, setShowForm] = useState(false)
const [showMessage, setShowMessage] = useState(false)

const addNewFood = (newFood) => {
  const updateFood = [...food, newFood]

  setFood(updateFood)
  setFoodData(updateFood)
}

const searchFood = (str) => {
  let filteredFood

  filteredFood = foodData.filter(food => {
    return food.name.toLowerCase().includes(str.toLowerCase())
  })
  setFood(filteredFood)
}

const deleteFood = (name) => {
  const filteredFoodData = foodData.filter(foods => {
    return foods.name !== name
  })
  const filteredFood = food.filter(foods => {
    return foods.name !== name
  })
  setFood(filteredFood)
  setFoodData(filteredFoodData)
  

  if(food.length === 1) {
    setShowMessage(true)
    console.log("true")
  }
  
}

const toggleShowForm = () => {
  setShowForm(!showForm)
}

  return (
    <div className="App">
     
      

     {showForm ? <AddFoodForm addFood={addNewFood}/> : <></>}

      <Button onClick={toggleShowForm}> {showForm ? 'Hide Form' : "Add New Food"} </Button>

      <Search searchFood={searchFood}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map(item => {
          return(
            <FoodBox key={food._id} food={item} deleteFood={deleteFood}/>
          )
        })}
      </Row>

      {showMessage ? <Divider>Shit's empty!</Divider> : <></>}
    </div>
  );
}

export default App;
