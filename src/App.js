import React, {useState} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox/FoodBox';
import AddFoodForm from './AddFoodForm/AddFoodForm'
import Search from './Search/Search'

function App(){
  
  let foodsArr = [];
  const [stateAdd, setStateAdd] = useState(foodsArr)
  let calories = 0;
  const [valueAdd, setValueAdd] = useState(calories)

  const [state, setState] = useState([...foods])

  return(
  <div className="App">
    <h1>IronNutrition</h1>
    <AddFoodForm foodList={state} setFoodList={setState}  />
    <Search appState = {state} setApp={setState} />

  {state.map((item, index )=>(
    <FoodBox 
    index = {index}
    name = {item.name}
    calories = {item.calories}
    image = {item.image}
    quantity = {item.quantity}
    setStateAdd={setStateAdd}
    stateAdd={stateAdd}
    setValueAdd={setValueAdd}
    valueAdd={valueAdd}
    /> ))}
        <div>
        <h2>Today's foods</h2>
    <ul>{stateAdd.map((elem) => <li>{elem.quantity} {elem.name} = {elem.calories} cal</li>)}</ul>
    <p>Total: {valueAdd} cal</p>
  </div>
      </div>
  
  )} 

export default App;
