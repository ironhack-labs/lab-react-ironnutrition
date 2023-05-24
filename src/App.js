
import './App.css';
import foodsData from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';


function App () {

  const [food, setFood] = useState(foodsData);

  return (
    
  <div className="App">

  <h1>Food List</h1>
  <br/>

    {food.map((foods)=>(
   
       /*<div>
        <p> {foods.name} </p>
        <img src={foods.image} width={200} alt={food.name} />
        </div> */


      <FoodBox food={foods}/>


    ))} 
   

    
  </div> 
  
  )};

export default App;