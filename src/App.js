import foodsFromJson from './foods.json';
import './App.css';
import { useState } from 'react';
//import FoodBox from './components/FoodBox';

function App() {
  const [foodsArray, setFoodsArray] = useState(foodsFromJson);

  return (
    <div className="App">
      {foodsArray.map((foodObj) => {
        return (
          <div>
            <p> {foodObj.name}</p>
            <img src={foodObj.image} alt="food" width="100px" />
          </div>
        );
      })}
      ;
    </div>
  );
}

export default App;
