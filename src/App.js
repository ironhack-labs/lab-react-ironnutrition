import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  const [foodsList, setFoodsList] = useState(foods);

  return (
    <div className="App">
      {foodsList.map((food) => {
        return <FoodBox food={food} />;
      })}
    </div>
  );
}
export default App;
