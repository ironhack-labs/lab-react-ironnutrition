import React from 'react';
import './App.css';
import FoodList from './components/food-list/FoodList';

function App() {
  return (
  <div id="root">
    <div className="container">
      <h1 className="title">IronNutrition</h1>
{/*   Search bar    
      <div>
        <input type="text" class="input search-bar" name="search" placeholder="Search" value=""/>
      </div> */}
      <FoodList />
    </div>
  </div>
  );
}

export default App;
