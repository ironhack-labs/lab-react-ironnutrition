import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import './App.css';
import FoodBox from './Components/FoodBox/FoodBox';
import AddFood from './Components/AddFood/AddFood'
import foodsJson from './foods.json'
import FoodCardInfo from './Components/FoodCardInfo/FoodCardInfo';

function App() {
  const foodsJsn = getnormalizedFoodsArray(foodsJson)
  const [foods, setFoods] = useState([...foodsJsn])
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState('')
  //
  const [selectedFoods, setSelectedFoods] = useState([])
  useEffect(() => {
    let copy = foodsJsn.filter(elm => elm.name.includes(search))
    setFoods(copy)
  }, [search])
  //Handlers :
  const handleAddd = () => {
    setShowForm(true)
  }
  const handleSerachChange = (e) => {
    let query = e.currentTarget.value;
    setSearch(query.toLowerCase())
  }
  const handleAdding = (newFood) => {

    setFoods((prevState) => [newFood, ...prevState])
  }
  const handleAddToFoodInfo = (addedFood) => {

    setSelectedFoods(prevState => {
      return [addedFood, ...prevState]
    })
  }
  const removeFromCardHandler = (index) => {
    console.log(index)
    let copy = [...selectedFoods]
    console.log(copy);

    setSelectedFoods(copy.filter((element, i) => i !== index))
    console.log(selectedFoods)
  }
  ///
  // console.log(foodsJson[0])
  return (
    <>

      <div className="App">
        <div>
          <FoodCardInfo onRemove={removeFromCardHandler} foods={selectedFoods} />
          <button onClick={handleAddd} >Add</button>
          <label>Serach  :    <input onChange={handleSerachChange} value={search} name="name" type="text" /></label>
          {foods.map(food => <FoodBox key={food.name} addToFoodCartInfo={handleAddToFoodInfo} food={food} />)}
        </div>
        <div className="AddContainer">
          {showForm && <AddFood onAddFood={handleAdding} closeMe={setShowForm} />}
        </div>
      </div>
    </>
  );
}

export default App;
//helper :
function getnormalizedFoodsArray(foods) {
  return foods.map(elm => ({ ...elm, name: elm.name.toLowerCase() }))
}
