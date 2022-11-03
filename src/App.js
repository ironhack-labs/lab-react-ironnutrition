import './App.css';
import { Card, Col, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';

export function List({ foodsList }) {
  const listItems = foodsList.map((elem) => {
    return <li key={elem.name}>
    <FoodBox food={elem}/>
    </li>;
  });
  return <ul>{listItems}</ul>;
}

export function FoodBox({ food }) {
  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt="food" />
        <p>{food.calories}</p>
        <p>{food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  )
}



function App() {
  const [foodsList, setFoodsList] = useState(foods);
  return (
    <div>      
        <List foodsList={foodsList} />      
    </div>
  );
}

export default App;
