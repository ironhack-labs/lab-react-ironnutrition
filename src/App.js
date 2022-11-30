// src/App.js
import { Button, Divider, Row } from 'antd';
import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { FoodBox } from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { ErrorMessage } from './components/ErrorMessage';

function App() {
  const [food, setFood] = useState(foods);
  const [query, setQuery] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const filteredFood = food.filter((food) => {
    return food.name.toLowerCase().includes(query.toLowerCase());
  });

  function deleteFood(name) {
    const filteredFood = food.filter((elm) => {
      return elm.name !== name;
    });

    setFood(filteredFood);
  }

  function toggleFormVisiblity() {
    setIsFormVisible(!isFormVisible);
  }

  return (
    <div>
      {isFormVisible && <AddFoodForm food={food} setFood={setFood} />}
      <Button type="primary" ghost onClick={toggleFormVisiblity}>
        {isFormVisible ? 'Hide Form' : 'Show Form'}
      </Button>

      <Search setQueryProp={setQuery} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFood.length !== 0 ? (
          filteredFood.map((elm) => {
            return (
              <div>
                <FoodBox food={elm} deleteFood={deleteFood} />
              </div>
            );
          })
        ) : (
          <ErrorMessage />
        )}
      </Row>
    </div>
  );
}

export default App;
