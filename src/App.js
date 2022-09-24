import './App.css';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [food, setFood] = useState(foods);

  return (
    <div className="App">
      {food.map((item) => {
        return (
          <div>
            <p> {item.name} </p>
            <img src={item.image} width={100} alt="food" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
