import React from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import './App.css';

function App() {
  
  return (
    <div className="App container">
      {(
        foods.map((elem, indice) => (
          <FoodBox food={elem}/>
        ))
      )}
    </div>
  );
}

export default App;
