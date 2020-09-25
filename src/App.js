import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'; 
import Title from './components/Title';
import FoodCardDiv from './components/FoodCardDiv';

function App() {
  return (
    <div className="App">
      <Title />
      <FoodCardDiv foods={foods} />
    </div>
  );
}

export default App;