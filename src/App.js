import logo from './logo.svg';
import './App.css';
import FoodBox from './Components/FoodBox';
import AddFood from './Components/AddFood';
import SearchFood from './Components/SearchFood';
import ToggleForm from './Components/ToggleForm';
import jsonFoods from "./foods.json";
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from "antd";



function App() {

  const [foodArray, setFoodArray] = useState(jsonFoods)
  const [modifiedFoodArr, setNewFoodArr] = useState(jsonFoods)
  const [showForm, setShowForm] = useState('Add New Food')
  
 

  let addFood = (newFood) => {
    const updatedFoodArray = [...foodArray, newFood]
    setFoodArray(updatedFoodArray)
    setNewFoodArr(updatedFoodArray)
    
  }

  let searchFood = (event) => {
    if(event.target.value === ""){
      setFoodArray(modifiedFoodArr)
      return modifiedFoodArr
    }
    else{
      let filteredFoods = modifiedFoodArr.filter((food) => food.name.toUpperCase().startsWith(event.target.value.toUpperCase()))
      setFoodArray(filteredFoods)
      return filteredFoods   
    }
  }

  let deleteFood = (foodName) => {
    const filteredFoods = modifiedFoodArr.filter(food=> food.name !==foodName)
    setFoodArray(filteredFoods)
    setNewFoodArr(filteredFoods)
  }

  let showFormFunc = (e) => {
    if (e.target.innerHTML === "Add New Food"){
      setShowForm('Add New Food')
    }
    else if (e.target.innerHTML === "Hide Form"){
      setShowForm('Hide Form')
    }
  }

  return (
    <div className="App">

      <div className='gridDiv'>

        <ToggleForm showFormFunc={showFormFunc} showForm={showForm}/>
        <AddFood addFood={addFood} showForm={showForm}/>
        <SearchFood searchFood={searchFood} />

      </div>

      <FoodBox foodArray={foodArray} deleteFood={deleteFood} modifiedFoodArr={modifiedFoodArr}/>

    </div>
  );
}

export default App;