import { Row, Divider } from 'antd';

import { useState } from 'react';
import './App.css';
import { FoodBox } from './components/FoodBox';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map((food) => (
          <FoodBox food={food} key={food.name} />
        ))}
      </Row>
    </div>
  );
}

export default App;
