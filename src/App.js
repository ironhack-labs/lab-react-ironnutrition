import React from 'react';
import './App.css';
import { FoodBox } from '../src/components/FoodBox/FoodBox';
import { AddFood } from '../src/components/AddFood/AddFood';
import { Search } from '../src/components/Search/Search';
import foodsJson from './foods.json';
import 'bulma/css/bulma.css';



function App() {

  const [foods, setFoods] = React.useState(foodsJson)

  const handleSubmit = (food) => {
    setFoods([food, ...foods])
  }

  const filterFood = (food) => {
     
  }

  return (
    <div>
      <h1>Iron Nutrition</h1>
      <Search filter={filterFood}/>
      <AddFood onSubmit={handleSubmit}/>
      {foods.map((food) => {
        return <FoodBox key={food.name} {...food} />;
      })}
    </div>
  );
}

export default App;
