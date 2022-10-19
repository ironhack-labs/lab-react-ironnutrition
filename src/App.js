//import { useState } from 'react';
import './App.css';

import foods from './foods.json';

function App() {
  return (
  <div className="App">
    {foods.map(food =>
    <div>
      <p>{food.name}</p>
      <img src={food.image} width={100} alt={food.name} />
    </div>)}
  </div>
  );
}
export default App;
