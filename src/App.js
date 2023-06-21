import { useState } from 'react';
import './App.css';

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


    </div>
  );
}

export default App;
