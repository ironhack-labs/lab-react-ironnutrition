import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [food, setFood] = useState(foods)

  const createFood = (lol) => {
    const newFoods = [lol, ...food];
    setFood(newFoods);
  };

  return (
    <div className="App">
      <h1>Interation #1</h1>
      {food.map((eachFood) => {
        return (
          <div>
            <p> {eachFood.name} </p>
            <img src={eachFood.image} width={100} />
          </div>
        )
      })}
      <h1>Interation #2</h1>
      <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />
      <h1>Interation #3</h1>
      <div className='giant-div'>

        {food.map((eachFood) => {
          return (
              <FoodBox food={eachFood} />
          )
       })}
      </div>
      <h1>Interation #4</h1>
      <AddFoodForm createFood={createFood}></AddFoodForm>
    </div>
  );
}


export default App;
