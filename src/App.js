import './App.css';
import { Row, Divider, Button, Input } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [listFoods, setFoods] = useState(foods);

  const [showFoods, setShowFoods] = useState(foods);

  const deleteFood = (foodName) => {
    let filteredFoods = listFoods.filter((food) => food.name !== foodName);
    setShowFoods(filteredFoods);
  };

  const createFood = (food) => {
    const updatedFoods = [food, ...foods];
    setFoods(updatedFoods);
    setShowFoods(updatedFoods);
  };

  const toggleFoods = () => {
    setShowFoods(!showFoods);
    console.log(showFoods);
  };

  const searchResults = (searchStr) => {
    let filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(searchStr.toLowerCase())
    );
    setShowFoods(filteredFoods);
  };

  return (
    <div className="App">
      <AddFoodForm createFood={createFood} />

      <Button onClick={toggleFoods}>{showFoods ? 'Hide' : 'Show'}</Button>

      <Search searchResults={searchResults} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFoods.map((food, index) => {
          return <FoodBox key={index} food={food} clickToDelete={deleteFood} />;
        })}
      </Row>
    </div>
  );
}
export default App;
