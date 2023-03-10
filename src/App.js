import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
/*  */

function App() {

  const [food, setFood] = useState(foods);
  
  return (
    <div className="App">
      {food.map(food =>{
        return(
          <div>
             <FoodBox key={'name'} food={food} />            
          </div>)       
        })}
    </div>
  );
}

export default App;
