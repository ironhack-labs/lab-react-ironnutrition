import React, { useState } from 'react';
import foods from './foods.json';
import { Divider, Input } from 'antd';


function App() {
  const [foodList] = useState(foods);

  return (
    <div className="App">
      {foodList.map((food) => (
        <div key={food.name}>
          <p>{food.name}</p>
          <img src={food.image} width={100} alt={food.name} />
        </div>
      ))}
    </div>
  );
}

export default App;