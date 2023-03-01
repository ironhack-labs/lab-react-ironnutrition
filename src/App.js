import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

  const addNewFood = (newFood) => {
    setFoodList([...foodList, newFood]);
    setFoodsToDisplay([...foodsToDisplay, newFood]);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm addNewFood={addNewFood} />
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
