import './App.css';

import foodsJson from './foods.json';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods);
  };

  const deleteFood = (foodToDelete) => {
    const updatedFoods = foods.filter((food) => food !== foodToDelete);
    setFoods(updatedFoods);
  };

  const handleSearch = (searchTerm) => {
    // Perform search/filter logic based on the new search term...
    const filteredFoods = foodsJson.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />

      <Button> Hide Form / Add New Food </Button>

      <Search onChange={handleSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food) => {
          return (
            <FoodBox
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
              onDelete={() => deleteFood(food)}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
