import 'bulma/css/bulma.css';
import { useState } from 'react';
import React from 'react';
import initalfoodsState from './foods.json';
import './App.css';
import FoodBox from './component/FoodBox';
import AddFood from './component/AddFood';
import Searchbar from './component/Searchbar';

function App() {
  
  const [food, setFoods] = useState(initalfoodsState);

  

  const filterSearchBar = () => {
    const newList = initalfoodsState.filter( (element) => {
      return element.name ;
    });
    setFoods(newList);
}

  const createNewFood = (foodDetails) => {
    setFoods( [foodDetails, ...food ] ); // update list of food
  }

  return (
    <div className="App">

    

    <Searchbar placeholder="Enter a Food..." data={initalfoodsState} />

    <AddFood createFood={createNewFood} />


      {food.map((e, index) => {
        return (
          <FoodBox
            name={e.name}
            calories={e.calories}
            image={e.image}
            quantity={e.quantity}
          />
        );
      })}
    </div>
  );
}

export default App;
