import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FormAddFood from './components/FormAddFood2';

function App() {
  const [food, setFood] = useState(foods);

  const HandlerAddQuantity = (e) => {
    console.log('holi', e);
  };

  const HandlerAddFood = (newFood) => {
    console.log('newFood', newFood);
    setFood([...food, newFood]);
  };

  return (
    <div className="App">
      <FormAddFood HandlerAddFood={HandlerAddFood} />
      <FoodBox data={food} HandlerAddQuantity={HandlerAddQuantity} />
    </div>
  );
}

export default App;
