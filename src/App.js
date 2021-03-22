import React from 'react';
// import logo from './logo.svg';
import FoodsList from './components/FoodsList';
import 'bulma/css/bulma.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IronNutrition</h1>
      </header>
    
    <FoodsList />

    </div>
    

  );
}

export default App;
