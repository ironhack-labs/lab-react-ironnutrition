import { useState } from 'react';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';
import foodsJson from './foods.json';

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [search, setSearch] = useState('');

  const handleDelete = (foodName) => {
    const foodsAfterDelete = foods.filter((oneFood) => {
      if (oneFood.name !== foodName) {
        return true;
      }
    })
    setFoods(foodsAfterDelete);
  }

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm allFoods={foods} setFoods={setFoods} />
      <SearchBar search={search} setSearch={setSearch} />
      <div className="food-box-map">
        {foods
          .filter((oneFoodItem) => {
            if (
              oneFoodItem.name
                .toLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return true;
            }
          })
          .map((foodItem) => {
            return (
            <FoodBox singleFood={foodItem} handleDelete={handleDelete}/>
            );
          })}
      </div>
    </div>
  );
}

export default App;
