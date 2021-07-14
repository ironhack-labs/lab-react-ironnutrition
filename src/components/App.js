import React from 'react'
import './App.css'
import FoodBox from './FoodBox'
import FoodList from './FoodList'
import foods from './../foods.json'
import NewFoodForm from './Form'
import { Switch, Route, Redirect } from 'react-router-dom'



function App() {
  
  


  return (
    <>
    
    <switch>
      
      <Route path='/' render={()=> <FoodList />}></Route>
    </switch>
     
      
    </>
  )
}

export default App;
