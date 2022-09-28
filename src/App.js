import React, { useState } from 'react';

import './App.css';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import FoodBox from './components/Foodbox/FoodBox';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [food, setFood] = useState([...foods]);
  const [search, setSearch] = useState('');
  console.log(food);

  const deleteFoodCard = (foodName) => {
    const removeFood = food.filter((oldFood) => oldFood.name !== foodName);
    setFood(removeFood);
    console.log(foodName);
  };

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm setFood={setFood} food={food} />
      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <SearchBar search={search} setSearch={setSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food
          .filter((food) => {
            return food.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((food) => {
            return (
              <FoodBox
                key={food.name}
                food={food}
                deleteFoodCard={deleteFoodCard}
              />
            );
          })}
      </Row>
    </div>
  );
}

export default App;
