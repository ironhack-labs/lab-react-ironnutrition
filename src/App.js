import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App() {
  const [food, setFood] = useState(foods);

  const [newFood, setNewFood] = useState('');

  const [input, setInput] = useState('');

  const deleteButton = (event) => {
    const filteredFoods = food.filter((each) => {
      if (each.name !== event) {
        return true;
      }
    });
    setFood(filteredFoods);
    console.log(event);
  };

  return (
    <div className="App">
      <Search setFood={setFood} input={input} setInput={setInput} />
      <AddFoodForm
        newFood={newFood}
        setNewFood={setNewFood}
        food={food}
        setFood={setFood}
      />
      <h1> Food List </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
