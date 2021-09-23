import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'; 

import FoodBox from './components/FoodList';

function App() {
  return (
    <div className="App">
      <FoodBox />
    </div>
  );
}

export default App;
