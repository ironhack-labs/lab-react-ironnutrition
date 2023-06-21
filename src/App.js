import { useState } from 'react';
import logo from './logo.svg';
import foods from './foods.json';
import './App.css';



function App() {

  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

  return (
    
    <div className="App">
      <h1>Food List</h1>
      <hr/>
      {foodsToDisplay.map((foodObj, index) => {
        return (
          <div>
            
            <p>{foodObj.name}</p>
            <img src={foodObj.image} alt={foodObj.name} width={100} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
