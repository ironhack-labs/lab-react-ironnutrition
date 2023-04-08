import { useState } from 'react';
import './App.css';
import food from './foods.json';
import FoodBox from './FoodBox';

import { Row, Divider, Button } from 'antd';

function App() {
  const [foods, setFoods] = useState(food);

  return (
    <div className="App">
    <h2>Food List</h2>
      <Row style={{width: '100%', justifyContent: "center" }}>
        {foods.map(food => {
          return (
            <FoodBox food={food}/>
          )
        })}
      </Row>
    </div>
  );
}
export default App;
