import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className='App'>
      {foods.map((food) => <FoodBox key={food.name} {...food}/>)}
      <FoodBox/>
    </div>
  );
}

export default App;
