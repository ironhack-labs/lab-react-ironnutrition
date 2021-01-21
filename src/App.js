import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import FoodList from './components/FoodList';
import SelectedFoodList from './components/SelectedFoodList';

function App() {
  return (
    <>
      <div className="columns">
        <FoodList>
          {foods.map(food => {
            return <FoodBox key={food.name} {...food} />
          })}
        </FoodList>
        <div className="column content">
          <SelectedFoodList />
          <div>
            <button className="button is-info">Add a new food</button>
          </div>         
        </div>
      </div>
    </>
  );
}

export default App;
