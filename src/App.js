import React, { useEffect, useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import InputField from './components/InputField/InputField';
import FoodList from './components/FoodList/FoodList';
import { data } from './foods';
import Basket from './components/Basket/Basket';


const App = () => {
  const [foodItems, setFoods] = useState(data);
  const [basket, setBasket] = useState([]);
  const [calories, setCalories] = useState(0);

  const addQuantity = (uuid, value) => {
    if (value) {      
      const currentItem = basket.filter((item) => (item.uuid === uuid));
      
      if (currentItem.length) {
        const newBasket = basket.filter((item) => item.uuid !== uuid);
        const newItem = { ...currentItem[0], quantity: currentItem[0].quantity + value }
        setBasket([...newBasket, newItem])      
      }
      else {
        const newItem = foodItems.filter((item) => item.uuid === uuid)[0];
        setBasket([...basket, { ...newItem, quantity: newItem.quantity + value }]);
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
