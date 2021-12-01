import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import {useState} from "react"
import AddFood from './components/AddFood';
import SearchFood from './components/SearchFood';
import TodayFood from './components/TodayFood';

function App() {

  const [foodsArray, setFoods] = useState(foods)
  const [foodsArrayCopy, setFoodsCopy] = useState(foods)
  const [checkoutData, setCheckout] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value
    }
    setFoods([newFood, ...foodsArray])
  }

  function handleClick(food, quantity){
    let chechkoutBook = {
      name: food.name,
      quantity: quantity,
      calories: food.calories
    }
  setCheckout([chechkoutBook, ...checkoutData])
}


  function handlerSearch(event){ 
    let filteredFood = foodsArray.filter((elem) => {
      return elem.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setFoodsCopy(filteredFood)
  }
  
  return (
    <div>
      <SearchFood handlerSearch={handlerSearch}/>

    { foodsArrayCopy.map((elem, i) => {
      return <FoodBox food={elem}
                      key={i}
                      btnClick={handleClick}

      />
    })
      
    }
    <AddFood handleSubmit={handleSubmit}/>
    <TodayFood items={checkoutData} />
    </div>
  );
}

export default App;
