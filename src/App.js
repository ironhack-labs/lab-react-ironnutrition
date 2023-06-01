import foodsJson from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <AddFoodForm foods={foods} setFoods={setFoods} />

      <Search search={search} setSearch={setSearch} />

      {foods.map((oneFood, index) => (
        <FoodBox key={index} food={oneFood} />
      ))}
    </div>
  );
}

export default App;
