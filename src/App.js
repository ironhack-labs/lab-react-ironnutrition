import './App.css';
import foodsData from './foods.json';
import { Row, Divider } from 'antd';
import { useState } from 'react';

import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [filteredFoods, setFilteredFoods] = useState(foodsData);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods);
  };

  const handleSearch = (filteredFoods) => {
    setFilteredFoods(filteredFoods);
  }; 
  const handleDelete = (foodToDelete) => {
    const updatedFoods = foods.filter((food) => food !== foodToDelete);
    setFoods(updatedFoods);
    setFilteredFoods(updatedFoods);
  };

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />
      <Search foods={foods} onSearch={handleSearch} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {filteredFoods.map((food) => (
          <FoodBox key={food.name} food={food} onDelete={handleDelete} />
        ))}
      </Row>
    </div>
  );
}

export default App;