import React from 'react';
import FoodBox from "./components/FoodBox"
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div>
      <strong>IronNutrition</strong>
      <FoodBox name={'Joel'} friend={'Marta'}/>
    </div>
   
  );
}

export default App;