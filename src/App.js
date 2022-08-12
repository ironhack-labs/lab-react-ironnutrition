import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [food, setFood] = useState(foods);

  return (
    <div className="App">
      <h3>Food List</h3>
      <div className="food-list">
        {foods.map((eachfood, index) => {
          return <FoodBox key={index} food={eachfood} />;
        })}
      </div>
    </div>
  );
}

export default App;
