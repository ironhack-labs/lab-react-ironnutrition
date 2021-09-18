import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import CreateFoodAction from './Components/CreateFoodActions/CreateFoodActions';

import './App.css';


function App() {

  const displayFoods = () => {
    return foods.map(food => <FoodBox food={food} />)
  }

  return (
    <div>
      <h1>Hello World!!</h1>
      <CreateFoodAction />
      {displayFoods()}
    </div>
  );
}

export default App;
