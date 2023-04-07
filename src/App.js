import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import './App.css';

function App() {
  const [food, setFood] = useState(foods);

  return (
    <div className="App">
      <Divider>
        <h2>Food List</h2>
      </Divider>
      {food.map(({ name, image }) => {
        return (
          <div key={name}>
            <p> {name} </p>
            <img src={image} alt={name} width="100px" />
          </div>
        );
      })}
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
    </div>
  );
}

export default App;
