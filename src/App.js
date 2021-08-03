import React from 'react';
import './App.css';

import 'bulma/css/bulma.css'
import {SearchBar, FoodList } from './components';


function App() {
  return (
    <div className="App">
      <div style={{fontSize:50}}>
      <h1>Iron Nutrition</h1>
      </div>
      <div>
        
      </div>
      
     <FoodList/>
    </div>
  );
}

export default App;
