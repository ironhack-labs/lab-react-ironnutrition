import foodData from './foods.json';

import './App.css';
import { useState } from 'react';
import FoodBox from './FoodBox';

function App() {
  const [foodState, setFoodState] = useState(foodData)

  return (
    <div className="App">
      {foodState.map((oneFood)=>{
        return(
            <div key={oneFood.name}>
              
            
              <FoodBox food={oneFood}></FoodBox>
            </div>
            
        )
      })}
    </div>
  );
}

export default App;
