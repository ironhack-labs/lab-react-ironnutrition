import React from 'react';
import './App.css';
import DisplayFood from './components/DisplayFood';
import foods from './foods.json';
import TodaysFood from './components/TodaysFood'


function App() {
  return (
    <div className="screen">
      <div className="left">
      <h1>IronNutrition</h1>
      {/* <FoodBox /> */}
        <DisplayFood foods={foods} />
      </div>
      <div className="right">
        {/* <TodaysFood foods={foods}/> */}
      </div>
    </div>
  );
}

export default App;
