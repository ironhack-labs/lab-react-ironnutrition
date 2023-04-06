// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Searchbar from './components/Searchbar';
import { Button } from 'antd';

function App() {
  const [food, setFoods] = useState([...foods]);

  const addFood = (newFood) => {
    const updatedFoodList = [...food, newFood];
    setFoods(updatedFoodList);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchList = food.filter((foodItem) =>
    foodItem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteFood = (foodItem) => {
    const filterFood = food.filter((dish) => dish.name !== foodItem.name);
    setFoods(filterFood);
  };

  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const show = showForm ? 'Hide Form' : 'Show Form';

  const foodBox = searchList.map((foodItem) => {
    // console.log('FoodBox Food Item', foodItem);
    return (
      <FoodBox key={foodItem.name} food={foodItem} deleteFood={deleteFood} />
    );
  });

  return (
    <div className="App">
      <Searchbar search={searchTerm} onSearch={handleSearch} />

      <Button type="primary" className="btn-show" onClick={toggleForm}>
        {' '}
        {show}{' '}
      </Button>

      {showForm && (
        <div className="add-form">
          <AddFoodForm addFood={addFood} />
        </div>
      )}
      {food.length === 0 ? (
        <div>
          <p>Oops, there is no more content to show!</p>
        </div>
      ) : (
        <div>
          <h1>Food List</h1>
          <div className="boxes-container ">{foodBox}</div>
        </div>
      )}
    </div>
  );
}

export default App;
