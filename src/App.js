import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { useState } from 'react';
import { Button, Divider, Row } from 'antd';

function App() {
  const [food, setFood] = useState(foods);
  const [allFoods, setAllFoods] = useState(foods);

  const addNewFood = (newFood) => {
    setFood([newFood, ...food]);
  };

  const deleteFood = (foodName) => {
    if (foodName) {
      setAllFoods(allFoods.filter((food) => food.name !== foodName));
    }
  };

  const filterFoods = (search) => {
    const filterFoods = allFoods.filter((food) =>
      food.name.toUpperCase().includes(search.toUpperCase())
    );
    setAllFoods(filterFoods);
  };

  return (
    <div className="App">
      <Search food={food} filterFoods={filterFoods} />
      <AddFoodForm addNewFood={addNewFood} />

      <Row>
        {allFoods.map((food) => (
          <FoodBox food={food} deleteFood={deleteFood} />
        ))}
      </Row>
    </div>
  );
}
export default App;
