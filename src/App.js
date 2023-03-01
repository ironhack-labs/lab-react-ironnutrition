import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [foodList, setFoodList] = useState(foods);

  return (
    <div className="App">
      <h1>Food list</h1>
      {foodList.map((eachFood) => {
        return (
          <div>
            <p>{eachFood.name}</p>
            <img src={eachFood.image} alt="{eachFood.name}" width={'150px'} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
