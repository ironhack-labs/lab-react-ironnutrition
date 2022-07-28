// src/App.js
import './App.css';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

import { useState } from 'react';

function App() {
  const [foodList, setFoodList] = useState(foods);
  console.log(foodList);

  function Example() {
    // After importing the components we can render them directly:
    return (
      <div>
        <Row style={{ width: '100%', justifyContent: 'center' }}>

         <ul> 
{foodList.map((food,idx) => (

<li key={idx}>
<div style={{ width: '200px', justifyContent: 'center' }}>
  <p>{food.name}</p>
  <img src={food.image} alt={food.name} />
</div>
  
</li>



))}
</ul> 

        </Row>
      </div>
    );
  }

  return (
    <div className="App">
      <Example />
    </div>
  );
}
export default App;
