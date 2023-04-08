import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [listFoods, setListFoods] = useState(foods);
  const [search, setSearch] = useState('');

  const addFood = (food) => {
    setListFoods([food, ...listFoods]);
  };

  const onSearch = (value) => {
    setSearch(value);
  };

  const foodsToShow = listFoods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  const onClickDelete = (ev) => {
    setListFoods((prev) => prev.filter((food) => food.name !== ev));
  };

  return (
    <div className="container">
      <Search search={search} onSearch={onSearch} />
      <AddFoodForm addFood={addFood} />
      <div className="d-flex flex-wrap">
        {foodsToShow.map((food, i) => {
          return (
            <FoodBox
              key={i}
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
              onClickDelete={(ev) => onClickDelete(food.name)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
