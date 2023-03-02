import logo from './logo.svg';
import './App.css';
import Foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(Foods.slice(0, 8));
  return (
    <div className="App">
      <AddFoodForm foods={foods} setFoods={setFoods} />

      {foods.map((food) => {
        return <FoodBox {...food} />;
      })}
    </div>
  );
}

export default App;
