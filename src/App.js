import foodsFromJson from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './components/Foodbox';
//import FoodBox from './components/FoodBox';

function App() {
  const [foodsArray, setFoodsArray] = useState(foodsFromJson);

  return (
    <div className="App">
    <FoodBox foodItem={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />
    {/** 
      {foodsArray.map((foodObj) => {
        return (
          <div>
            <p> {foodObj.name}</p>
            <img src={foodObj.image} alt="food" width="100px" />
          </div>
        );
      })}
      */}
    </div>
  );
}

export default App;
