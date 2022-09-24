import React, { useState } from 'react';

import './App.css';
import List from './components/List/List';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);

  console.log(foodList);
  return (
    <div className="App">
      {foodList.map((recipe) => {
        return <List key={recipe.name} recipe={recipe} />;
      })}
      {/* <List /> */}
    </div>
  );
}

export default App;
