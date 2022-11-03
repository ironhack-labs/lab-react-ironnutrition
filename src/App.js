import rawFoods from './foods.json';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Heading from './components/Heading';
import Content from './components/Content';

const foodsWithIds = rawFoods.map((food) => ({ ...food, _id: uuidv4() }));

function App() {
  const [food, setFood] = useState(foodsWithIds);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];
    setFood(updatedFood);
  };

  const handleClickDelete = (id) => {
    const foodToDelete = food.findIndex((obj) => obj.id === id);
    const foodMinusOne = [...food];
    foodMinusOne.splice(foodToDelete, 1);
    setFood(foodMinusOne);
  };

  const getFoodBack = () => {
    setFood(foodsWithIds);
  };

  return (
    <>
      <Heading {...{ setFood, addNewFood, handleSearch, searchInput }} />

      <Content {...{ food, searchInput, handleClickDelete, getFoodBack }} />
    </>
  );
}
export default App;
