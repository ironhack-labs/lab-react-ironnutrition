import React, { useState } from 'react';

// import Data
import foods from './foods.json';

// import CSS
import '../asstes/styles/style.css';
import 'bulma/css/bulma.css';

// import Components
import FoodBox from './FoodBox';
import Search from './Search'

function App() {

  // loads state with foods.jason data
  let [state, setState] = useState(foods);

  // recalls what's changed in the searchbar and filters the state
  const handleSearch = (search) => {
    setState(foods.filter(food => food.name.toLowerCase().includes(search.toLowerCase())))
  }

  // statefind x for [x].quantity
  const addFoodToList = (foodId, foodQty) => {
    console.log(foodId, foodQty);
    let temp = [...state];
    let food = { ...state[foodId], quantity: foodQty };
    temp[foodId] = food;
    setState(state = temp)
    console.log(state);
  }

  return (
    <div className='container'>
      <h1>
        IronNutrition
      </h1>
      <Search handleSearch={handleSearch} />
      <FoodBox foods={state} addFoodToList={addFoodToList} />
    </div>
  );
}

export default App;
