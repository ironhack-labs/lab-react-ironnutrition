import { useState } from 'react';
import './App.css';
import foodsFromJson from './foods.json';

function App() {
  const [foodArr, setFoodArr] = useState(foodsFromJson);

  return (
    <div className="App">
    <h1>Food List</h1>

      {foodArr.map((foodObj) => {
          return(
            <>
            <div key={foodObj.name}>
              <p className="name">{foodObj.name}</p>
              <img src={foodObj.image} width={50} />
            </div>  
            </>          
          );
      })}

    </div>
  );
}

export default App;
