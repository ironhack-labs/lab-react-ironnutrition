// src/App.js
import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';

function App() {
  const [food, setFood] = useState(foods)
  return (<div>
  {food.map(elm => {
      return (
        <div>
  <p>{elm.name}</p>
  <img src={elm.image} alt="img" width={100}/>
</div>
      )
  })
  }

  </div>);


}

export default App;