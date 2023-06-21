import { Divider } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import { FoodBox } from './components/FoodBox';
import { AddFoodForm } from './components/AddFoodForm';
import { Search } from './components/Search';
function App() {
  const [foodsList, setFoodsList] = useState(foods);

  const createFood = (newFood) => {
    return setFoodsList([newFood, ...foodsList]);
  };

  return (
    <div className="App">
      <AddFoodForm callback={createFood} />
      <Search />
      <Divider>Food List</Divider>

      <FoodBox food={foodsList} />
    </div>
  );
}

export default App;
