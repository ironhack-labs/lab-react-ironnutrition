import React, { useState } from 'react';
import dataFood from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import FormDown from './components/FormDown/FormDown';
import Search from './components/Search/Search';
import QuantityFood from './components/QuantityFood/QuantityFood';
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  const [foods, setFoods] = useState(dataFood);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const [menu, setMenu] = useState([]);

  const onSubmit = (food) => setFoods([food, ...foods]);

  const deleteFood = (id) => setMenu(menu.filter((food) => food.id !== id));

  const addFood = (food) => {
    const foodIndex = menu.findIndex((element) => element.id === food.id);

    if (foodIndex > -1) {
      let newMenu = [...menu];
      newMenu[foodIndex].quantity = newMenu[foodIndex].quantity + food.quantity;
      setMenu(newMenu);
    } else {
      setMenu([...menu, food]);
    }
  };

  return (
    <div className="App">
      <h1 className="title">Iron Nutrition</h1>
      <Search setSearch={setSearch} />

      <div className="columns">
        <div className="column">
          {foods.map((food) => {
            if (food.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <div key={food.id}>
                  <FoodBox addFood={addFood} {...food} />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="column my-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="drop-button"
          >
            Add new food!
          </button>
          {showForm && (
            <FormDown onSubmit={onSubmit} onClose={() => setShowForm(false)} />
          )}
          <QuantityFood deleteFood={deleteFood} menu={menu} />
        </div>
      </div>
    </div>
  );
}

export default App;
