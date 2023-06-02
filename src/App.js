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

  const filterFoods = (search) => {
    const filterFoods = allFoods.filter((food) => food.name.includes(search));
    setAllFoods(filterFoods);
  };

  return (
    <div className="App">
      <Search food={food} />
      <AddFoodForm addNewFood={addNewFood} />

      <Row>
        {food.map((food) => (
          <FoodBox food={food} />
        ))}
      </Row>
    </div>
  );
}
export default App;
