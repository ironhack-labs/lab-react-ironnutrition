import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';

function List({ foodsList }) {
  const listItems = foodsList.map((elem) => {
    return <li key={elem.name}>
    <p>{elem.name}</p> 
    <img src={elem.image} alt={elem.name} width={100}/>
    </li>;
  });
  return <ul>{listItems}</ul>;
}

function App() {
  const [foodsList, setFoodsList] = useState(foods);
  return (
    <div>
      <li>
        <List foodsList={foodsList} />
      </li>
    </div>
  );
}

export default App;
