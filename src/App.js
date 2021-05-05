import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './foodbox/FoodBox';
import Form from './form/Form';

function App() {
  return (
    <div>
      <h1 className="title is-1">IronNutrition</h1>
      <input className="input my-2" type="text" placeholder="Type a food..."></input>
      <button className="button is-info mt-2 mb-4">Add a food</button>
      <Form></Form>
      
      {foods.map((food) => {
        return <FoodBox key={food.name} {...food}></FoodBox>;
      })}
    </div>
  );
}

export default App;
