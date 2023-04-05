
import { useState } from 'react';
import './App.css';
import foods from "./foods.json";

function App() {

  const [foodsArr, setFoodsArr] = useState(foods);

  return (
    <div className="App">
      {foodsArr.map((foodsDetails) => {
        return (
          <div>
            <p> {foodsDetails.name} </p>
            <img src={foodsDetails.image} />
          </div>
        )
      })
      }
    </div>
  );
}

export default App;
