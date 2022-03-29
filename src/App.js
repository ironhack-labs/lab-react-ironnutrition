import React, { useEffect, useState, useCallback, useRef } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import InputField from './components/InputField/InputField';
import FoodList from './components/FoodList/FoodList';
import data from './foods.json';
import Basket from './components/Basket/Basket';
import { v4 as uuidv4 } from 'uuid';

let food = [...data].map((item) => ({ ...item, uuid: uuidv4() }));

const App = () => {
  const [foodItems, setFoods] = useState(food);
  const [basket, setBasket] = useState([]);
  const [calories, setCalories] = useState(0);

  const addQuantity = (uuid, value) => {
    if (value) {
      const position = basket.findIndex((item) => item.uuid === uuid);
      if (position !== -1) {
        const item = basket.splice(position, 1)[0];

        setBasket([...basket, { ...item, quantity: item.quantity + value }]);
      } else {
        const item = foodItems.find((item) => item.uuid === uuid);
        setBasket([...basket, { ...item, quantity: item.quantity + value }]);
      }
    }
  };

  useEffect(
    () => setCalories(basket.reduce((a, b) => a + b.calories * b.quantity, 0)),
    [basket]
  );

  return (
    <div className="App">
      <header className="App-header"> IronNutrition</header>
      <div className="container">
        <InputField
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          value=""
          onChange={() => console.log('ok')}
        />
        <div className="columns">
          <div className="column">
            <FoodList foodItems={foodItems} onAdd={addQuantity}></FoodList>
          </div>
          <div className="column">
            <button className="button is-primary">Primary</button>
            <Basket basket={basket} calories={calories}></Basket>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
