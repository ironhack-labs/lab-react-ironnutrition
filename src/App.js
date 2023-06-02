import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [food, setFood] = useState(foods);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  const filteredFood = food.filter((foodItem) => {
    return foodItem.name.toLowerCase().includes(search.toLowerCase());
  });

  const handleDelete = (foodName) => {
    const filteredFood = food.filter((foodItem) => {
      if (foodItem.name !== foodName) {
        return true;
      }
    });
    setFood(filteredFood);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <h1> Iron Food</h1>

      <button onClick={handleShowForm}>Show Form</button>
      <SearchBar searchWord={search} setSearch={setSearch} />
      {showForm ? <AddFoodForm allFood={food} setFood={setFood} /> : null}
      {filteredFood.map((foodItem, index) => {
        return (
          <div>
            <FoodBox food={foodItem} key={index} deleteFood={handleDelete} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
