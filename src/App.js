import foodsJson from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    console.log('show form');
    setShowForm(!showForm);
  };

  const handleDelete = (foodName) => {
    const filteredFoods = foods.filter((food) => {
      if (food.name !== foodName) {
        return true;
      }
    });

    setFoods(filteredFoods);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <div className="show-button">
        <button onClick={handleShowForm}>Show form</button>
      </div>

      {showForm ? <AddFoodForm foods={foods} setFoods={setFoods} /> : null}

      <Search search={search} setSearch={setSearch} />

      <div className="all-food-card">
        {foods
          .filter((oneFilterFood) => {
            if (
              oneFilterFood.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return true;
            }
          })
          .map((oneFood, index) => (
            <FoodBox key={index} food={oneFood} handleDelete={handleDelete} />
          ))}
      </div>
    </div>
  );
}

export default App;
