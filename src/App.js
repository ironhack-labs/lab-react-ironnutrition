import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [foodList, setFoodList] = useState(foods);
  console.log(foods);

  return (
    <div className="App">
      <h1>Food list</h1>
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
      {foodList.map((eachFood) => {
        return (
          <div key={eachFood.name}>
            <p>{eachFood.name}</p>
            <img src={eachFood.image} alt="{eachFood.name}" width={'150px'} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
