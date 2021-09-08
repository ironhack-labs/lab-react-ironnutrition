import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';
import TodayFood from './components/TodayFood';
import Hide from './components/HIde';
import Form from './components/Form';
import './App.css';
import 'bulma/css/bulma.css';

const retrieveFoods = (
  foods,
  setFoodList,
  setTodayFoods,
  foodList,
  todayFoods,
  search
) => {
  const regex = new RegExp(search, 'gi');
  return foods.map(
    (food, index) =>
      food.name.match(regex) && (
        <FoodBox
          key={index}
          food={food}
          setFoodList={setFoodList}
          setTodayFoods={setTodayFoods}
          foodList={foodList}
          todayFoods={todayFoods}
        />
      )
  );
};

function App() {
  const [foodList, setFoodList] = useState([...foods]);
  const [todayFoods, setTodayFoods] = useState([]);
  const [search, setSearch] = useState('');
  const [hide, setHide] = useState(true);
  return (
    <div className="App container">
      <button
        className="app-buton button is-info is-small"
        onClick={() => setHide(false)}
      >
        INSERT NEW FOOD
      </button>
      <SearchBar search={search} setSearch={setSearch} />
      <Hide hide={hide}>
        <Form setHide={setHide} foodList={foodList} setFoodList={setFoodList} />
      </Hide>
      <div className="conntainer columns is-flex">
        <div className="container column menu-food">
          {retrieveFoods(
            foodList,
            setFoodList,
            setTodayFoods,
            foodList,
            todayFoods,
            search
          )}
        </div>
        <div className="container column todays-food">
          <TodayFood todayFoods={todayFoods} />
        </div>
      </div>
    </div>
  );
}

export default App;
