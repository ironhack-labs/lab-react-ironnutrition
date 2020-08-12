import React, { useState } from 'react';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './components/Foobox/FoodBox'

function App() {
  return (
    <div className="App">
      <FoodBox food={foods}/>
    </div>
  );
}

export default App;
