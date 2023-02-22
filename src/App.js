// src/App.js
import { v4 as uuidv4 } from "uuid"
import './App.css';
import foods from "./foods.json";
import { useState } from "react"
import FoodBox from "./FoodBox"
import AddFoodForm from "./AddFoodForm"
import Search from './Search'

import { Card, Row, Col, Divider, Input, Button } from "antd";


function App () {
  const [allFoods , setallFoods] = useState(foods)
  const [cloneallFoods, setCloneFoods] = useState(foods)
  const [show , setShow] = useState('true')

//--------------------------------filter for searchbar--------------------------------//

  const filterFoodList = (search) => {
    let filtered 
    if (search == '') {
     filtered = [...cloneallFoods]
    }
    else if(search != '') {
      filtered = cloneallFoods.filter(food => {
        return food.name.toLowerCase().includes(search.toLowerCase())
      } )
    }
    setallFoods(filtered)
}
//-------------------------------addFood------------------------------------------------//
const addFood = (newFood) => {
  const updatedFood = [...cloneallFoods, newFood]
  setCloneFoods(updatedFood)
  setallFoods(updatedFood)
}
//----------------------------delete---------------------------------------//

const deletion = (foodname) => {
  const updatedFood = allFoods.filter(food=>{
    return food.name != foodname
  })
  setCloneFoods(updatedFood)
  setallFoods(updatedFood)
}
//-----------------------------------SHOW OR NOT--------------------------------//
const showing = () => {
  setShow(!show)
}




  return (
  <div className="App">
    <button onClick={showing}>{show?"show":"hide"} </button>
    {show?<AddFoodForm addFood = {addFood}/>:<p></p>}    
    <Search filter = {filterFoodList} />
    {allFoods.map(food =>{
    return (
        <FoodBox food = {food} key={uuidv4()} deletion={deletion} />
    ) 
    })}
  </div>
  )
}
export default App;
