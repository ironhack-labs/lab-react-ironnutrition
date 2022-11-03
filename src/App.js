import { useState } from 'react';
import './App.css';
import { FoodBox } from './components/FoodBox';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      {/* {foodList.map((food) => (
        <div key={food.name}>
          <p>{food.name}</p>
          <img src={food.image} width={100} alt={food.name} />
        </div>
      ))} */}

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
