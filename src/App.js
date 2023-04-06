import { useState } from 'react';
import './App.css';
import food from "./foods.json";

function App () {
  const [foods, setFoods] = useState(food)

  return (
      <div className="App">
        {foods.map(food => {
          return (
            <div>
              <p> {food.name} </p>
              <img src={food.image} alt="" width={100} />
            </div>  
          )
        })}
      </div>
    )
}
export default App;