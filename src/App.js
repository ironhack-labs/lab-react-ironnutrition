import './App.css';
import allFoods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Row, Divider, Button } from 'antd';
import Search from './components/Search';

function App() {
  const [foods, setFood] = useState(allFoods);
  const [showFood, setShowFood] = useState(allFoods);

  const deleteFood = (name) => {
    const filteredFood = foods.filter((comida) => comida.name !== name);
    setFood(filteredFood);
    setShowFood(filteredFood);
  };

  const createFood = (food) => {
    const newFood = [food, ...foods];
    setFood(newFood);
  };

  const filterFood = (searchQuery) => {
    let filteredFood = foods.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setShowFood(filteredFood);
  };

  return (
    <div className="App">
      <AddFoodForm createFood={createFood} />
      <Search filterFood={filterFood} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFood.map((food) => {
          return (
            <FoodBox
              key={food.name}
              comida={food}
              deleteFood={deleteFood}
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
