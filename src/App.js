import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [food, setFood] = useState(foods);
  const [search, setSearch] = useState('');

  const filteredFood = food.filter((foodItem) => {
    return foodItem.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <h1> Iron Food</h1>
      <AddFoodForm allFood={food} setFood={setFood} />
      <SearchBar searchWord={search} setSearch={setSearch} />
      {filteredFood.map((foodItem, index) => {
        return (
          <div>
            <FoodBox food={foodItem} key={index} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
