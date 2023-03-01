import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      <h1>Food List</h1>
      <div id="cards-container">
        {foodList.map((eachFood) => {
          return (
            <div className="card">
              <FoodBox key={eachFood.name} food={eachFood} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
