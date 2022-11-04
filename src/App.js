import { Row, Divider } from 'antd';

import { useState } from 'react';
import './App.css';
import { AddFoodForm } from './components/AddFoodForm';
import { FoodBox } from './components/FoodBox';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];

    setFoodList(updatedFoods);
  };

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />

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
