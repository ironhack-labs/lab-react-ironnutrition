import './App.css';
import Foodbox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

import fooddata from './foods.json';
import { useState } from 'react';

function App() {
  // const [foodata, setFoodsFooddate] = useState(Foodfooddata);
  const [query, setQuery] = useState('');
  const [foods, setFoods] = useState(fooddata);

  const addNewFood = (newFood) => {
    // const updatedFood = [...fooddata, newFood];
    const updatedFood = [...foods, newFood];
    // setFooddata(updatedFooddata);
    setFoods(updatedFood);
  };

  const handleDelete = (name) => {
    setFoods(foods.filter((f) => f.name !== name));
  };

  return (
    <div className="App">
      <Search foods={foods} setQuery={setQuery} query={query} />
      <AddFoodForm addFood={addNewFood} />
      {foods
        .filter((food) => food.name.toLowerCase().includes(query.toLowerCase()))
        .map((food) => {
          return (
            <Foodbox key={food.name} food={food} onDelete={handleDelete} />
          );
        })}
    </div>
  );
}

export default App;
