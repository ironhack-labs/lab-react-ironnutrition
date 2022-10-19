import foods from './foods.json';
import './App.css';
import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider } from 'antd';

function App() {
  const [food, setFood] = useState(foods);

  const deleteFood = (index) => {
    console.log(index);
    const arr = [...food];
    arr.splice(index, 1);

    setFood(arr);
  };

  return (
    <div className="App">
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.map((oneFood, index) => {
          return (
            <FoodBox
              key={index}
              food={{ ...oneFood }}
              deleteFood={deleteFood}
              index={index}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
