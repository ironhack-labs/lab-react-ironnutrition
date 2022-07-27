import './App.css';
import { useState } from 'react';
import foods from './foods.json';

function App() {
  // Iteration #1
  // we imported our foods.json, then created a useState variable of it, and mapped our state to show the list
const [foodList, setFoodList] = useState(foods)
const foodsMap = foodList.map((food, index) => 
  <div key={index}>
  <p>{ foodList[index].name} </p>
  <img src={foodList[index].image} alt="" width={100} />
  </div> );

  return <div className="App">
    <div>
  <p> Food List</p>
      {foodsMap}
    </div>

  </div>;
}
export default App;