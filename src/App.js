import { useState } from 'react';
import foodsData from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsData);
  return (
    <div className="App">
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
