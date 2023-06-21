import { useState } from 'react';
import { Button } from 'antd';
import './App.css';


import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import allFoods from "./foods.json";

function App() {

  const [foods, setFoods] = useState(allFoods);
  const [isAddFormDisplayed, setAddFormDisplayed] = useState(false);

  const searchForFood = text => {
    // console.log(text);
    const filteredFood = allFoods.filter(f => f.name.includes(text));
    // console.log(filteredFood);
    setFoods(filteredFood);
  }

  const addSomeFood = (food) => {
    allFoods.unshift(food);
    console.log(allFoods);
    setFoods(allFoods);
  }

  const deleteFood = (name) => {
    allFoods = allFoods.filter(food => food.name !== name);
    setFoods(allFoods);
  }

  return (
    <div className="App">
    <h1>Food List</h1>

    { isAddFormDisplayed && <AddFoodForm addFood={addSomeFood} /> }

    <Button type="default" onClick={() => setAddFormDisplayed(!isAddFormDisplayed)}> {isAddFormDisplayed ? "Hide Form" : "Add New Food"} </Button>


    <Search search={searchForFood}/>

    <div className='food-list'>
      {foods.map(f => <FoodBox key={f.name} food={f} deleteFood={deleteFood}/>)}

    </div>
    </div>
  );
}

export default App;
