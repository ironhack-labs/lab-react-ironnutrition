import { Row } from 'antd';
import { useState } from 'react';
import './App.css';
import { AddFoodForm } from './components/AddFoodForm';
import { FoodBox } from './components/FoodBox';
import { SearchBar } from './components/SearchBar';
import { foods } from './utils';

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

  // const handleDelete = (e) => {
  //   setFoods((old) => {
  //     return old.filter((food) => food.key !== e.currentTarget.id);
  //   });
  // };

  const handleDelete = (e) => {
    let newArr = [...foodsList].filter(
      (food) => food.key !== e.currentTarget.id
    );
    setFoods(newArr);
  };

  return (
    <div className="App">
      <AddFoodForm addFoodItem={addFoodItem} />
      <SearchBar {...{ handleSearchChange, searchString }} />
      <h1>Food List</h1>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <FoodBox {...{ foodsList, searchString, handleDelete }} />
      </Row>
    </div>
  );
}

export default App;
