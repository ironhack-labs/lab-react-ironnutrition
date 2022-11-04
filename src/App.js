import { Row } from 'antd';
import { useState } from 'react';
import './App.css';
import { AddFoodForm } from './components/AddFoodForm';
import { FoodBox } from './components/FoodBox';
import { SearchBar } from './components/SearchBar';
import foods from './foods.json';

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

  return (
    <div className="App">
      <AddFoodForm {...{ addFoodItem }} />
      <SearchBar {...{ handleSearchChange, searchString }} />
      <h1>Food List</h1>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <FoodBox {...{ foodsList, searchString }} />
      </Row>
    </div>
  );
}

export default App;
