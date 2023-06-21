import { useState } from 'react';
import './App.css';


import FoodBox from './components/FoodBox';
import allFoods from "./foods.json";

function App() {

  const [foods, setFoods] = useState(allFoods);

  return (
    <div className="App">
    <h1>Food List</h1>
    {foods.map(f => <div key={f.name}>
  <p> {f.name} </p>
  <img src={f.image} width={200} alt={f.name} />
</div>)}

<FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
    </div>
  );
}

export default App;
