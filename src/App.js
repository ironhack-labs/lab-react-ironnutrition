import React from 'react';
import './App.css';

import 'bulma/css/bulma.css'
import { FoodBox, SearchBar, FoodList } from './components';


function App() {
  return (
    <div className="App">
      <div style={{fontSize:50, marginLeft:-900}}>
      <h1>Iron Nutrition</h1>
      </div>
      <div>
        <SearchBar/>
      </div>
      
     <FoodList/>
    </div>
  );
}

export default App;
