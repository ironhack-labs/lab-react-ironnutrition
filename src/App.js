import foodsFromJson from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './components/Foodbox';
//import FoodBox from './components/FoodBox';

function App() {
  const [foodsArray, setFoodsArray] = useState(foodsFromJson);

  return (
    <div className="App">
      {foodsArray.map((foodObj) => {
        return (
          <div>
            <FoodBox foodItem={foodObj}></FoodBox>
          </div>
        );
      })}
    </div>
  );
}

export default App;
