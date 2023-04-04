// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [food, setFoods] = useState([...foods]);

  // const foodList = food.map((foodItem) => {
  //   return (
  //     <div>
  //       <p> {foodItem.name} </p>
  //       <img src={foodItem.image} alt="pics of food" width={150} />
  //     </div>
  //   );
  // });

  const foodBox = food.map((foodItem) => {
    // console.log('FoodBox Food Item', foodItem);
    return <FoodBox key={foodItem.name} food={foodItem} />;
  });

  return (
    <div className="App">
      <h1>Food List</h1>

      <div className="boxes-container ">{foodBox}</div>
    </div>
  );
}
export default App;
