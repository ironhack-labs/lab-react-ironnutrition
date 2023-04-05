
import { useState } from 'react';
import './App.css';
import foods from "./foods.json";
import Foodbox from "./component/FoodBox";

function App() {

  const [foodsArr, setFoodsArr] = useState(foods);

  return (
    <div className="App">
      {foodsArr.map((foodsDetails, index) => {
        return <Foodbox foodsDetails={foodsDetails} key={index} />
      })
      }
    </div>
  );
}

export default App;
