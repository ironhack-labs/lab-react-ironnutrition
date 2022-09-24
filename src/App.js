import React, { useState } from 'react';

import './App.css';
import FoodBox from './components/Foodbox/FoodBox';
// import FoodList from './components/FoodList/FoodList';
import foods from './foods.json';

function App() {
  const [food, setFood] = useState(foods);

  console.log(food);
  return (
    <div className="App">
      {food.map((food) => {
        return <FoodBox key={food.name} food={food} />;
      })}
      {/* <FoodBox /> */}
    </div>
  );
}

export default App;
