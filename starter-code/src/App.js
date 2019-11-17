import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import DynamicFoodList from './components/DynamicFoodList';

const App = () => {
  return (
    <div className='App'>
      <h1>IronNutrition</h1>
      <DynamicFoodList />
    </div>
  )
}

export default App;
