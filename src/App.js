import './App.css';
import 'bulma/css/bulma.css';
import React from 'react';
//import ReactDOM from 'react-dom'
import FoodsList from './Components/foodsList/FoodsList'

function App() {

  return (
    <div>
      <h1 className='title is-1'>IronNutrition</h1>
      <FoodsList />

    </div>
  )

}


export default App;
