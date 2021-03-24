import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Foods from './components/Foods'
import SearchBar from './components/SearchBar'
import Add from './components/Add'

function App() {
  return (
    <div className="App">
      <h1 className="title">IronNutrition</h1>
      <SearchBar/>
      <Foods/>
      <Add/>
    </div>
  );
}

export default App;
