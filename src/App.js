import logo from './logo.svg';
import './App.css';
import foodsJson from './foods.json';
import { useState } from 'react';
import FoodBox from './FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const listFoods = () => {
    return foods.map((food) => {
      return (
        <div>
          <p> {food.name} </p>
          <img src={food.image} width={40} />
        </div>
      );
    });
  };

  const addFood = () => {
    const newFood = {
      name: 'Orange',
      calories: 85,
      image: 'https://i.imgur.com/abKGOcv.jpg',
      servings: 1,
    };

    setFoods([...foods, newFood]);
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          addFood();
        }}
      >
        Add food
      </button>
      {listFoods()}
    </div>
  );
}

export default App;
