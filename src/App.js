import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);

  return (
    <div className="App">
      <h1>Food List</h1>
      {foodsArr.map((food) => {
        return (
          <div>
            <p>{food.name}</p>
            <img src={food.image} width={100} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
