import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Card, Col, Button } from 'antd';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);

  return (
    <div className="App">
      <h1>Food List</h1>
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
      {foodsArr.map((food) => {
        return (
          <div>
            <p>{food.name}</p>
            <img src={food.image} width={100} />
          </div>
        );
      })}
    </div>
  );
}

function FoodBox({ food }) {
  const { name, calories, image, servings } = food;

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default App;
