import React, { useState } from 'react';
import { Row, Col, Divider } from 'antd';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FormAddFood from './components/FormAddFood2';
import UserList from './components/UserList';

function App() {
  const [food, setFood] = useState(foods);
  const [userFood, setUserFood] = useState([]);

  const HandlerAddQuantity = (value) => {
    let isInTheArray = false;
    let newUserFood = userFood.map((e) => {
      if (e.name === value.name) {
        isInTheArray = true;
        return { ...e, quantity: e.quantity + value.quantity };
      } else {
        return e;
      }
    });
    newUserFood = isInTheArray ? newUserFood : [...userFood, value];
    setUserFood([...newUserFood]);
  };

  const HandlerAddFood = (newFood) => {
    setFood([...food, newFood]);
  };

  return (
    <div className="App">
      <Divider orientation="center">
        <FormAddFood HandlerAddFood={HandlerAddFood} />
      </Divider>
      <Row>
        <Col span={12}>
          <FoodBox data={food} HandlerAddQuantity={HandlerAddQuantity} />
        </Col>
        <Col span={12}>
          <UserList data={userFood} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
