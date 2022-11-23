import { useState } from 'react';
import './App.css';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [allFood, setAllFood] = useState(foods);
  const [showFood, setShowFood] = useState(foods);

  const createFood = (food) => {
    const newFood = [food, ...allFood];
    setAllFood(newFood);
    setShowFood(newFood);
  };

  const deleteFood = (name) => {
    const toDeleteFood = allFood.filter((food) => food.name !== name);
    setAllFood(toDeleteFood);
    setShowFood(toDeleteFood);
  };

  const filterFood = (searchQuery) => {
    const filteredFood = allFood.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setShowFood(filteredFood);
  };

  return (
    <div className="App">
      <AddFoodForm createFood={createFood} />
      
      <Button className="hideAdd"> Hide Form / Add New Food </Button>

      <Search filterFood={filterFood} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFood.map(foodBox => {
          return <FoodBox 
              food={{
                name: foodBox.name,
                calories: foodBox.calories,
                image: foodBox.image,
                servings: foodBox.servings,
              }}
              deleteFood={deleteFood}
            />
        })}
      </Row>
    </div>
  );
}

export default App;