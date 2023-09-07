import { Button } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foodsData from './foods.json';

// {
//   "name": "Pizza",
//   "calories": 400,
//   "image": "https://i.imgur.com/eTmWoAN.png",
//   "servings": 1
// }

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [foodsMaster, setFoodsMaster] = useState(foodsData);
  const [showForm, setShowForm] = useState(false);

  function addFood(newFood) {
    const newFoods = [newFood, ...foodsMaster];
    setFoods(newFoods);
    setFoodsMaster(newFoods);
  }

  function searchFood(query) {
    const filteredFood = foodsMaster.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFoods(filteredFood);
  }

  function deleteFood(foodName) {
    const filteredFood = foodsMaster.filter((food) => food.name !== foodName);
    setFoods(filteredFood);
    setFoodsMaster(filteredFood);
  }

  return (
    <div className="App">
      <Button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide form' : 'Show form'}
      </Button>
      {showForm ? <AddFoodForm addFood={addFood} /> : null}
      <Search searchFood={searchFood} />
      {foods.length ? (
        foods.map((food) => {
          food.id = uuidv4();
          return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />;
        })
      ) : (
        <p>No food founded</p>
      )}
    </div>
  );
}
export default App;
