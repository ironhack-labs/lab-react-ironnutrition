import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Row, Divider, Card, Col, Button } from 'antd';

function App() {
  // const [foodsArr, setFoodsArr] = useState(foods);

  return (
    <div className="App">
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food) => {
          return <FoodBox food={food} />;
        })}
      </Row>
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
