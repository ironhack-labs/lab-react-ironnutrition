import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Button, Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import Search from './components/Search';
import { v4 as uuidv4 } from 'uuid';

function App() {
  foods = foods.map((food) => {
    const id = uuidv4();
    food.id = id;
    return food;
  });

  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foodList);

  const [showForm, setShowForm] = useState(false);

  function addNewFood(newFood) {
    const newFoodList = [...foodList, newFood];
    setFoodList(newFoodList);
  }

  function handleSearch(query) {
    const searchResult = foodList.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoodList(searchResult);
  }

  function deleteHandler(id) {
    const deleteResults = filteredFoodList.filter((food) => !(food.id === id));
    setFilteredFoodList(deleteResults);
  }

  return (
    <div className="App">
      {showForm && <AddFoodForm addNewFood={addNewFood} />}

<div className='labels-left '> 

      <Button
      className='mt-4'
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>

      <Search searchHandler={handleSearch}/>
</div>

      <h1>Food List</h1>
      <Row>
        {filteredFoodList.map((food) => {
          return <FoodBox food={food} deleteHandler={deleteHandler}></FoodBox>;
        })}
      </Row>
    </div>
  );
}

export default App;
