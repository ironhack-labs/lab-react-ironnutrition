import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './Components/foodbox/foodBox';
import foods from './foods.json';
import AddFoodForm from './Components/addfoodform/addFoodForm';

function App() {
  return (
    <div className="App">
          <FoodBox/>
          <AddFoodForm/>
    </div>
  );
}

export default App;
