import { Row } from 'antd';
import { useState } from 'react';
import './App.css';
import { AddFoodForm } from './components/AddFoodForm';
import { FoodBox } from './components/FoodBox';
import { SearchBar } from './components/SearchBar';
import foodsNoId from './foods.json';

function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (a) =>
    (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
  );
}
let foods = foodsNoId.map((food) => {
  food.id = uuid();
  return food;
});

function App() {
  const [foodsList, setFoods] = useState(foods);
  const [searchString, setSearchString] = useState('');

  const handleSearchChange = (e) => {
    setSearchString(e.target.value);
  };

  const addFoodItem = (newFoodItem) => {
    setFoods((old) => {
      return [...old, newFoodItem];
    });
  };

  const handleDelete = (e) => {
    let newArr = [...foodsList].filter(
      (food) => food.id !== e.currentTarget.id
    );
    setFoods(newArr);
  };

  return (
    <div className="App">
      <AddFoodForm {...{ addFoodItem }} />
      <SearchBar {...{ handleSearchChange, searchString }} />
      <h1>Food List</h1>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <FoodBox {...{ foodsList, searchString, handleDelete }} />
      </Row>
    </div>
  );
}

export default App;
