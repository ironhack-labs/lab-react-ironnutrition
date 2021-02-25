import React, {useState} from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div>
     <FoodBox/>
    </div>
  );
}

export default App;
