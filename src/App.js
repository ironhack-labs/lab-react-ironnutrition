import React from 'react';
import './App.css';
import List from './components/data/List';
import SearchBar from './components/Search';


function App() {
  return (
    <div className="App">
      <div><h1 style={{fontSize:50}}><strong>Iron Nutrition</strong></h1></div>
      <SearchBar/>
      <List/>
    </div>
  );
}

export default App;
