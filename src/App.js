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

  const getData = (data) => {
    const filteredList = foodsList.filter((food) => {
      return food.name.toLowerCase().includes(data.toLowerCase());
    });
    
    return setFoodsList(filteredList);
  };

  return (
    <div className="App">
      <AddFoodForm callback={createFood} />
      <Search onSubmit={getData} />
      <Divider>Food List</Divider>

      <FoodBox food={foodsList} />
    </div>
  );
}

export default App;
