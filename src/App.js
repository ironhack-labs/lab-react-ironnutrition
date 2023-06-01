import foodsJson from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './component/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      {foods.map((food, index) => (
        <div key={index}>
          <p>{food.name}</p>
          <img src={food.image} width={50} alt={food.name} />
        </div>
      ))}

      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
    </div>
  );
}

export default App;
