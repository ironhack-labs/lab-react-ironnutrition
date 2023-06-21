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

  const emptyContent = <div><p><b>Oops! There is no more content to show</b></p>
  <img src="https://media2.giphy.com/media/gfO3FcnL8ZK9wVgr6t/giphy.gif?cid=ecf05e47vbsgos6adhnxpg1n6j92p3ne55ts4442imll7g2z&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Nothing" />
      </div>;
  return (
    <div className="App">
      <h1>Food List</h1>

      { isAddFormDisplayed && <AddFoodForm addFood={addSomeFood} /> }

      <Button type="default" onClick={() => setAddFormDisplayed(!isAddFormDisplayed)}> {isAddFormDisplayed ? "Hide Form" : "Add New Food"} </Button>


      <Search search={searchForFood}/>

      <div className='food-list'>
        {foods.length !== 0 && foods.map(f => <FoodBox key={f.name} food={f} deleteFood={deleteFood}/>)}
        {foods.length === 0 && emptyContent}
      </div>
    </div>
  );
}

export default App;
