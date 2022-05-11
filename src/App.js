import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Add from './components/Add';
import Search from './components/Search';

function App() {

  const [foodState, setFoods] = useState(foods);

  const displayFoods = () => {
    setFoods(() => {
      return foodState;
    })
  }

  return (
    <div className="App">
      <Add />
      <FoodBox item={foods} />
      <Search list={foodState}/>
    </div>
  );
}

export default App;
