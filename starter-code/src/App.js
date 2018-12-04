import React from 'react';
import 'bulma/css/bulma.css';
import FoodBox from './Components/FoodBox/FoodBox.jsx'
import foods from "./foods.json"
import './App.css';


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1 className="title">IronNutrition</h1>
        {foods.map((food,index)=>{
          return <FoodBox {...food} ></FoodBox>
        })}
      </div>
    );
  }
}
