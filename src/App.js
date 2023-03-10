import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';

function App() {

  const [food, setFood] = useState(foods);

  const addNewFood = (newFood) => {
    const foodCopy = [...food, newFood];
    setFood(foodCopy);
  }
  
  return (
    <div className="App">
      <AddFoodForm className="food-form" addNewFood={addNewFood} />
      {food.map(food =>{
        return(
          <div className='food-box'>
             <FoodBox key={'name'} food={food} />            
          </div>)       
        })}
    </div>
  );
}

export default App;
