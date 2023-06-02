import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [newFood, setNewFood] = useState('');
  const [input, setInput] = useState('');

  const deleteButton = (event) => {
    const filteredFoods = foods.filter((each) => {
      if (each.name !== event) {
        return true;
      }
    });
    setFood(filteredFoods);
    console.log(event);
  };

  return (
    <div className="App">
      <div className="search-bar">
        <Search setFood={setFood} input={input} setInput={setInput} />
      </div>
      <div className="search-bar">
        <AddFoodForm
          newFood={newFood}
          setNewFood={setNewFood}
          food={food}
          setFood={setFood}
        />
      </div>
      <h1> Food List </h1>
      <div className="input">
        {food
          .filter((each) => {
            if (each.name.toLowerCase().includes(input.toLowerCase())) {
              return true;
            }
          })
          .map((each) => {
            return (
              <FoodBox
                key={each.name}
                food={each}
                deleteButton={deleteButton}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
