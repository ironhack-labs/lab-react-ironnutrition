import React, {useState} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [filteredFoods, setFilteredFoods] = useState(allFoods);

  const handleAddFood = (newFood) => {
    setAllFoods([...allFoods, newFood]);
  };

  const handleSearch = (search) => {
    const filtered = allFoods.filter((food) => 
    food.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  return (
    <div className="App">
    <AddFoodForm onAddFood={handleAddFood} />
    <Search onSearch={handleSearch} />
      {filteredFoods.map((food) => (
        <FoodBox
          key={food.id}
          food={food}
        />
      ))}
    </div>
  );
}

export default App;
