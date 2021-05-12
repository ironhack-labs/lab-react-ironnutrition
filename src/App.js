import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodList from './components/FoodList';
import foods from './foods.json';




function App() {




  return (
    <div className="App">
    <FoodList foods={foods} />

    </div>
  );
}

export default App;
