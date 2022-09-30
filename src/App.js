// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.min.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';

function App() {
  const oneFood = foods.map((food) => {
    return (
      <div>
        <FoodBox food={food} />
      </div>

      // <div>
      //   <p> {food.name} </p>
      //   <img src={food.image} width={100} />
      // </div>
    );
  });

  const [foodArray, setFoodArray] = useState(foods);

  return (
    <div className="App">
      <AddFoodForm foodArray={foodArray} setFoodArray={setFoodArray} />
      {oneFood}
      {/* <FoodBox
        food={{
          name: foods.name,
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      /> */}
    </div>
  );
}

export default App;
