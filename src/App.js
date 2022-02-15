import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchFood from './components/SearchFood';
import TodaysFood from './components/TodaysFood';

function App() {

  const [foodList, setFoodList] = useState(foods)
  const [totalCalories, setTotalCalories] = useState(0)
  const [todaysFoodArr, setTodaysFoodArr] = useState([])

  const addNewFood = (newFood) => {
    const updatedFoodList = [...foodList, newFood];
    setFoodList(updatedFoodList)
  }

  const search = (input) => {
    const filteredFoodArray = foodList.filter(elm => elm.name.toLowerCase().includes(input.toLowerCase()));
    setFoodList(filteredFoodArray);
  }

  const addTodaysFood = (quantity) => {
    console.log(quantity)

  }

  return (
    <div className="App">
      <AddFood addFood={addNewFood} />
      <SearchFood search={search}/>
      <div>
      <div className="columns">
        <div className="column">
          {foodList.map((item) => {
            return <FoodBox key={item.name} item={item} />;
          })}
        </div>
        <div className="column">
          <TodaysFood totalCalories={totalCalories} handleTotal={()=> addTodaysFood()}/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
