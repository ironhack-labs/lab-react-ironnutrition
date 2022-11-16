import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';


function App() {
  const [food, setFood] = useState(foods)
  return (
    <div className="App">
      {food.map((eachFood) => {
        return (
          <div>
            <p> {eachFood.name} </p>
            <img src={eachFood.image} width={100} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
