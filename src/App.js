import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FilterableFoodTable from './Components/FilterableFoodTable';
import foodData from './foods.json';

function App() {
  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <FilterableFoodTable foods={ foodData }/>
    </div>
  );
}

export default App;
