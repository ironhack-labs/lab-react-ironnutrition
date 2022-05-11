import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsArr from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from "react"; 
import FoodForm from './components/FoodForm';
import Search from './components/Search';

function App() {

  const [foods, setFoods] = useState(foodsArr);
  /* console.log(foods[0].name) */

  const [showForm, setShowForm] = useState(false);

  const createNewFood = (newFood) => {
    setFoods((prevFood)=>{
      return [newFood, ...prevFood];
    });
  }

  const searchFood = (search) => {
    const searchResults = foods.filter((food) => food.name.includes(search))
    console.log(searchResults)
    setFoods(searchResults);
  }
  
  const hideForm = () => {
    setShowForm(!showForm)
  }
  

  return (
    <div className="App">
    <h1>IronNutrition</h1>
     
    <br/>
    <Search searchFood={searchFood} />  
    <br/>

    <button className='button-hide' onClick={hideForm}>{showForm ? "Hide form" : "Add new food"}</button>
    {showForm && <FoodForm createFood= {createNewFood}/>} 
    <br/>
    <br/>
    <br/>
   
    {foods.map((element, index) => {
     return (
      <FoodBox 
      key={index}
      name= {element.name}  
      calories= {element.calories}
      image= {element.image}  
      />
     )

    })}
    </div>
  );
}

export default App;
