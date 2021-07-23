import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Food from './Components/Food';


function App() {
  return (
    <div className="App">
      <h1 className = 'title'>Iron Nutrition</h1>
      <input type="text" className="input search-bar" name="search" placeholder="Search" value=""/>
      <Food/>
    </div>
  );
}

export default App;
