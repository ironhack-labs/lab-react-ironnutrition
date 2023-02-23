import { useState } from 'react';
import { Row, Divider, Button } from 'antd';

import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import foodsJsonData from './foods.json';
import './App.css';

function App() {
  const [allFood, setAllFood] = useState(foodsJsonData);
  const [currentFood, setCurrentFood] = useState(foodsJsonData);

  const handleAddNewFood = (newFood) => {
    const updatedFoodList = [...currentFood, newFood];
    const updatedAllFoodList = [...allFood, newFood];

    setCurrentFood(updatedFoodList);
    setAllFood(updatedAllFoodList);
  };

  const handleSearchFood = (searchQuery) => {
    if (!searchQuery) {
      setCurrentFood(allFood);
    } else {
      const filteredFoodList = allFood.filter((foodItem) => {
        return foodItem.name.toLowerCase().includes(searchQuery.toLowerCase());
      });

      setCurrentFood(filteredFoodList);
    }
  };

  const handleDeleteFoodItem = (foodName) => {
    const newFoodList = currentFood.filter((foodItem) => {
      return foodItem.name !== foodName;
    });

    setCurrentFood(newFoodList);
    setAllFood(newFoodList);
  };

  return (
    <div className="App">
      <AddFoodForm onAddNewFood={handleAddNewFood} />

      <Button> Hide Form / Add New Food </Button>

      <Search onSearchFood={handleSearchFood} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {currentFood.map((foodItem) => {
          return (
            <FoodBox
              key={Date.now() * Math.random()}
              food={foodItem}
              onDeleteFoodItem={handleDeleteFoodItem}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
