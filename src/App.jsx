import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [search, setSearch] = useState();

  const handleSubmit = (value) => {
    setFoodList((prev) => [value, ...prev]);
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleDelete = (value) => {
    setFoodList((prev) => prev.filter((food) => food.name !== value));
  };

  return (
    <div className="App">
      <AddFoodForm addFood={handleSubmit} />

      <SearchBar search={search} searchFood={handleSearch} />

      {foodList
        ?.filter(
          (food) =>
            search === undefined ||
            food.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((food, i) => (
          <FoodBox key={i} food={food} removeFood={handleDelete} />
        ))}
    </div>
  );
}

export default App;
