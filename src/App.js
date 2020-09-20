import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import FoodBox from './components/FoodBox'
import Search from './components/Search';

function App() {

  return (
    <div className="App">
     <Search />
     <FoodBox />
    </div>
  );
}

export default App;
